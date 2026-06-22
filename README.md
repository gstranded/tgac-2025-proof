# TGAC 2025 Solution Writeup and Proof

This repository publishes a public proof page and sanitized technical writeup for a Tencent Games Algorithm Competition 2025 award.

## Public URLs

- Proof and writeup page: https://gstranded.github.io/tgac-2025-proof/
- GitHub repository: https://github.com/gstranded/tgac-2025-proof
- Certificate PDF: `docs/assets/sealdone_3-2.pdf`
- Architecture PDF: `docs/assets/text-to-sql-architecture.pdf`
- Sanitized source snapshot: `docs/source`
- TGAC official website: https://tgac.tencent.com/

## Award Claim

- Event: Tencent Games Algorithm Competition 2025
- Award: Second Place
- Track: Data-Intelligence Decision Science / 数智决策科学赛道
- Team: 帮帮我！肯德基爷爷
- Members: 高海圳 / Haizhen Gao, 许刚 / Gang Xu, 陈继昀 / Jiyun Chen
- Certificate date: 2026-01-06

## File Integrity

SHA-256 for `docs/assets/sealdone_3-2.pdf`:

```text
1FD24D09D2E1D5EBBC887B75B59DCE129F63BE14D276B428C01C011C1189128C
```

To verify locally on Windows PowerShell:

```powershell
Get-FileHash docs/assets/sealdone_3-2.pdf -Algorithm SHA256
```

## Solution Material

The public page includes a Text-to-SQL solution writeup covering:

- Agentic Workflow
- closed-loop knowledge evolution
- Augmented Schema
- Positive Knowledge
- Verification Knowledge
- Few-shot CoT
- Execution & Fix
- History Guard
- Majority Vote and LLM Judge arbitration

The `docs/source` folder contains a sanitized source snapshot. It keeps the key module structure and selected build guides, but removes API keys, private database hosts, logs, model caches, large generated artifacts, and raw sensitive configuration.

## Local Verification

Run:

```powershell
node tests/verify-site.mjs
```

Expected output:

```text
Site verification passed.
```

## GitHub Pages Setup

Use these GitHub repository settings:

- Repository name: `tgac-2025-proof`
- Visibility: Public
- Pages source: Deploy from a branch
- Branch: `main`
- Folder: `/docs`

GitHub account passwords are not used for deployment. Use a GitHub personal access token, browser-based Git Credential Manager login, or GitHub CLI authentication.

## Boundary

This repository is an independently published proof and technical writeup. It is not an official Tencent page.
