import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Projects — Gabriel Tomala",
  description: "Things built outside of work hours.",
};

const projects = [
  {
    tag: "Web / SaaS",
    title: "Clocked.it",
    status: { label: "Live", accent: true },
    description:
      "A mastery tracker for builders and creators. Set goals, log timed focus sessions, and watch cumulative skill development stack up over time. Built with Next.js.",
    link: { href: "https://clocked.it", label: "Visit clocked.it →" },
  },
  {
    tag: "Web",
    title: "SleepAudit.io",
    status: { label: "In Development", accent: false },
    description:
      "A sleep optimization and tracking tool. Currently in development.",
    link: null,
  },
  {
    tag: "Web",
    title: "This Site",
    status: { label: "Live", accent: true },
    description: "Designed and built from scratch. No templates.",
    link: null,
    note: undefined,
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 pt-20 md:pt-[120px] pb-16 md:pb-[120px] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-[42px] md:text-[68px] font-bold text-[#111111] leading-[1.05] tracking-[-0.02em] mb-5">
              Projects
            </h1>
            <p className="text-[16px] text-[#6B7280] leading-[1.7] max-w-2xl">
              Things built outside of work hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Project Cards */}
      <section className="px-6 md:px-12 py-[64px] md:py-[120px]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#1A56DB] hover:shadow-md transition-all duration-200 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block text-[12px] font-semibold text-[#1A56DB] bg-[#EFF6FF] px-2.5 py-1 rounded-full">
                      {project.tag}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[12px] font-medium px-2.5 py-1 rounded-full ${
                        project.status.accent
                          ? "text-[#1A56DB] bg-[#EFF6FF]"
                          : "text-[#6B7280] bg-[#F3F4F6]"
                      }`}
                    >
                      {project.status.accent && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A56DB] animate-pulse" />
                      )}
                      {project.status.label}
                    </span>
                  </div>

                  <h3 className="text-[20px] font-semibold text-[#111111] mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-[#6B7280] leading-[1.7] flex-1 mb-4">
                    {project.description}
                  </p>

                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-medium text-[#1A56DB] hover:underline transition-colors"
                    >
                      {project.link.label}
                    </a>
                  )}

                  {project.note && (
                    <p className="text-[13px] text-[#9CA3AF] mt-2 italic">
                      {project.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
