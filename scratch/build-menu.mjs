import { writeFileSync, mkdirSync, existsSync } from "fs";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import {
  expandedFlavorItems,
  REPLACED_RAW_SECTIONS,
  SKIP_RAW_ITEM_NAMES,
} from "./expanded-flavors.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const flavorsDir = join(__dirname, "../public/flavors");
if (!existsSync(flavorsDir)) mkdirSync(flavorsDir, { recursive: true });

function flavorImagePath(imageId) {
  return `/flavors/${imageId}.png`;
}

const rawData = `
Fresh Juice:
مانجو - 60
موز - 60
فراولة - 55
جوافة - 55
بطيخ - 55
برتقال - 65
ليمون - 40
ليمون نعناع - 50
أفوكادو - 170

Desserts:
مولتن كيك - 90
شوكليت كيك - 80
سبانيش كلاسيك - 75
سينابون - 80
ريد فلفيت - 80
سان سباستيان - 120
ميني بان كيك - 65
ميني بان كيك B&W - 75

Soda:
موخيتو كلاسيك - 65
موخيتو فلافير - 70
بلو كوراساو أو بلو هاواي - 70
طن رابر أو صن شاين - 70
شيري كولا - 70
بلاك أورنج - 75
موخيتو باشون بيري - 75
موخيتو ريدبول - 110
ريدبول اسبريسو - 110

Koktail:
فامبيرا - 70
بيناكولادا - 75
كياجنو - 70
بلاكبيري - 70
فريش كوكتيل - 70
فروت سالاد - 80

Sunday:
ميكس آيس كريم - 50
صن داي كيت كات - 70
صن داي سنيكرز - 70
صن داي بيستاشيو - 70

Ice Coffee:
آيس لاتيه - 60
آيس لاتيه فليفر - 75
آيس كابتشينو - 70
آيس موكا - 70
آيس إسبانيش لاتيه - 95
ماتشا لاتيه - 100

Yogurt:
زبادي عسل - 65
زبادي كوكتيل - 75
زبادي بلوبيري - 80

Espresso:
إسبريسو سنجل - 35
إسبريسو دبل - 45
ميكاتو سنجل - 40
ميكاتو دبل - 50
لاتيه - 60
لاتيه فليفر - 75
كورتادو - 70
كابتشينو - 70
فلات وايت - 70
موكا - 70
أفوكادو - 60
ميكرو كوفي - 50
هامر هيد - 60

Frappe & Frappuccino:
فرابيه كلاسيك - 70
فرابيه وايت شوكليت - 75
فرابيه شوكليت - 75
فرابيه كراميل - 75
فرابيه نوتيلا - 75
فرابيه أوريو - 75
فرابتشينو كلاسيك - 80
فرابتشينو وايت شوكليت - 85
فرابتشينو شوكليت - 85
فرابتشينو كراميل - 85
فرابتشينو نوتيلا - 85
فرابتشينو أوريو - 85

Hot Drinks:
شاي أحمد تي - 15
شاي أخضر - 20
شاي لاتيه - 30
شاي كرك - 35
أعشاب - 20
ميكس أعشاب - 35
هوت سيدر - 45
سحلب مكسرات - 55
سحلب شوكليت - 60
سحلب فواكه - 65
حمص شام - 45

Coffee Corner:
قهوة تركي - 30
قهوة تركي دبل - 35
قهوة تركي محوج - 40
قهوة فرنساوي - 50
قهوة بندق - 55
نسكافيه - 55

Soup:
شوربة لسان عصفور - 50
شوربة كريمي - 70
شوربة كريمي دجاج - 100
شوربة مشروم - 80
شوربة مشروم دجاج - 110
شوربة سي فود - 180

Salads:
ميكس جرين سالاد - 60
سلطة فيتا يوناني - 80
سيزر سالاد - 85
تشيكن سيزر سالاد - 125
تونة سالاد - 140
بلاك & وايت سالاد - 150

Sandwiches:
كساديا تشير أومليت - 90
كساديا تشير بيبروني - 100
كساديا ميكس تشير - 100
كساديا تشيكن جريل - 120
تويستر بطاطس - 60
تويستر تشيكن - 95
فاهيتا دجاج - 110
كاتري تشيكن - 120
كوردن بلو - 120

Fries:
بطاطس صغيرة - 30
بطاطس كبيرة - 40
بطاطس كاتشب مايونيز - 45
بطاطس تكساس - 50
بطاطس تشير - 50

Main Course:
هالفي ملي - 150
تشيكن بانيه - 150
وجبة شيش - 180
فاهيتا دجاج - 250
فاهيتا ميكس - 330
فاهيتا لحم - 400
تشيكن ليمون معصفر - 240
بيكاتا مشروم - 240
تشيكن إستراجانوف - 250
بيف إستراجانوف - 400
هيكوري تشيكن - 260
كاتري تشيكن - 260
كاسبر دجاج - 270
كوردن بلو - 250
تشيكن بلاك & وايت - 260

Pasta:
باستا أرابيتا - 100
أرابياتا باستا - 100
ماك & تشير - 135
جريد ماك & تشير - 185
تشاييز نودلز - 160
باستا الفريدو - 165
كاربونارا - 180
بيستو باستا - 170
سبايسي بولونيز - 160
باستا كوردن بلو - 190
رانش باستا - 190
باستا بيكاتا مشروم - 180
ميكس تشير باستا - 210
باستا جمبري - 280
سي فود باستا - 300

Pizza:
بيتزا مارجريتا M - 100
بيتزا مارجريتا L - 140
بيتزا ميكس تشير M - 150
بيتزا ميكس تشير L - 185
بيتزا خضروات M - 130
بيتزا خضروات L - 165
بيتزا تشيكن رانش M - 165
بيتزا تشيكن رانش L - 195
بيتزا تشيكن باربكيو M - 165
بيتزا تشيكن باربكيو L - 195
بيتزا تشيكن تكساس M - 170
بيتزا تشيكن تكساس L - 200
بيتزا بيبروني M - 170
بيتزا بيبروني L - 190
بيتزا هوت دوج M - 145
بيتزا هوت دوج L - 170
بيتزا سوبر سوبريم M - 170
بيتزا سوبر سوبريم L - 190
بيتزا تونة L - 190
بيتزا جمبري L - 300
بيتزا سي فود L - 320

Calzone:
كالزوني ميكس تشير - 160
كالزوني جريل تشيكن - 185

Extras:
هالبينو - 10
مشروم - 15
بيبروني - 15
صوص - 25
طبق أرز بسمتي - 30
دجاج جريل - 35
صدر دجاج جريل - 50

Drink Extras:
لبن - 15
إسبريسو - 20
آيس كريم - 15
صوص - 10
`;

