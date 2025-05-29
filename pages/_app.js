import { ChakraProvider } from "@chakra-ui/react";
import '@/styles/globals.css'
import Navbar from './navbar';
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function App({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen">
      {/* Blurred overlay */}
      <div className="fixed inset-0 z-0 bg-black/30 pointer-events-none" />
      {/* Main content */}
      <div className="relative z-10">
        <ChakraProvider>
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
        <SpeedInsights />
      </div>
    </div>
  );
}
