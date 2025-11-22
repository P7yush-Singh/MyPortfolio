"use client";

import { motion } from "framer-motion";

const charContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.15,
    },
  },
};

const charVariant = {
  hidden: { y: 18, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function SectionTitle({ eyebrow, title, right }) {
  const letters = title.split("");

  return (
    <div className="mb-12">
      {/* Top row: eyebrow + badge */}
      <div className="mb-3 flex items-center gap-3">
        <motion.p
          className="text-xs uppercase tracking-[0.25em] text-black/60"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {eyebrow}
        </motion.p>

        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]"
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "backOut", delay: 0.15 }}
          whileHover={{ scale: 1.05, rotate: -1 }}
        >
          <motion.span
            className="flex h-4 w-4 items-center justify-center rounded-full text-[9px] text-white shadow"
            style={{ backgroundColor: "#4b4ded" }}
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            ★
          </motion.span>
          <span>Section</span>
        </motion.div>
      </div>

      {/* Main title: character stagger + underline */}
      <motion.div
        className="relative inline-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        whileHover={{ y: -2 }}
      >
        {/* Animated letters */}
        <motion.h2
          className="relative z-10 text-2xl font-extrabold tracking-tight md:text-3xl"
          variants={charContainer}
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={charVariant}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Colored highlight behind text */}
        <motion.div
          className="absolute -bottom-1 left-0 right-6 h-2 rounded-full"
          style={{ background: "linear-gradient(90deg,#4b4ded,#ffb347)" }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        />

        {/* Thin underline bar that moves on hover */}
        <motion.div
          className="absolute bottom-[-10px] left-0 h-[1px] w-24 rounded-full bg-black/30"
          whileHover={{ x: 8 }}
          transition={{ type: "spring", stiffness: 170, damping: 15 }}
        />
      </motion.div>

      {/* Right-side small description */}
      {right && (
        <motion.div
          className="mt-6 max-w-sm text-xs text-black/60 md:float-right md:-mt-10 md:text-sm"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
        >
          {right}
        </motion.div>
      )}

      <div className="clear-both" />
    </div>
  );
}
