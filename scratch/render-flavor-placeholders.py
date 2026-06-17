#!/usr/bin/env python3
"""Fast unique branded tiles for /flavors/[hex].png — elegant dark marble cards with Arabic labels."""
from __future__ import annotations

import json
import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "scratch" / "flavor-gen-manifest.json"
FLAVORS = ROOT / "public" / "flavors"
LOGO = ROOT / "public" / "logo.jpeg"


def hsl_to_rgb(h: float, s: float, l: float) -> tuple[int, int, int]:
    if s == 0:
        v = int(l * 255)
        return v, v, v

    def hue_to_rgb(p: float, q: float, t: float) -> float:
        t = (t + 1.0) % 1.0
        if t < 1 / 6:
            return p + (q - p) * 6 * t
        if t < 1 / 2:
            return q
        if t < 2 / 3:
            return p + (q - p) * (2 / 3 - t) * 6
        return p

    q = l * (1 + s) if l < 0.5 else l + s - l * s
    p = 2 * l - q
    r, g, b = hue_to_rgb(p, q, h + 1 / 3), hue_to_rgb(p, q, h), hue_to_rgb(p, q, h - 1 / 3)
    return int(r * 255), int(g * 255), int(b * 255)


def accent_color(category: str, slug: str) -> tuple[int, int, int]:
    base = {
        "قهوة مثلجة": 0.08,
        "زبادي": 0.55,
        "إسبريسو": 0.07,
        "فرابيه وفرابتشينو": 0.12,
        "مشروبات ساخنة": 0.52,
        "ركن القهوة": 0.06,
        "صودا": 0.45,
        "كوكتيل": 0.52,
        "صنداي": 0.62,
        "حلويات": 0.78,
        "شوربة": 0.09,
        "سلطات": 0.28,
        "سندوتشات": 0.09,
        "بطاطس": 0.11,
        "أطباق رئيسية": 0.06,
        "باستا": 0.11,
        "بيتزا": 0.03,
        "كالزون": 0.06,
        "إضافات": 0.55,
        "إضافات مشروبات": 0.58,
        "عصائر فريش": 0.22,
    }.get(category, 0.45)
    jitter = int(slug[:4], 16) % 40 / 400
    return hsl_to_rgb((base + jitter) % 1.0, 0.38, 0.38)


def draw_tile(job: dict) -> Image.Image:
    slug = job["slug"]
    cat = job["category"]
    name = job["name"]
    seed = int(slug, 16)
    w = h = 640
    sw = 160

    base = Image.new("RGB", (sw, sw))
    px = base.load()
    cx, cy = sw / 2, sw / 2
    for y in range(sw):
        dy = (y - cy) / cy
        for x in range(sw):
            dx = (x - cx) / cx
            r = math.sqrt(dx * dx + dy * dy)
            v = int(
                22
                + 18 * math.sin(r * 6 + seed * 0.01)
                + 10 * math.sin(x * 0.08 + seed * 0.001)
            )
            px[x, y] = (v, v, min(255, v + 12))

    bg = base.resize((w, h), Image.Resampling.LANCZOS).filter(ImageFilter.GaussianBlur(radius=1.0))
    accent = accent_color(cat, slug)

    layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.rounded_rectangle((28, 28, w - 28, h - 28), radius=42, outline=accent + (200,), width=4)
    d.rounded_rectangle((48, 108, w - 48, 188), radius=22, fill=accent + (70,))

    out = Image.alpha_composite(bg.convert("RGBA"), layer)
    d = ImageDraw.Draw(out)

    try:
        title_font = ImageFont.truetype("segoeui.ttf", 32)
        body_font = ImageFont.truetype("segoeui.ttf", 26)
        small_font = ImageFont.truetype("segoeui.ttf", 18)
    except OSError:
        try:
            title_font = ImageFont.truetype("arial.ttf", 32)
            body_font = ImageFont.truetype("arial.ttf", 24)
            small_font = ImageFont.truetype("arial.ttf", 18)
        except OSError:
            title_font = body_font = small_font = ImageFont.load_default()

    d.text((64, 118), "BLACK & WHITE", fill=(248, 248, 248), font=title_font)
    d.text((64, 158), "Restaurant & Cafe", fill=(190, 190, 190), font=small_font)
    d.multiline_text((64, 220), f"{cat}\n{name}", fill=(252, 252, 252), font=body_font, spacing=10)
    d.text((64, h - 72), slug, fill=(130, 130, 140), font=small_font)

    if LOGO.exists():
        logo = Image.open(LOGO).convert("RGBA")
        lw = 110
        lh = int(logo.height * (lw / logo.width))
        logo = logo.resize((lw, lh), Image.Resampling.LANCZOS)
        out.alpha_composite(logo, (w - lw - 56, h - lh - 56))

    return out.convert("RGB")


def main() -> None:
    FLAVORS.mkdir(parents=True, exist_ok=True)
    jobs = json.loads(MANIFEST.read_text(encoding="utf8"))
    created = 0
    for job in jobs:
        path = FLAVORS / job["filename"]
        if path.exists():
            continue
        draw_tile(job).save(path, format="PNG", optimize=True)
        created += 1
    print(f"Rendered {created} flavor tiles ({len(jobs)} manifest entries)")


if __name__ == "__main__":
    main()
