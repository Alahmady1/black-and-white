"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <h2 className="text-white text-base sm:text-lg md:text-2xl font-light mb-6 tracking-wide opacity-90">
            مرحباً بك في
          </h2>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-tight">
            BLACK<span className="text-white/60">&</span>WHITE
          </h1>

          {/* Tagline */}
          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-10 tracking-[0.2em] uppercase opacity-80 border-t border-b border-white/20 inline-block py-2">
            Restaurant & Cafe
          </h3>

          {/* Divider */}
          <div className="flex justify-center mb-12">
            <div className="w-16 h-0.5 bg-white/40"></div>
            <div className="mx-4 text-white text-xl">★</div>
            <div className="w-16 h-0.5 bg-white/40"></div>
          </div>

          {/* Description */}
          <p className="text-zinc-200 text-base sm:text-lg md:text-2xl max-w-2xl mx-auto mb-14 font-medium leading-relaxed opacity-90">
            مكان حيث يلتقي الطعم الرائع بالأجواء المميزة.
            <br />
            استمتع بتجربة لا تُنسى في كل زيارة.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/menu.html"
              className="w-full sm:w-auto px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-lg hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              استكشف القائمة
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/60 text-white font-black uppercase tracking-widest rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              تواصل معنا
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}