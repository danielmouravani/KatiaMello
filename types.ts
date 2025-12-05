import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Specialty {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

export interface Doctor {
  name: string;
  specialty: string;
  image: string;
  crm?: string;
}

export interface Testimonial {
  name: string;
  role?: string;
  content: string;
  rating: number;
  image?: string;
}

export interface Stat {
  value: number;
  label: string;
  description: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Lens {
  title: string;
  description: string;
  features: string[];
}

export interface Exam {
  title: string;
  description: string;
  category?: string;
}