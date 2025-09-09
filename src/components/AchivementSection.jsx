import React from "react";

const AchivementSection = () => {
  const achievements = [
    {
      desc: "Earned a JavaScript (Basics) Certificate from HackerRank, demonstrating strong understanding of core JavaScript concepts and problem-solving skills.",
      links: [{ name: "HackerRanker Certificate", url: "https://www.hackerrank.com/certificates/6f3923b29d64" }],
    },
    {
      desc: "Solved 150+ coding problems across platforms like LeetCode, GeeksforGeeks, and CodeStudio, strengthening problem-solving and algorithmic skills.",
      links: [{ name: "LeetCode", url: "https://leetcode.com/u/Kamlesh_7418/" }],
    },
    {
      desc: "Preparing for frontend interviews on NamasteDev platform to strengthen JavaScript and React skills.",
      links: [{ name: "NamasteDev", url: "https://namastedev.com/kamleshsaini1345" }],
    },
    {
      desc: "Earned Oracle Cloud Infrastructure 2025 Certified Data Science Professional certification, along with other certifications including C++ (available in my drive).",
      links: [{ name: "Certificate", url: "https://drive.google.com/drive/u/0/folders/1MjofasEjtJpmvH4H1A7FgEUc-sLFrF8O" }],
    },
  ];

  return (
    <div className="text-white flex flex-col items-center justify-center py-14 font-thin">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-thin flex items-center gap-2 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
        Achievements
      </h1>
      <p className="text-gray-400 mt-2 text-center text-sm md:text-base">
        Here are some of my achievements ...
      </p>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-2 gap-4 max-w-7xl px-4">
        {achievements.map((ach, index) => (
          <div
            key={index}
            className="bg-zinc-900/50 hover:border-green-400/50 transition-all duration-300 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-green-400/20"
          >
            {/* Description */}
            <p className="text-zinc-500 text-sm md:text-base">{ach.desc}</p>

            {/* Links */}
            <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-4 flex-wrap">
              {ach.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-300 font-medium transition-colors text-xs sm:text-sm md:text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchivementSection;
