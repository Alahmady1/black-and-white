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

Waffle:
وافل كلاسيك - 70
وافل آيس كريم - 80
وافل فور سيزون - 85
وافل فواكه - 95
وافل آيس كريم - 95
وافل ميكس من اختيارك - 100

Desserts:
مولتن كيك - 90
شوكليت كيك - 80
تشيز كيك - 90
تشيز كيك بيستاشيو - 100
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

Smoothie:
سموزي مانجو - 60
سموزي ليمون - 55
سموزي أناناس - 60
سموزي بلاك بيري - 60
سموزي ميكس - 65

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

Boba Tea:
بوبا آيس لاتيه - 85
بوبا آيس كوفي - 95
بوبا ميلك شيك - 90
بوبا ميلك شيك - 95
ميلك شيك بوبا بلوبيري - 95
موخيتو بوبا بلوبيري - 90

Milk Shake:
كلاسيك - 60
ميلك شيك - 70
ميلك شيك بيستاشيو - 85
ميلك شيك فلافير - 80
ميلك شيك كيت كات - 100

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
هوت شوكليت - 55
هوت شوكليت أوريو - 60
هوت شوكليت نوتيلا - 60
هوت شوكليت مارشميلو - 65

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
بيتزا تونة M - ---
بيتزا تونة L - 190
بيتزا جمبري M - ---
بيتزا جمبري L - 300
بيتزا سي فود M - ---
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
\`;

const categoryMapping = {
  "Fresh Juice": "عصائر فريش",
  "Waffle": "وافل",
  "Desserts": "حلويات",
  "Soda": "صودا",
  "Koktail": "كوكتيل",
  "Smoothie": "سموزي",
  "Sunday": "صنداي",
  "Ice Coffee": "قهوة مثلجة",
  "Boba Tea": "بوبا تي",
  "Milk Shake": "ميلك شيك",
  "Yogurt": "زبادي",
  "Espresso": "إسبريسو",
  "Frappe & Frappuccino": "فرابيه وفرابتشينو",
  "Hot Drinks": "مشروبات ساخنة",
  "Coffee Corner": "ركن القهوة",
  "Soup": "شوربة",
  "Salads": "سلطات",
  "Sandwiches": "سندوتشات",
  "Fries": "بطاطس",
  "Main Course": "أطباق رئيسية",
  "Pasta": "باستا",
  "Pizza": "بيتزا",
  "Calzone": "كالزون",
  "Extras": "إضافات",
  "Drink Extras": "إضافات مشروبات"
};

const categoryImages = {
  "شوربة": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600&auto=format&fit=crop",
  "سلطات": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
  "سندوتشات": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=600&auto=format&fit=crop",
  "بطاطس": "https://images.unsplash.com/photo-1630384066252-11e1ed8fd971?q=80&w=600&auto=format&fit=crop",
  "إضافات": "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600&auto=format&fit=crop",
  "أطباق رئيسية": "https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600&auto=format&fit=crop",
  "بيتزا": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
  "باستا": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=600&auto=format&fit=crop",
  "كالزون": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
  "وافل": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=600&auto=format&fit=crop",
  "حلويات": "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=600&auto=format&fit=crop",
  "صودا": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop",
  "عصائر فريش": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop",
  "كوكتيل": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop",
  "سموذي": "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?q=80&w=600&auto=format&fit=crop",
  "صنداي": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop",
  "قهوة مثلجة": "https://images.unsplash.com/photo-1499961024600-ad094db6050e?q=80&w=600&auto=format&fit=crop",
  "بوبا تي": "https://images.unsplash.com/photo-1558857563-b371f31ca7fc?q=80&w=600&auto=format&fit=crop",
  "ميلك شيك": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop",
  "زبادي": "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600&auto=format&fit=crop",
  "إسبريسو": "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=600&auto=format&fit=crop",
  "فرابيه وفرابتشينو": "https://i.postimg.cc/mDt2jx2F/chocolate-frappe.png",
  "مشروبات ساخنة": "https://i.postimg.cc/WbJTt6hp/ahmed-tea.png",
  "ركن القهوة": "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=600&auto=format&fit=crop",
  "إضافات مشروبات": "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600&auto=format&fit=crop"
};

const lines = rawData.split('\\n');
const menuItems = [];
let currentCategory = '';
let idCounter = 1;

for (const line of lines) {
  const trimmedLine = line.trim();
  if (!trimmedLine) continue;

  if (trimmedLine.endsWith(':')) {
    currentCategory = trimmedLine.slice(0, -1);
  } else {
    const parts = trimmedLine.split(' - ');
    if (parts.length === 2) {
      const name = parts[0].trim();
      const priceStr = parts[1].trim();
      const price = priceStr === '---' ? 0 : parseInt(priceStr);
      const arabicCategory = categoryMapping[currentCategory] || currentCategory;
      
      menuItems.push({
        id: \`item\${idCounter++}\`,
        name,
        category: arabicCategory,
        description: \`تمتع بمذاق \${name} الرائع في بلاك آند وايت.\`,
        price,
        image: categoryImages[arabicCategory] || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop"
      });
    }
  }
}

console.log('export const menuCategories = [');
console.log('  "الكل",');
Object.values(categoryMapping).forEach(cat => console.log(\`  "\${cat}",\`));
console.log('];\\n');

console.log('export const menuItems = ' + JSON.stringify(menuItems, null, 2) + ';');