const categoryMapping = {
  "Fresh Juice": "عصائر فريش",
  Waffle: "وافل",
  Desserts: "حلويات",
  Soda: "صودا",
  Koktail: "كوكتيل",
  Smoothie: "سموزي",
  Sunday: "صنداي",
  "Ice Coffee": "قهوة مثلجة",
  "Boba Tea": "بوبا تي",
  "Milk Shake": "ميلك شيك",
  Yogurt: "زبادي",
  Espresso: "إسبريسو",
  "Frappe & Frappuccino": "فرابيه وفرابتشينو",
  "Hot Drinks": "مشروبات ساخنة",
  "Coffee Corner": "ركن القهوة",
  Soup: "شوربة",
  Salads: "سلطات",
  Sandwiches: "سندوتشات",
  Fries: "بطاطس",
  "Main Course": "أطباق رئيسية",
  Pasta: "باستا",
  Pizza: "بيتزا",
  Calzone: "كالزون",
  Extras: "إضافات",
  "Drink Extras": "إضافات مشروبات",
};

const COLD_MULTI = "/cold_drinks_multi_mockup.png";
const HOT_MULTI = "/hot_drinks_multi_mockup.png";
const WAFFLE_MULTI = "/waffle_boxes_multi_mockup.png";
const MANGO = "/branded_mango_juice_mockup_1778872342118.png";
const MOJITO = "/branded_mojito_mockup_1778872371306.png";
const ICED_COFFEE = "/branded_iced_coffee_mockup_1778872557053.png";
const LOGO = "/logo.jpeg";

const COLD_POSITIONS = ["12% 50%", "37% 50%", "62% 50%", "87% 50%"];

const FRESH_JUICE_IMAGES = {
  مانجو: "/branded_mango_juice_mockup_1778872342118.png",
  موز: "/fresh-juice-banana.png",
  فراولة: "/fresh-juice-strawberry.png",
  جوافة: "/fresh-juice-guava.png",
  بطيخ: "/fresh-juice-watermelon.png",
  برتقال: "/fresh-juice-orange.png",
  ليمون: "/fresh-juice-lemon.png",
  "ليمون نعناع": "/branded_mojito_mockup_1778872371306.png",
  أفوكادو: "/fresh-juice-avocado.png",
};

const SODA_IMAGES = {
  "موخيتو كلاسيك": "/branded_mojito_mockup_1778872371306.png",
  "موخيتو فلافير": "/soda-mojito-flavor.png",
  "بلو كوراساو أو بلو هاواي": "/soda-blue-hawaii.png",
  "طن رابر أو صن شاين": "/soda-sunshine.png",
  "شيري كولا": "/soda-cherry-cola.png",
  "بلاك أورنج": "/soda-black-orange.png",
  "موخيتو باشون بيري": "/soda-passion-berry.png",
  "موخيتو ريدبول": "/soda-redbull-mojito.png",
  "ريدبول اسبريسو": "/soda-redbull-espresso.png",
};

const coldDrinkCategories = new Set([
  "صودا",
  "كوكتيل",
  "سموزي",
  "صنداي",
  "قهوة مثلجة",
  "بوبا تي",
  "زبادي",
  "فرابيه وفرابتشينو",
  "إضافات مشروبات",
]);

const hotDrinkCategories = new Set(["إسبريسو", "مشروبات ساخنة", "ركن القهوة"]);
const waffleCategories = new Set(["وافل", "حلويات"]);

const categoryCounters = {};

