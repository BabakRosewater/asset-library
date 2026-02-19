# UI Asset Categorization (Application Reuse)

Use this guide when an asset is meant to be reused inside applications (for example: headers, hero strips, nav bars, cards).

## Categories

- `training/` = instructional and workshop visuals.
- `headers/` = app header/hero components used in product screens.
- `shared/` = cross-department UI elements.

## Placement pattern

For a Service app header component:

- Editable source:
  - `src/departments/service/ui/headers/<asset-slug>/<ComponentName>.jsx`
- Import-ready exports:
  - `dist/departments/service/ui/headers/<asset-slug>/`

## Example

- Source:
  - `src/departments/service/ui/headers/ro-process-chain-header/ROProcessChainHeader.jsx`
- Dist:
  - `dist/departments/service/ui/headers/ro-process-chain-header/`

## Naming suggestions for exports

- `service_ui-header-ro-process-chain_primary_v1_1920w.png`
- `service_ui-header-ro-process-chain_primary_v1.svg`
- `service_ui-header-ro-process-chain_primary_v1.pdf`
