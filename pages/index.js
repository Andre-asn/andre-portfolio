import HomePage from "./home"
import About from "./about"
import Head from "next/head"
import Works from "./works"
import Contact from "./contact"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <img
          src="/bg.gif"
          alt="background"
          className="w-full h-full object-cover"
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
