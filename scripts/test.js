// The test runner behind `npm test`.
//
//   npm test        runs every module
//   npm test 04     runs only 04-arrays
//   npm test 4      same thing
//   npm test a      runs checkpoint-a
//
// Why this file exists instead of calling vitest directly: it turns "04" into
// a folder name, and it fails with a readable message instead of a stack
// trace. It starts vitest through Node itself, so it behaves the same on
// Windows, macOS and Linux.
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import path from "node:path";
import { existsSync } from "node:fs";
import { listModules, findModule, repoRoot } from "./modules.js";

const require = createRequire(import.meta.url);

function resolveVitest() {
  try {
    const manifestPath = require.resolve("vitest/package.json");
    const manifest = require("vitest/package.json");
    const bin = typeof manifest.bin === "string" ? manifest.bin : manifest.bin.vitest;
    return path.join(path.dirname(manifestPath), bin);
  } catch {
    console.error("Could not find vitest. Have you run `npm install` yet?");
    console.error("");
    console.error("  npm install");
    console.error("");
    process.exit(1);
  }
}

function printAvailableModules() {
  console.error("Modules you can run:");
  console.error("");
  for (const { name, key } of listModules()) {
    console.error(`  npm test ${key.padEnd(4)} ${name}`);
  }
  console.error("");
}

const args = process.argv.slice(2);
const flags = args.filter((arg) => arg.startsWith("-"));
const selectors = args.filter((arg) => !arg.startsWith("-"));

const filters = [];
for (const selector of selectors) {
  const found = findModule(selector);
  if (!found) {
    console.error(`No module called "${selector}" in this repo.`);
    console.error("");
    printAvailableModules();
    process.exit(1);
  }
  // vitest treats a plain argument as a filter on the test file's path.
  filters.push(found.name);
}

const watch = flags.includes("--watch");
const passThrough = flags.filter((flag) => flag !== "--watch");

const child = spawn(
  process.execPath,
  [resolveVitest(), watch ? "watch" : "run", ...filters, ...passThrough],
  { stdio: "inherit", cwd: repoRoot }
);

child.on("exit", (code, signal) => {
  // Modules with a page have something the tests genuinely cannot judge.
  if (code === 0 && filters.length === 1) {
    const [name] = filters;
    if (existsSync(path.join(repoRoot, name, "exercise.html"))) {
      const key = findModule(name).key;
      console.log("");
      console.log("  Tests passed — but they cannot see your page.");
      console.log(`  Open it and look at it yourself:  npm run open ${key} exercise`);
      console.log("");
    }
  }
  process.exit(signal ? 1 : code ?? 1);
});
