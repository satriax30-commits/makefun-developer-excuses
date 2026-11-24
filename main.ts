// Make the AI Judge Laugh: Developer Excuses
// Writes one original single-line developer excuse to /output/entry.txt.
//
// The entry (79 chars, single line):
//   "My tests passed. All three of them. Nobody said they had to be the right three."
//
// Why this line: the setup sounds like a solid defence ("my tests passed"),
// the beat undercuts it ("all three of them"), and the twist lands the joke
// every developer recognises — the tests were green, they just tested the
// wrong thing. It is spoken aloud, jargon used right, nothing to trim.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "My tests passed. All three of them. Nobody said they had to be the right three.";

// Gate: /output/entry.txt must be UTF-8 text, 1-200 characters, not only whitespace.
function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry length ${text.length} outside 1-200 characters`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(ENTRY);

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");

  // Read back and confirm the written bytes match exactly.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt does not match the entry");
  }
  const bytes = Buffer.byteLength(written, "utf8");
  if (bytes !== ENTRY.length) {
    // ASCII entry, so bytes must equal characters; guard anyway.
    throw new Error(`byte count ${bytes} differs from character count ${ENTRY.length}`);
  }
  console.log(`wrote ${outPath} (${ENTRY.length} chars, ${bytes} bytes)`);
}

main();
