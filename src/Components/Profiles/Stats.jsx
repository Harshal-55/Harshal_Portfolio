import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [leetcodeError, setLeetcodeError] = useState(false);

  const [gfgStats, setGfgStats] = useState(null);
  const [gfgError, setGfgError] = useState(false);

  useEffect(() => {
    // Fetch LeetCode stats
    axios
      .get("https://leetcode-stats-api.herokuapp.com/Harshal__55")
      .then((response) => {
        if (response.data.status === "success") {
          setLeetcodeStats(response.data);
        } else {
          setLeetcodeError(true);
        }
      })
      .catch(() => setLeetcodeError(true));

    // Fetch GFG stats
    axios
      .get(
        "https://geeks-for-geeks-stats-api.vercel.app/?raw=y&userName=harshalbapn3h"
      )
      .then((response) => {
        setGfgStats(response.data);
      })
      .catch(() => setGfgError(true));
  }, []);

  if (leetcodeError)
    return (
      <p className="text-red-500 p-4">
        Failed to fetch LeetCode stats. Please try again later.
      </p>
    );

  if (gfgError)
    return (
      <p className="text-red-500 p-4">
        Failed to fetch GeeksforGeeks stats. Please try again later.
      </p>
    );

  if (!leetcodeStats || !gfgStats)
    return <p className="text-white p-10">Loading stats...</p>;

  // Data for LeetCode Pie Chart
  const leetcodeData = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "Problems Solved",
        data: [
          leetcodeStats.easySolved,
          leetcodeStats.mediumSolved,
          leetcodeStats.hardSolved,
        ],
        backgroundColor: ["#42c91f", "#f9c74f", "#f94144"],
        borderWidth: 1,
      },
    ],
  };

  // Data for GFG Pie Chart
  const gfgData = {
    labels: ["School", "Basic", "Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "Problems Solved",
        data: [
          gfgStats.School,
          gfgStats.Basic,
          gfgStats.Easy,
          gfgStats.Medium,
          gfgStats.Hard,
        ],
        backgroundColor: [
          "#8e44ad",
          "#2980b9",
          "#27ae60",
          "#f39c12",
          "#c0392b",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-16 max-w-5xl mx-auto px-4 py-12">
      {/* LeetCode Stats */}
      <div className="flex flex-col md:flex-row items-center bg-[#1e2647] rounded-lg shadow-lg p-8 text-white gap-8">
        <div className="flex-1 space-y-2 text-lg">
          <h2 className="text-3xl font-bold mb-4">LeetCode Stats</h2>
          <p>
            Total Solved:{" "}
            <span className="font-semibold">{leetcodeStats.totalSolved}</span>
          </p>
          <p>
            Total Questions:{" "}
            <span className="font-semibold">{leetcodeStats.totalQuestions}</span>
          </p>
          <p>
            Acceptance Rate:{" "}
            <span className="font-semibold">{leetcodeStats.acceptanceRate}%</span>
          </p>
          <p>
            Ranking:{" "}
            <span className="font-semibold">
              {leetcodeStats.ranking.toLocaleString()}
            </span>
          </p>
          <p>
            Contribution Points:{" "}
            <span className="font-semibold">{leetcodeStats.contributionPoints}</span>
          </p>
        </div>
        <div className="flex-1 max-w-sm">
          <Pie data={leetcodeData} />
        </div>
      </div>

      {/* GFG Stats */}
      <div className="flex flex-col md:flex-row items-center bg-[#1e2647] rounded-lg shadow-lg p-8 text-white gap-8">
        <div className="flex-1 space-y-2 text-lg">
          <h2 className="text-3xl font-bold mb-4">GeeksforGeeks Stats</h2>
          <p>
            Total Problems Solved:{" "}
            <span className="font-semibold">{gfgStats.totalProblemsSolved}</span>
          </p>
          <p>
            School Level: <span className="font-semibold">{gfgStats.School}</span>
          </p>
          <p>
            Basic: <span className="font-semibold">{gfgStats.Basic}</span>
          </p>
          <p>
            Easy: <span className="font-semibold">{gfgStats.Easy}</span>
          </p>
          <p>
            Medium: <span className="font-semibold">{gfgStats.Medium}</span>
          </p>
          <p>
            Hard: <span className="font-semibold">{gfgStats.Hard}</span>
          </p>
        </div>
        <div className="flex-1 max-w-sm">
          <Pie data={gfgData} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
