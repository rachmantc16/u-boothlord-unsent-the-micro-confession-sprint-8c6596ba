// Unsent: The Micro-Confession Sprint
// Writes one two-part micro-confession (a "To:" line plus the message that
// was never sent) to the output entry file, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The recipient: a role/relationship only, never a full real name.
const recipient = "To: Dad";

// The message itself, kept exactly as it would have been typed in the
// drafts folder: one line, no explanation after it. It stays unsent
// because it is too late — he was gone before it could ever be read.
const message =
  "I still put your chipped blue mug out every Sunday and tell Mom I forgot. Truth is I never said goodbye at the hospital because I was still parking the car, and I still rehearse it on every drive home.";

const entry = `${recipient}\n${message}`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

// No trailing newline: the newline would count toward the 260-char gate.
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");

console.log(`wrote ${entry.length} chars to ${join(outputDir, "entry.txt")}`);
