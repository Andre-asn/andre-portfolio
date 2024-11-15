import React from "react";
import { GiMicrophone } from "react-icons/gi"
import { FadeInOnScroll } from "../lib/scrollAnimation.jsx"

const Works = () => {
    return (
<div id="works" className="overflow-hidden min-h-screen flex flex-col justify-center align-middle items-center">
<FadeInOnScroll>
  <h1 class="mt-32 text-6xl pb-10 font-outfit font-normal text-white text-center">Some of my <span className="text-[#FCA311] font-semibold">work</span></h1>
  <div class="overflow-hidden flex flex-col md:flex-row gap-4 items-center">
    <div class="backdrop-blur-[1rem] bg-white/30 p-6 rounded-md shadow-md flex flex-col items-center max-w-[400px]">
      <h2 class="shadow-xl py-4 text-2xl text-white bg-[#14213D] w-full text-center mb-4">Anime Figures eCommerce</h2>
      <p class="text-xl break-words text-[#E5E5E5] text-center">
        First biggest project I ever created. It was made during my time in college for a final in a database class. Currently in the process of transferring the database to MongoDB since I had originally made it in a school-based database that I no longer have access to, however you may view the source code on Github. Keeping all the work original, it is not mobile responsive.
      </p>
      <form action="https://github.com/Andre-asn/ecommerce-proj" target="_blank">
        <button type="submit" className="shadow-lg ring-white ring-1 hover:bg-[#FCA311] transition ease-in-out text-white text-lg font-bold mt-6 px-6 py-3 rounded">
          View
        </button>
      </form>
    </div>
    <div class="backdrop-blur-[1rem] bg-white/30 p-6 rounded-md shadow-md flex flex-col items-center max-w-[400px]">
      <h2 class="shadow-xl py-4 text-2xl text-white bg-[#14213D] w-full text-center mb-4">Mock Karaoke Site</h2>
      <p class="text-xl break-words text-[#E5E5E5] text-center">
        I created a website as a personal project for a fictional karaoke spot that a friend dreamed of owning in the future. The website features engaging content and a modern design that immerses the user in the experience of a karaoke location. Through this project, I improved my web development skills in design, layout, and user experience.
      </p>
      <form action="https://karaokemock.vercel.app/" target="_blank">
        <button type="submit" className="shadow-lg ring-white ring-1 hover:bg-[#FCA311] transition ease-in-out text-white text-lg font-bold mt-6 px-6 py-3 rounded">
          View
        </button>
      </form>
    </div>
    <div class="backdrop-blur-[1rem] bg-white/30 p-6 rounded-md shadow-md flex flex-col items-center max-w-[400px]">
      <h2 class="shadow-xl py-4 text-2xl text-white bg-[#14213D] w-full text-center mb-4">Nutrition AI</h2>
      <p class="text-xl break-words text-[#E5E5E5] text-center">
        Current group project in my Agile Methods class. Working with a group of talented students to create an app that recognizes pictures of food and returns nutritional facts, along with added features like profiles, friends list, and more. Tech stack includes React + Vite, Node.js, Gemini API, and NeDB. Project will continue to be updated as the semester goes along.
      </p>
      <form action="https://github.com/danzam284/NutritionAI" target="_blank">
        <button type="submit" className="shadow-lg ring-white ring-1 hover:bg-[#FCA311] transition ease-in-out text-white text-lg font-bold mt-6 px-6 py-3 rounded">
          View
        </button>
      </form>
    </div>
  </div>
  </FadeInOnScroll>
</div>

    );
}

export default Works;