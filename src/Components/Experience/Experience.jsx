import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaPython, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiC, SiMysql  } from "react-icons/si";
import { DiGit } from "react-icons/di";
import expIcon from "../../assets/expIcon.jpg";
import { } from "react-icons/si";


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
        
        <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiC color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiCplusplus color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiTailwindcss color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#47A248" size={50} />
          </span>
           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiGit color="#E34F26" size={50} />
          </span>
          
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
           <img
            src={expIcon}
            alt="Custom Icon"
            className="w-[50px] h-[50px] inline-block"
            />
            <span className="text-white">
              <h2 className="leading-tight">Full-Stack Developer , Ricoz</h2>
              <p className="text-sm leading-tight font-thin">
                Aug 2024 - Feb 2025
              </p>
              <ul className="text-sm p-2">
                <li>-Develop and code dynamic, responsive web pages using TypeScript, React, Vite, and Tailwind CSS.</li>
                <li>-Collaborate on the design and implementation of the user interface, ensuring a seamless user experience.</li>
                <li>-Utilize Tailwind CSS for styling, resulting in clean, and maintainable code across various components.</li>
                <li>-Troubleshoot and resolve errors, alignment issues to enhance page performance and responsiveness.</li>
                <li>-Focus on development, optimizing the website for speed, scalability, and a polished user interface.</li>
                
              </ul>
            </span>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Experience;