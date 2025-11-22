"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionShell from "@/components/SectionShell";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "PrepProAI",
    role: "SaaS • Interview Prep",
    stack: "Next.js · Node.js · Firebase · Tailwind",
    description:
      "AI-powered interview preparation web app with personalized question sets, practice sessions and history.",
    image: "/prepproai.png",
  },
  {
    title: "QR Menu Biz",
    role: "Restaurant Platform",
    stack: "Next.js · Node.js · MongoDB · JWT",
    description:
      "QR-based ordering system for restaurants with admin dashboard, menu control and real-time orders.",
    image: "/qr-menu-biz.png",
  },
  {
    title: "I Todo",
    role: "Todo List App",
    stack: "Next.js · Tailwind",
    description:
      "Todo list app to help you manage your tasks and stay organized.",
    image: "/todo.png",
  },
  {
    title: "I-Board",
    role: "Digital Painting Platform",
    stack: "Next.js · Tailwind",
    description:
      "Digital painting platform for artists to create and share their artwork.",
    image: "/iboard.png",
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState(1); // middle by default

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <SectionShell
      id="projects"
      className="bg-[rgba(75,77,237,0.03)]"
    >
      <SectionTitle
        eyebrow="Selected Work"
        title="Full-stack projects & platforms."
        right="Scroll or use arrows to explore my recent work. The focused card is the one I recommend you check out first."
      />

      <div className="relative mt-6 flex flex-col items-center">
        {/* Arrow controls */}
        <div className="mb-4 flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-xs shadow-sm hover:-translate-y-[2px] hover:shadow-md transition"
          >
            ⟵
          </button>
          <button
            onClick={handleNext}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-xs shadow-sm hover:-translate-y-[2px] hover:shadow-md transition"
          >
            ⟶
          </button>
        </div>

        {/* Coverflow track */}
        <div className="relative w-full max-w-5xl">
          <motion.div
            className="flex items-center justify-center gap-6 md:gap-8"
            layout
          >
            {projects.map((project, index) => {
              const offset = index - active;

              // how far from center? -2,-1,0,1,2...
              const abs = Math.abs(offset);

              const scale = abs === 0 ? 1 : abs === 1 ? 0.9 : 0.8;
              const y = abs === 0 ? 0 : 20;
              const rotateY = offset === 0 ? 0 : offset < 0 ? 18 : -18;
              const zIndex = 10 - abs;

              return (
                <motion.div
                  key={project.title}
                  layout
                  onClick={() => setActive(index)}
                  className="cursor-pointer"
                  style={{ zIndex, perspective: 1200 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.div
                    style={{
                      scale,
                      y,
                      rotateY,
                      transformStyle: "preserve-3d",
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    whileHover={{
                      y: -6,
                      scale: scale + 0.04,
                    }}
                    className="min-w-[250px] max-w-[320px] md:min-w-[280px] md:max-w-[340px]"
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* small hint text */}
        <p className="mt-4 text-[11px] text-black/60">
          Tip: click any card to bring it into focus.
        </p>
      </div>
    </SectionShell>
  );
}
