import React from "react";
import avatarImg from "../../assets/bgprev-Photoroom.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          Enthusiastic Software Engineer Intern with experience in mobile/web development, proficient in C++, Java, Python, HTML, CSS, JavaScript, and a strong team player.
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <img className="md:w-4/5" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;