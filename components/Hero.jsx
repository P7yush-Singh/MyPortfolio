"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // subtle parallax
  const yText = useTransform(scrollY, [0, 400], [0, -40]);
  const yImage = useTransform(scrollY, [0, 400], [0, -70]);
  const yShape = useTransform(scrollY, [0, 400], [0, -50]);
  
  return (
    <section className="border-b border-black/5 px-4 pb-16 pt-28 md:pb-20 md:pt-32">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Left side */}
        <div className="flex-1 space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">
            Portfolio 2025 • Full-Stack Development
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Piyush Singh
            <span className="block" style={{ color: "#4b4ded" }}>
              Full-Stack Developer
            </span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-black/70 md:text-base">
            I build fast, clean and scalable web apps using{" "}
            <span className="font-semibold">
              Next.js, Node.js, MongoDB &amp; modern UI frameworks
            </span>
            . I’m a full-stack developer who loves building fast, scalable applications with clean UI and strong backend architecture. I focus on turning real-world problems into powerful digital solutions. From SaaS tools to
            real-time apps, I bring ideas from zero to production.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md"
              style={{ backgroundColor: "#4b4ded" }}
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#111827]"
            >
              Let&apos;s collaborate
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-xs">
            <div>
              <p className="text-sm font-semibold">Tech Stack</p>
              <p className="mt-1 text-black/70">
                Next.js · React · Node.js · Express · MongoDB · Tailwind ·
                Firebase
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold">Based in</p>
              <p className="mt-1 text-black/70">India · Open to remote</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 text-xs">
            <span className="text-xs uppercase tracking-[0.2em] text-black/50">
              Social
            </span>
            <a href="https://github.com/p7yush-singh" target="_blank" className="rounded-full border border-black/10 bg-white px-3 py-1">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/p7yu5h-singh/" target="_blank" className="rounded-full border border-black/10 bg-white px-3 py-1">
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/p7yu5h" target="_blank"
              className="rounded-full border border-black/10 bg-white px-3 py-1"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – MODERN SHAPE IMAGE */}
        <motion.div
          className="relative flex flex-1 items-center justify-center"
          style={{ y: yImage }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative h-[360px] w-[300px] md:h-[420px] md:w-[360px]">
            {/* background abstract shape */}
            <div
              className="absolute inset-0 rounded-[48%_52%_60%_40%/50%_45%_55%_50%]"
              style={{
                background:
                  "linear-gradient(135deg, #4b4ded33, #ffb34733)",
              }}
            />

            {/* subtle border glow */}
            <div className="absolute inset-3 rounded-[36px] border border-white/40 backdrop-blur-sm" />

            {/* main image */}
            <motion.div
              className="relative z-10 mx-auto mt-10 h-[260px] w-[200px] md:h-[300px] md:w-[240px] overflow-hidden rounded-[28px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <img
                src="/ps.jpeg"
                alt="Piyush Singh"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* floating availability badge */}
            <motion.div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-[11px] font-semibold shadow-md"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Available for projects
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
