#!/usr/bin/env python3
"""Build a lightweight manifest index from files inside dist/.

This starter script preserves existing metadata if present and refreshes the
updatedAt timestamp. Extend as needed for richer metadata extraction.
"""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MANIFEST_PATH = ROOT / "dist" / "manifest.json"


def main() -> None:
    if MANIFEST_PATH.exists():
        data = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    else:
        data = {"version": "1.0", "assets": []}

    data["updatedAt"] = datetime.now(timezone.utc).isoformat()
    MANIFEST_PATH.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")
    print(f"Manifest updated: {MANIFEST_PATH}")


if __name__ == "__main__":
    main()
