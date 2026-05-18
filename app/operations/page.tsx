import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import PortfolioTools from "@/components/PortfolioTools";

const roles = [
  {
    company: "Schupan & Sons",
    title: "Logistics Specialist",
    dates: "Sep 2025 – Mar 2026",
    headline:
      "Managing 180+ weekly truckloads across one of the largest aluminum scrap networks in the US.",
    bullets: [
      "Managed inbound and outbound lane operations across 60 suppliers, 3 warehouses, and 6 mills including Arconic facilities",
      "Primary escalation point for daily exceptions — missed pickups, dropped loads, trailer shortages",
      "Sourced and negotiated carrier contracts across flatbed, dry van, and open top modes",
      "Built carrier scorecards, spend reporting, and quarterly budget tracking from scratch",
    ],
  },
  {
    company: "Reibus International",
    title: "Director of Logistics, Sales & Operations",
    dates: "Apr 2022 – Dec 2023",
    headline:
      "Built a logistics operation from zero — $17K to $2.8M in monthly freight revenue in 18 months.",
    bullets: [
      "Designed carrier sourcing strategy, RFP processes, and lane management frameworks supporting 100+ daily shipments",
      "Recruited, hired, and led a team of 12 across sales, operations, and account management",
      "Built Salesforce CRM workflows, forecasting models, and executive dashboards for leadership reporting",
      "Coordinated distributed teams across Mexico, Europe, and the Middle East",
      "Prepared the financial and operational data package used by M&A advisors in the division's acquisition",
    ],
  },
  {
    company: "Veritiv Corporation",
    title: "Supervisor, National Accounts",
    dates: "May 2019 – Apr 2022",
    headline:
      "Managed a $120M freight portfolio across 120 enterprise accounts and led company-wide carrier RFPs.",
    bullets: [
      "Owned carrier sourcing, rate negotiation, and TMS implementation across all modes",
      "Led multimodal freight RFPs for the entire company — set the standard for bid quality and carrier evaluation",
      "Built reporting and financial tracking systems that became the company benchmark",
      "94% portfolio retention across Fortune-level accounts",
      "Led company-wide freight RFPs across flatbed, dry van, and open top",
      "Built transportation spend reporting delivered to executive leadership",
    ],
  },
  {
    company: "Veritiv Corporation",
    title: "Regional Accounts Team Lead (Team of 3)",
    dates: "May 2018 – May 2019",
    headline:
      "Rebuilt the company's most important customer relationship — 300% volume growth in one year.",
    bullets: [
      "Managed the 3 largest enterprise accounts as primary logistics contact",
      "Built data analysis and client-facing reporting frameworks adopted company-wide",
    ],
  },
];

const certs = [
  { institution: "Rutgers University", course: "Supply Chain Operations", grade: "96.58%" },
  { institution: "Rutgers University", course: "Supply Chain Planning", grade: "95.50%" },
  { institution: "Rutgers University", course: "Supply Chain Sourcing", grade: "89.83%" },
  { institution: "PwC", course: "Problem Solving with Excel", grade: "98.66%" },
  { institution: "PwC", course: "Data-driven Decision Making", grade: "91.10%" },
  { institution: "Google", course: "Foundations of Project Management", grade: "91.59%" },
  { institution: "UC Davis", course: "Introduction to Google SEO", grade: "96.25%" },
];

const inProgress = [
  { course: "Salesforce Administrator Certification", status: "In Progress" },
  { course: "Google Data Analytics Certificate", status: "Planned" },
];

export default function OperationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 pt-20 md:pt-[120px] pb-16 md:pb-[120px] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-[42px] md:text-[68px] font-bold text-[#111111] leading-[1.05] tracking-[-0.02em] mb-5">
              Operations
            </h1>
            <p className="text-[16px] text-[#6B7280] leading-[1.7] max-w-2xl mb-6">
              Freight networks, carrier systems, logistics operations,
              warehousing coordination, and the data layer underneath all of it.
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

      {/* Portfolio Tools */}
      <section className="px-6 md:px-12 py-[64px] md:py-[120px] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-[42px] font-bold text-[#111111] mb-3 leading-tight">
              Portfolio Tools
            </h2>
            <p className="text-[16px] text-[#6B7280] leading-[1.7] mb-10 max-w-2xl">
              Built from real operational experience. Fully functional Excel
              files available for download. Interactive web versions in
              development.
            </p>
            <PortfolioTools />
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
              Case studies from the operations track.
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
                      <li key={i} className="flex gap-3 text-[15px] text-[#6B7280] leading-[1.7]">
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

      {/* Credentials */}
      <section
        id="credentials"
        className="px-6 md:px-12 py-[64px] md:py-[120px]"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-[42px] font-bold text-[#111111] mb-8 leading-tight">
              Education &amp; Credentials
            </h2>

            {/* Education */}
            <div className="mb-10 p-6 bg-white border border-[#E5E7EB] rounded-xl">
              <p className="text-[16px] font-medium text-[#111111] leading-[1.7]">
                B.S. Finance &amp; B.S. Supply Chain Management (Dual Degree) —{" "}
                <span className="text-[#6B7280]">
                  Appalachian State University, 2017
                </span>
              </p>
            </div>

            {/* Coursera certs */}
            <h3 className="text-[20px] font-semibold text-[#111111] mb-5">
              Coursera Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {certs.map((cert) => (
                <div
                  key={cert.course}
                  className="bg-white border border-[#E5E7EB] rounded-xl p-5 hover:border-[#1A56DB] hover:shadow-md transition-all duration-200"
                >
                  <p className="text-[13px] font-medium text-[#6B7280] mb-1">
                    {cert.institution}
                  </p>
                  <p className="text-[16px] font-semibold text-[#111111] mb-2 leading-snug">
                    {cert.course}
                  </p>
                  <p className="text-[14px] font-bold text-[#1A56DB]">
                    {cert.grade}
                  </p>
                </div>
              ))}
            </div>

            {/* In Progress */}
            <h3 className="text-[20px] font-semibold text-[#111111] mb-4">
              In Progress
            </h3>
            <div className="flex flex-wrap gap-3 mb-10">
              {inProgress.map((item) => (
                <div
                  key={item.course}
                  className="bg-white border border-[#E5E7EB] rounded-xl px-5 py-3 flex items-center gap-3"
                >
                  <span
                    className={`w-2 h-2 rounded-full animate-pulse ${
                      item.status === "In Progress"
                        ? "bg-[#1A56DB]"
                        : "bg-[#9CA3AF]"
                    }`}
                  />
                  <span className="text-[15px] font-medium text-[#111111]">
                    {item.course}
                  </span>
                  <span className="text-[13px] text-[#6B7280]">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <p className="text-[15px] text-[#6B7280] leading-[1.7]">
              NetSuite (ERP) · Manhattan WMS · Salesforce CRM · Excel
              (Advanced) · Power BI · SQL · Python · AI Tools
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
