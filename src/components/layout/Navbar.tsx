"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Sparkles } from "lucide-react";
import { COMPANY } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-canvas/90 backdrop-blur-md shadow-sm border-b border-border-subtle py-3.5"
            : "bg-canvas py-5 border-b border-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-bold tracking-wider text-xl sm:text-2xl text-ink">
                  WALL & DECO
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent mb-0.5 inline-block" />
              </div>
              <span className="text-[10px] tracking-widest uppercase text-muted font-medium transition-colors group-hover:text-ink">
                Prayagraj Studio
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {COMPANY.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-[13.5px] font-medium transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${
                      isActive ? "text-ink font-semibold" : "text-muted hover:text-ink"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="hidden xl:inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink font-medium px-3 py-1.5 rounded-full hover:bg-black/5 transition-colors"
                title="Call showroom"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>{COMPANY.phone}</span>
              </a>

              <Button
                href="/contact-showroom"
                variant="navbar"
                size="sm"
                className="hidden sm:inline-flex"
                icon={<Sparkles className="w-3.5 h-3.5 text-amber-300" />}
              >
                Book Site Visit
              </Button>

              {/* Mobile Menu Trigger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -mr-1.5 text-ink hover:bg-black/5 rounded-full transition-colors lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

