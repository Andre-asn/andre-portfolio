import React from "react"
import Image from "next/legacy/image"
import { FadeInSides } from "../lib/scrollAnimation.jsx"

const About = () => {
    return (
        <div id="about" className="flex min-h-screen justify-center items-center my-20">
            <figure className="hidden md:flex-col items-center overflow-hidden">
                <FadeInSides direction="left">
                <Image className="" src="/meself.jpg" alt="Self Portrait" width={1007.6} height={756}/> 
                </FadeInSides>
                <FadeInSides direction="right">
                <div className="pt-6 md:p-8 md:text-left p-10 shadow-md max-w-[790px] min-h-[756px] backdrop-blur-[1rem] bg-white/30"> 
                    <h2 className="text-6xl font-outfit font-normal text-center text-white">A little about <span className="text-[#FCA311] font-semibold">me</span></h2>
                    <p className="text-[#E5E5E5] text-2xl pt-8">I&apos;m a student at Montclair State University, and I&apos;ll receive a Bachelor of Science in Computer Science in 2023. I was born and raised in Queens before relocating to New Jersey in 2013.
                    I went to Fort Lee High School, where I took an introductory class that exposed me to Visual Basic and helped me find my love of coding.
                    Since then, I&apos;ve continued to explore my passion in computer science by taking classes in a variety of programming languages.
                    I like to spend my free time traveling, eating new things, and catching up with loved ones. I&apos;m eager to find out where my career takes me and look forward to all the opportunities that lie ahead.</p>
                </div>
                </FadeInSides>
            </figure>
            <figure className="block md:flex items-center rounded-xl overflow-hidden">
                <FadeInSides direction="left">
                <Image className="" src="/meself.jpg" alt="Self Portrait" width={1007.6} height={756}/> 
                </FadeInSides>
                <FadeInSides direction="right">
                <div className="pt-6 md:p-8 md:text-left p-10 shadow-md max-w-[790px] min-h-[756px] backdrop-blur-[1rem] bg-white/30"> 
                    <h2 className="text-6xl font-outfit font-normal text-center text-white">A little about <span className="text-[#FCA311] font-semibold">me</span></h2>
                    <p className="text-[#E5E5E5] text-2xl pt-8">I&apos;m a student at Montclair State University, and I&apos;ll receive a Bachelor of Science in Computer Science in 2023. I was born and raised in Queens before relocating to New Jersey in 2013.
                    I went to Fort Lee High School, where I took an introductory class that exposed me to Visual Basic and helped me find my love of coding.
                    Since then, I&apos;ve continued to explore my passion in computer science by taking classes in a variety of programming languages.
                    I like to spend my free time traveling, eating new things, and catching up with loved ones. I&apos;m eager to find out where my career takes me and look forward to all the opportunities that lie ahead.</p>
                </div>
                </FadeInSides>
            </figure>
        </div>
    )
}

export default About;