function getVisual(category, name) {
  categoryCounters[category] = (categoryCounters[category] || 0) + 1;
  const i = categoryCounters[category] - 1;

  if (category === "عصائر فريش" && FRESH_JUICE_IMAGES[name]) {
    return { image: FRESH_JUICE_IMAGES[name], imageFit: "cover" };
  }

  if (category === "صودا" && SODA_IMAGES[name]) {
    return { image: SODA_IMAGES[name], imageFit: "cover" };
  }

  if (category === "كوكتيل") {
    return { image: MOJITO, imageFit: "cover" };
  }
  if (
    category === "قهوة مثلجة" ||
    category === "بوبا تي" ||
    name.includes("آيس") ||
    name.includes("ماتشا")
  ) {
    return { image: ICED_COFFEE, imageFit: "cover" };
  }
  if (coldDrinkCategories.has(category)) {
    return {
      image: COLD_MULTI,
      objectPosition: COLD_POSITIONS[i % COLD_POSITIONS.length],
      imageFit: "cover",
    };
  }
  if (hotDrinkCategories.has(category)) {
    return {
      image: HOT_MULTI,
      objectPosition: i % 2 === 0 ? "25% 50%" : "75% 50%",
      imageFit: "cover",
    };
  }
  if (waffleCategories.has(category)) {
    return {
      image: WAFFLE_MULTI,
      objectPosition: i % 2 === 0 ? "25% 50%" : "75% 50%",
      imageFit: "cover",
    };
  }
  return { image: LOGO, imageFit: "contain" };
}

const menuItems = [];
let currentEnglishSection = "";
let idCounter = 1;

for (const line of rawData.split("\n")) {
  const trimmedLine = line.trim();
  if (!trimmedLine) continue;

  if (trimmedLine.endsWith(":")) {
    currentEnglishSection = trimmedLine.slice(0, -1);
    continue;
  }

  if (REPLACED_RAW_SECTIONS.has(currentEnglishSection)) continue;

  const parts = trimmedLine.split(" - ");
  if (parts.length !== 2) continue;

  const name = parts[0].trim();
  if (SKIP_RAW_ITEM_NAMES.has(name)) continue;

  const priceStr = parts[1].trim();
  const price = priceStr === "---" ? 0 : parseInt(priceStr, 10);
  if (!price) continue;

  const arabicCategory = categoryMapping[currentEnglishSection] || currentEnglishSection;
  const visual = getVisual(arabicCategory, name);

  menuItems.push({
    id: `item${idCounter++}`,
    name,
    category: arabicCategory,
    description: `استمتع بـ ${name} من مطعم ومقهى بلاك آند وايت.`,
    price,
    image: visual.image,
    ...(visual.objectPosition ? { objectPosition: visual.objectPosition } : {}),
    ...(visual.imageFit ? { imageFit: visual.imageFit } : {}),
  });
}

for (const flavor of expandedFlavorItems) {
  menuItems.push({
    id: `item${idCounter++}`,
    name: flavor.name,
    category: flavor.category,
    description: `استمتع بـ ${flavor.name} من مطعم ومقهى بلاك آند وايت.`,
    price: flavor.price,
    image: flavorImagePath(flavor.imageId),
    imageFit: flavor.imageFit || "cover",
  });
}

/** Images shared by many items → replace with unique hash-based flavor assets */
const GENERIC_IMAGES_TO_REPLACE = new Set([
  "/logo.jpeg",
  "/cold_drinks_multi_mockup.png",
  "/hot_drinks_multi_mockup.png",
  "/waffle_boxes_multi_mockup.png",
  "/branded_mojito_mockup_1778872371306.png",
  "/branded_iced_coffee_mockup_1778872557053.png",
]);

function flavorSlugForItem(category, name) {
  return createHash("sha256").update(`${category}\n${name}`, "utf8").digest("hex").slice(0, 16);
}

function assignUniqueFlavorImages(items) {
  for (const item of items) {
    if (!GENERIC_IMAGES_TO_REPLACE.has(item.image)) continue;
    const slug = flavorSlugForItem(item.category, item.name);
    item.image = `/flavors/${slug}.png`;
    delete item.objectPosition;
    item.imageFit = "cover";
  }
}

assignUniqueFlavorImages(menuItems);

const categories = ["الكل", ...Object.values(categoryMapping)];

const header = `export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  objectPosition?: string;
  imageFit?: "cover" | "contain";
}

export const menuCategories = ${JSON.stringify(categories, null, 2)};

export const menuItems: MenuItem[] = `;

const output = header + JSON.stringify(menuItems, null, 2) + ";\n";

writeFileSync(join(__dirname, "../src/data/menu.ts"), output, "utf8");

const jsonPayload = {
  categories,
  items: menuItems.map(({ id, name, category, price, image, objectPosition, imageFit }) => ({
    id,
    name,
    category,
    price,
    image,
    ...(objectPosition ? { objectPosition } : {}),
    ...(imageFit ? { imageFit } : {}),
  })),
};

writeFileSync(
  join(__dirname, "../public/js/menu-data.json"),
  JSON.stringify(jsonPayload, null, 2),
  "utf8"
);

console.log(`Wrote ${menuItems.length} menu items`);
