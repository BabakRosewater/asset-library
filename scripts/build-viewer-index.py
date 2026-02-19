#!/usr/bin/env python3
"""Builds a lightweight index of files for the asset viewer."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "dist" / "viewer-index.json"

INCLUDE_EXT = {
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".gif",
    ".svg",
    ".pdf",
    ".html",
    ".md",
    ".jsx",
    ".tsx",
}


def collect_files(base: Path) -> list[str]:
    files: list[str] = []
    for p in base.rglob("*"):
        if p.is_file() and p.suffix.lower() in INCLUDE_EXT:
            files.append(str(p.relative_to(ROOT)).replace("\\", "/"))
    return sorted(files)


def main() -> None:
    payload = {
        "version": "1.0",
        "files": sorted(set(collect_files(ROOT / "dist") + collect_files(ROOT / "src"))),
    }
    OUT.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"Viewer index written: {OUT}")


if __name__ == "__main__":
    main()
