import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Credentials — Gabriel Tomala",
  description:
    "Education, certifications, and technical skills.",
};

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

export default function CredentialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 pt-20 md:pt-[120px] pb-16 md:pb-[120px] border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-[42px] md:text-[68px] font-bold text-[#111111] leading-[1.05] tracking-[-0.02em] mb-5">
              Credentials
            </h1>
            <p className="text-[16px] text-[#6B7280] leading-[1.7] max-w-2xl">
              Education, certifications, and the technical foundation underneath the work.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 py-[64px] md:py-[120px]">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
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
            <div className="flex flex-wrap gap-3 mb-12">
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
            <h3 className="text-[20px] font-semibold text-[#111111] mb-3">
              Technical Skills
            </h3>
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
