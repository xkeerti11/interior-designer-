import React from "react";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";

export const StickyMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-surface/90 backdrop-blur-lg border-t border-border-subtle p-2.5 px-4 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-xl transition-all">
      <div className="flex items-center gap-2 max-w-sm mx-auto">
        {/* Quick Call */}
        <a
          href={`tel:${COMPANY.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-canvas border border-border-subtle text-ink font-semibold text-xs active:scale-[0.96] transition-transform shadow-xs touch-manipulation"
        >
          <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
          <span className="truncate">Call Studio</span>
        </a>

        {/* Quick WhatsApp */}
        <a
          href={formatWhatsAppUrl(
            COMPANY.phone,
            "Hello WALL & DECO, I would like to get a quote for my space in Prayagraj."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#25D366] text-white font-semibold text-xs active:scale-[0.96] transition-transform shadow-xs hover:brightness-105 touch-manipulation"
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Book Visit */}
        <a
          href="/contact-showroom"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-on-accent active:scale-[0.96] transition-transform shadow-xs shrink-0 hover:bg-accent-hover touch-manipulation"
          title="Book Site Visit"
          aria-label="Book Site Visit"
        >
          <Calendar className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

