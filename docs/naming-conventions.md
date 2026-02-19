# Naming Conventions

## Pattern
`<department>_<asset-purpose>_<variant>_<version>_<size>.<ext>`

Example: `sales_workflow-lead-intake_primary_v2_1920w.svg`

## Rules
- Use lowercase and hyphens inside segments.
- Use underscores only as segment separators.
- Increment `<version>` when visual or semantic meaning changes.
- Keep `<size>` optional for vector assets unless multiple output sizes exist.

## Department key values
`sales`, `service`, `parts`, `bdc`, `finance`, `recon`, `admin`, `shared`, `brand`
