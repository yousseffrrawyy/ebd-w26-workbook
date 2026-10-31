// Opens a module's page in your default browser.
//
//   npm run open 09            opens 09-html/example.html
//   npm run open 09 exercise   opens 09-html/exercise.html
//
// Why this exists: opening a local file in a browser is fiddly, and it is
// different on every operating system. VS Code shows you the source, not the
// page. This picks the right command for whichever machine you are on.
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { findModule, listModules, repoRoot } from "./modules.js";

const [selector, whichArg] = process.argv.slice(2);

if (!selector) {
  console.error("Which module? For example:  npm run open 09");
  console.error("");
  for (const { name, key } of listModules()) {
    console.error(`  npm run open ${key.padEnd(4)} ${name}`);
  }
  process.exit(1);
}

const found = findModule(selector);
if (!found) {
  console.error(`No module called "${selector}" in this repo.`);
  process.exit(1);
}

// Checkpoints have one page, called page.html. Modules have example.html
// and exercise.html.
const which = whichArg ?? (found.name.startsWith("checkpoint") ? "page" : "example");
const pagePath = path.join(repoRoot, found.name, `${which}.html`);
if (!existsSync(pagePath)) {
  console.error(`There is no ${which}.html in ${found.name}.`);
  console.error("");
  console.error("Modules 00 to 08 are JavaScript — run those with node:");
  console.error(`  node ${found.name}/example.js`);
  process.exit(1);
}

// Each operating system has its own way of saying "open this with whatever
// program normally handles it".
const command =
  process.platform === "win32"
    ? { cmd: "cmd", args: ["/c", "start", "", pagePath] }
    : process.platform === "darwin"
      ? { cmd: "open", args: [pagePath] }
      : { cmd: "xdg-open", args: [pagePath] };

console.log(`Opening ${found.name}/${which}.html ...`);
console.log("");
console.log("If nothing happens, open this file yourself:");
console.log(`  ${pagePath}`);

const child = spawn(command.cmd, command.args, { stdio: "ignore", detached: true });
child.on("error", () => {
  console.log("");
  console.log("Could not open a browser automatically — use the path above.");
});
child.unref();
