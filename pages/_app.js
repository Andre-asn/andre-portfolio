import { ChakraProvider } from "@chakra-ui/react";
import '@/styles/globals.css'
import Navbar from './navbar';
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function App({ Component, pageProps }) {
  return (
  <>
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
    <SpeedInsights />
  </>
  );
}
