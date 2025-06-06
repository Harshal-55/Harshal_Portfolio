import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl flex flex-col gap-2">
        <li className="flex items-center gap-2">
          <a
            href="mailto:harshalbardikar55@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 flex items-center gap-2"
          >
            <MdOutlineEmail size={24} />
            <span className="hidden md:inline">Email</span>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/harshal-bardikar-a12522257/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 flex items-center gap-2"
          >
            <CiLinkedin size={24} />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a
            href="https://github.com/Harshal-55"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 flex items-center gap-2"
          >
            <FaGithub size={24} />
            <span className="hidden md:inline">GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
