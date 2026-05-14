import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StatBar from "@/components/StatBar";
import CaseStudyCard from "@/components/CaseStudyCard";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Gabriel Tomala — Operations & Sales",
  description:
    "Gabriel Tomala — supply chain operator, logistics leader, and revenue builder with 8 years across operations and sales.",
};

const featuredWork = [
  {
    tag: "Operations",
    title: "Carrier Performance Scorecard",
    description:
      "A full carrier evaluation system with weighted scoring across cost, on-time delivery, and service quality.",
    href: "/operations",
  },
  {
    tag: "Analytics",
    title: "Freight Spend Dashboard",
    description:
      "Company-wide freight spend reporting suite across 500 shipments and 8 carriers with executive summaries.",
    href: "/operations",
  },
  {
    tag: "Sales Operations",
    title: "RFP Bid Analysis Tool",
    description:
      "Simulates a full freight broker RFP response across 500 lanes with a live pricing strategy engine.",
    href: "/operations",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 pt-20 md:pt-[120px] pb-16 md:pb-[120px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
            {/* Left */}
            <div className="flex-1">
              <FadeIn>
                <h1
                  className="font-bold text-[#111111] leading-[1.05] tracking-[-0.02em] mb-6"
                  style={{ fontSize: "clamp(42px, 6vw, 68px)" }}
                >
                  I run tight operations.
                  <br />
                  I build lasting relationships.
                </h1>

                <p className="text-[16px] text-[#6B7280] leading-[1.7] max-w-xl mb-8">
                  Supply chain operator, logistics leader, and revenue builder
                  with 8 years across operations and sales. I turn complex
                  freight networks into trackable, scalable systems — and
                  protect margin while doing it.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <Link
                    href="/operations"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1A56DB] text-white text-[15px] font-medium hover:bg-[#1644b8] transition-colors"
                  >
                    View Operations Work
                  </Link>
                  <Link
                    href="/sales"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#1A56DB] border border-[#1A56DB] text-[15px] font-medium hover:bg-[#1A56DB] hover:text-white transition-colors"
                  >
                    View Sales Work
                  </Link>
                </div>

                <StatBar />
              </FadeIn>
            </div>

            {/* Right — photo (desktop only) */}
            <div className="hidden md:block w-[38%] shrink-0">
              <Image
                src="/gabriel.jpg"
                alt="Gabriel Tomala"
                width={600}
                height={800}
                className="rounded-xl object-cover w-full"
                style={{ aspectRatio: "3/4" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-12 py-[64px] md:py-[120px] border-t border-[#E5E7EB]">
        <div className="max-w-[720px] mx-auto">
          <FadeIn>
            <h2 className="text-[42px] font-bold text-[#111111] mb-8 leading-tight">
              About
            </h2>
            <div className="space-y-5 text-[16px] text-[#111111] leading-[1.7]">
              <p>
                I spent the last 8 years at the intersection of logistics,
                sales, and operations — building freight programs from scratch,
                running company-wide RFPs, and turning raw data into decisions
                leadership could act on.
              </p>
              <p>
                I&apos;ve worked across industrial supply chains, digital
                marketplaces, and B2C shipping networks. I&apos;ve negotiated
                seven-figure contracts, managed cross-border operations spanning
                the US, Mexico, Europe, and the Middle East, and built the
                carrier scoring and forecasting systems that made all of it
                trackable.
              </p>
              <p>
                What I bring to the table: action-oriented, efficiency-focused,
                and data-driven. I make decisions with transparency, stay calm
                under pressure, and see things through. I&apos;m a team player
                with the grit to work through hard problems — and I&apos;m
                actively open to remote and hybrid roles in operations, sales,
                and analysis.
              </p>
              <p>
                Outside of work: building tools, investing, collecting vinyl,
                home improvement, soccer, cycling, and picking up golf.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-6 md:px-12 py-[64px] md:py-[120px] border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-[42px] font-bold text-[#111111] mb-3 leading-tight">
              Selected Work
            </h2>
            <p className="text-[16px] text-[#6B7280] mb-10 leading-[1.7]">
              Tools and systems built from real operational experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWork.map((card) => (
                <CaseStudyCard key={card.title} {...card} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
