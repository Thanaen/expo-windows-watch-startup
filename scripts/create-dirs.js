// Creates <count> empty directories under ./many-dirs (default 80000), similar to
// what a few git worktrees with their own node_modules add to a project root.
const fs = require("node:fs");
const path = require("node:path");

const count = Number(process.argv[2] ?? 80000);
const root = path.join(__dirname, "..", "many-dirs");
fs.rmSync(root, { recursive: true, force: true });
for (let i = 0; i < count; i++) {
  fs.mkdirSync(path.join(root, String(Math.floor(i / 100)), String(i % 100)), { recursive: true });
}
console.log(`Created ${count} directories under ${root}`);
