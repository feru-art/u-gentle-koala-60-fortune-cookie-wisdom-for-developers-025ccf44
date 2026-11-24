// Fortune Cookie Wisdom for Developers — entry: one original fortune-cookie line.
// Writes exactly one line (no trailing newline) to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line =
  "The legacy code you inherit is a fortune you did not ask for, but must still spend.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters, not only whitespace.
if ([...line].length < 1 || [...line].length > 120 || line.trim().length === 0) {
  throw new Error("gate failed: line must be 1-120 characters, not only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Read-back: the file must hold exactly the line, byte for byte.
if (readFileSync("/output/entry.txt", "utf8") !== line) {
  throw new Error("read-back failed: entry.txt does not match the line");
}
