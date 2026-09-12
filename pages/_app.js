import { ChakraProvider } from "@chakra-ui/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Archivo } from "next/font/google";
import "@/styles/globals.css";

// Self-hosted by Next at build time, so there is no round trip to Google and
// no flash of fallback text. The wdth axis is what the display type relies on.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  weight: "variable",
  display: "swap",
  variable: "--font-archivo",
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div className={`${archivo.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
      <SpeedInsights />
    </ChakraProvider>
  );
}
