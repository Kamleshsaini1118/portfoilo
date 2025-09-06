// import React from "react";
// import { FaArrowUp } from "react-icons/fa";

// const Footer = () => {
//   // Smooth scroll to top
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative bg-zinc-900/50 text-white py-7 px-4 sm:px-8 md:px-20 flex flex-col items-start font-thin">
//       {/* Back to Top (top-right corner) */}
//       <button
//         onClick={scrollToTop}
//         className="absolute top-6 right-6 sm:top-10 sm:right-10 flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-green-400 transition"
//       >
//         <p className="hidden sm:block text-gray-400 text-sm">Back to top</p>
//         <span className="p-2 sm:p-3 bg-green-400 text-black rounded-full">
//           <FaArrowUp size={20}  />
//         </span>
//       </button>

//       {/* Heading */}
//       <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide mt-10 sm:mt-16 text-center">
//         Have a project in mind?
//       </p>

//       {/* Big text */}
//       <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[160px] xl:text-[200px] font-thin bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent opacity-18 text-center sm:text-center mt-2">
//         LET’S TALK
//       </h1>

//       {/* Bottom Section */}
//       <div className="mt-12 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 text-xs sm:text-sm text-gray-400">
//         {/* Social Links Left Bottom */}
//         <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-6">
//           <a
//             href="https://github.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-5 sm:px-6 py-2 bg-zinc-900/50 border border-white/20 rounded-full hover:bg-green-400 hover:text-black transition-all text-xs sm:text-sm"
//           >
//             GitHub
//           </a>
//           <a
//             href="https://linkedin.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-5 sm:px-6 py-2 bg-zinc-900/50 border border-white/20 rounded-full hover:bg-green-400 hover:text-black transition-all text-xs sm:text-sm"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="https://twitter.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-5 sm:px-6 py-2 bg-zinc-900/50 border border-white/20 rounded-full hover:bg-green-400 hover:text-black transition-all text-xs sm:text-sm"
//           >
//             Twitter
//           </a>
//         </div>

//         {/* Credits Right Bottom */}
//         <div className="text-center md:text-right leading-relaxed">
//           <p>
//             Developed & Designed by{" "}
//             <span className="text-green-400">Kamlesh Saini</span>
//           </p>
//           <p>
//             Built with <span className="text-green-400">ReactJS</span> &{" "}
//             <span className="text-green-400">TailwindCSS</span>. Hosted on{" "}
//             <span className="text-green-400">Vercel</span>.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-900/50 text-white py-7 px-4 sm:px-8 md:px-20 flex flex-col font-thin">
      {/* Back to Top (top-right corner) */}
      <button
        onClick={scrollToTop}
        className="absolute top-6 right-6 sm:top-10 sm:right-10 flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-green-400 transition"
      >
        <p className="hidden sm:block text-gray-400 text-sm">Back to top</p>
        <span className="p-2 sm:p-3 bg-green-400 text-black rounded-full">
          <FaArrowUp size={20} />
        </span>
      </button>

      {/* Heading */}
      <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide mt-10 sm:mt-16 text-center w-full">
        Have a project in mind?
      </p>

      {/* Big text */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[160px] xl:text-[200px] font-thin bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent opacity-20 text-center w-full mt-2">
        LET’S TALK
      </h1>

      {/* Bottom Section */}
      <div className="mt-12 w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 text-xs sm:text-sm text-gray-400">
        {/* Social Links Left Bottom */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-6">
          <a
            href="https://github.com/Kamleshsaini1118"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 sm:px-6 py-2 flex gap-2 bg-zinc-900/50 border border-white/20 rounded-full hover:bg-green-400 hover:text-black transition-all text-xs sm:text-sm"
          >
            <FaGithub className="mt-1"/>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kamlesh-saini-a44268259/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 sm:px-6 py-2 flex gap-2 bg-zinc-900/50 border border-white/20 rounded-full hover:bg-green-400 hover:text-black transition-all text-xs sm:text-sm"
          >
            <FaLinkedin className="mt-1"/>
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/Kamlesh_7418/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 sm:px-6 py-2 flex gap-2 bg-zinc-900/50 border border-white/20 rounded-full hover:bg-green-400 hover:text-black transition-all text-xs sm:text-sm"
          >
            <SiLeetcode className="mt-1"/>
            LeetCode
          </a>
        </div>

        {/* Credits Right Bottom */}
        <div className="text-center md:text-right leading-relaxed">
          <p>
            Developed & Designed by{" "}
            <span className="text-green-400">Kamlesh Saini</span>
          </p>
          <p>
            Built with <span className="text-green-400">ReactJS</span> &{" "}
            <span className="text-green-400">TailwindCSS</span>. Hosted on{" "}
            <span className="text-green-400">Vercel</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
