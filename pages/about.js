import React from "react"
import { TypeAnimation } from "react-type-animation";
import { FadeInOnScroll } from "../lib/scrollAnimation.jsx"

const About = () => {
    return ( 
        <div id="about" className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
            <div className="relative max-w-4xl w-full flex flex-col items-center">
                {/* Card */}
                <FadeInOnScroll animation="fade-in-scale">
                <div
                  className="
                    relative z-10
                    bg-white/30
                    rounded-lg
                    shadow-lg
                    mt-6 md:mt-0
                    pt-12 md:pt-16
                    px-4 md:px-16
                    pb-10
                    w-full
                    flex flex-col items-center
                  "
                  style={{ backdropFilter: "blur(2px)" }}
                >
                    <FadeInOnScroll animation="fade-in-up">
                      <h2 className="text-4xl md:text-6xl font-outfit font-normal text-white text-shadow text-center">
                          A little about <span className="text-[#FCA311] font-semibold">me</span>
                      </h2>
                    </FadeInOnScroll>
                    <p className="break-words mb-3 text-lg md:text-2xl pt-8 text-white md:text-[#E5E5E5] text-shadow-sm text-center">
                        I&apos;m a software engineering graduate student at Stevens Institute of Technology, expected to graduate in 2026, currently gaining hands-on experience as a Software Engineering Intern at Juno Health. Originally from Queens, I moved to New Jersey in 2013 and have called it home ever since. My experience spans full-stack development with React, TypeScript, Node.js, and modern databases – I&apos;ve built everything from AI-powered platforms to real-time multiplayer games. I&apos;m also a Graduate Research Assistant, teaching data engineering concepts to fellow students, which has deepened my understanding of how to break down complex problems. Outside of tech, I love exploring the NYC area, discovering new restaurants, and spending time with family and friends. I&apos;m always curious about how things work and enjoy problem-solving – whether it&apos;s debugging code or figuring out the most efficient route through the city. When I&apos;m not at my computer, you&apos;ll probably find me wandering around Fort Lee or planning my next food adventure in Manhattan. I love on tackling complex technical challenges and am always eager to 
                        <TypeAnimation
                            sequence={[
                                ' build',
                                3000,
                                ' innovate',
                                3000,
                                ' create',
                                3000,
                            ]}
                            wrapper="span"
                            speed={300}
                            className="text-[#FCA311]"
                            repeat={Infinity}
                        />, so please feel free to explore my portfolio and reach out if you want to chat!
                    </p>
                </div>
                </FadeInOnScroll>
            </div>
        </div>
    )
}

export default About;