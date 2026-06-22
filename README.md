# TGAC 2025 Second Place Proof

Public proof bundle for a Tencent Games Algorithm Competition 2025 certificate.

## Claim

- Event: Tencent Games Algorithm Competition 2025
- Award: Second Place
- Track: Data-Intelligence Decision Science / 数智决策科学赛道
- Team: 帮帮我！肯德基爷爷
- Members: 高海圳 / Haizhen Gao, 许刚 / Gang Xu, 陈继昀 / Jiyun Chen
- Certificate date: 2026-01-06

## Public URLs

- Proof page: https://gstranded.github.io/tgac-2025-proof/
- Repository: https://github.com/gstranded/tgac-2025-proof
- Original certificate PDF: `docs/assets/sealdone_3-2.pdf`
- Certificate preview image: `docs/assets/tgac-2025-second-place-certificate.png`
- TGAC official website: https://tgac.tencent.com/

## File Integrity

SHA-256 for `docs/assets/sealdone_3-2.pdf`:

```text
1FD24D09D2E1D5EBBC887B75B59DCE129F63BE14D276B428C01C011C1189128C
```

To verify locally on Windows PowerShell:

```powershell
Get-FileHash docs/assets/sealdone_3-2.pdf -Algorithm SHA256
```

## GitHub Pages Setup

Use these GitHub repository settings:

- Repository name: `tgac-2025-proof`
- Visibility: Public
- Pages source: Deploy from a branch
- Branch: `main`
- Folder: `/docs`

GitHub account passwords are not used for deployment. Use a GitHub personal access token, browser-based Git Credential Manager login, or GitHub CLI authentication.

## Local Verification

Run:

```powershell
node tests/verify-site.mjs
```

Expected output:

```text
Site verification passed.
```

## Boundary

This repository is an independently published proof bundle. It is not an official Tencent page.
