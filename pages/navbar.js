import { React, useState } from "react";
import { Link } from "react-scroll";
import { BiMenu, BiCaretLeft } from "react-icons/bi";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
    <div className="fixed left-0 top-0 w-full z-10">
        <div className="bg-[#14213D] shadow-2xl rounded-md px-10 h-20 max-w-[1500px] mx-auto mb-12 mt-6 flex justify-between items-center">
            <div className="text-white font-dongle font-medium text-5xl">Portfolio.</div>
            <ul className="hidden md:flex space-x-4">
                <li className="nav-item">
                    <Link to="home" spy={true} smooth={true} offset={-90} duration={500} className="text-white cursor-pointer font-dongle text-3xl mx-7 transition-all ease-in-out hover:text-[#FCA311] hover:border-b-2">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="about" spy={true} smooth={true} offset={-80} duration={500} className="text-white cursor-pointer font-dongle text-3xl mx-7 transition-all ease-in-out hover:text-[#FCA311] hover:border-b-2">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="works" spy={true} smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-dongle text-3xl mx-7 transition-all ease-in-out hover:text-[#FCA311] hover:border-b-2">Works</Link>
                </li>
                <li className="nav-item">
                    <Link to="contact" spy={true} smooth={true} offset={-40} duration={500} className="text-white cursor-pointer font-dongle text-3xl mx-7 transition-all ease-in-out hover:text-[#FCA311] hover:border-b-2">Contact</Link>
                </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <BiCaretLeft size={25} className="text-white"/> : <BiMenu size={25} className="text-white"/>}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r shadow-inner border-r-gray-900 bg-[#14213D] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <ul className="pt-10 text-4xl">
                    <li className="nav-item">
                        <Link to="home" spy={true} smooth={true} offset={-90} duration={500} className="text-white cursor-pointer font-dongle mx-7 transition-all ease-in-out hover:text-[#FCA311]">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" spy={true} smooth={true} offset={-80} duration={500} className="text-white cursor-pointer font-dongle mx-7 transition-all ease-in-out hover:text-[#FCA311]">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="works" spy={true} smooth={true} offset={-70} duration={500} className="text-white cursor-pointer font-dongle mx-7 transition-all ease-in-out hover:text-[#FCA311]">Works</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact" spy={true} smooth={true} offset={-60} duration={500} className="text-white cursor-pointer font-dongle mx-7 transition-all ease-in-out hover:text-[#FCA311]">Contact</Link>
                    </li> 
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Navbar;