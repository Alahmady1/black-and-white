export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  objectPosition?: string;
  imageFit?: "cover" | "contain";
}

export const menuCategories = [
  "الكل",
  "عصائر فريش",
  "وافل",
  "حلويات",
  "صودا",
  "كوكتيل",
  "سموزي",
  "صنداي",
  "قهوة مثلجة",
  "بوبا تي",
  "ميلك شيك",
  "زبادي",
  "إسبريسو",
  "فرابيه وفرابتشينو",
  "مشروبات ساخنة",
  "ركن القهوة",
  "شوربة",
  "سلطات",
  "سندوتشات",
  "بطاطس",
  "أطباق رئيسية",
  "باستا",
  "بيتزا",
  "كالزون",
  "إضافات",
  "إضافات مشروبات"
];

export const menuItems: MenuItem[] = [
  {
    "id": "item1",
    "name": "مانجو",
    "category": "عصائر فريش",
    "description": "عصير مانجو طبيعي سميك في كوب بلاك آند وايت المبرند.",
    "price": 60,
    "image": "https://i.postimg.cc/28YCtL0F/j-mango.png",
    "imageFit": "cover"
  },
  {
    "id": "item2",
    "name": "موز",
    "category": "عصائر فريش",
    "description": "عصير موز كريمي ناعم في كوب بلاك آند وايت المبرند.",
    "price": 60,
    "image": "https://i.postimg.cc/1z8SFGzX/j-bannana.png",
    "imageFit": "cover"
  },
  {
    "id": "item3",
    "name": "فراولة",
    "category": "عصائر فريش",
    "description": "عصير فراولة منعش في كوب بلاك آند وايت المبرند.",
    "price": 55,
    "image": "https://i.postimg.cc/Kv5mhcW9/j-strawberry.png",
    "imageFit": "cover"
  },
  {
    "id": "item4",
    "name": "جوافة",
    "category": "عصائر فريش",
    "description": "عصير جوافة استوائي في كوب بلاك آند وايت المبرند.",
    "price": 55,
    "image": "https://i.postimg.cc/SKn496Km/j-guava.png",
    "imageFit": "cover"
  },
  {
    "id": "item5",
    "name": "بطيخ",
    "category": "عصائر فريش",
    "description": "عصير بطيخ بارد في كوب بلاك آند وايت المبرند.",
    "price": 55,
    "image": "https://i.postimg.cc/MKYzJZLP/j-water-melon.png",
    "imageFit": "cover"
  },
  {
    "id": "item6",
    "name": "برتقال",
    "category": "عصائر فريش",
    "description": "عصير برتقال طازج في كوب بلاك آند وايت المبرند.",
    "price": 65,
    "image": "https://i.postimg.cc/jdhRYq1M/j-orange.png",
    "imageFit": "cover"
  },
  {
    "id": "item7",
    "name": "ليمون",
    "category": "عصائر فريش",
    "description": "عصير ليمون حامض ومنعش في كوب بلاك آند وايت المبرند.",
    "price": 40,
    "image": "https://i.postimg.cc/TwLCncFb/fresh-juice-lemon.png",
    "imageFit": "cover"
  },
  {
    "id": "item8",
    "name": "ليمون نعناع",
    "category": "عصائر فريش",
    "description": "موخيتو ليمون ونعناع أخضر منعش في كوب بلاك آند وايت المبرند.",
    "price": 50,
    "image": "https://i.postimg.cc/1XGsty3J/j-lemon-mint.png",
    "imageFit": "cover"
  },
  {
    "id": "item9",
    "name": "أفوكادو",
    "category": "عصائر فريش",
    "description": "سموزي أفوكادو كريمي فاخر في كوب بلاك آند وايت المبرند.",
    "price": 170,
    "image": "https://i.postimg.cc/Dwynvkkr/j-avocado.png",
    "imageFit": "cover"
  },
  {
    "id": "item10",
    "name": "مولتن كيك",
    "category": "حلويات",
    "description": "استمتع بـ مولتن كيك من مطعم ومقهى بلاك آند وايت.",
    "price": 90,
    "image": "https://i.postimg.cc/1RGbdCnq/molten-caake.png",
    "imageFit": "cover"
  },
  {
    "id": "item11",
    "name": "شوكليت كيك",
    "category": "حلويات",
    "description": "استمتع بـ شوكليت كيك من مطعم ومقهى بلاك آند وايت.",
    "price": 80,
    "image": "https://i.postimg.cc/B6XQpWQc/chocaletecake.png",
    "imageFit": "cover"
  },
  {
    "id": "item13",
    "name": "سينابون",
    "category": "حلويات",
    "description": "استمتع بـ سينابون من مطعم ومقهى بلاك آند وايت.",
    "price": 80,
    "image": "https://i.postimg.cc/15x5GjxP/cinabon.png",
    "imageFit": "cover"
  },
  {
    "id": "item14",
    "name": "ريد فلفيت",
    "category": "حلويات",
    "description": "استمتع بـ ريد فلفيت من مطعم ومقهى بلاك آند وايت.",
    "price": 80,
    "image": "https://i.postimg.cc/ncVSPHt8/red-velvet.png",
    "imageFit": "cover"
  },
  {
    "id": "item15",
    "name": "سان سباستيان",
    "category": "حلويات",
    "description": "استمتع بـ سان سباستيان من مطعم ومقهى بلاك آند وايت.",
    "price": 120,
    "image": "https://i.postimg.cc/g2nSGNJS/san-spastian.png",
    "imageFit": "cover"
  },
  {
    "id": "item16",
    "name": "ميني بان كيك",
    "category": "حلويات",
    "description": "استمتع بـ ميني بان كيك من مطعم ومقهى بلاك آند وايت.",
    "price": 65,
    "image": "https://i.postimg.cc/26vgrTHD/mini-bancake.png",
    "imageFit": "cover"
  },
  {
    "id": "item17",
    "name": "ميني بان كيك B&W",
    "category": "حلويات",
    "description": "استمتع بـ ميني بان كيك B&W من مطعم ومقهى بلاك آند وايت.",
    "price": 75,
    "image": "https://i.postimg.cc/26vgrTHD/mini-bancake.png",
    "imageFit": "cover"
  },
  {
    "id": "item18",
    "name": "موخيتو كلاسيك",
    "category": "صودا",
    "description": "استمتع بـ موخيتو كلاسيك من مطعم ومقهى بلاك آند وايت.",
    "price": 65,
    "image": "https://i.postimg.cc/JncKpF6V/sm-mojito-mint.png",
    "imageFit": "cover"
  },
  {
    "id": "item20",
    "name": "بلو كوراساو أو بلو هاواي",
    "category": "صودا",
    "description": "استمتع بـ بلو كوراساو أو بلو هاواي من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/6pyjBY3m/sm-blue-lemon.png",
    "imageFit": "cover"
  },
  {
    "id": "item21",
    "name": "طن رابر أو صن شاين",
    "category": "صودا",
    "description": "استمتع بـ طن رابر أو صن شاين من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/B6qWJkVd/soda-sunshine.png",
    "imageFit": "cover"
  },
  {
    "id": "item22",
    "name": "شيري كولا",
    "category": "صودا",
    "description": "استمتع بـ شيري كولا من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/63HPt3R3/cherry-cola.png",
    "imageFit": "cover"
  },
  {
    "id": "item23",
    "name": "بلاك أورنج",
    "category": "صودا",
    "description": "استمتع بـ بلاك أورنج من مطعم ومقهى بلاك آند وايت.",
    "price": 75,
    "image": "https://i.postimg.cc/5tZwWWKw/mojito-black-orange.png",
    "imageFit": "cover"
  },
  {
    "id": "item24",
    "name": "موخيتو باشون بيري",
    "category": "صودا",
    "description": "استمتع بـ موخيتو باشون بيري من مطعم ومقهى بلاك آند وايت.",
    "price": 75,
    "image": "https://i.postimg.cc/Sx2kPBBn/soda-passion-berry.png",
    "imageFit": "cover"
  },
  {
    "id": "item25",
    "name": "موخيتو ريدبول",
    "category": "صودا",
    "description": "استمتع بـ موخيتو ريدبول من مطعم ومقهى بلاك آند وايت.",
    "price": 110,
    "image": "https://i.postimg.cc/fTSPQMbh/mojito-redpull.png",
    "imageFit": "cover"
  },
  {
    "id": "item26",
    "name": "ريدبول اسبريسو",
    "category": "صودا",
    "description": "استمتع بـ ريدبول اسبريسو من مطعم ومقهى بلاك آند وايت.",
    "price": 110,
    "image": "https://i.postimg.cc/WbfsXNHF/soda-redbull-espresso.png",
    "imageFit": "cover"
  },
  
  {
    "id": "item28",
    "name": "بينك روز",
    "category": "كوكتيل",
    "description": "استمتع بـ بيناكولادا من مطعم ومقهى بلاك آند وايت.",
    "price": 75,
    "image": "https://i.postimg.cc/3NFFYfzs/c-pink-rose.png",
    "imageFit": "cover"
  },
  {
    "id": "item29",
    "name": "كياجنو",
    "category": "كوكتيل",
    "description": "استمتع بـ كياجنو من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/nLX2BkQM/c-kiango.png",
    "imageFit": "cover"
  },
  {
    "id": "item30",
    "name": "ريلاكس",
    "category": "كوكتيل",
    "description": "استمتع بـ بلاكبيري من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/J7NqNttH/c-relax.png",
    "imageFit": "cover"
  },
  {
    "id": "item31",
    "name": "فريش كوكتيل",
    "category": "كوكتيل",
    "description": "استمتع بـ فريش كوكتيل من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/QCJJhYvb/c-fresh-cocktail.png",
    "imageFit": "cover"
  },
  {
    "id": "item32",
    "name": "فروت سالاد",
    "category": "كوكتيل",
    "description": "استمتع بـ فروت سالاد من مطعم ومقهى بلاك آند وايت.",
    "price": 80,
    "image": "https://i.postimg.cc/VvWWmZ2p/c-fruit-salade.png",
    "imageFit": "cover"
  },
  {
    "id": "item33",
    "name": "ميكس آيس كريم",
    "category": "صنداي",
    "description": "استمتع بـ ميكس آيس كريم من مطعم ومقهى بلاك آند وايت.",
    "price": 50,
    "image": "https://i.postimg.cc/4ygqdtM9/mix-ice-cream.png",
    "imageFit": "cover"
  },
  {
    "id": "item34",
    "name": "صن داي كيت كات",
    "category": "صنداي",
    "description": "استمتع بـ صن داي كيت كات من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/nhykpxg6/sunday-kitkat.png",
    "imageFit": "cover"
  },
  {
    "id": "item35",
    "name": "صن داي سنيكرز",
    "category": "صنداي",
    "description": "استمتع بـ صن داي سنيكرز من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/Nj34BtZG/sunday-sneakers.png",
    "imageFit": "cover"
  },
  {
    "id": "item36",
    "name": "صن داي بيستاشيو",
    "category": "صنداي",
    "description": "استمتع بـ صن داي بيستاشيو من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/FHdZMzC4/sunday-pistachio.png",
    "imageFit": "cover"
  },
  {
    "id": "item37",
    "name": "آيس لاتيه",
    "category": "قهوة مثلجة",
    "description": "استمتع بـ آيس لاتيه من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "https://i.postimg.cc/VkkynqNN/ice-latte.png",
    "imageFit": "cover"
  },
  {
    "id": "item38",
    "name": "آيس لاتيه فليفر",
    "category": "قهوة مثلجة",
    "description": "استمتع بـ آيس لاتيه فليفر من مطعم ومقهى بلاك آند وايت.",
    "price": 75,
    "image": "https://i.postimg.cc/VkkynqNN/ice-latte.png",
    "imageFit": "cover"
  },
  {
    "id": "item39",
    "name": "آيس كابتشينو",
    "category": "قهوة مثلجة",
    "description": "استمتع بـ آيس كابتشينو من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/pXZbmGR3/ice-capuccino.png",
    "imageFit": "cover"
  },
  {
    "id": "item40",
    "name": "آيس موكا",
    "category": "قهوة مثلجة",
    "description": "استمتع بـ آيس موكا من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/YCCcY6Sf/ice-mocha.png",
    "imageFit": "cover"
  },
  {
    "id": "item41",
    "name": "آيس إسبانيش لاتيه",
    "category": "قهوة مثلجة",
    "description": "استمتع بـ آيس إسبانيش لاتيه من مطعم ومقهى بلاك آند وايت.",
    "price": 95,
    "image": "https://i.postimg.cc/wjfCV1th/ice-spanish-latte.png",
    "imageFit": "cover"
  },
  {
    "id": "item42",
    "name": "ماتشا لاتيه",
    "category": "قهوة مثلجة",
    "description": "استمتع بـ ماتشا لاتيه من مطعم ومقهى بلاك آند وايت.",
    "price": 100,
    "image": "https://i.postimg.cc/VkkynqNM/ice-matchs-latte.png",
    "imageFit": "cover"
  },
  {
    "id": "item43",
    "name": "زبادي عسل",
    "category": "زبادي",
    "description": "استمتع بـ زبادي عسل من مطعم ومقهى بلاك آند وايت.",
    "price": 65,
    "image": "https://i.postimg.cc/VL5Bt58v/zapado-honey.png",
    "imageFit": "cover"
  },
  {
    "id": "item44",
    "name": "زبادي كوكتيل",
    "category": "زبادي",
    "description": "استمتع بـ زبادي كوكتيل من مطعم ومقهى بلاك آند وايت.",
    "price": 75,
    "image": "https://i.postimg.cc/Hsj4MjCK/zapado-cocktail.png",
    "imageFit": "cover"
  },
  {
    "id": "item45",
    "name": "زبادي بلوبيري",
    "category": "زبادي",
    "description": "استمتع بـ زبادي بلوبيري من مطعم ومقهى بلاك آند وايت.",
    "price": 80,
    "image": "https://i.postimg.cc/xj63qMB3/zapado-blueberry.png",
    "imageFit": "cover"
  },
  {
    "id": "item46",
    "name": "إسبريسو سنجل",
    "category": "إسبريسو",
    "description": "استمتع بـ إسبريسو سنجل من مطعم ومقهى بلاك آند وايت.",
    "price": 35,
    "image": "https://i.postimg.cc/0NN85gSW/Esperreso-single.png",
    "imageFit": "cover"
  },
  {
    "id": "item47",
    "name": "إسبريسو دبل",
    "category": "إسبريسو",
    "description": "استمتع بـ إسبريسو دبل من مطعم ومقهى بلاك آند وايت.",
    "price": 45,
    "image": "https://i.postimg.cc/zG7z1Dyz/Esperreso-double.png",
    "imageFit": "cover"
  },
  {
    "id": "item48",
    "name": "ميكاتو سنجل",
    "category": "إسبريسو",
    "description": "استمتع بـ ميكاتو سنجل من مطعم ومقهى بلاك آند وايت.",
    "price": 40,
    "image": "https://i.postimg.cc/3wzzszFm/machiato-single.png",
    "imageFit": "cover"
  },
  {
    "id": "item49",
    "name": "ميكاتو دبل",
    "category": "إسبريسو",
    "description": "استمتع بـ ميكاتو دبل من مطعم ومقهى بلاك آند وايت.",
    "price": 50,
    "image": "https://i.postimg.cc/5tXZkfLb/machiato-double.png",
    "imageFit": "cover"
  },
  {
    "id": "item50",
    "name": "لاتيه",
    "category": "إسبريسو",
    "description": "استمتع بـ لاتيه من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "https://i.postimg.cc/8C7qnTW0/Latte.png",
    "imageFit": "cover"
  },
  {
    "id": "item51",
    "name": "لاتيه فليفر",
    "category": "إسبريسو",
    "description": "استمتع بـ لاتيه فليفر من مطعم ومقهى بلاك آند وايت.",
    "price": 75,
    "image": "https://i.postimg.cc/8C7qnTW0/Latte.png",
    "imageFit": "cover"
  },
  {
    "id": "item52",
    "name": "كورتادو",
    "category": "إسبريسو",
    "description": "استمتع بـ كورتادو من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/7Y7hjy11/capuccino.png",
    "imageFit": "cover"
  },
  {
    "id": "item53",
    "name": "كابتشينو",
    "category": "إسبريسو",
    "description": "استمتع بـ كابتشينو من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/7Y7hjy11/capuccino.png",
    "imageFit": "cover"
  },
  {
    "id": "item54",
    "name": "فلات وايت",
    "category": "إسبريسو",
    "description": "استمتع بـ فلات وايت من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/YSythXNJ/Flat-white.png",
    "imageFit": "cover"
  },
  {
    "id": "item55",
    "name": "موكا",
    "category": "إسبريسو",
    "description": "استمتع بـ موكا من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/Y0zVm0Kh/Mocha.png",
    "imageFit": "cover"
  },
  
  {
    "id": "item57",
    "name": "اميركان كوفي",
    "category": "إسبريسو",
    "description": "استمتع بـ ميكرو كوفي من مطعم ومقهى بلاك آند وايت.",
    "price": 50,
    "image": "https://i.postimg.cc/DZdxwzXJ/Chat-GPT-Image-May-17-2026-01-28-10-AM.png",
    "imageFit": "cover"
  },
  
  {
    "id": "item59",
    "name": "فرابيه كلاسيك",
    "category": "فرابيه وفرابتشينو",
    "description": "استمتع بـ فرابيه كلاسيك من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/yYqYmbqk/classic-frappe.png",
    "imageFit": "cover"
  },
  {
    "id": "item60",
    "name": "فرابيه وايت شوكليت",
    "category": "فرابيه وفرابتشينو",
    "description": "استمتع بـ فرابيه وايت شوكليت من مطعم ومقهى بلاك آند وايت.",
    "price": 75,
    "image": "https://i.postimg.cc/VsKW5n2R/white-classic-frappe.png",
    "imageFit": "cover"
  },
  {
    "id": "item61",
    "name": "فرابيه شوكليت",
    "category": "فرابيه وفرابتشينو",
    "description": "استمتع بـ فرابيه شوكليت من مطعم ومقهى بلاك آند وايت.",
    "price": 75,
    "image": "https://i.postimg.cc/mDt2jx2F/chocolate-frappe.png",
    "imageFit": "cover"
  },
  {
    "id": "item62",
    "name": "فرابيه كراميل",
    "category": "فرابيه وفرابتشينو",
    "description": "استمتع بـ فرابيه كراميل من مطعم ومقهى بلاك آند وايت.",
    "price": 75,
    "image": "https://i.postimg.cc/h4NhCGmx/caramel-frappe.png",
    "imageFit": "cover"
  },
  {
    "id": "item63",
    "name": "فرابيه نوتيلا",
    "category": "فرابيه وفرابتشينو",
    "description": "استمتع بـ فرابيه نوتيلا من مطعم ومقهى بلاك آند وايت.",
    "price": 75,
    "image": "https://i.postimg.cc/63kwhymb/frappe-nutella.png",
    "imageFit": "cover"
  },
  {
    "id": "item64",
    "name": "فرابيه أوريو",
    "category": "فرابيه وفرابتشينو",
    "description": "استمتع بـ فرابيه أوريو من مطعم ومقهى بلاك آند وايت.",
    "price": 75,
    "image": "https://i.postimg.cc/656bm9xj/oreo-frappe.png",
    "imageFit": "cover"
  },
  {
    "id": "item65",
    "name": "فرابتشينو كلاسيك",
    "category": "فرابيه وفرابتشينو",
    "description": "استمتع بـ فرابتشينو كلاسيك من مطعم ومقهى بلاك آند وايت.",
    "price": 80,
    "image": "https://i.postimg.cc/SQ9mxfX4/frappuccino-classic.png",
    "imageFit": "cover"
  },
  {
    "id": "item66",
    "name": "فرابتشينو وايت شوكليت",
    "category": "فرابيه وفرابتشينو",
    "description": "استمتع بـ فرابتشينو وايت شوكليت من مطعم ومقهى بلاك آند وايت.",
    "price": 85,
    "image": "https://i.postimg.cc/VstzkWSf/frappuccino-white-chocolate.png",
    "imageFit": "cover"
  },
  {
    "id": "item67",
    "name": "فرابتشينو شوكليت",
    "category": "فرابيه وفرابتشينو",
    "description": "استمتع بـ فرابتشينو شوكليت من مطعم ومقهى بلاك آند وايت.",
    "price": 85,
    "image": "https://i.postimg.cc/fWdMRf3Q/frappuccino-chocolate.png",
    "imageFit": "cover"
  },
  {
    "id": "item68",
    "name": "فرابتشينو كراميل",
    "category": "فرابيه وفرابتشينو",
    "description": "استمتع بـ فرابتشينو كراميل من مطعم ومقهى بلاك آند وايت.",
    "price": 85,
    "image": "https://i.postimg.cc/s22VfFWN/frabuccino-caramel.png",
    "imageFit": "cover"
  },
  {
    "id": "item69",
    "name": "فرابتشينو نوتيلا",
    "category": "فرابيه وفرابتشينو",
    "description": "استمتع بـ فرابتشينو نوتيلا من مطعم ومقهى بلاك آند وايت.",
    "price": 85,
    "image": "https://i.postimg.cc/05S9y06b/frapuccino-nutella.png",
    "imageFit": "cover"
  },
  {
    "id": "item70",
    "name": "فرابتشينو أوريو",
    "category": "فرابيه وفرابتشينو",
    "description": "استمتع بـ فرابتشينو أوريو من مطعم ومقهى بلاك آند وايت.",
    "price": 85,
    "image": "https://i.postimg.cc/wxmKgx1P/Whats-App-Image-2026-05-17-at-00-12-14.jpg",
    "imageFit": "cover"
  },
  {
    "id": "item71",
    "name": "شاي أحمد تي",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ شاي أحمد تي من مطعم ومقهى بلاك آند وايت.",
    "price": 15,
    "image": "https://i.postimg.cc/WbJTt6hp/ahmed-tea.png",
    "imageFit": "cover"
  },
  {
    "id": "item72",
    "name": "شاي أخضر",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ شاي أخضر من مطعم ومقهى بلاك آند وايت.",
    "price": 20,
    "image": "https://i.postimg.cc/WbJTt6hp/ahmed-tea.png",
    "imageFit": "cover"
  },
  {
    "id": "item73",
    "name": "شاي لاتيه",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ شاي لاتيه من مطعم ومقهى بلاك آند وايت.",
    "price": 30,
    "image": "https://i.postimg.cc/25nx5JfQ/tea-with-milk.png",
    "imageFit": "cover"
  },
  {
    "id": "item74",
    "name": "شاي كرك",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ شاي كرك من مطعم ومقهى بلاك آند وايت.",
    "price": 35,
    "image": "https://i.postimg.cc/Gm7WQ48w/kark-tea.png",
    "imageFit": "cover"
  },
  {
    "id": "item75",
    "name": "أعشاب",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ أعشاب من مطعم ومقهى بلاك آند وايت.",
    "price": 20,
    "image": "https://i.postimg.cc/0yYv0kYF/ashab.png",
    "imageFit": "cover"
  },
  {
    "id": "item76",
    "name": "ميكس أعشاب",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ ميكس أعشاب من مطعم ومقهى بلاك آند وايت.",
    "price": 35,
    "image": "https://i.postimg.cc/kGmz48ZB/mix-ashab.png",
    "imageFit": "cover"
  },
  {
    "id": "item77",
    "name": "هوت سيدر",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ هوت سيدر من مطعم ومقهى بلاك آند وايت.",
    "price": 45,
    "image": "https://i.postimg.cc/VL1PLQQK/hot-ciedr.png",
    "imageFit": "cover"
  },
  {
    "id": "item78",
    "name": "سحلب مكسرات",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ سحلب مكسرات من مطعم ومقهى بلاك آند وايت.",
    "price": 55,
    "image": "https://i.postimg.cc/FsPCt29y/sahlab-meksrat.png",
    "imageFit": "cover"
  },
  {
    "id": "item79",
    "name": "سحلب شوكليت",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ سحلب شوكليت من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "https://i.postimg.cc/v8xZ6dKB/chocolate-sahlab.png",
    "imageFit": "cover"
  },
  {
    "id": "item80",
    "name": "سحلب فواكه",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ سحلب فواكه من مطعم ومقهى بلاك آند وايت.",
    "price": 65,
    "image": "https://i.postimg.cc/FsPCt29y/sahlab-meksrat.png",
    "imageFit": "cover"
  },
  {
    "id": "item81",
    "name": "حمص شام",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ حمص شام من مطعم ومقهى بلاك آند وايت.",
    "price": 45,
    "image": "https://i.postimg.cc/T1vMDByx/homos-alsham.png",
    "imageFit": "cover"
  },
  {
    "id": "item82",
    "name": "قهوة تركي",
    "category": "ركن القهوة",
    "description": "استمتع بـ قهوة تركي من مطعم ومقهى بلاك آند وايت.",
    "price": 30,
    "image": "https://i.postimg.cc/MG1YG483/turkish-cofee-single.png",
    "imageFit": "cover"
  },
  {
    "id": "item83",
    "name": "قهوة تركي دبل",
    "category": "ركن القهوة",
    "description": "استمتع بـ قهوة تركي دبل من مطعم ومقهى بلاك آند وايت.",
    "price": 35,
    "image": "https://i.postimg.cc/7LSNLcym/turkish-cfee-double.png",
    "imageFit": "cover"
  },
  {
    "id": "item84",
    "name": "قهوة تركي محوج",
    "category": "ركن القهوة",
    "description": "استمتع بـ قهوة تركي محوج من مطعم ومقهى بلاك آند وايت.",
    "price": 40,
    "image": "https://i.postimg.cc/MG1YG483/turkish-cofee-single.png",
    "imageFit": "cover"
  },
  {
    "id": "item85",
    "name": "قهوة فرنساوي",
    "category": "ركن القهوة",
    "description": "استمتع بـ قهوة فرنساوي من مطعم ومقهى بلاك آند وايت.",
    "price": 50,
    "image": "https://i.postimg.cc/25nx5JfQ/tea-with-milk.png",
    "imageFit": "cover"
  },
  {
    "id": "item86",
    "name": "قهوة بندق",
    "category": "ركن القهوة",
    "description": "استمتع بـ قهوة بندق من مطعم ومقهى بلاك آند وايت.",
    "price": 55,
    "image": "https://i.postimg.cc/25nx5JfQ/tea-with-milk.png",
    "imageFit": "cover"
  },
  {
    "id": "item87",
    "name": "نسكافيه",
    "category": "ركن القهوة",
    "description": "استمتع بـ نسكافيه من مطعم ومقهى بلاك آند وايت.",
    "price": 55,
    "image": "https://i.postimg.cc/5tXZkfLb/machiato-double.png",
    "imageFit": "cover"
  },
  {
    "id": "item88",
    "name": "شوربة لسان عصفور",
    "category": "شوربة",
    "description": "استمتع بـ شوربة لسان عصفور من مطعم ومقهى بلاك آند وايت.",
    "price": 50,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item89",
    "name": "شوربة كريمي",
    "category": "شوربة",
    "description": "استمتع بـ شوربة كريمي من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item90",
    "name": "شوربة كريمي دجاج",
    "category": "شوربة",
    "description": "استمتع بـ شوربة كريمي دجاج من مطعم ومقهى بلاك آند وايت.",
    "price": 100,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item91",
    "name": "شوربة مشروم",
    "category": "شوربة",
    "description": "استمتع بـ شوربة مشروم من مطعم ومقهى بلاك آند وايت.",
    "price": 80,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item92",
    "name": "شوربة مشروم دجاج",
    "category": "شوربة",
    "description": "استمتع بـ شوربة مشروم دجاج من مطعم ومقهى بلاك آند وايت.",
    "price": 110,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item93",
    "name": "شوربة سي فود",
    "category": "شوربة",
    "description": "استمتع بـ شوربة سي فود من مطعم ومقهى بلاك آند وايت.",
    "price": 180,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item94",
    "name": "ميكس جرين سالاد",
    "category": "سلطات",
    "description": "استمتع بـ ميكس جرين سالاد من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item95",
    "name": "سلطة فيتا يوناني",
    "category": "سلطات",
    "description": "استمتع بـ سلطة فيتا يوناني من مطعم ومقهى بلاك آند وايت.",
    "price": 80,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item96",
    "name": "سيزر سالاد",
    "category": "سلطات",
    "description": "استمتع بـ سيزر سالاد من مطعم ومقهى بلاك آند وايت.",
    "price": 85,
    "image": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item97",
    "name": "تشيكن سيزر سالاد",
    "category": "سلطات",
    "description": "استمتع بـ تشيكن سيزر سالاد من مطعم ومقهى بلاك آند وايت.",
    "price": 125,
    "image": "https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item98",
    "name": "تونة سالاد",
    "category": "سلطات",
    "description": "استمتع بـ تونة سالاد من مطعم ومقهى بلاك آند وايت.",
    "price": 140,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item99",
    "name": "بلاك & وايت سالاد",
    "category": "سلطات",
    "description": "استمتع بـ بلاك & وايت سالاد من مطعم ومقهى بلاك آند وايت.",
    "price": 150,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item100",
    "name": "كساديا تشير أومليت",
    "category": "سندوتشات",
    "description": "استمتع بـ كساديا تشير أومليت من مطعم ومقهى بلاك آند وايت.",
    "price": 90,
    "image": "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item101",
    "name": "كساديا تشير بيبروني",
    "category": "سندوتشات",
    "description": "استمتع بـ كساديا تشير بيبروني من مطعم ومقهى بلاك آند وايت.",
    "price": 100,
    "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item102",
    "name": "كساديا ميكس تشير",
    "category": "سندوتشات",
    "description": "استمتع بـ كساديا ميكس تشير من مطعم ومقهى بلاك آند وايت.",
    "price": 100,
    "image": "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item103",
    "name": "كساديا تشيكن جريل",
    "category": "سندوتشات",
    "description": "استمتع بـ كساديا تشيكن جريل من مطعم ومقهى بلاك آند وايت.",
    "price": 120,
    "image": "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item104",
    "name": "تويستر بطاطس",
    "category": "سندوتشات",
    "description": "استمتع بـ تويستر بطاطس من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item105",
    "name": "تويستر تشيكن",
    "category": "سندوتشات",
    "description": "استمتع بـ تويستر تشيكن من مطعم ومقهى بلاك آند وايت.",
    "price": 95,
    "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item106",
    "name": "فاهيتا دجاج",
    "category": "سندوتشات",
    "description": "استمتع بـ فاهيتا دجاج من مطعم ومقهى بلاك آند وايت.",
    "price": 110,
    "image": "https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item107",
    "name": "كاتري تشيكن",
    "category": "سندوتشات",
    "description": "استمتع بـ كاتري تشيكن من مطعم ومقهى بلاك آند وايت.",
    "price": 120,
    "image": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item108",
    "name": "كوردن بلو",
    "category": "سندوتشات",
    "description": "استمتع بـ كوردن بلو من مطعم ومقهى بلاك آند وايت.",
    "price": 120,
    "image": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item109",
    "name": "بطاطس صغيرة",
    "category": "بطاطس",
    "description": "استمتع بـ بطاطس صغيرة من مطعم ومقهى بلاك آند وايت.",
    "price": 30,
    "image": "https://images.unsplash.com/photo-1630384066252-11e1ed8fd971?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item110",
    "name": "بطاطس كبيرة",
    "category": "بطاطس",
    "description": "استمتع بـ بطاطس كبيرة من مطعم ومقهى بلاك آند وايت.",
    "price": 40,
    "image": "https://images.unsplash.com/photo-1630384066252-11e1ed8fd971?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item111",
    "name": "بطاطس كاتشب مايونيز",
    "category": "بطاطس",
    "description": "استمتع بـ بطاطس كاتشب مايونيز من مطعم ومقهى بلاك آند وايت.",
    "price": 45,
    "image": "https://images.unsplash.com/photo-1630384066252-11e1ed8fd971?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item112",
    "name": "بطاطس تكساس",
    "category": "بطاطس",
    "description": "استمتع بـ بطاطس تكساس من مطعم ومقهى بلاك آند وايت.",
    "price": 50,
    "image": "https://images.unsplash.com/photo-1630384066252-11e1ed8fd971?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item113",
    "name": "بطاطس تشير",
    "category": "بطاطس",
    "description": "استمتع بـ بطاطس تشير من مطعم ومقهى بلاك آند وايت.",
    "price": 50,
    "image": "https://images.unsplash.com/photo-1630384066252-11e1ed8fd971?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item114",
    "name": "هالفي ملي",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ هالفي ملي من مطعم ومقهى بلاك آند وايت.",
    "price": 150,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item115",
    "name": "تشيكن بانيه",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ تشيكن بانيه من مطعم ومقهى بلاك آند وايت.",
    "price": 150,
    "image": "https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item116",
    "name": "وجبة شيش",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ وجبة شيش من مطعم ومقهى بلاك آند وايت.",
    "price": 180,
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item117",
    "name": "فاهيتا دجاج",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ فاهيتا دجاج من مطعم ومقهى بلاك آند وايت.",
    "price": 250,
    "image": "https://images.unsplash.com/photo-1584208632869-05fa2b2a5934?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item118",
    "name": "فاهيتا ميكس",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ فاهيتا ميكس من مطعم ومقهى بلاك آند وايت.",
    "price": 330,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item119",
    "name": "فاهيتا لحم",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ فاهيتا لحم من مطعم ومقهى بلاك آند وايت.",
    "price": 400,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item120",
    "name": "تشيكن ليمون معصفر",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ تشيكن ليمون معصفر من مطعم ومقهى بلاك آند وايت.",
    "price": 240,
    "image": "https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item121",
    "name": "بيكاتا مشروم",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ بيكاتا مشروم من مطعم ومقهى بلاك آند وايت.",
    "price": 240,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item122",
    "name": "تشيكن إستراجانوف",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ تشيكن إستراجانوف من مطعم ومقهى بلاك آند وايت.",
    "price": 250,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item123",
    "name": "بيف إستراجانوف",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ بيف إستراجانوف من مطعم ومقهى بلاك آند وايت.",
    "price": 400,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item124",
    "name": "هيكوري تشيكن",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ هيكوري تشيكن من مطعم ومقهى بلاك آند وايت.",
    "price": 260,
    "image": "https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item125",
    "name": "كاتري تشيكن",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ كاتري تشيكن من مطعم ومقهى بلاك آند وايت.",
    "price": 260,
    "image": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item126",
    "name": "كاسبر دجاج",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ كاسبر دجاج من مطعم ومقهى بلاك آند وايت.",
    "price": 270,
    "image": "https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item127",
    "name": "كوردن بلو",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ كوردن بلو من مطعم ومقهى بلاك آند وايت.",
    "price": 250,
    "image": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item128",
    "name": "تشيكن بلاك & وايت",
    "category": "أطباق رئيسية",
    "description": "استمتع بـ تشيكن بلاك & وايت من مطعم ومقهى بلاك آند وايت.",
    "price": 260,
    "image": "https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item129",
    "name": "باستا أرابيتا",
    "category": "باستا",
    "description": "استمتع بـ باستا أرابيتا من مطعم ومقهى بلاك آند وايت.",
    "price": 100,
    "image": "https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item130",
    "name": "أرابياتا باستا",
    "category": "باستا",
    "description": "استمتع بـ أرابياتا باستا من مطعم ومقهى بلاك آند وايت.",
    "price": 100,
    "image": "https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item131",
    "name": "ماك & تشير",
    "category": "باستا",
    "description": "استمتع بـ ماك & تشير من مطعم ومقهى بلاك آند وايت.",
    "price": 135,
    "image": "https://images.unsplash.com/photo-1543352634-99a5d50ae78e?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item132",
    "name": "جريد ماك & تشير",
    "category": "باستا",
    "description": "استمتع بـ جريد ماك & تشير من مطعم ومقهى بلاك آند وايت.",
    "price": 185,
    "image": "https://images.unsplash.com/photo-1543352634-99a5d50ae78e?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item133",
    "name": "تشاييز نودلز",
    "category": "باستا",
    "description": "استمتع بـ تشاييز نودلز من مطعم ومقهى بلاك آند وايت.",
    "price": 160,
    "image": "https://images.unsplash.com/photo-1545816250-e12bedba42eb?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item134",
    "name": "باستا الفريدو",
    "category": "باستا",
    "description": "استمتع بـ باستا الفريدو من مطعم ومقهى بلاك آند وايت.",
    "price": 165,
    "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item135",
    "name": "كاربونارا",
    "category": "باستا",
    "description": "استمتع بـ كاربونارا من مطعم ومقهى بلاك آند وايت.",
    "price": 180,
    "image": "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item136",
    "name": "بيستو باستا",
    "category": "باستا",
    "description": "استمتع بـ بيستو باستا من مطعم ومقهى بلاك آند وايت.",
    "price": 170,
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item137",
    "name": "سبايسي بولونيز",
    "category": "باستا",
    "description": "استمتع بـ سبايسي بولونيز من مطعم ومقهى بلاك آند وايت.",
    "price": 160,
    "image": "https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item138",
    "name": "باستا كوردن بلو",
    "category": "باستا",
    "description": "استمتع بـ باستا كوردن بلو من مطعم ومقهى بلاك آند وايت.",
    "price": 190,
    "image": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item139",
    "name": "رانش باستا",
    "category": "باستا",
    "description": "استمتع بـ رانش باستا من مطعم ومقهى بلاك آند وايت.",
    "price": 190,
    "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item140",
    "name": "باستا بيكاتا مشروم",
    "category": "باستا",
    "description": "استمتع بـ باستا بيكاتا مشروم من مطعم ومقهى بلاك آند وايت.",
    "price": 180,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item141",
    "name": "ميكس تشير باستا",
    "category": "باستا",
    "description": "استمتع بـ ميكس تشير باستا من مطعم ومقهى بلاك آند وايت.",
    "price": 210,
    "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item142",
    "name": "باستا جمبري",
    "category": "باستا",
    "description": "استمتع بـ باستا جمبري من مطعم ومقهى بلاك آند وايت.",
    "price": 280,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item143",
    "name": "سي فود باستا",
    "category": "باستا",
    "description": "استمتع بـ سي فود باستا من مطعم ومقهى بلاك آند وايت.",
    "price": 300,
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item144",
    "name": "بيتزا مارجريتا M",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا مارجريتا M من مطعم ومقهى بلاك آند وايت.",
    "price": 100,
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item145",
    "name": "بيتزا مارجريتا L",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا مارجريتا L من مطعم ومقهى بلاك آند وايت.",
    "price": 140,
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item146",
    "name": "بيتزا ميكس تشير M",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا ميكس تشير M من مطعم ومقهى بلاك آند وايت.",
    "price": 150,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item147",
    "name": "بيتزا ميكس تشير L",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا ميكس تشير L من مطعم ومقهى بلاك آند وايت.",
    "price": 185,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item148",
    "name": "بيتزا خضروات M",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا خضروات M من مطعم ومقهى بلاك آند وايت.",
    "price": 130,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item149",
    "name": "بيتزا خضروات L",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا خضروات L من مطعم ومقهى بلاك آند وايت.",
    "price": 165,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item150",
    "name": "بيتزا تشيكن رانش M",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا تشيكن رانش M من مطعم ومقهى بلاك آند وايت.",
    "price": 165,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item151",
    "name": "بيتزا تشيكن رانش L",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا تشيكن رانش L من مطعم ومقهى بلاك آند وايت.",
    "price": 195,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item152",
    "name": "بيتزا تشيكن باربكيو M",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا تشيكن باربكيو M من مطعم ومقهى بلاك آند وايت.",
    "price": 165,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item153",
    "name": "بيتزا تشيكن باربكيو L",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا تشيكن باربكيو L من مطعم ومقهى بلاك آند وايت.",
    "price": 195,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item154",
    "name": "بيتزا تشيكن تكساس M",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا تشيكن تكساس M من مطعم ومقهى بلاك آند وايت.",
    "price": 170,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item155",
    "name": "بيتزا تشيكن تكساس L",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا تشيكن تكساس L من مطعم ومقهى بلاك آند وايت.",
    "price": 200,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item156",
    "name": "بيتزا بيبروني M",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا بيبروني M من مطعم ومقهى بلاك آند وايت.",
    "price": 170,
    "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item157",
    "name": "بيتزا بيبروني L",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا بيبروني L من مطعم ومقهى بلاك آند وايت.",
    "price": 190,
    "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item158",
    "name": "بيتزا هوت دوج M",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا هوت دوج M من مطعم ومقهى بلاك آند وايت.",
    "price": 145,
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item159",
    "name": "بيتزا هوت دوج L",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا هوت دوج L من مطعم ومقهى بلاك آند وايت.",
    "price": 170,
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item160",
    "name": "بيتزا سوبر سوبريم M",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا سوبر سوبريم M من مطعم ومقهى بلاك آند وايت.",
    "price": 170,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item161",
    "name": "بيتزا سوبر سوبريم L",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا سوبر سوبريم L من مطعم ومقهى بلاك آند وايت.",
    "price": 190,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item162",
    "name": "بيتزا تونة L",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا تونة L من مطعم ومقهى بلاك آند وايت.",
    "price": 190,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item163",
    "name": "بيتزا جمبري L",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا جمبري L من مطعم ومقهى بلاك آند وايت.",
    "price": 300,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item164",
    "name": "بيتزا سي فود L",
    "category": "بيتزا",
    "description": "استمتع بـ بيتزا سي فود L من مطعم ومقهى بلاك آند وايت.",
    "price": 320,
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item165",
    "name": "كالزوني ميكس تشير",
    "category": "كالزون",
    "description": "استمتع بـ كالزوني ميكس تشير من مطعم ومقهى بلاك آند وايت.",
    "price": 160,
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item166",
    "name": "كالزوني جريل تشيكن",
    "category": "كالزون",
    "description": "استمتع بـ كالزوني جريل تشيكن من مطعم ومقهى بلاك آند وايت.",
    "price": 185,
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item167",
    "name": "هالبينو",
    "category": "إضافات",
    "description": "استمتع بـ هالبينو من مطعم ومقهى بلاك آند وايت.",
    "price": 10,
    "image": "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item168",
    "name": "مشروم",
    "category": "إضافات",
    "description": "استمتع بـ مشروم من مطعم ومقهى بلاك آند وايت.",
    "price": 15,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item169",
    "name": "بيبروني",
    "category": "إضافات",
    "description": "استمتع بـ بيبروني من مطعم ومقهى بلاك آند وايت.",
    "price": 15,
    "image": "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item170",
    "name": "صوص",
    "category": "إضافات",
    "description": "استمتع بـ صوص من مطعم ومقهى بلاك آند وايت.",
    "price": 25,
    "image": "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item171",
    "name": "طبق أرز بسمتي",
    "category": "إضافات",
    "description": "استمتع بـ طبق أرز بسمتي من مطعم ومقهى بلاك آند وايت.",
    "price": 30,
    "image": "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item172",
    "name": "دجاج جريل",
    "category": "إضافات",
    "description": "استمتع بـ دجاج جريل من مطعم ومقهى بلاك آند وايت.",
    "price": 35,
    "image": "https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item173",
    "name": "صدر دجاج جريل",
    "category": "إضافات",
    "description": "استمتع بـ صدر دجاج جريل من مطعم ومقهى بلاك آند وايت.",
    "price": 50,
    "image": "https://images.unsplash.com/photo-1529193591184-b1d58b34ecdf?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item174",
    "name": "لبن",
    "category": "إضافات مشروبات",
    "description": "استمتع بـ لبن من مطعم ومقهى بلاك آند وايت.",
    "price": 15,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item175",
    "name": "إسبريسو",
    "category": "إضافات مشروبات",
    "description": "استمتع بـ إسبريسو من مطعم ومقهى بلاك آند وايت.",
    "price": 20,
    "image": "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item176",
    "name": "آيس كريم",
    "category": "إضافات مشروبات",
    "description": "استمتع بـ آيس كريم من مطعم ومقهى بلاك آند وايت.",
    "price": 15,
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item177",
    "name": "صوص",
    "category": "إضافات مشروبات",
    "description": "استمتع بـ صوص من مطعم ومقهى بلاك آند وايت.",
    "price": 10,
    "image": "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600",
    "imageFit": "cover"
  },
  {
    "id": "item178",
    "name": "ميلك شيك فانيليا",
    "category": "ميلك شيك",
    "description": "استمتع بـ كلاسيك فانيليا من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "/flavors/ms-classic-vanilla.png",
    "imageFit": "cover"
  },
  {
    "id": "item179",
    "name": "ميلك شيك شوكولاتة",
    "category": "ميلك شيك",
    "description": "استمتع بـ كلاسيك شوكولاتة من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "/flavors/ms-classic-chocolate.png",
    "imageFit": "cover"
  },
  {
    "id": "item180",
    "name": "ميلك شيك فراولة",
    "category": "ميلك شيك",
    "description": "استمتع بـ كلاسيك فراولة من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "/flavors/ms-classic-strawberry.png",
    "imageFit": "cover"
  },
  {
    "id": "item181",
    "name": "ميلك شيك مانجو",
    "category": "ميلك شيك",
    "description": "استمتع بـ كلاسيك مانجو من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "/flavors/ms-classic-mango.png",
    "imageFit": "cover"
  },
  {
    "id": "item182",
    "name": "ميلك شيك أوريو",
    "category": "ميلك شيك",
    "description": "استمتع بـ ميلك شيك أوريو من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "/flavors/ms-oreo.png",
    "imageFit": "cover"
  },
  {
    "id": "item183",
    "name": "ميلك شيك نوتيلا",
    "category": "ميلك شيك",
    "description": "استمتع بـ ميلك شيك نوتيلا من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "/flavors/ms-nutella.png",
    "imageFit": "cover"
  },
  {
    "id": "item184",
    "name": "ميلك شيك لوتس",
    "category": "ميلك شيك",
    "description": "استمتع بـ ميلك شيك لوتس من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "/flavors/ms-lotus.png",
    "imageFit": "cover"
  },
  {
    "id": "item185",
    "name": "ميلك شيك بلوبيري",
    "category": "ميلك شيك",
    "description": "استمتع بـ ميلك شيك بلوبيري من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "/flavors/ms-blueberry.png",
    "imageFit": "cover"
  },
  {
    "id": "item186",
    "name": "ميلك شيك ميكس بيري",
    "category": "ميلك شيك",
    "description": "استمتع بـ ميلك شيك ميكس بيري من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "/flavors/ms-mixed-berry.png",
    "imageFit": "cover"
  },
  {
    "id": "item187",
    "name": "ميلك شيك باشون",
    "category": "ميلك شيك",
    "description": "استمتع بـ ميلك شيك باشون من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "/flavors/ms-passion.png",
    "imageFit": "cover"
  },
  {
    "id": "item188",
    "name": "ميلك شيك بيستاشيو",
    "category": "ميلك شيك",
    "description": "استمتع بـ ميلك شيك بيستاشيو من مطعم ومقهى بلاك آند وايت.",
    "price": 85,
    "image": "/flavors/ms-pistachio.png",
    "imageFit": "cover"
  },
  {
    "id": "item189",
    "name": "ميلك شيك نوتيلا أوريو",
    "category": "ميلك شيك",
    "description": "استمتع بـ ميلك شيك نوتيلا أوريو من مطعم ومقهى بلاك آند وايت.",
    "price": 80,
    "image": "/flavors/ms-nutella-oreo.png",
    "imageFit": "cover"
  },
  {
    "id": "item190",
    "name": "ميلك شيك لوتس بيري",
    "category": "ميلك شيك",
    "description": "استمتع بـ ميلك شيك لوتس بيري من مطعم ومقهى بلاك آند وايت.",
    "price": 80,
    "image": "/flavors/ms-lotus-berry.png",
    "imageFit": "cover"
  },
  {
    "id": "item191",
    "name": "ميلك شيك كيت كات",
    "category": "ميلك شيك",
    "description": "استمتع بـ ميلك شيك كيت كات من مطعم ومقهى بلاك آند وايت.",
    "price": 100,
    "image": "/flavors/ms-kitkat.png",
    "imageFit": "cover"
  },
  {
    "id": "item192",
    "name": "ميلك شيك سنكرز",
    "category": "ميلك شيك",
    "description": "استمتع بـ ميلك شيك سنكرز من مطعم ومقهى بلاك آند وايت.",
    "price": 100,
    "image": "/flavors/ms-snickers.png",
    "imageFit": "cover"
  },
  {
    "id": "item193",
    "name": "سموزي مانجو",
    "category": "سموزي",
    "description": "استمتع بـ سموزي مانجو من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "/flavors/sm-mango.png",
    "imageFit": "cover"
  },
  {
    "id": "item194",
    "name": "سموزي فراولة",
    "category": "سموزي",
    "description": "استمتع بـ سموزي فراولة من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "/flavors/sm-strawberry.png",
    "imageFit": "cover"
  },
  {
    "id": "item195",
    "name": "سموزي بطيخ",
    "category": "سموزي",
    "description": "استمتع بـ سموزي بطيخ من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "/flavors/sm-watermelon.png",
    "imageFit": "cover"
  },
  {
    "id": "item196",
    "name": "سموزي تروبيكال أناناس",
    "category": "سموزي",
    "description": "استمتع بـ سموزي تروبيكال أناناس من مطعم ومقهى بلاك آند وايت.",
    "price": 55,
    "image": "/flavors/sm-pineapple.png",
    "imageFit": "cover"
  },
  {
    "id": "item197",
    "name": "سموزي تروبيكال خوخ",
    "category": "سموزي",
    "description": "استمتع بـ سموزي تروبيكال خوخ من مطعم ومقهى بلاك آند وايت.",
    "price": 55,
    "image": "/flavors/sm-peach.png",
    "imageFit": "cover"
  },
  {
    "id": "item198",
    "name": "سموزي تروبيكال كيوي",
    "category": "سموزي",
    "description": "استمتع بـ سموزي تروبيكال كيوي من مطعم ومقهى بلاك آند وايت.",
    "price": 55,
    "image": "/flavors/sm-kiwi.png",
    "imageFit": "cover"
  },
  {
    "id": "item199",
    "name": "سموزي تروبيكال ليمون فروت",
    "category": "سموزي",
    "description": "استمتع بـ سموزي تروبيكال ليمون فروت من مطعم ومقهى بلاك آند وايت.",
    "price": 55,
    "image": "/flavors/sm-grapefruit.png",
    "imageFit": "cover"
  },
  {
    "id": "item200",
    "name": "سموزي  بلاك بيري",
    "category": "سموزي",
    "description": "استمتع بـ سموزي بيري بلاك بيري من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "/flavors/sm-blackberry.png",
    "imageFit": "cover"
  },
  {
    "id": "item201",
    "name": "سموزي  باشون بيري",
    "category": "سموزي",
    "description": "استمتع بـ سموزي بيري باشون بيري من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "/flavors/sm-passion-berry.png",
    "imageFit": "cover"
  },
  {
    "id": "item203",
    "name": "سموزي ميكس موهيتو نعناع",
    "category": "سموزي",
    "description": "استمتع بـ سموزي ميكس موهيتو نعناع من مطعم ومقهى بلاك آند وايت.",
    "price": 65,
    "image": "/flavors/sm-mojito-mint.png",
    "imageFit": "cover"
  },
  {
    "id": "item204",
    "name": "سموزي ميكس بلو ليمون",
    "category": "سموزي",
    "description": "استمتع بـ سموزي ميكس بلو ليمون من مطعم ومقهى بلاك آند وايت.",
    "price": 65,
    "image": "/flavors/sm-blue-lemon.png",
    "imageFit": "cover"
  },
  {
    "id": "item205",
    "name": "بوبا آيس لاتيه",
    "category": "بوبا تي",
    "description": "استمتع بـ بوبا آيس لاتيه من مطعم ومقهى بلاك آند وايت.",
    "price": 85,
    "image": "/flavors/bb-latte.png",
    "imageFit": "cover"
  },
  {
    "id": "item206",
    "name": "بوبا آيس كوفي كابتشينو",
    "category": "بوبا تي",
    "description": "استمتع بـ بوبا آيس كوفي كابتشينو من مطعم ومقهى بلاك آند وايت.",
    "price": 95,
    "image": "/flavors/bb-cappuccino.png",
    "imageFit": "cover"
  },
  {
    "id": "item207",
    "name": "بوبا آيس كوفي موكا",
    "category": "بوبا تي",
    "description": "استمتع بـ بوبا آيس كوفي موكا من مطعم ومقهى بلاك آند وايت.",
    "price": 95,
    "image": "/flavors/bb-mocha.png",
    "imageFit": "cover"
  },
  {
    "id": "item208",
    "name": "بوبا ميلك شيك فانيليا",
    "category": "بوبا تي",
    "description": "استمتع بـ بوبا ميلك شيك فانيليا من مطعم ومقهى بلاك آند وايت.",
    "price": 90,
    "image": "/flavors/bb-ms-vanilla.png",
    "imageFit": "cover"
  },
  {
    "id": "item209",
    "name": "بوبا ميلك شيك شوكولاتة",
    "category": "بوبا تي",
    "description": "استمتع بـ بوبا ميلك شيك شوكولاتة من مطعم ومقهى بلاك آند وايت.",
    "price": 90,
    "image": "/flavors/bb-ms-chocolate.png",
    "imageFit": "cover"
  },
  {
    "id": "item210",
    "name": "بوبا ميلك شيك مانجو",
    "category": "بوبا تي",
    "description": "استمتع بـ بوبا ميلك شيك مانجو من مطعم ومقهى بلاك آند وايت.",
    "price": 90,
    "image": "/flavors/bb-ms-mango.png",
    "imageFit": "cover"
  },
  {
    "id": "item211",
    "name": "بوبا ميلك شيك فراولة",
    "category": "بوبا تي",
    "description": "استمتع بـ بوبا ميلك شيك فراولة من مطعم ومقهى بلاك آند وايت.",
    "price": 90,
    "image": "/flavors/bb-ms-strawberry.png",
    "imageFit": "cover"
  },
  {
    "id": "item212",
    "name": "بوبا ميلك شيك بريميوم أوريو",
    "category": "بوبا تي",
    "description": "استمتع بـ بوبا ميلك شيك بريميوم أوريو من مطعم ومقهى بلاك آند وايت.",
    "price": 95,
    "image": "/flavors/bb-ms-premium-oreo.png",
    "imageFit": "cover"
  },
  {
    "id": "item213",
    "name": "بوبا ميلك شيك بريميوم نوتيلا",
    "category": "بوبا تي",
    "description": "استمتع بـ بوبا ميلك شيك بريميوم نوتيلا من مطعم ومقهى بلاك آند وايت.",
    "price": 95,
    "image": "/flavors/bb-ms-premium-nutella.png",
    "imageFit": "cover"
  },
  {
    "id": "item214",
    "name": "بوبا ميلك شيك بريميوم كراميل",
    "category": "بوبا تي",
    "description": "استمتع بـ بوبا ميلك شيك بريميوم كراميل من مطعم ومقهى بلاك آند وايت.",
    "price": 95,
    "image": "/flavors/bb-ms-premium-caramel.png",
    "imageFit": "cover"
  },
  {
    "id": "item215",
    "name": "ميلك شيك بوبا بلوبيري",
    "category": "بوبا تي",
    "description": "استمتع بـ ميلك شيك بوبا بلوبيري من مطعم ومقهى بلاك آند وايت.",
    "price": 95,
    "image": "/flavors/bb-blueberry-shake.png",
    "imageFit": "cover"
  },
  {
    "id": "item216",
    "name": "موخيتو بوبا بلوبيري",
    "category": "بوبا تي",
    "description": "استمتع بـ موخيتو بوبا بلوبيري من مطعم ومقهى بلاك آند وايت.",
    "price": 90,
    "image": "/flavors/bb-blueberry-mojito.png",
    "imageFit": "cover"
  },
  {
    "id": "item217",
    "name": "وافل كلاسيك",
    "category": "وافل",
    "description": "استمتع بـ وافل كلاسيك من مطعم ومقهى بلاك آند وايت.",
    "price": 70,
    "image": "https://i.postimg.cc/D0prD3qK/waffle-nutella.png",
    "imageFit": "cover"
  },
  {
    "id": "item218",
    "name": "وافل تريبل نوتيلا",
    "category": "وافل",
    "description": "استمتع بـ وافل أوريو من مطعم ومقهى بلاك آند وايت.",
    "price": 80,
    "image": "https://i.postimg.cc/D0prD3qK/waffle-nutella.png",
    "imageFit": "cover"
  },
  {
    "id": "item219",
    "name": "وافل فور سيزون ",
    "category": "وافل",
    "description": "استمتع بـ وافل فور سيزون نوتيلا من مطعم ومقهى بلاك آند وايت.",
    "price": 85,
    "image": "https://i.postimg.cc/Px4zWwJN/waffle-4season.png",
    "imageFit": "cover"
  },
  
  
  {
    "id": "item222",
    "name": "وافل فواكه",
    "category": "وافل",
    "description": "استمتع بـ وافل فواكه من مطعم ومقهى بلاك آند وايت.",
    "price": 95,
    "image": "https://i.postimg.cc/pTZYfFrh/waffle-fruits.png",
    "imageFit": "cover"
  },
  {
    "id": "item223",
    "name": "وافل آيس كريم",
    "category": "وافل",
    "description": "استمتع بـ وافل آيس كريم من مطعم ومقهى بلاك آند وايت.",
    "price": 95,
    "image": "https://i.postimg.cc/qRLXs3q8/waffle-ice-cream.png",
    "imageFit": "cover"
  },
  {
    "id": "item224",
    "name": "وافل ميكس ",
    "category": "وافل",
    "description": "استمتع بـ وافل ميكس نوتيلا من مطعم ومقهى بلاك آند وايت.",
    "price": 100,
    "image": "https://i.postimg.cc/Px4zWwJN/waffle-4season.png",
    "imageFit": "cover"
  },
  {
    "id": "item233",
    "name": "تشيز كيك ",
    "category": "حلويات",
    "description": "استمتع بـ تشيز كيك فراولة من مطعم ومقهى بلاك آند وايت.",
    "price": 90,
    "image": "https://i.postimg.cc/tTYCk0C4/cheese-cake.png",
    "imageFit": "cover"
  },
  {
    "id": "item234",
    "name": "هوت شوكليت",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ هوت شوكليت من مطعم ومقهى بلاك آند وايت.",
    "price": 55,
    "image": "https://i.postimg.cc/d3cPyg77/hot-chocolate.png",
    "imageFit": "cover"
  },
  {
    "id": "item235",
    "name": "هوت شوكليت أوريو",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ هوت شوكليت أوريو من مطعم ومقهى بلاك آند وايت.",
    "price": 55,
    "image": "https://i.postimg.cc/yYBCY44h/hot-chocolate-oreo.png",
    "imageFit": "cover"
  },
  {
    "id": "item236",
    "name": "هوت شوكليت نوتيلا",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ هوت شوكليت نوتيلا من مطعم ومقهى بلاك آند وايت.",
    "price": 60,
    "image": "https://i.postimg.cc/GhrnhwwT/hot-chocolate-nutella.png",
    "imageFit": "cover"
  },
  {
    "id": "item237",
    "name": "هوت شوكليت مارشميلو",
    "category": "مشروبات ساخنة",
    "description": "استمتع بـ هوت شوكليت مارشميلو من مطعم ومقهى بلاك آند وايت.",
    "price": 65,
    "image": "https://i.postimg.cc/NGRwcGVM/hot-chocolate-marshmallow.png",
    "imageFit": "cover"
  }
];
