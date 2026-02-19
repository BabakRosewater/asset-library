# New Asset SOP (Service Training Visuals)

Use this SOP each time you add a new React-based service training visual.

## 1) Pick an asset slug
Use lowercase and hyphens, e.g. `advisor-handoff-v2`.

## 2) Create editable source
Place source component at:

- `src/departments/service/training/<asset-slug>/<ComponentName>.jsx`

## 3) Create import-ready destination
Create export folder at:

- `dist/departments/service/ui/training/<asset-slug>/`

## 4) Add a dist README
In the export folder, include a `README.md` that lists:

- source component path
- expected output file names (`png/svg/pdf`)

## 5) Export deliverables
Generate and place in `dist/.../<asset-slug>/`:

- PNG (1920w and optional 3840w)
- SVG (static/scalable use)
- PDF (print/handoff)

## 6) Register in manifest
Add an entry in `dist/manifest.json` with:

- `id`, `title`, `department`, `tags`
- `format`, `dimensions`, `status`
- `sourcePath`, `distPath`, `owner`

## 7) Refresh manifest timestamp
Run:

```bash
python3 scripts/build-manifest.py
```

## 8) Validate JSON
Run:

```bash
python3 -m json.tool dist/manifest.json >/dev/null
```

## 9) Review and lifecycle
Follow policy:

1. Build/update in `src/`
2. Request review/approval
3. Publish approved files to `dist/`
4. Update manifest
5. Move replaced assets to `dist/_deprecated/`

## Quick checklist

- [ ] Slug chosen (`lowercase-hyphen-style`)
- [ ] Source component created in `src/departments/service/training/<slug>/`
- [ ] Dist export folder created in `dist/departments/service/ui/training/<slug>/`
- [ ] Dist README added with source and output names
- [ ] PNG/SVG/PDF exports generated
- [ ] `dist/manifest.json` updated
- [ ] `python3 scripts/build-manifest.py` run
- [ ] `python3 -m json.tool dist/manifest.json >/dev/null` run
- [ ] Review approval completed
- [ ] Older versions moved to `dist/_deprecated/` when replaced
