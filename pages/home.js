import React from "react";
import Image from "next/image"

const HomePage = () => {
    return (
        <div className="w-full flex justify-center">
            <div
                id="home"
                className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-20 bg-fixed bg-center bg-cover bg-image gap-x-8 mx-auto"
            >
                {/* Left: Text */}
                <div className="max-w-xl w-full flex flex-col justify-center items-start text-left space-y-6">
                    <h2 className="text-white text-3xl md:text-5xl font-outfit font-normal text-shadow">
                        Hey there, I am
                    </h2>
                    <h1 className="text-[#FCA311] text-5xl md:text-7xl py-2 font-outfit font-semibold text-shadow">
                        Andre Santiago
                    </h1>
                    <p className="text-[#E5E5E5] max-w-xl text-xl md:text-3xl py-2 font-outfit font-light text-shadow-sm">
                        Software Engineering Student from Fort Lee, New Jersey
                    </p>
                    <div className="flex flex-row gap-4 mt-4">
                        <form action="https://github.com/Andre-asn" target="_blank">
                            <button
                                type="submit"
                                className="bg-[#333] ring-white hover:ring-2 items-center justify-center mb-2 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-10 md:h-9 md:w-14"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </button>
                        </form>
                        <form action="https://www.linkedin.com/in/andre-santiago-neyra/" target="_blank">
                            <button
                                type="submit"
                                className="bg-[#0077b5] ring-white hover:ring-2 mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-10 md:h-9 md:w-14"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                {/* Right: Profile Image */}
                <div className="w-full flex justify-center items-center mt-4 md:mt-0">
                    <Image
                        src="/profile.png"
                        alt="Profile"
                        width={500}
                        height={500}
                        className="w-full max-w-xs md:w-[500px] md:h-[500px] rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage;
