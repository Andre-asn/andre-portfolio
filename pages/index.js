import HomePage from "./home"
import About from "./about"
import Head from "next/head"
import Works from "./works"
import Contact from "./contact"

export default function Home() {
  return (
    <div className="h-auto bg-fixed bg-center bg-cover sticky bg-image">
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
