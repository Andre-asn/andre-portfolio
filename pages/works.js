import React from "react";
import { FadeInOnScroll } from "../lib/scrollAnimation.jsx"

const Works = () => {
    return (
        <div id="works" className="overflow-hidden min-h-screen flex flex-col justify-center align-middle items-center px-4 py-16">
            <FadeInOnScroll>
                <h1 className="mt-32 text-4xl md:text-6xl pb-10 font-outfit font-normal text-white text-center text-shadow-lg">Some of my <span className="text-[#FCA311] font-semibold">work</span></h1>
                <div className="overflow-x-auto w-full">
                    <div className="flex flex-col md:flex-row gap-4 items-stretch min-w-max px-4">
                        <div className="bg-white/30 p-6 rounded-md shadow-md flex flex-col items-center w-[300px] md:w-[400px] h-[500px]">
                            <h2 className="shadow-xl py-4 text-2xl text-white bg-[#14213D] w-full text-center mb-4 text-shadow">Anime Axis</h2>
                            <p className="text-lg md:text-xl break-words text-[#E5E5E5] text-center flex-grow overflow-y-auto text-shadow-sm">
                                First biggest project I ever created. It was made during my time in college for a final in a database class. Currently in the process of transferring the database to MongoDB since I had originally made it in a school-based database that I no longer have access to, however you may view the source code on Github. Keeping all the work original, it is not mobile responsive.
                            </p>
                            <div className="mt-auto flex justify-center">
                                <form action="https://github.com/Andre-asn/ecommerce-proj" target="_blank" className="shadow-lg ring-white ring-1 hover:bg-[#FCA311] transition ease-in-out text-white text-lg font-bold px-6 py-3 rounded text-shadow">
                                    <button type="submit">
                                        View
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="bg-white/30 p-6 rounded-md shadow-md flex flex-col items-center w-[300px] md:w-[400px] h-[500px]">
                            <h2 className="shadow-xl py-4 text-2xl text-white bg-[#14213D] w-full text-center mb-4 text-shadow">Nutrition AI</h2>
                            <p className="text-lg md:text-xl break-words text-[#E5E5E5] text-center flex-grow overflow-y-auto text-shadow-sm">
                                Current group project in my Agile Methods class. Working with a group of talented students to create an app that recognizes pictures of food and returns nutritional facts, along with added features like profiles, friends list, and more. Tech stack includes React + Vite, Node.js, Gemini API, and NeDB. Project will continue to be updated as the semester goes along.
                            </p>
                            <div className="mt-auto flex justify-center">
                                <form action="https://github.com/danzam284/NutritionAI" target="_blank" className="shadow-lg ring-white ring-1 hover:bg-[#FCA311] transition ease-in-out text-white text-lg font-bold px-6 py-3 rounded text-shadow">
                                    <button type="submit">
                                        View
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="bg-white/30 p-6 rounded-md shadow-md flex flex-col items-center w-[300px] md:w-[400px] h-[500px]">
                            <h2 className="shadow-xl py-4 text-2xl text-white bg-[#14213D] w-full text-center mb-4 text-shadow">Stroopy</h2>
                            <p className="text-lg md:text-xl break-words text-[#E5E5E5] text-center flex-grow overflow-y-auto text-shadow-sm">
                                A real-time 1v1 multiplayer game (and singleplayer) based on the Stroop Test, an experiment that challenges players to quickly and accurately respond to color-word matching tasks. The game tests players cognitive processing speed and ability to overcome cognitive interference.
                            </p>
                            <div className="mt-auto flex justify-center">
                                <form action="https://stroopy.vercel.app" target="_blank" className="shadow-lg ring-white ring-1 hover:bg-[#FCA311] transition ease-in-out text-white text-lg font-bold px-6 py-3 rounded text-shadow">
                                    <button type="submit">
                                        View
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="bg-white/30 p-6 rounded-md shadow-md flex flex-col items-center w-[300px] md:w-[400px] h-[500px]">
                            <h2 className="shadow-xl py-4 text-2xl text-white bg-[#14213D] w-full text-center mb-4 text-shadow">Portion</h2>
                            <p className="text-lg md:text-xl break-words text-[#E5E5E5] text-center flex-grow overflow-y-auto text-shadow-sm">
                                Portion is a responsive web application designed to simplify the process of splitting bills among friends. Built with a modern tech stack including Vite + React, Supabase, Tailwind, and DaisyUI, this application streamlines the often complex task of fairly dividing shared costs.
                            </p>
                            <div className="mt-auto flex justify-center">
                                <form action="" target="_blank" className="disabled shadow-lg ring-white ring-1 hover:bg-[#d62828] transition ease-in-out text-white text-lg font-bold px-6 py-3 rounded text-shadow">
                                    <button type="submit">
                                        Under Dev
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInOnScroll>
        </div>
    );
}

export default Works;