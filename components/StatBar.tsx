const stats = [
  { value: "$120M+", label: "Largest Portfolio Managed" },
  { value: "$0 → $2.8M", label: "Monthly Freight Revenue Built" },
  { value: "100+", label: "Accounts Managed" },
  { value: "8 Years", label: "in Operations & Sales" },
];

export default function StatBar() {
  return (
    <div className="flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB] border border-[#E5E7EB] rounded-xl bg-white overflow-hidden">
      {stats.map(({ value, label }) => (
        <div
          key={label}
          className="flex-1 px-6 py-5 text-center w-full sm:w-auto"
        >
          <div className="text-[22px] font-bold text-[#111111] leading-tight">
            {value}
          </div>
          <div className="text-[13px] text-[#6B7280] mt-0.5">{label}</div>
        </div>
      ))}
    </div>
  );
}
