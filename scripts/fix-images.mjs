import { readFileSync, writeFileSync } from 'fs';

// Map of item name keywords → Unsplash image URL
const imageMap = [
  // Fresh Juice
  ['مانجو', 'https://i.postimg.cc/ZRFjwQfD/sm-mango.png'],
  ['موز', 'https://i.postimg.cc/5NRJzQzJ/sm-banana.png'],
  ['فراولة', 'https://i.postimg.cc/5NRJzQzJ/sm-strawberry.png'],
  ['جوافة', 'https://i.postimg.cc/5NRJzQzJ/sm-papaya.png'],
  ['بطيخ', 'https://i.postimg.cc/5NRJzQzJ/sm-watermelon.png'],
  ['برتقال', 'https://i.postimg.cc/5NRJzQzJ/sm-orange.png'],
  ['ليمون نعناع', 'https://i.postimg.cc/5NRJzQzJ/sm-lemon.png'],
  ['ليمون', 'https://i.postimg.cc/5NRJzQzJ/sm-lemon.png'],
  ['أفوكادو', 'https://i.postimg.cc/5NRJzQzJ/sm-avocado.png'],

  // Waffles
  ['وافل', 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=600'],

  // Desserts
  ['مولتن كيك', 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=600'],
  ['شوكليت كيك', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600'],
  ['سبانيش كلاسيك', 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=600'],
  ['سينابون', 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=600'],
  ['ريد فلفيت', 'https://images.unsplash.com/photo-1616031037011-087000171abe?q=80&w=600'],
  ['سان سباستيان', 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600'],
  ['تشيز كيك', 'https://i.postimg.cc/tTYCk0C4/cheese-cake.png'],
  ['ميني بان كيك', 'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?q=80&w=600'],

  // Soda & Mojito
  ['موخيتو', 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600'],
  ['بلو', 'https://images.unsplash.com/photo-1543252923-b3c3d54cca56?q=80&w=600'],
  ['صن شاين', 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=600'],
  ['طن رابر', 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=600'],
  ['شيري كولا', 'https://images.unsplash.com/photo-1561047029-3000c68339ca?q=80&w=600'],
  ['بلاك أورنج', 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=600'],
  ['ريدبول', 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600'],
  ['باشون', 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=600'],

  // Cocktail
  ['فامبيرا', 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=600'],
  ['بيناكولادا', 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600'],
  ['كياجنو', 'https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?q=80&w=600'],
  ['بلاكبيري', 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600'],
  ['فريش كوكتيل', 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=600'],
  ['فروت سالاد', 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=600'],

  // Sundae
  ['ميكس آيس كريم', 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600'],
  ['صن داي كيت كات', 'https://images.unsplash.com/photo-1580915411954-282cb387f6c1?q=80&w=600'],
  ['صن داي سنيكرز', 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=600'],
  ['صن داي بيستاشيو', 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600'],

  // Iced Coffee
  ['ماتشا', 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=600'],
  ['آيس', 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600'],

  // Boba
  ['بوبا', 'https://images.unsplash.com/photo-1558857563-b371f31ca7fc?q=80&w=600'],

  // Milkshake
  ['ميلك شيك', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600'],
  ['كلاسيك', 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600'],

  // Smoothie
  ['سموزي', 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?q=80&w=600'],

  // Yogurt
  ['زبادي', 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600'],

  // Espresso / Coffee hot
  ['إسبريسو', 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=600'],
  ['ميكاتو', 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=600'],
  ['لاتيه', 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=600'],
  ['كابتشينو', 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=600'],
  ['كورتادو', 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=600'],
  ['فلات وايت', 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=600'],
  ['موكا', 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=600'],
  ['هامر هيد', 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=600'],
  ['ميكرو', 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=600'],

  // Frappe
  ['فرابيه', 'https://i.postimg.cc/mDt2jx2F/chocolate-frappe.png'],
  ['فرابتشينو', 'https://i.postimg.cc/05S9y06b/frapuccino-nutella.png'],

  // Hot drinks
  ['شاي', ''],
  ['أعشاب', 'https://i.postimg.cc/0yYv0kYF/ashab.png'],
  ['سيدر', ''],
  ['سحلب', ''],
  ['حمص شام', 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600'],
  ['هوت شوكليت', 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600'],

  // Coffee corner
  ['قهوة تركي', 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=600'],
  ['قهوة فرنساوي', 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=600'],
  ['قهوة بندق', 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=600'],
  ['نسكافيه', 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=600'],

  // Soup
  ['شوربة لسان عصفور', 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600'],
  ['شوربة كريمي دجاج', 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600'],
  ['شوربة كريمي', 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600'],
  ['شوربة مشروم', 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600'],
  ['شوربة سي فود', 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600'],

  // Salads
  ['سيزر', 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=600'],
  ['جرين سالاد', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600'],
  ['فيتا', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600'],
  ['تونة سالاد', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600'],
  ['بلاك & وايت سالاد', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600'],

  // Sandwiches / Wraps
  ['كساديا', 'https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?q=80&w=600'],
  ['تويستر', 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=600'],
  ['فاهيتا دجاج', 'https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?q=80&w=600'],
  ['كاتري', 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=600'],
  ['كوردن بلو', 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=600'],

  // Fries
  ['بطاطس', 'https://images.unsplash.com/photo-1630384066252-11e1ed8fd971?q=80&w=600'],

  // Main course
  ['هالفي', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600'],
  ['تشيكن بانيه', 'https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600'],
  ['وجبة شيش', 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600'],
  ['فاهيتا لحم', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600'],
  ['فاهيتا ميكس', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600'],
  ['فاهيتا', 'https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?q=80&w=600'],
  ['تشيكن ليمون', 'https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600'],
  ['بيكاتا', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600'],
  ['إستراجانوف', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600'],
  ['هيكوري', 'https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600'],
  ['كاسبر', 'https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600'],
  ['تشيكن بلاك', 'https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600'],
  ['تشيكن', 'https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600'],

  // Pasta
  ['أرابيتا', 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=600'],
  ['أرابياتا', 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=600'],
  ['ماك & تشير', 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?q=80&w=600'],
  ['ماك', 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?q=80&w=600'],
  ['نودلز', 'https://images.unsplash.com/photo-1545816250-e12bedba42eb?q=80&w=600'],
  ['الفريدو', 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=600'],
  ['كاربونارا', 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600'],
  ['بيستو', 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=600'],
  ['بولونيز', 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=600'],
  ['باستا جمبري', 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600'],
  ['سي فود باستا', 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600'],
  ['رانش باستا', 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=600'],
  ['باستا', 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=600'],

  // Pizza
  ['بيتزا جمبري', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600'],
  ['بيتزا سي فود', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600'],
  ['بيتزا بيبروني', 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600'],
  ['بيتزا هوت دوج', 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600'],
  ['بيتزا سوبر', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600'],
  ['بيتزا تونة', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600'],
  ['بيتزا تشيكن', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600'],
  ['بيتزا خضروات', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600'],
  ['بيتزا ميكس', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600'],
  ['بيتزا مارجريتا', 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600'],
  ['بيتزا', 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600'],

  // Calzone
  ['كالزوني', 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600'],

  // Extras / Additions
  ['هالبينو', 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600'],
  ['مشروم', 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600'],
  ['بيبروني', 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600'],
  ['صوص', 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600'],
  ['أرز', 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?q=80&w=600'],
  ['دجاج جريل', 'https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600'],
  ['صدر دجاج', 'https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600'],
];

// Broken path patterns
const BROKEN_PATTERNS = [
  /\/flavors\/[a-f0-9]+\.png/,
  /\/fresh-juice-[^"]+\.png/,
  /\/soda-[^"]+\.png/,
  /\/branded_mango_juice_mockup_[^"]+\.png/,
  /\/branded_mojito_mockup_[^"]+\.png/,
  /\/branded_iced_coffee_mockup_[^"]+\.png/,
  /\/cold_drinks_multi_mockup\.png/,
  /\/hot_drinks_multi_mockup\.png/,
  /\/waffle_boxes_multi_mockup\.png/,
];

function isBroken(imgPath) {
  return BROKEN_PATTERNS.some(p => p.test(imgPath));
}

function getImageForName(name) {
  // Try longest match first (more specific)
  const sorted = [...imageMap].sort((a, b) => b[0].length - a[0].length);
  for (const [keyword, url] of sorted) {
    if (name.includes(keyword)) return url;
  }
  // Fallback
  return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600';
}

const filePath = new URL('../src/data/menu.ts', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
let content = readFileSync(filePath, 'utf8');

// Parse and fix items
const itemRegex = /"name":\s*"([^"]+)"[\s\S]*?"image":\s*"([^"]+)"/g;
let fixed = 0;

content = content.replace(/"image":\s*"([^"]+)"/g, (match, imgPath, offset) => {
  // Get the name of the item containing this image
  const before = content.slice(0, offset);
  const nameMatch = before.match(/"name":\s*"([^"]+)"\s*$/m) || before.match(/"name":\s*"([^"]+)"/g);
  
  if (!isBroken(imgPath)) return match;

  // Find the name for this item
  const allNames = [...before.matchAll(/"name":\s*"([^"]+)"/g)];
  const lastName = allNames.length ? allNames[allNames.length - 1][1] : '';
  
  const newUrl = getImageForName(lastName);
  fixed++;
  return `"image": "${newUrl}"`;
});

// Also remove objectPosition and imageFit for items that now use flat Unsplash URLs
// Keep them for the few branded mockup items (none remain)
content = content.replace(/,\s*"objectPosition":\s*"[^"]*"/g, '');

writeFileSync(filePath, content, 'utf8');
console.log(`✅ Fixed ${fixed} broken image paths in menu.ts`);
