# Asset Lifecycle

## States
- `draft`: Active creation in `src/`.
- `review`: Pending owner/brand approval.
- `approved`: Published in `dist/`.
- `deprecated`: Retained in `dist/_deprecated/` for traceability.

## Transition policy
- Do not publish to `dist/` without review.
- Do not delete deprecated assets immediately; archive for at least one release cycle.
