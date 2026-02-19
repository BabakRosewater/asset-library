# Usage: How to Import Assets

## Import-ready source
Only import from `dist/` for presentations, documents, and workflow tools.

## Format guidance
- Use SVG for scalable UI/diagram assets.
- Use PNG for quick embeds.
- Use PDF for print-friendly handoff.

## Department location
Find department-specific assets in `dist/departments/<department>/`.

## Shared assets
Reusable cross-department assets are in `dist/shared/`.


## Component-based visuals (React)
- Keep editable component code in `src/departments/<department>/training/<asset-name>/`.
- Import into training projects from exported files in `dist/departments/<department>/ui/training/<asset-name>/`, not directly from source JSX.
