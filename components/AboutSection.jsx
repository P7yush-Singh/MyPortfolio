"use client";

import { motion } from "framer-motion";
import SectionShell from "@/components/SectionShell";
import SectionTitle from "@/components/SectionTitle";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const leftVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <SectionShell id="about">
      {/* Title with crazy animations */}
      <SectionTitle
        eyebrow="About"
        title="From idea to full-stack product."
        right="I love taking a rough idea, sketch or voice note and turning it into a fast, beautiful and production-ready web app."
      />

      <motion.div
        className="relative"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* subtle floating blob */}
        <motion.div
          className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(75,77,237,0.4), transparent 60%)",
          }}
          animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
          {/* Left: story */}
          <motion.div
            className="space-y-4 text-sm leading-relaxed text-black/80 md:text-base"
            variants={leftVariant}
          >
            <p>
              I&apos;m <span className="font-semibold">Piyush Singh</span>, a
              full-stack developer and a freelancer  
              I move comfortably between design, frontend and backend – so ideas don&apos;t
              get stuck between teams.
            </p>
            <p>
              My recent work revolves around{" "}
              <span className="font-semibold">
                SaaS dashboards, interview preparation platforms, QR-based
                restaurant systems and startup MVPs
              </span>
              . I care about performance, clean architecture and interfaces that
              feel fun to use.
            </p>
            <p>
              Outside of code, I&apos;m experimenting with branding, building my
              fintech project <span className="font-semibold">CreditSaathi</span>,
              and learning guitar. I like working with people who are serious
              about their product but relaxed about everything else.
            </p>

            {/* Chips row */}
            <div className="flex flex-wrap gap-2 pt-2 text-[11px]">
              {[
                "Next.js & React",
                "Node.js & Express",
                "MongoDB / Firebase",
                "Tailwind UI love",
                "SaaS & dashboards",
              ].map((chip) => (
                <motion.span
                  key={chip}
                  className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-black/70 shadow-sm backdrop-blur"
                  whileHover={{ y: -2, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 220, damping: 15 }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: stat cards */}
          <motion.div
            className="grid gap-4 text-sm"
            variants={rightVariant}
          >
            <motion.div
              className="flex items-center justify-between rounded-3xl border border-black/5 bg-white px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
              variants={cardVariant}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">
                  Experience
                </p>
                <p className="mt-1 text-lg font-semibold">2+ years</p>
              </div>
              <p className="max-w-[11rem] text-xs text-black/60">
                Building full-stack apps, dashboards and SaaS MVPs.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center justify-between rounded-3xl border border-black/5 bg-white px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
              variants={cardVariant}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">
                  Projects shipped
                </p>
                <p className="mt-1 text-lg font-semibold">15+ projects</p>
              </div>
              <p className="max-w-[11rem] text-xs text-black/60">
                From student platforms to real client work and SaaS products.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center justify-between rounded-3xl px-5 py-4 text-white shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
              style={{ backgroundColor: "#4b4ded" }}
              variants={cardVariant}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">
                  Now building
                </p>
                <p className="mt-1 text-lg font-semibold">CreditSaathi</p>
              </div>
              <p className="max-w-[11rem] text-xs text-white/80">
                A fintech platform that helps people understand and manage
                credit cards better.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
