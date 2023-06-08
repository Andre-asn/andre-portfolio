import { ChakraProvider } from "@chakra-ui/react";
import '@/styles/globals.css'
import Navbar from './navbar';

export default function App({ Component, pageProps }) {
  return (
  <>
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  </>
  );
}
