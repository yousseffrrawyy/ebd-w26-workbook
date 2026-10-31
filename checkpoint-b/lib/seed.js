// Turns "whoever owns this GitHub repo" into a number.
//
// Seeded on the repo's OWNER — your GitHub username — not the repo name,
// because you can rename a repo but not the account it sits under. The same
// mechanism you met in Assignment 1.
import { execSync } from "node:child_process";

export function getRemoteUrl() {
  return execSync("git remote get-url origin", {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

// Accepts git@github.com:OWNER/repo.git, https://github.com/OWNER/repo.git,
// and https://github.com/OWNER/repo
export function parseOwner(remoteUrl) {
  const match = remoteUrl.match(/github\.com[:/]([^/]+)\/[^/]+?(?:\.git)?\/?$/i);
  if (!match) {
    throw new Error(`could not find a GitHub owner in remote URL: ${remoteUrl}`);
  }
  return match[1].toLowerCase();
}

// FNV-1a, 32-bit. Small, dependency-free and stable across Node versions —
// the grader has to reproduce this exact number from just a username.
export function hashToSeed(text) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

export function seedFromOwner(owner) {
  return hashToSeed(owner.trim().toLowerCase());
}

// The one call everything else uses.
export function seedForThisRepo() {
  return seedFromOwner(parseOwner(getRemoteUrl()));
}
