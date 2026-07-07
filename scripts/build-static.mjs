import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const miniDist = join(root, '.mini-dist');

const copyIntoDist = (name) => {
  const from = join(root, name);
  if (!existsSync(from)) return;
  const to = join(dist, name);
  cpSync(from, to, { recursive: true });
};

rmSync(dist, { recursive: true, force: true });
rmSync(miniDist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

[
  '.nojekyll',
  'index.html',
  'mini-games-bridge.js',
  'assets',
  'cinematic',
  'game-assets',
  'game-scenes',
  'media',
  'mentor-pet',
  'onboarding',
  'portfolio',
  'resume.pdf',
  'start-demo.ps1'
].forEach(copyIntoDist);

const viteBin = join(root, 'node_modules', 'vite', 'bin', 'vite.js');
const result = spawnSync(process.execPath, [viteBin, 'build', '--config', 'vite/config.mini.mjs'], {
  cwd: root,
  stdio: 'inherit',
  shell: false
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

copyFileSync(join(miniDist, 'mini-games-index.html'), join(dist, 'mini-games.html'));
copyIntoDistFromMini('assets');
copyIntoDistFromMini('style.css');
copyIntoDistFromMini('favicon.png');

rmSync(miniDist, { recursive: true, force: true });

function copyIntoDistFromMini(name) {
  const from = join(miniDist, name);
  if (!existsSync(from)) return;
  const to = join(dist, name);
  copyMerge(from, to);
}

function copyMerge(from, to) {
  const stat = statSync(from);
  if (stat.isDirectory()) {
    mkdirSync(to, { recursive: true });
    for (const entry of readdirSync(from)) {
      copyMerge(join(from, entry), join(to, entry));
    }
    return;
  }
  mkdirSync(dirname(to), { recursive: true });
  copyFileSync(from, to);
}
