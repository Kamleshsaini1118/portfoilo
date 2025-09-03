import React from "react";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div className="text-white px-6 md:px-14 py-8">
      {/* Intro */}
      <h3 className="text-green-400 text-2xl md:text-3xl font-semibold">
        Hey there! I'm -
      </h3>

      {/* Name */}
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold mt-5 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
        Kamlesh Saini.
      </h1>

      {/* Typewriter animation */}
      <p className="text-2xl md:text-3xl lg:text-4xl mt-10 font-semibold">
        <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
          <Typewriter
            words={[
              "Full Stack Developer,",
              "Software Developer,",
              "MERN Stack Developer,",
              "Frontend Developer,",
              "Backend Developer,",
              "Freelancer,",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
        <br />
        <span className="text-gray-500">
          A self-taught developer with an interest in Computer Science.
        </span>
      </p>

      {/* About text */}
      <div className="text-gray-500 text-lg md:text-xl mt-10 space-y-2">
        <h2>
          🚀 Passionate about building powerful & scalable backends with Node.js.
        </h2>
        <h2>⚡ NIT Hamirpur Alumnus | Crafting Scalable Backend Solutions.</h2>
      </div>

      {/* Social buttons */}
      <div className="gap-3 md:gap-4 flex md:flex-row">
        <a
          href="https://github.com/Kamleshsaini1118"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 border border-green-300 p-2 md:px-6 md:py-3 text-sm md:text-base rounded-lg text-green-300 font-semibold hover:bg-zinc-900 flex items-center gap-1 md:gap-2 justify-center"
        >
          <FaGithub />
          Github
        </a>

        <a
          href="https://www.linkedin.com/in/kamlesh-saini-a44268259/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 border border-green-300 p-2 md:px-6 md:py-3 text-sm md:text-base rounded-lg text-green-300 font-semibold hover:bg-zinc-900 flex items-center gap-2 justify-center"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href="https://drive.google.com/file/d/1eQGZ1kxFIQPpii_qlQpGIySF5q7y_jJI/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 border border-green-300 p-2 md:px-6 md:py-3 text-sm md:text-base rounded-lg text-green-300 font-semibold hover:bg-zinc-900 flex items-center gap-2 justify-center"
        >
          <FaPaperPlane />
          Resume
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
