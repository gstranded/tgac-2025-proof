import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const indexPath = join(root, "docs", "index.html");
const pdfPath = join(root, "docs", "assets", "sealdone_3-2.pdf");
const imagePath = join(root, "docs", "assets", "tgac-2025-second-place-certificate.png");

assert.ok(existsSync(indexPath), "docs/index.html must exist");
assert.ok(existsSync(pdfPath), "certificate PDF must exist in docs/assets");
assert.ok(existsSync(imagePath), "certificate preview PNG must exist in docs/assets");

const html = readFileSync(indexPath, "utf8");
const requiredText = [
  "Tencent Games Algorithm Competition 2025",
  "Second Place",
  "Data-Intelligence Decision Science",
  "数智决策科学赛道",
  "帮帮我！肯德基爷爷",
  "高海圳",
  "Haizhen Gao",
  "许刚",
  "Gang Xu",
  "陈继昀",
  "Jiyun Chen",
  "2026-01-06",
  "1FD24D09D2E1D5EBBC887B75B59DCE129F63BE14D276B428C01C011C1189128C",
  "https://tgac.tencent.com/",
  "https://github.com/gstranded/tgac-2025-proof",
  "https://gstranded.github.io/tgac-2025-proof/"
];

for (const text of requiredText) {
  assert.ok(html.includes(text), `docs/index.html must include: ${text}`);
}

assert.match(
  html,
  /<img[^>]+src="assets\/tgac-2025-second-place-certificate\.png"[^>]+alt="TGAC 2025 Second Place certificate for team 帮帮我！肯德基爷爷"/
);
assert.match(html, /<a[^>]+href="assets\/sealdone_3-2\.pdf"/);
assert.match(html, /<meta name="description" content="[^"]*TGAC 2025[^"]*Second Place[^"]*"/);

const pdfHash = createHash("sha256").update(readFileSync(pdfPath)).digest("hex").toUpperCase();
assert.equal(pdfHash, "1FD24D09D2E1D5EBBC887B75B59DCE129F63BE14D276B428C01C011C1189128C");
assert.ok(statSync(imagePath).size > 100_000, "certificate preview should be a rendered image, not a placeholder");

console.log("Site verification passed.");
