"use client";

import { motion } from "framer-motion";

export default function SectionShell({ id, children, className = "", style }) {
  return (
    <motion.section
      id={id}
      className={`border-y border-black/5 px-4 py-16 md:py-20 ${className}`}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </motion.section>
  );
}
