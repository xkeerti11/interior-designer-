"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, MessageSquare, ArrowUpRight } from "lucide-react";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden flex flex-col transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-ink/60 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`relative z-10 w-full max-w-[85vw] sm:max-w-sm ml-auto h-full bg-surface shadow-2xl flex flex-col justify-between p-6 overflow-y-auto transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
            <div>
              <span className="font-sans font-bold tracking-wider text-xl text-ink">
                WALL & DECO
              </span>
              <p className="text-xs text-muted font-medium mt-0.5">
                Prayagraj Studio & Materials
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-ink hover:bg-black/5 rounded-full transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col py-6 space-y-1">
            {COMPANY.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-canvas text-accent font-semibold"
                      : "text-ink hover:bg-canvas"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer CTAs */}
        <div className="pt-6 border-t border-border-subtle space-y-3">
          <Button
            href="/contact-showroom"
            variant="navbar"
            size="md"
            className="w-full justify-center"
            onClick={onClose}
          >
            Book Showroom Visit
          </Button>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-full bg-canvas border border-border-subtle text-xs font-medium text-ink hover:bg-[#EAE3D2] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>Call Studio</span>
            </a>
            <a
              href={formatWhatsAppUrl(
                COMPANY.phone,
                "Hello WALL & DECO, I would like to enquire about interior design and materials."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-medium text-[#1E7E34] hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="pt-3 text-center">
            <p className="text-[11px] text-muted leading-relaxed">
              Showroom at Chowk, Garhi Sarai, Prayagraj.
              <br />
              Open daily until 10:00 PM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

