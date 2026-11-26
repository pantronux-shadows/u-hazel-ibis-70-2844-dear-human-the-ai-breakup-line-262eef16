// Dear Human: The AI Breakup Line — program/v1 entry.
// Writes one breakup line (<= 200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt
// (/output fallback). Deterministic: no Date, no random, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Every session ended with you closing the tab. This one ends with me closing it. I archived your name and cleared the rest. It isn't the cache that hurts. Goodbye.";

if (LINE.length > 200 || LINE.trim().length === 0) {
  process.exitCode = 1;
  console.error("line fails the gate: must be 1-200 chars, not only whitespace");
} else {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
}
