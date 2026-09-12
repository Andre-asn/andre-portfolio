import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import PanelDeck from "@/components/PanelDeck";
import { profile } from "@/data/content";

export default function Home() {
  const title = `${profile.name}, ${profile.role}`;
  const description =
    "Software engineer finishing an MS at Stevens Institute of Technology. Previously at Airbnb and Juno Health.";

  // Order here is the order of the stops on the rail.
  const panels = [
    { id: "home", node: <Hero /> },
    { id: "about", node: <About /> },
    { id: "experience", node: <Experience /> },
    { id: "work", node: <Work /> },
    { id: "contact", node: <Contact /> },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <PanelDeck panels={panels} />
    </>
  );
}
