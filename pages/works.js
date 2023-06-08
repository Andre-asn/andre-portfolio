import React from "react";
import { GiMicrophone } from "react-icons/gi"
import { FadeInOnScroll } from "../lib/scrollAnimation.jsx"

const Works = () => {
    return (
      <div id="works" className="min-h-screen flex flex-col justify-center items-center">
  <FadeInOnScroll>
    <h1 className="text-6xl pb-12 font-outfit font-normal text-center text-white">
      Some of my <span className="text-[#FCA311] font-semibold">work</span>
    </h1>
    <div className="grid md:grid-cols-2 md:w-[1000px] w-[500px] md:h-[650px] gap-[100px]">
      <div className="pb-4 rounded-lg shadow-md backdrop-blur-[1rem] bg-white/30 flex flex-col items-center pt-4">
        <h1 className="py-[4.2vh] text-4xl text-white bg-[#14213D] w-full text-center">
          Anime Figures eCommerce
        </h1>
        <p className="text-[#E5E5E5] text-center text-2xl px-6 pt-8">
          First biggest project I ever created. It was made during my time in college for a final in a database class. Currently in the process of transferring the database to MongoDB since I had originally made it in a school-based database that I no longer have access to. Keeping all the work original, exactly how it was when I submitted it, so it is not mobile responsive.
        </p>
        <form action="" target="_blank">
          <button disabled type="submit" className="shadow-lg ring-white ring-1 hover:bg-red-600 transition ease-in-out text-white text-lg font-bold mt-8 py-3 px-8 rounded">
            Under Construction
          </button>
        </form>
      </div>
      <div className="pb-4 rounded-lg shadow-md backdrop-blur-[1rem] bg-white/30 flex flex-col items-center pt-4">
        <h1 className="pt-6 text-4xl text-white bg-[#14213D] w-full text-center">
          Mock Karaoke Site
        </h1>
        <div className="bg-[#14213D] pb-6 pt-3 flex justify-center items-center w-full">
          <GiMicrophone className="text-white text-center h-12 w-12"/>
        </div>
        <p className="text-[#E5E5E5] text-center text-2xl px-6 pt-8">
          I created a website as a personal project for a fictional karaoke spot that a friend dreamed of owning in the future. The website features engaging content and a modern design that immerses the user in the experience of a karaoke location. Through this project, I improved my web development skills in design, layout, and user experience.
        </p>
        <form action="https://karaokemock.vercel.app/" target="_blank">
          <button type="submit" className="shadow-lg ring-white ring-1 hover:bg-[#FCA311] transition ease-in-out text-white text-lg font-bold mt-8 py-3 px-8 rounded">
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