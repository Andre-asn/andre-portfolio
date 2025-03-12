import HomePage from "./home"
import About from "./about"
import Head from "next/head"
import Works from "./works"
import Contact from "./contact"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <Image
          src="/bg.gif"
          alt="background"
          fill
          className="object-cover brightness-65"
          priority
        />
      </div>
      <Head>
        <title>My Portfolio</title>
        <meta name='description' content='Made using Next.js & Tailwindcss' />
        <link rel='icon' href='icon.ico' />
      </Head>
      <HomePage />
      <About />
      <Works />
      <Contact />
    </div>
  )
}
