import localFont from "next/font/local";

export const plusJakartaSans = localFont({
  src: [
    {
      path: "../../public/fonts/PlusJakartaSans_0.woff2",
      weight: "400 700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

export const instrumentSerif = localFont({
  src: [
    {
      path: "../../public/fonts/InstrumentSerif_0.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/InstrumentSerif_1.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Cormorant Garamond", "Georgia", "serif"],
});

