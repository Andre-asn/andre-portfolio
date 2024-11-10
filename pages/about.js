import React from "react"
import { FadeInOnScroll } from "../lib/scrollAnimation.jsx"

const About = () => {
    return ( 
      <div id="about" class="container mx-auto">
        <FadeInOnScroll>
          <div class="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            <div class="max-h-96 md:h-screen">
              <img class="w-screen h-screen object-cover object-top" src="test2.jpg" alt=""/>
            </div>
            <div class="flex backdrop-blur-[1rem] bg-white/30 p-10">
              <div class="mb-auto mt-auto max-w-lg">
              <h2 className="text-6xl font-outfit font-normal text-white">A little about <span className="text-[#FCA311] font-semibold">me</span></h2>
              <p class="break-words mb-3 text-2xl pt-8 text-black md:text-[#E5E5E5]">
                I&apos;m a student at Stevens Institute of Tech, and I&apos;ll receive a Masters of Science in Software Engineering in 2025. I was born and raised in Queens before relocating to New Jersey in 2013.
                I went to Fort Lee High School, where I took an introductory class that exposed me to Visual Basic and helped me find my passion of coding/development.
                Since then, I&apos;ve continued to explore computer science by taking classes about OOP, learning system design, and expanding my knowledge of databases.
                I like to spend my free time wandering the city, eating new things, and catching up with loved ones. I&apos;m eager to find out where my career takes me and look forward to all the opportunities that lie ahead.</p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    )
}

export default About;