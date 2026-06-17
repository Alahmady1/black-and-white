"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, ChevronRight, ShoppingCart, Plus, Minus, X, Trash2, Send } from "lucide-react";
import Image from "next/image";
import { menuItems, menuCategories, MenuItem } from "@/data/menu";
import { SITE_WHATSAPP } from "@/lib/site";

function getMenuImageClass(item: MenuItem) {
  const base = item.imageFit === "contain" ? "object-contain p-4" : "object-cover";
  const zoom = item.objectPosition ? "scale-[2.15]" : "";
  return `${base} transition-transform duration-1000 group-hover:scale-110 ${zoom}`.trim();
}

interface CartItem extends MenuItem {
  quantity: number;
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "الكل" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 12);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - 200 : scrollLeft + 200;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const orderOnWhatsApp = () => {
    if (cart.length === 0) {
      alert("أضف أصنافاً إلى السلة أولاً.");
      return;
    }

    let message = "مرحباً، أود تقديم طلب من بلاك آند وايت:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}- ${item.name}\n`;
      message += `الكمية: ${item.quantity}\n`;
      message += `السعر: ${item.price} ج.م\n`;
      message += `المجموع: ${item.price * item.quantity} ج.م\n\n`;
    });
    message += `الإجمالي: ${cartTotal} ج.م`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${SITE_WHATSAPP}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="menu" className="py-24 bg-zinc-50/50 relative">
      {/* Floating Cart Button (Mobile) */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: cart.length > 0 ? 1 : 0 }}
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-50 lg:hidden bg-black text-white p-5 rounded-full shadow-2xl flex items-center gap-2"
      >
        <ShoppingCart className="w-6 h-6" />
        <span className="bg-white text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">
          {cart.reduce((a, b) => a + b.quantity, 0)}
        </span>
      </motion.button>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 border border-zinc-200 rounded-full"
          >
            قائمتنا الكاملة
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-zinc-900">
            تذوق <span className="text-zinc-400 italic">الرفاهية</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg font-medium leading-relaxed">
            استكشف تشكيلتنا الواسعة من المشروبات الفاخرة والمأكولات العالمية المحضرة بعناية.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Filter Controls */}
            <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-zinc-200 shadow-xl mb-16">
              <div className="flex flex-col xl:flex-row gap-8 items-center">
                
                {/* Search Box */}
                <div className="relative w-full xl:w-1/3">
                  <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="ابحث عن مشروب أو طبق..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pr-14 pl-6 py-4 bg-zinc-100/50 border border-zinc-200 rounded-2xl text-zinc-900 focus:ring-2 focus:ring-black focus:bg-white outline-none transition-all font-bold text-sm"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative w-full xl:w-2/3 flex items-center">
                  <button 
                    onClick={() => scroll("right")}
                    className="absolute right-0 z-10 p-2 bg-gradient-to-l from-white via-white to-transparent h-full flex items-center lg:hidden"
                  >
                    <ChevronRight className="w-5 h-5 text-zinc-900" />
                  </button>
                  
                  <div 
                    ref={scrollRef}
                    className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth px-2 py-1 w-full"
                  >
                    {menuCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setShowAll(false);
                        }}
                        className={`px-6 py-3 rounded-xl text-[13px] font-black whitespace-nowrap transition-all duration-300 ${
                          activeCategory === category
                            ? "bg-black text-white shadow-lg shadow-black/20 scale-105"
                            : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <button 
                    onClick={() => scroll("left")}
                    className="absolute left-0 z-10 p-2 bg-gradient-to-r from-white via-white to-transparent h-full flex items-center lg:hidden"
                  >
                    <ChevronLeft className="w-5 h-5 text-zinc-900" />
                  </button>
                </div>
              </div>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {displayedItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-white rounded-[2.5rem] p-6 border border-zinc-100 hover:border-zinc-300 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                  >
                    <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-8 shadow-inner flex-shrink-0 bg-zinc-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className={getMenuImageClass(item)}
                        style={{ objectPosition: item.objectPosition || "center" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                        <p className="text-white text-xs font-bold uppercase tracking-widest leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-center px-2 flex flex-col flex-1">
                      <span className="inline-block text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-black mb-4 text-zinc-900 tracking-tighter group-hover:text-black transition-colors line-clamp-2 h-14 flex items-center justify-center">
                        {item.name}
                      </h3>
                      <div className="flex items-center justify-center gap-3 mb-6 mt-auto">
                        <div className="h-px w-8 bg-zinc-100 group-hover:w-12 transition-all"></div>
                        <span className="text-lg font-black text-zinc-900">
                          {item.price} <span className="text-xs text-zinc-400 font-bold uppercase">ج.م</span>
                        </span>
                        <div className="h-px w-8 bg-zinc-100 group-hover:w-12 transition-all"></div>
                      </div>
                      
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full py-4 bg-zinc-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-3 mt-auto"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        إضافة للسلة
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* View All Button */}
            {filteredItems.length > 12 && !showAll && (
              <div className="text-center mt-20">
                <button
                  onClick={() => setShowAll(true)}
                  className="px-12 py-5 bg-black text-white text-sm font-black uppercase tracking-[0.2em] rounded-full hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-black/20"
                >
                  عرض القائمة كاملة ({filteredItems.length})
                </button>
              </div>
            )}
          </div>

          {/* Cart Sidebar (Desktop) */}
          <div className="hidden lg:block w-96 sticky top-24 h-fit">
            <div className="bg-white rounded-[2.5rem] border border-zinc-200 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
              <div className="p-8 bg-zinc-900 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter">طلبك</h3>
                  <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">بلاك آند وايت</p>
                </div>
                <div className="bg-white/10 p-3 rounded-2xl">
                  <ShoppingCart className="w-6 h-6" />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingCart className="w-6 h-6 text-zinc-200" />
                    </div>
                    <p className="text-zinc-400 text-sm font-bold">سلتك فارغة حالياً</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-zinc-100 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="64px"
                          className={item.imageFit === "contain" ? "object-contain p-1" : "object-cover"}
                          style={{ objectPosition: item.objectPosition || "center" }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-black text-sm text-zinc-900">{item.name}</h4>
                          <button onClick={() => removeFromCart(item.id)} className="text-zinc-300 hover:text-red-500 transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center bg-zinc-100 rounded-lg p-1">
                            <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-white rounded-md transition-all">
                              <Minus className="w-3 h-3 text-zinc-600" />
                            </button>
                            <span className="px-3 text-xs font-black text-zinc-900">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-white rounded-md transition-all">
                              <Plus className="w-3 h-3 text-zinc-600" />
                            </button>
                          </div>
                          <p className="text-sm font-black text-zinc-900">{item.price * item.quantity} ج.م</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-8 bg-zinc-50 border-t border-zinc-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-zinc-400 font-bold uppercase tracking-widest text-xs">الإجمالي النهائي</span>
                  <span className="text-2xl font-black text-zinc-900">{cartTotal} ج.م</span>
                </div>
                <button
                  onClick={orderOnWhatsApp}
                  disabled={cart.length === 0}
                  className="w-full py-5 bg-green-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-green-700 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 disabled:grayscale"
                >
                  <Send className="w-5 h-5" />
                  اطلب عبر واتساب
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Cart Drawer Overlay */}
        <AnimatePresence>
          {isCartOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCartOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
              />
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[3rem] z-[70] lg:hidden max-h-[90vh] flex flex-col"
              >
                <div className="p-4 flex justify-center">
                  <div className="w-12 h-1.5 bg-zinc-200 rounded-full" />
                </div>
                
                <div className="px-8 pb-8 flex items-center justify-between border-b border-zinc-100">
                  <h3 className="text-2xl font-black tracking-tighter">طلبك الحالي</h3>
                  <button onClick={() => setIsCartOpen(false)} className="p-2 bg-zinc-100 rounded-full">
                    <X className="w-5 h-5 text-zinc-500" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-6">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-zinc-100 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="64px"
                          className={item.imageFit === "contain" ? "object-contain p-1" : "object-cover"}
                          style={{ objectPosition: item.objectPosition || "center" }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-black text-lg text-zinc-900">{item.name}</h4>
                          <button onClick={() => removeFromCart(item.id)}>
                            <Trash2 className="w-5 h-5 text-zinc-300" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center bg-zinc-100 rounded-xl p-2">
                            <button onClick={() => updateQuantity(item.id, -1)} className="p-1">
                              <Minus className="w-4 h-4 text-zinc-600" />
                            </button>
                            <span className="px-4 font-black text-zinc-900">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="p-1">
                              <Plus className="w-4 h-4 text-zinc-600" />
                            </button>
                          </div>
                          <p className="font-black text-zinc-900">{item.price * item.quantity} ج.م</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-zinc-50 border-t border-zinc-200 pb-12">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-zinc-400 font-bold uppercase tracking-widest text-sm">الإجمالي النهائي</span>
                    <span className="text-3xl font-black text-zinc-900">{cartTotal} ج.م</span>
                  </div>
                  <button
                    onClick={orderOnWhatsApp}
                    className="w-full py-6 bg-green-600 text-white rounded-[2rem] font-black uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center gap-3"
                  >
                    <Send className="w-6 h-6" />
                    اطلب عبر واتساب
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-zinc-200"
          >
            <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search className="w-10 h-10 text-zinc-200" />
            </div>
            <h3 className="text-2xl font-black text-zinc-900 mb-2">عذراً، لم نجد ما تبحث عنه</h3>
            <p className="text-zinc-400 font-medium">جرب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً.</p>
            <button 
              onClick={() => {setActiveCategory("الكل"); setSearchQuery("");}}
              className="mt-8 text-black font-black underline underline-offset-8"
            >
              إعادة تعيين البحث
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
