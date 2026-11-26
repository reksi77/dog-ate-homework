// SPDX-License-Identifier: MIT
// The Dog Ate My Homework: Funniest Excuse — entry program.
// Writes one line to /output/entry.txt: the excuse a dog gives after
// being caught eating the homework, in the dog's own voice.
// Deterministic: fixed string, no randomness, no network, no timestamps.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't eat it. I filed it in the yard, under the oak tree, next to the good stick.";

// Gate: the bounty scores only a 1-200 character, non-whitespace UTF-8 line.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200 || LINE.trim().length === 0) {
  console.error(`entry line must be 1-200 characters, got ${charCount}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
