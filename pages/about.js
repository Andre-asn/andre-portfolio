import React from "react"
import { FadeInOnScroll } from "../lib/scrollAnimation.jsx"
import Image from 'next/image'

const About = () => {
    return ( 
        <div id="about" className="container mx-auto px-4">
            <FadeInOnScroll>
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-0">
                    <div className="h-[300px] md:h-screen">
                        <Image
                          src="/test2.jpg"
                          alt="Profile"
                          width={600}
                          height={400}
                          className="w-full h-full object-cover object-top rounded-t-lg rounded-b-none md:rounded-l-lg md:rounded-tr-none"
                        />
                    </div>
                    <div className="flex backdrop-blur-[1rem] bg-white/30 p-6 md:p-10 -mt-8 md:mt-0 rounded-b-lg rounded-t-none md:rounded-r-lg md:rounded-bl-none">
                        <div className="mb-auto mt-auto max-w-lg">
                            <h2 className="text-4xl md:text-6xl font-outfit font-normal text-white text-shadow">A little about <span className="text-[#FCA311] font-semibold">me</span></h2>
                            <p className="break-words mb-3 text-lg md:text-2xl pt-8 text-white md:text-[#E5E5E5] text-shadow-sm">
                            Originally from Queens, I moved to New Jersey in 2013 and have called it home ever since. I&apos;m always curious about how things work and enjoy problem-solving – whether 
                            it&apos;s debugging code or figuring out the most efficient route through the city. Outside of tech, I love exploring the NYC area, discovering new restaurants, and spending 
                            time with family and friends. When I&apos;m not at my computer, you&apos;ll probably find me wandering around Fort Lee or planning my next food adventure in Manhattan.
                            </p>
                        </div>
                    </div>
                </div>
            </FadeInOnScroll>
        </div>
    )
}

export default About;