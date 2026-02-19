# Asset Viewer Tool

A lightweight front-end tool for browsing and previewing assets from this repository.

## Location

- `tools/asset-viewer/index.html`

## What it does

- Loads `dist/manifest.json` and lists all indexed assets.
- Supports search by title/id/tags/path and filters by department/status.
- Shows metadata (`sourcePath`, `distPath`, status, tags).
- Renders visual previews from `previewPath` when available (recommended for consistent cards across repos).
- For `.jsx` source assets, attempts a browser sandbox render for quick visual inspection.

## Run locally

From repo root:

```bash
python3 -m http.server 4173
```

Open:

- `http://localhost:4173/tools/asset-viewer/`

## Refresh viewer index

When assets are added/renamed, regenerate file index:

```bash
python3 scripts/build-viewer-index.py
```

This writes `dist/viewer-index.json`.


## Manifest recommendation

Add `previewPath` to each manifest asset (relative path in repo) for reliable preview cards in the explorer.
