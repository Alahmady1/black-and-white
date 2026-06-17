"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ReservationsCTA() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Logo Side */}
          <div className="lg:w-1/4 flex justify-center lg:justify-start">
             <div className="relative w-48 h-24 transition-transform hover:scale-105 duration-500">
                <Image src="/logo.jpeg" alt="Logo" fill className="object-contain" />
             </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">احجز طاولتك الآن</h2>
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-white/20"></div>
              <div className="mx-3 text-white text-sm">★</div>
              <div className="w-12 h-px bg-white/20"></div>
            </div>
            <p className="text-zinc-400 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-lg mx-auto">
              سواء كانت مناسبة خاصة أو مجرد لقاء مع الأصدقاء، نحن هنا لنجعل تجربتك مميزة.
            </p>
            <Link href="#reservations" className="inline-block px-12 py-4 bg-white text-black font-black uppercase tracking-widest rounded-lg hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105">
              احجز الآن
            </Link>
          </div>

          {/* Contact Side */}
          <div className="lg:w-1/4 space-y-8">
            <div className="flex items-center gap-4 group justify-end">
              <div className="text-right">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">اتصل بنا</p>
                <p className="text-white font-black">01094652499</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                <Phone className="w-5 h-5" />
              </div>
            </div>

            <div className="flex items-center gap-4 group justify-end">
              <div className="text-right">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">البريد الإلكتروني</p>
                <p className="text-white font-black">info@blackandwhite.com</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                <Mail className="w-5 h-5" />
              </div>
            </div>

            <div className="flex items-center gap-4 group justify-end">
              <div className="text-right">
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">الموقع</p>
                <p className="text-white font-black">طنطا - فرع ماتريكس</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
