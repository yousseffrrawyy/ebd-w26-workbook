// Lists the module folders in this workbook, in order.
//
// Shared by scripts/test.js. Run it directly with `npm run modules` to see
// what exists and what you can pass to `npm test`.
import { readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  ".."
);

// A module folder is either "07-npm" (numbered) or "checkpoint-a".
const NUMBERED = /^(\d{2})-[a-z0-9-]+$/;
const CHECKPOINT = /^checkpoint-([a-z])$/;

export function listModules() {
  return readdirSync(repoRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => NUMBERED.test(name) || CHECKPOINT.test(name))
    .sort()
    .map((name) => {
      const numbered = name.match(NUMBERED);
      return {
        name,
        // What you can type after `npm test` to select this module.
        key: numbered ? numbered[1] : name.match(CHECKPOINT)[1],
      };
    });
}

// "4", "04", "04-arrays" and "arrays" all select 04-arrays.
// "a" and "checkpoint-a" both select checkpoint-a.
export function findModule(selector) {
  const modules = listModules();
  const wanted = selector.trim().toLowerCase().replace(/[/\\]+$/, "");

  const exact = modules.find((m) => m.name === wanted || m.key === wanted);
  if (exact) return exact;

  if (/^\d+$/.test(wanted)) {
    const padded = wanted.padStart(2, "0");
    return modules.find((m) => m.key === padded) ?? null;
  }

  return modules.find((m) => m.name.endsWith(`-${wanted}`)) ?? null;
}

// `npm run modules`
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log("Modules in this workbook:");
  console.log("");
  for (const { name, key } of listModules()) {
    console.log(`  ${name.padEnd(20)}  npm test ${key}`);
  }
  console.log("");
}
