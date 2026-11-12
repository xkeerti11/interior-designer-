import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppUrl(phone: string, text: string) {
  const cleanPhone = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

