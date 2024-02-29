"use client";

import Link from "next/link";
import { ARTICLES } from "@/app/utils/constant";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Article() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="articles">
      <h2 className="w-full px-4 py-2 mb-6 font-semibold">ARTICLES</h2>
      <div className="px-4">
        <span className="h-px w-full px-4 bg-white md:block hidden relative -top-6"></span>
      </div>
      <div className="grid p-2">
        {ARTICLES.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            target="_blank"
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-cyan-200/20 block rounded"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 }
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.03 }
                  }}
                />
              )}
            </AnimatePresence>
            <div className="rounded h-full w-full overflow-hidden bg-black border border-cyan-200/20 relative z-20">
              <div className="relative z-50">
                <div className="p-4">{item.title}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
