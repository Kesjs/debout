import AnimatedSection from "./AnimatedSection";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <AnimatedSection className={centered ? "text-center" : ""}>
      {label && (
        <span
          className={`inline-block text-sm font-semibold tracking-widest uppercase mb-3 ${
            light ? "text-[#f5a623]" : "text-[#f5a623]"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-[#1a5c2a]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-[#4a4a4a]"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-[#f5a623] ${
          centered ? "mx-auto" : ""
        }`}
      />
    </AnimatedSection>
  );
}
