"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => setDone(true),
      });

      tl.from(textRef.current, {
        y: 24,
        opacity: 0,
        duration: 1.2,
      })
        .from(
          barRef.current,
          {
            width: "0%",
            duration: 1.6,
          },
          "-=0.4"
        )
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.in",
          delay: 0.2,
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (done) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "#111827", color: "#f7efe6" }}
    >
      <div className="flex flex-col items-center gap-4">
        <p
          ref={textRef}
          className="text-lg uppercase tracking-[0.3em] text-[#f7efe6]/80"
        >
          Piyush Singh Portfolio
        </p>
        <p className="text-2xl font-semibold">Loading experience…</p>
        <div className="mt-2 h-[3px] w-40 overflow-hidden rounded-full bg-white/10">
          <div
            ref={barRef}
            className="h-full rounded-full"
            style={{ backgroundColor: "#4b4ded" }}
          />
        </div>
      </div>
    </div>
  );
}
