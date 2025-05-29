import React from "react";
import { FadeInOnScroll } from "../lib/scrollAnimation.jsx"

const Works = () => {
    return (
        <div id="works" className="overflow-hidden min-h-screen flex flex-col justify-center align-middle items-center px-4 py-16">
            <FadeInOnScroll animation="fade-in-up">
                <h1 className="mt-32 text-4xl md:text-6xl pb-10 font-outfit font-normal text-white text-center text-shadow-lg">Some of my <span className="text-[#FCA311] font-semibold">work</span></h1>
            </FadeInOnScroll>
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {/* Anime Axis */}
                <div className="flex flex-col items-center text-center gap-4 bg-[#14213D] rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-[#FCA311] bg-white/10 backdrop-blur-sm rounded w-full py-3 mb-4 super-shadow">Anime Axis</h2>
                    <p className="text-lg md:text-xl text-[#E5E5E5]">
                        First biggest project I ever created. It was made during my time in college for a final in a database class. Currently in the process of transferring the database to MongoDB since I had originally made it in a school-based database that I no longer have access to, however you may view the source code on Github. Keeping all the work original, it is not mobile responsive.
                    </p>
                    <form action="https://github.com/Andre-asn/ecommerce-proj" target="_blank">
                        <button type="submit" className="bg-transparent border border-white text-white text-lg font-bold px-6 py-3 rounded shadow hover:bg-[#FCA311] hover:text-[#14213D] transition">
                            View
                        </button>
                    </form>
                </div>
                {/* Nutrition AI */}
                <div className="flex flex-col items-center text-center gap-4 bg-[#14213D] rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-[#FCA311] bg-white/10 backdrop-blur-sm rounded w-full py-3 mb-4 super-shadow">Nutrition AI</h2>
                    <p className="text-lg md:text-xl text-[#E5E5E5]">
                        Group project in my Agile Methods class. Working with a group of talented students to create an app that recognizes pictures of food and returns nutritional facts, along with added features like profiles, friends list, and more. Tech stack includes React + Vite, Node.js, Gemini API, and NeDB. Project will continue to be updated as the semester goes along.
                    </p>
                    <form action="https://nutrition-ai-puce.vercel.app" target="_blank">
                        <button type="submit" className="bg-transparent border border-white text-white text-lg font-bold px-6 py-3 rounded shadow hover:bg-[#FCA311] hover:text-[#14213D] transition">
                            View
                        </button>
                    </form>
                </div>
                {/* Stroopy */}
                <div className="flex flex-col items-center text-center gap-4 bg-[#14213D] rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-[#FCA311] bg-white/10 backdrop-blur-sm rounded w-full py-3 mb-4 super-shadow">Stroopy</h2>
                    <p className="text-lg md:text-xl text-[#E5E5E5]">
                        A real-time 1v1 multiplayer game (and singleplayer) based on the Stroop Test, an experiment that challenges players to quickly and accurately respond to color-word matching tasks. The game tests players cognitive processing speed and ability to overcome cognitive interference.
                    </p>
                    <form action="https://stroopy.vercel.app" target="_blank">
                        <button type="submit" className="bg-transparent border border-white text-white text-lg font-bold px-6 py-3 rounded shadow hover:bg-[#FCA311] hover:text-[#14213D] transition">
                            View
                        </button>
                    </form>
                </div>
                {/* Portion */}
                <div className="flex flex-col items-center text-center gap-4 bg-[#14213D] rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-[#FCA311] bg-white/10 backdrop-blur-sm rounded w-full py-3 mb-4 super-shadow">Portion</h2>
                    <p className="text-lg md:text-xl text-[#E5E5E5]">
                        Portion is a responsive web application designed to simplify the process of splitting bills among friends. Built with a modern tech stack including Vite + React, Supabase, Tailwind, and DaisyUI, this application streamlines the often complex task of fairly dividing shared costs.
                    </p>
                    <form action="" target="_blank" className="disabled">
                        <button type="submit" className="bg-transparent border border-white text-white text-lg font-bold px-6 py-3 rounded shadow hover:bg-[#d62828] hover:text-[#14213D] transition">
                            Under Dev
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Works;