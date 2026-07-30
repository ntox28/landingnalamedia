import {
  FileImage,
  Sparkles,
  Tv,
  Layers,
  Stamp,
  Briefcase,
  Shirt,
  Award,
  Zap,
  Cpu,
  CheckCircle,
  Percent,
  Palette,
  HeartHandshake,
  MessageSquare,
  Users,
  UploadCloud,
  Printer,
  Truck,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Star,
  X,
  ExternalLink,
  Menu,
  Send,
  ShieldCheck,
  Check
} from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = "", size = 24 }: LucideIconProps) {
  switch (name) {
    case "FileImage":
      return <FileImage className={className} size={size} />;
    case "Sparkles":
      return <Sparkles className={className} size={size} />;
    case "Tv":
      return <Tv className={className} size={size} />;
    case "Layers":
      return <Layers className={className} size={size} />;
    case "Stamp":
      return <Stamp className={className} size={size} />;
    case "Briefcase":
      return <Briefcase className={className} size={size} />;
    case "Shirt":
      return <Shirt className={className} size={size} />;
    case "Award":
      return <Award className={className} size={size} />;
    case "Zap":
      return <Zap className={className} size={size} />;
    case "Cpu":
      return <Cpu className={className} size={size} />;
    case "CheckCircle":
      return <CheckCircle className={className} size={size} />;
    case "Percent":
      return <Percent className={className} size={size} />;
    case "Palette":
      return <Palette className={className} size={size} />;
    case "HeartHandshake":
      return <HeartHandshake className={className} size={size} />;
    case "MessageSquare":
      return <MessageSquare className={className} size={size} />;
    case "Users":
      return <Users className={className} size={size} />;
    case "UploadCloud":
      return <UploadCloud className={className} size={size} />;
    case "Printer":
      return <Printer className={className} size={size} />;
    case "Truck":
      return <Truck className={className} size={size} />;
    case "Phone":
      return <Phone className={className} size={size} />;
    case "Mail":
      return <Mail className={className} size={size} />;
    case "MapPin":
      return <MapPin className={className} size={size} />;
    case "Clock":
      return <Clock className={className} size={size} />;
    case "ArrowRight":
      return <ArrowRight className={className} size={size} />;
    case "ChevronRight":
      return <ChevronRight className={className} size={size} />;
    case "ChevronLeft":
      return <ChevronLeft className={className} size={size} />;
    case "Star":
      return <Star className={className} size={size} />;
    case "X":
      return <X className={className} size={size} />;
    case "ExternalLink":
      return <ExternalLink className={className} size={size} />;
    case "Menu":
      return <Menu className={className} size={size} />;
    case "Send":
      return <Send className={className} size={size} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} size={size} />;
    case "Check":
      return <Check className={className} size={size} />;
    default:
      return <Printer className={className} size={size} />;
  }
}
