import React from "react";
import AboutImg from "../../assets/bgprev2-Photoroom.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-[#0F121F] shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      
            <div className="w-full text-left mb-6">
                <h2 className="text-2xl md:text-4xl font-bold">About</h2>
            </div>
        <div>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 md:mr-10" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I'm a passionate <span className="font-semibold text-[#6C9BCF]">Frontend Developer</span> with hands-on experience building responsive, user-friendly interfaces using modern web technologies like React, TypeScript, Tailwind CSS, and more.                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                    I’m proficient in working with <span className="font-semibold text-[#6C9BCF]">MySQL</span> for creating and managing structured databases efficiently.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I also have solid exposure to <span className="font-semibold text-[#6C9BCF]">Backend Development</span>, working with Node.js to build full-stack applications.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Competative Programming
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I'm also passionate about <span className="font-semibold text-[#6C9BCF]">Data Structures and Algorithms</span>, which I regularly practice using <span className="font-medium">C++</span> through competitive programming. This strengthens my problem-solving mindset and helps me write optimized and scalable code.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;