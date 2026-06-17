"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-zinc-50">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
                alt="About Black & White"
                width={800}
                height={600}
                className="object-cover hover:scale-110 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold opacity-10 -z-0 rounded-2xl hidden md:block"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">قصة بلاك آند وايت</h2>
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-black"></div>
              <div className="mx-3 text-gold text-sm">★</div>
              <div className="w-12 h-1 bg-zinc-200"></div>
            </div>
            
            <h3 className="text-2xl font-black text-zinc-900 mb-6 uppercase tracking-tight">
              حيث تلتقي الفخامة مع المذاق الرفيع في قلب طنطا.
            </h3>
            
            <p className="text-zinc-500 text-lg mb-8 leading-relaxed font-medium">
              بدأنا شغفنا في مطعم ومقهى بلاك آند وايت لتقديم تجربة لا تُنسى لعملائنا في فرعنا الجديد بطنطا - ماتريكس. نحن نؤمن بأن الطعام والقهوة هما فن بحد ذاته، ولهذا نولي اهتماماً فائقاً لكل التفاصيل.
            </p>

            <div className="grid grid-cols-2 gap-12 mb-10">
              <div className="border-r border-zinc-100 pr-6">
                <span className="block text-4xl font-black text-black mb-2">10+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">سنوات من الخبرة</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-black mb-2">50+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">طبق عالمي</span>
              </div>
            </div>

            <a href="#menu" className="btn-black">اكتشف قائمتنا</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
