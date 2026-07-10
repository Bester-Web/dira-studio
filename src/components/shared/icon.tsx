import {
  Zap,
  Wrench,
  Sun,
  Home,
  Wind,
  Shield,
  Hammer,
  Trees,
  Sparkles,
  Axe,
  Paintbrush,
  Warehouse,
  Waves,
  Scale,
  Stethoscope,
  Smile,
  Calculator,
  TrendingUp,
  HardHat,
  Phone,
  MessageCircle,
  FileText,
  Users,
  Globe,
  RefreshCcw,
  Rocket,
  Server,
  LifeBuoy,
  Search,
  MapPin,
  Bot,
  PenTool,
  Megaphone,
  Gauge,
  Target,
  Handshake,
  Clock,
  Award,
  LayoutGrid,
  Check,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/types";

/**
 * Maps content-layer icon names to Lucide components.
 * Keeps the content layer free of React imports while
 * whitelisting icons so bundle size stays controlled.
 */
const iconMap: Record<IconName, LucideIcon> = {
  zap: Zap,
  wrench: Wrench,
  sun: Sun,
  home: Home,
  wind: Wind,
  shield: Shield,
  hammer: Hammer,
  trees: Trees,
  sparkles: Sparkles,
  axe: Axe,
  paintbrush: Paintbrush,
  warehouse: Warehouse,
  waves: Waves,
  scale: Scale,
  stethoscope: Stethoscope,
  smile: Smile,
  calculator: Calculator,
  "trending-up": TrendingUp,
  "hard-hat": HardHat,
  phone: Phone,
  "message-circle": MessageCircle,
  "file-text": FileText,
  users: Users,
  globe: Globe,
  "refresh-ccw": RefreshCcw,
  rocket: Rocket,
  server: Server,
  "life-buoy": LifeBuoy,
  search: Search,
  "map-pin": MapPin,
  bot: Bot,
  "pen-tool": PenTool,
  megaphone: Megaphone,
  gauge: Gauge,
  target: Target,
  handshake: Handshake,
  clock: Clock,
  award: Award,
  layout: LayoutGrid,
  check: Check,
};

interface IconProps {
  name: IconName;
  className?: string;
  style?: React.CSSProperties;
  "aria-hidden"?: boolean;
}

export function Icon({ name, className, ...props }: IconProps) {
  const LucideComponent = iconMap[name];
  return <LucideComponent className={className} aria-hidden {...props} />;
}
