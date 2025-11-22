import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SectionShell from "@/components/SectionShell";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import Preloader from "@/components/Preloader";


export default function Page() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#f7efe6", color: "#111827" }}
    >
      <Preloader />
      <Navbar />
      <Hero />

       {/* About */}
       <AboutSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Services */}
      <SectionShell id="services">
        <SectionTitle
          eyebrow="Services"
          title="What I can build for you."
          right="Have a startup idea, internal tool or MVP in mind? I can help you scope, design and launch it quickly."
        />
        <div className="grid gap-6 text-sm md:grid-cols-3">
          <div className="flex flex-col gap-3 rounded-3xl border border-black/5 bg-white p-5 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">
              01 • Full-stack Web Apps
            </p>
            <p className="font-semibold">
              Dashboards, SaaS products & internal tools
            </p>
            <p className="text-black/70">
              From auth and role-based access to analytics, payments and admin
              panels – built with Next.js, Node.js and MongoDB.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-3xl border border-black/5 bg-white p-5 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">
              02 • APIs & Integrations
            </p>
            <p className="font-semibold">
              REST APIs, webhooks & third-party services
            </p>
            <p className="text-black/70">
              Clean backend architecture, authentication, and integrations with
              services like Firebase, payment gateways, email, and AI APIs.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-3xl border border-black/5 bg-white p-5 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">
              03 • UI/UX & Frontend
            </p>
            <p className="font-semibold">
              Modern, responsive & delightfully smooth interfaces
            </p>
            <p className="text-black/70">
              Dark themes, micro-interactions, and mobile-first layouts using
              React, Tailwind CSS and (optionally) Framer Motion.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* Contact */}
      <SectionShell id="contact">
        <div
          className="mx-auto max-w-4xl rounded-[2rem] px-6 py-16 text-center text-white shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
          style={{ backgroundColor: "#4b4ded" }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">
            Let&apos;s build something
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Have a project, idea or role in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/85 md:text-base">
            Whether you&apos;re looking to ship a SaaS MVP, redesign your
            product, or hire a full-stack developer — I&apos;d love to hear from
            you. Share a few lines about what you&apos;re building.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4">
            <a
              href="mailto:piyush.pych@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#4b4ded" }}
            >
              Email me your brief
            </a>
            <p className="text-xs text-white/80">
              Or DM me on Instagram{" "}
              <a
                href="https://www.instagram.com/p7yu5h"
                className="underline underline-offset-4"
              >
                @p7yu5h
              </a>
            </p>
          </div>
        </div>
      </SectionShell>

      <Footer />
    </main>
  );
}
