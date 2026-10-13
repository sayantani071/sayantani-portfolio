import { watch } from 'node:fs';
import { execFile } from 'node:child_process';
import { log } from 'node:console';
import path from 'node:path';
import process from 'node:process';
import { promisify } from 'node:util';

const run = promisify(execFile);
const repositoryRoot = process.cwd();
const dryRun = process.argv.includes('--dry-run');
const ignoredDirectories = new Set(['.git', '.vscode', 'coverage', 'dist', 'node_modules']);
const sensitivePathPattern = /(^|\/)(\.env(?:\.[^/]*)?|[^/]*(?:secret|credential|service[-_]?account|private[-_]?key|access[-_]?token)[^/]*)(\/|$)/i;
const sourceExtensions = new Set([
  '.css', '.gif', '.html', '.ico', '.jpeg', '.jpg', '.js', '.jsx', '.json',
  '.png', '.svg', '.ts', '.tsx', '.ttf', '.webp', '.woff', '.woff2',
]);
const rootFiles = new Set([
  'eslint.config.js',
  'index.html',
  'package-lock.json',
  'package.json',
  'postcss.config.js',
  'tailwind.config.js',
  'vite.config.js',
]);
const pendingPaths = new Set();
let debounceTimer;
let isProcessing = false;

const runGit = (args) => run('git', args, {
  cwd: repositoryRoot,
  env: { ...process.env, GIT_TERMINAL_PROMPT: '0' },
});

const isPublishable = (relativePath) => {
  const normalizedPath = relativePath.split(path.sep).join('/');
  const segments = normalizedPath.split('/');

  if (segments.some((segment) => ignoredDirectories.has(segment))) return false;
  if (sensitivePathPattern.test(normalizedPath)) return false;
  if (!sourceExtensions.has(path.extname(normalizedPath).toLowerCase())) return false;

  return rootFiles.has(normalizedPath)
    || normalizedPath.startsWith('src/')
    || normalizedPath.startsWith('public/');
};

const schedulePush = () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(processPendingChanges, 1200);
};

async function processPendingChanges() {
  if (isProcessing || pendingPaths.size === 0) return;

  isProcessing = true;
  const changedPaths = [...pendingPaths];
  pendingPaths.clear();

  try {
    if (dryRun) {
      log(`[auto-push dry-run] Would process: ${changedPaths.join(', ')}`);
      return;
    }

    await runGit(['add', '--', ...changedPaths]);
    const { stdout } = await runGit(['diff', '--cached', '--name-only', '--', ...changedPaths]);
    const stagedPaths = stdout.split(/\r?\n/).filter(Boolean);

    if (stagedPaths.length > 0) {
      const message = stagedPaths.length === 1
        ? `auto: save ${path.basename(stagedPaths[0])}`
        : `auto: save ${stagedPaths.length} files`;

      await runGit(['commit', '--only', '-m', message, '--', ...stagedPaths]);
      log(`[auto-push] Committed ${stagedPaths.join(', ')}`);
    }

    await runGit(['push', 'origin', 'HEAD']);
    log('[auto-push] Pushed to origin.');
  } catch (error) {
    log(`[auto-push] ${error.stderr?.trim() || error.message}`);
  } finally {
    isProcessing = false;
    if (pendingPaths.size > 0) schedulePush();
  }
}

const watcher = watch(repositoryRoot, { recursive: true }, (_eventType, filename) => {
  if (!filename) return;

  const relativePath = filename.toString();
  if (!isPublishable(relativePath)) return;

  pendingPaths.add(relativePath);
  schedulePush();
});

const stop = () => {
  clearTimeout(debounceTimer);
  watcher.close();
  process.exit(0);
};

process.on('SIGINT', stop);
process.on('SIGTERM', stop);

log(`[auto-push] Watching ${repositoryRoot}${dryRun ? ' (dry run)' : ''}`);