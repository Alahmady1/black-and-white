"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { SITE_PHONE } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">تواصل معنا</h2>
            <div className="flex items-center mb-10">
              <div className="w-12 h-1 bg-black"></div>
              <div className="mx-3 text-gold text-sm">★</div>
              <div className="w-12 h-1 bg-zinc-200"></div>
            </div>
            
            <p className="text-zinc-500 text-lg mb-12 leading-relaxed font-medium">
              نحن هنا لخدمتك في قلب طنطا. لا تتردد في الاتصال بنا للاستفسار عن خدماتنا أو للحجز الخاص.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white shrink-0 group-hover:bg-gold transition-all duration-500 shadow-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-widest text-zinc-900 mb-1 text-sm">الموقع</h4>
                  <p className="text-zinc-500 font-bold">طنطا - فرع ماتريكس</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white shrink-0 group-hover:bg-gold transition-all duration-500 shadow-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-widest text-zinc-900 mb-1 text-sm">الهاتف</h4>
                  <p className="text-zinc-500 font-bold">{SITE_PHONE}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white shrink-0 group-hover:bg-gold transition-all duration-500 shadow-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-widest text-zinc-900 mb-1 text-sm">ساعات العمل</h4>
                  <p className="text-zinc-500 font-bold">يومياً: 8:00 صباحاً - 12:00 منتصف الليل</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-50 p-8 md:p-12 rounded-3xl border border-zinc-100 shadow-premium"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-black uppercase tracking-widest text-zinc-400">الاسم بالكامل</label>
                    <input type="text" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-black outline-none transition-all font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-xs font-black uppercase tracking-widest text-zinc-400">البريد الإلكتروني</label>
                    <input type="email" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-black outline-none transition-all font-bold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase tracking-widest text-zinc-400">الموضوع</label>
                  <input type="text" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-black outline-none transition-all font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase tracking-widest text-zinc-400">رسالتك</label>
                  <textarea rows={4} className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-black outline-none transition-all resize-none font-bold"></textarea>
                </div>
                <button type="submit" className="btn-black w-full py-4 text-base">إرسال الرسالة</button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
