"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE_PHONE } from "@/lib/site";

// Custom SVG components for social icons as they are missing in the current lucide-react version
const Facebook = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Twitter = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Youtube = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="inline-block relative w-48 h-20 mb-8 grayscale">
              <Image src="/logo.jpeg" alt="Logo" fill className="object-contain" />
            </Link>
            <p className="text-zinc-500 font-medium leading-relaxed mb-8">
              مطعم ومقهى بلاك آند وايت يقدم أرقى أنواع القهوة والمأكولات العالمية في قلب طنطا.
            </p>
            <div className="flex gap-4">
               {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                 <a
                   key={i}
                   href="#contact"
                   aria-label="تواصل معنا"
                   className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 hover:bg-black hover:text-white transition-all duration-300"
                 >
                    <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-tighter">روابط سريعة</h4>
            <ul className="space-y-4">
              {[
                { name: "الرئيسية", href: "#home" },
                { name: "القائمة", href: "/menu.html" },
                { name: "اتصل بنا", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-zinc-500 font-bold hover:text-black transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-black mb-8 uppercase tracking-tighter">اتصل بنا</h4>
            <ul className="space-y-6">
              <li>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1">الموقع</p>
                <p className="text-zinc-900 font-black">طنطا - فرع ماتريكس</p>
              </li>
              <li>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1">الهاتف</p>
                <p className="text-zinc-900 font-black">{SITE_PHONE}</p>
              </li>
              <li>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1">البريد الإلكتروني</p>
                <p className="text-zinc-900 font-black">info@blackandwhite.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-12 text-center">
          <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} BLACK & WHITE Restaurant & Cafe. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
