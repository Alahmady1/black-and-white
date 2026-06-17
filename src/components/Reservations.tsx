"use client";

import { motion } from "framer-motion";

export default function Reservations() {
  return (
    <section id="reservations" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2047&auto=format&fit=crop')" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">حجز طاولة</h2>
            <div className="w-20 h-1.5 bg-white mx-auto mb-8"></div>
            <p className="text-zinc-400 text-lg">
              اضمن مكانك في بلاك آند وايت. احجز طاولتك الآن لتستمتع بتجربة طعام استثنائية.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400">الاسم بالكامل</label>
                <input 
                  type="text" 
                  placeholder="أدخل اسمك"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-6 py-4 text-black focus:ring-2 focus:ring-black outline-none transition-all"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400">عدد الأشخاص</label>
                <select className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-6 py-4 text-black focus:ring-2 focus:ring-black outline-none transition-all appearance-none">
                  <option>شخص واحد</option>
                  <option>شخصين</option>
                  <option>3 - 4 أشخاص</option>
                  <option>5+ أشخاص</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400">التاريخ</label>
                <input 
                  type="date" 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-6 py-4 text-black focus:ring-2 focus:ring-black outline-none transition-all"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400">الوقت</label>
                <input 
                  type="time" 
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-6 py-4 text-black focus:ring-2 focus:ring-black outline-none transition-all"
                />
              </div>

              <div className="md:col-span-2 space-y-4">
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400">طلبات خاصة</label>
                <textarea 
                  rows={3}
                  placeholder="هل هناك أي شيء نود معرفته؟"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-6 py-4 text-black focus:ring-2 focus:ring-black outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button type="submit" className="btn-filled w-full py-5 text-lg">تأكيد الحجز</button>
              </div>
            </form>
          </motion.div>
          
          <div className="mt-12 text-center">
            <p className="text-zinc-500">
              للحجوزات الكبيرة أو المناسبات الخاصة، يرجى الاتصال بنا مباشرة على <span className="text-white font-bold">920000000</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
