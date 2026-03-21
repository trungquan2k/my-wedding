import ornament from "@/assets/ornament-divider.png";

const OrnamentDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex justify-center ${className}`}>
    <img src={ornament} alt="" className="w-48 md:w-64 opacity-60" aria-hidden />
  </div>
);

export default OrnamentDivider;
