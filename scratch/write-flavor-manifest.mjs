/**
 * Reads public/js/menu-data.json and writes scratch/flavor-gen-manifest.json
 * with one English prompt per /flavors/[16hex].png asset that is missing on disk.
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const menuPath = join(root, "public/js/menu-data.json");
const flavorsDir = join(root, "public/flavors");

const menu = JSON.parse(readFileSync(menuPath, "utf8"));

function promptFor(category, name) {
  const cupCold =
    "BLACK & WHITE branded transparent cold cup with matte black sleeve logo gold accents dome lid black straw condensation ice realistic luxury cafe dark marble bokeh background premium photography";
  const cupHot =
    "BLACK & WHITE branded hot paper cup steam rising cozy winter cafe mood dark marble premium photography realistic";
  const plate =
    "BLACK & WHITE Restaurant Cafe subtle branded ceramic plate or elegant takeaway box dark marble moody lighting premium Arabic restaurant photography realistic textures";

  const rules = [
    { test: () => category === "قهوة مثلجة", text: `Iced coffee drink matching Arabic name "${name}": creamy layered espresso milk ice cubes cafe presentation. ${cupCold}` },
    { test: () => category === "زبادي", text: `Thick creamy yogurt drink dessert beverage matching "${name}" honey fruit blueberry toppings. ${cupCold}` },
    { test: () => category === "إسبريسو", text: `Premium espresso coffee matching "${name}" crema latte art small ceramic cup saucer dark luxury aesthetic BLACK WHITE cafe style` },
    { test: () => category === "فرابيه وفرابتشينو", text: `Blended frappe frappuccino cold matching "${name}" whipped cream drizzle dessert coffee. ${cupCold}` },
    { test: () => category === "مشروبات ساخنة", text: `Warm cozy beverage matching Arabic "${name}" steam spices sahlab tea cider herbs chocolate. ${cupHot}` },
    { test: () => category === "ركن القهوة", text: `Traditional Turkish French hazelnut instant coffee matching "${name}" elegant demitasse or cup steam dark luxury. ${cupHot}` },
    { test: () => category === "صودا", text: `Premium soda mojito cocktail matching "${name}" fizzy ice garnish mint lemon berry energy coffee notes. ${cupCold}` },
    { test: () => category === "كوكتيل", text: `Colorful tropical cocktail soda matching "${name}" fruit garnish ice luxury bar cafe style. ${cupCold}` },
    { test: () => category === "صنداي", text: `Ice cream sundae dessert cup matching "${name}" toppings chocolate nuts pistachio KitKat Snickers glass dessert luxury cafe` },
    { test: () => category === "حلويات", text: `Dessert pastry cake matching Arabic "${name}" plated slice glossy sauce crumbs elegant ${plate}` },
    { test: () => category === "شوربة", text: `Hot soup bowl matching "${name}" creamy broth garnish steam restaurant serving rustic spoon premium ${plate}` },
    { test: () => category === "سلطات", text: `Fresh gourmet salad bowl matching "${name}" colorful greens feta chicken tuna seeds dressing premium healthy ${plate}` },
    { test: () => category === "سندوتشات", text: `Premium grilled sandwich wrap quesadilla twister matching "${name}" melted cheese crispy exterior ${plate}` },
    { test: () => category === "بطاطس", text: `Crispy french fries loaded fries matching "${name}" cheese sauce toppings rustic basket ${plate}` },
    { test: () => category === "أطباق رئيسية", text: `Luxury main course platter matching "${name}" chicken beef rice vegetables sauce garnish steam appetizing ${plate}` },
    { test: () => category === "باستا", text: `Italian pasta dish matching "${name}" creamy tomato pesto cheese shrimp seafood twirl fork steam ${plate}` },
    { test: () => category === "بيتزا", text: `Restaurant pizza matching "${name}" melted cheese realistic toppings wooden board slice pull appetizing dark moody ${plate}` },
    { test: () => category === "كالزون", text: `Golden baked calzone matching "${name}" melted cheese filling crispy crust steam ${plate}` },
    { test: () => category === "إضافات", text: `Restaurant side extra ingredient matching "${name}" small bowl professional garnish ${plate}` },
    { test: () => category === "إضافات مشروبات", text: `Drink add-on matching "${name}" small premium pour boat or ramekin cafe styling ${plate}` },
    { test: () => category === "عصائر فريش", text: `Fresh juice matching "${name}" lemon mint green citrus refreshment. ${cupCold}` },
  ];

  for (const r of rules) {
    if (r.test()) return r.text;
  }
  return `Premium BLACK & WHITE cafe menu item realistic photo category "${category}" dish "${name}" appetizing sharp focus dark marble warm bokeh`;
}

const HEX_RE = /^\/flavors\/([a-f0-9]{16})\.png$/;
const jobs = [];

for (const item of menu.items) {
  const m = HEX_RE.exec(item.image);
  if (!m) continue;
  const slug = m[1];
  const outPath = join(flavorsDir, `${slug}.png`);
  if (existsSync(outPath)) continue;
  jobs.push({
    slug,
    filename: `${slug}.png`,
    category: item.category,
    name: item.name,
    prompt: promptFor(item.category, item.name),
  });
}

writeFileSync(join(__dirname, "flavor-gen-manifest.json"), JSON.stringify(jobs, null, 2), "utf8");
console.log(`Manifest: ${jobs.length} images to generate (${menu.items.length} menu items)`);
