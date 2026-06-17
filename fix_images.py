import json
from pathlib import Path

DATA = Path("public/js/menu-data.json")
FLAVORS = Path("public/flavors")

CATEGORY_FALLBACK = {
    "عصائر فريش": "/flavors/j_mango.png",
    "حلويات": "/flavors/cheese_cake.png",
    "صودا": "/flavors/soda-mojito-flavor.png",
    "كوكتيل": "/flavors/c_fresh_cocktail.png",
    "صنداي": "/flavors/mix_ice_cream.png",
    "قهوة مثلجة": "/flavors/ice_latte.png",
    "زبادي": "/flavors/j_mango.png",
    "إسبريسو": "/flavors/Latte.png",
    "فرابيه وفرابتشينو": "/flavors/classic_frappe.png",
    "مشروبات ساخنة": "/flavors/ahmed_tea.png",
    "ركن القهوة": "/flavors/americano.png",
    "شوربة": "/flavors/homos_alsham.png",
    "سلطات": "/flavors/c_fresh_cocktail.png",
    "سندوتشات": "/flavors/americano.png",
    "بطاطس": "/flavors/americano.png",
    "أطباق رئيسية": "/flavors/americano.png",
    "باستا": "/flavors/americano.png",
    "بيتزا": "/flavors/americano.png",
    "كالزون": "/flavors/americano.png",
    "إضافات": "/flavors/americano.png",
    "إضافات مشروبات": "/flavors/americano.png",
    "ميلك شيك": "/flavors/ms-oreo.png",
    "سموزي": "/flavors/sm-mango.png",
    "بوبا تي": "/flavors/bb-latte.png",
    "وافل": "/flavors/wf-classic.png",
}

data = json.loads(DATA.read_text(encoding="utf-8"))

fixed = 0

for item in data.get("items", []):
    img = item.get("image", "")
    filename = img.split("/")[-1]

    if not img.startswith("/flavors/") or not (FLAVORS / filename).exists():
        item["image"] = CATEGORY_FALLBACK.get(
            item.get("category", ""),
            "/flavors/americano.png"
        )
        fixed += 1

DATA.write_text(
    json.dumps(data, ensure_ascii=False, indent=2),
    encoding="utf-8"
)

print("Fixed:", fixed)
print("Done")