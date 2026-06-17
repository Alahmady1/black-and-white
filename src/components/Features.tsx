"use client";

import { motion } from "framer-motion";
import { Coffee, Utensils, Heart, Bell } from "lucide-react";

const features = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "شغف بالطعام",
    desc: "شغفنا تقديم تجربة فريدة في كل طبق.",
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "خدمة ممتازة",
    desc: "فريق عمل محترف لخدمتك على مدار الساعة.",
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "أجواء مميزة",
    desc: "تصميم أنيق وأجواء مريحة للاسترخاء.",
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "جودة عالية",
    desc: "نستخدم أجود المكونات لأفضل طعم.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-black text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">
                {feature.title}
              </h3>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-[200px]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
