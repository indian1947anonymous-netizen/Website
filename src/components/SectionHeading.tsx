import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  action?: ReactNode;
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={`flex flex-col gap-7 ${centered ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between"}`}
    >
      <div className={centered ? "max-w-3xl" : "max-w-3xl"}>
        <span className={`eyebrow ${light ? "text-gold before:bg-white/60" : ""}`}>{eyebrow}</span>
        <h2 className={`heading-lg mt-5 ${light ? "text-white" : "text-charcoal"}`}>{title}</h2>
        {description ? (
          <p className={`body-copy mt-5 max-w-2xl ${light ? "!text-white/72" : ""} ${centered ? "mx-auto" : ""}`}>
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}
