import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Sales — Gabriel Tomala",
  description:
    "A decade of closing deals, building books, and running revenue from zero.",
};

const roles = [
  {
    company: "Worldwide Express",
    title: "Account Executive",
    dates: "Nov 2024 – Sep 2025",
    headline: "141% of quota. 16 new accounts. Cold called every one of them.",
    bullets: [
      "Prospected and closed 16 new B2B and B2C accounts via in-person and phone cold calling",
      "Managed multimodal logistics solutions across parcel, LTL, FTL, expedited, international air, and drayage",
      "Leveraged deep UPS network expertise to build cost reduction cases that won complex deals",
      "Generated $93K in new business revenue within 9 months",
    ],
  },
  {
    company: "Reibus International",
    title: "Director of Logistics, Sales & Operations",
    dates: "Apr 2022 – Dec 2023",
    headline:
      "Zero to $2.8M in monthly freight revenue. Built the team, the systems, and the book.",
    bullets: [
      "Closed six and seven-figure contracts with enterprise clients across industrial and metals verticals",
      "Built and led a sales and account management team of 12 from the ground up",
      "Designed the sales process, CRM infrastructure, and account playbooks",
      "90% retention across 80+ enterprise accounts through proactive relationship management",
      "Sold cross-border freight solutions across US-Mexico corridors and international lanes",
    ],
  },
  {
    company: "Veritiv Corporation",
    title: "Director of Logistics, Operations & Sales",
    dates: "Jun 2019 – Apr 2022",
    headline:
      "Grew and protected a $120M enterprise freight portfolio across industrial and CPG verticals.",
    bullets: [
      "Partnered with outside sales to support 30+ new enterprise account wins",
      "Priced and negotiated major transportation RFPs with Fortune-level customers across all modes",
      "Developed repeatable account growth frameworks delivering 94% retention",
      "Solely prepared the M&A data package used in the sale of the logistics division to Fitzmark",
    ],
  },
  {
    company: "Veritiv Corporation",
    title: "Regional Accounts Team Lead (Team of 3)",
    dates: "May 2018 – May 2019",
    headline: "300% volume growth on the company's largest account in one year.",
    bullets: [
      "Rebuilt a damaged relationship with the top enterprise account through consistent execution and communication",
      "Delivered weekly performance presentations to C-suite stakeholders",
    ],
  },
  {
    company: "Veritiv Corporation",
    title: "Carrier Sales Rep",
    dates: "Jun 2017 – May 2018",
    headline:
      "Started at the bottom. Cold called carriers, negotiated rates, and learned the business one load at a time.",
    bullets: [
      "Built foundational carrier relationships and procurement skills that anchored every subsequent role",
      "Negotiated spot rates and capacity commitments across multiple modes",
      "Promoted to Regional Accounts Team Lead within 12 months",
    ],
  },
];

export default function SalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 pt-20 md:pt-[120px] pb-16 md:pb-[120px] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-[42px] md:text-[68px] font-bold text-[#111111] leading-[1.05] tracking-[-0.02em] mb-5">
              Sales
            </h1>
            <p className="text-[16px] text-[#6B7280] leading-[1.7] max-w-2xl mb-6">
              A decade of closing deals, building books, and running revenue
              from zero.
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="#"
                className="text-[14px] font-medium text-[#1A56DB] underline underline-offset-2 hover:text-[#1644b8] transition-colors"
              >
                Download Resume (PDF)
              </a>
              <a
                href="https://linkedin.com/in/gabrieltomala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium text-[#1A56DB] underline underline-offset-2 hover:text-[#1644b8] transition-colors"
              >
                View on LinkedIn
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Career */}
      <section className="px-6 md:px-12 py-[64px] md:py-[120px] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-[42px] font-bold text-[#111111] mb-3 leading-tight">
              Experience
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-[1.7] mb-12">
              Case studies from the sales track.
            </p>
          </FadeIn>

          <div className="space-y-10">
            {roles.map((role) => (
              <FadeIn key={`${role.company}-${role.title}`}>
                <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8 hover:border-[#1A56DB] hover:shadow-md transition-all duration-200">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-1">
                    <span className="text-[18px] font-bold text-[#111111]">
                      {role.company}
                    </span>
                    <span className="text-[14px] text-[#6B7280] md:text-right shrink-0">
                      {role.dates}
                    </span>
                  </div>
                  <p className="text-[16px] font-medium text-[#6B7280] mb-4">
                    {role.title}
                  </p>
                  <p className="text-[20px] font-bold text-[#111111] mb-4 leading-snug">
                    {role.headline}
                  </p>
                  <ul className="space-y-2">
                    {role.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[15px] text-[#6B7280] leading-[1.7]"
                      >
                        <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-[#1A56DB]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-12 py-[64px] md:py-[120px]">
        <div className="max-w-[720px] mx-auto">
          <FadeIn>
            <h2 className="text-[42px] font-bold text-[#111111] mb-6 leading-tight">
              Sales Philosophy
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-[1.7] italic">
              Coming soon — a longer piece on how I think about sales, cold
              outreach, and building relationships that compound over time.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
