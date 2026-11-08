import {
  AirVent,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  NotebookPen,
  ShieldCheck,
  UserRoundCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import type { FacilityIcon as FacilityIconName } from "@/lib/site-data";

const icons: Record<FacilityIconName, LucideIcon> = {
  air: AirVent,
  faculty: GraduationCap,
  mentor: UserRoundCheck,
  class: UsersRound,
  care: HeartHandshake,
  exam: ClipboardCheck,
  worksheet: NotebookPen,
  security: ShieldCheck,
};

export function FacilityIcon({
  name,
  className = "h-6 w-6",
}: {
  name: FacilityIconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
