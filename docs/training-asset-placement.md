# Training Asset Placement (React/UI Visuals)

## Where to put assets like "WIIFM Alignment"

For an Automotive Service Workflow visualization that is authored as React code:

- **Editable source** goes in:
  - `src/departments/service/training/<asset-name>/`
- **Import-ready output** goes in:
  - `dist/departments/service/ui/training/<asset-name>/`

For this specific asset:

- Source component:
  - `src/departments/service/training/wiifm-alignment/WIIFMAlignment.jsx`
- Export target folder:
  - `dist/departments/service/ui/training/wiifm-alignment/`

## Should you leave it in React format?

Keep **both** forms:

1. React source (`.jsx`/`.tsx`) in `src/` for future edits.
2. Static/exported deliverables in `dist/` for training-project imports.

Recommended exports based on use case:

- PPT/Docs: PNG (1920w and 3840w)
- LMS/Web embed: SVG (if static) or HTML package (if interactive)
- Print handoff: PDF

## Naming examples

- `service_ui-wiifm-alignment_primary_v1_1920w.png`
- `service_ui-wiifm-alignment_primary_v1.svg`
- `service_ui-wiifm-alignment_primary_v1.pdf`

## Additional example: RO Process Chain Analysis

- Source component:
  - `src/departments/service/training/ro-process-chain-analysis/ROProcessChainAnalysis.jsx`
- Export target folder:
  - `dist/departments/service/ui/training/ro-process-chain-analysis/`
