"use client";

import { useState, useEffect } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "القائمة", href: "/menu.html" },
    { name: "حسابي", href: "/auth.html" },
    { name: "اتصل بنا", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-2 shadow-2xl" : "bg-black/40 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="relative w-32 h-14 md:w-40 md:h-16 group transition-transform hover:scale-105">
          <Image 
            src="/logo.jpeg" 
            alt="BLACK & WHITE Logo" 
            fill 
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-white/90 hover:text-white transition-all relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-6px] after:left-0 after:bg-white after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="hidden lg:block">
          <Link
            href="#menu"
            className="px-8 py-2.5 border border-white/40 text-white text-[14px] font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
          >
            اطلب الآن
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-t border-white/10 lg:hidden overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col py-10 px-8 gap-8 text-center bg-gradient-to-b from-black to-zinc-900">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-white/80 hover:text-white transition-colors tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#menu"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-white text-black font-black py-4 rounded-full uppercase tracking-tighter"
              >
                اطلب الآن
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
