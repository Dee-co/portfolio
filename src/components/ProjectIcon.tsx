import {
  Building2,
  CalendarClock,
  Code,
  CreditCard,
  Layers,
  Lock,
  MessageCircle,
  Printer,
  Smartphone,
  UtensilsCrossed,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Building2,
  CalendarClock,
  CreditCard,
  Layers,
  Lock,
  MessageCircle,
  Printer,
  Smartphone,
  UtensilsCrossed,
  Users,
  Zap,
};

export default function ProjectIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Code;
  return <Icon className={className} aria-hidden />;
}
