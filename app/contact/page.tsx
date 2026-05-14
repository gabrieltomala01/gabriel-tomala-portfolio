import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact — Gabriel Tomala",
  description:
    "Open to remote roles in logistics, operations, sales, and data.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 pt-20 md:pt-[120px] pb-16 md:pb-[120px] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-[42px] md:text-[68px] font-bold text-[#111111] leading-[1.05] tracking-[-0.02em] mb-5">
              Get in Touch
            </h1>
            <p className="text-[16px] text-[#6B7280] leading-[1.7] max-w-2xl">
              Open to remote roles in logistics, operations, sales, and data.
              Also happy to connect about tools, projects, or anything
              interesting.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact cards */}
      <section className="px-6 md:px-12 py-[64px] md:py-[120px]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              {/* Email */}
              <a
                href="mailto:gabriel.tomala01@gmail.com"
                className="group bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#1A56DB] hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center text-[#1A56DB]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-semibold text-[#6B7280] uppercase tracking-wide">
                    Email
                  </span>
                </div>
                <p className="text-[16px] font-medium text-[#1A56DB] group-hover:underline">
                  gabriel.tomala01@gmail.com
                </p>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/gabrieltomala"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#1A56DB] hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center text-[#1A56DB]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-semibold text-[#6B7280] uppercase tracking-wide">
                    LinkedIn
                  </span>
                </div>
                <p className="text-[16px] font-medium text-[#1A56DB] group-hover:underline">
                  linkedin.com/in/gabrieltomala
                </p>
              </a>
            </div>

            <p className="text-[14px] text-[#6B7280] mt-8">
              Currently based in Mexico City.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
