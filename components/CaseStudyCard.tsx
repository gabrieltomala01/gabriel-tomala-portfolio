import Link from "next/link";

interface CaseStudyCardProps {
  tag: string;
  title: string;
  description: string;
  href: string;
}

export default function CaseStudyCard({
  tag,
  title,
  description,
  href,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-[#E5E7EB] rounded-xl p-6 hover:border-[#1A56DB] hover:shadow-md transition-all duration-200"
    >
      <span className="inline-block text-[12px] font-semibold text-[#1A56DB] bg-[#EFF6FF] px-2.5 py-1 rounded-full mb-4">
        {tag}
      </span>
      <h3 className="text-[20px] font-semibold text-[#111111] mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-[14px] text-[#6B7280] leading-relaxed mb-4">
        {description}
      </p>
      <span className="text-[14px] font-medium text-[#1A56DB] group-hover:underline">
        View on Operations →
      </span>
    </Link>
  );
}
