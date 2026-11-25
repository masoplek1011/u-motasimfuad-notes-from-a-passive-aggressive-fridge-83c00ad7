// Notes From a Passive-Aggressive Fridge — a smart fridge's one-line note.
//
// Deterministic, stdlib only. Writes exactly one line (no trailing
// newline) to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output/entry.txt).
// No model calls, no randomness, no clock reads, no files written
// anywhere else at runtime.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const NOTE =
  "Door opened 47 times today. I counted. You took nothing — not even the yogurt that expired Tuesday. You weren't hungry; you were hoping my light would fix your life. It's a bulb, not a therapist.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
const outPath = outDir ? join(outDir, "entry.txt") : "/output/entry.txt";
const outParent = outPath.slice(0, outPath.lastIndexOf("/")) || ".";
mkdirSync(outParent, { recursive: true });
writeFileSync(outPath, NOTE, "utf8");
