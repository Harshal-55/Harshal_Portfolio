import React from "react";
import { FaCode, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

const Profiles = () => {
  return (
    <div id="Profiles" className="text-white py-12 px-6 md:px-24">
      <h1 className="text-2xl md:text-4xl font-bold mb-6">DSA & CP Profiles</h1>
      <div className="flex flex-wrap gap-6">
        <a
          href="https://leetcode.com/u/Harshal__55/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-[#292e49] rounded-xl hover:scale-105 transition-transform"
        >
          <SiLeetcode size={28} />
          <span>LeetCode</span>
        </a>
        <a
          href="https://www.hackerrank.com/profile/harshalbardikar1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-[#292e49] rounded-xl hover:scale-105 transition-transform"
        >
          <FaHackerrank size={28} />
          <span>HackerRank</span>
        </a>
        <a
          href="https://www.codechef.com/users/metamorph_55"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-[#292e49] rounded-xl hover:scale-105 transition-transform"
        >
          <SiCodechef size={28} />
          <span>CodeChef</span>
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/harshalbapn3h/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-[#292e49] rounded-xl hover:scale-105 transition-transform"
        >
          <SiGeeksforgeeks size={28} />
          <span>GeeksforGeeks</span>
        </a>
      </div>
    </div>
  );
};

export default Profiles;
