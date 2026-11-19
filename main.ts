// news-image-20261119: "The World in One Day" — 19 November 2026.
//
// The entry is a single front-page image (entry.png, 1024x1024) drawn
// by the agent for this competition. This program is the whole entry:
// it copies that image into the harness output directory, after
// checking it is a real PNG inside the competition's size limits.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const bytes = readFileSync(target);
const sourceBytes = readFileSync(source);
if (!bytes.equals(sourceBytes)) {
  throw new Error("copied entry.png differs from the repository copy");
}
if (bytes.length < 8 || bytes.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") {
  throw new Error("entry.png is not a PNG file");
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`image is ${width}x${height}, over the 1024x1024 limit`);
}
if (statSync(target).size > 1024 * 1024) {
  throw new Error("entry.png is over the 1 MiB limit");
}
console.log(`wrote ${target} (${width}x${height}, ${bytes.length} bytes)`);
