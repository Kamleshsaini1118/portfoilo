import React from "react";
import CountUp from "react-countup";

const AboutSection = () => {
  return (
    <div className="text-white flex flex-col">
      {/* main wrapper */}
      <div className="w-full min-h-screen flex flex-col md:flex-row">
        {/* image section */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto flex justify-center items-center p-4">
          <div className=" h-72 md:w-80 md:h-[600px] lg:w-96 lg:h-[700px] rounded-full overflow-hidden shadow-lg">
            <img
              src="/dp.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* detail section */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start p-6 sm:p-10 gap-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            About Me⚡
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-zinc-400">
            Hey! I'm <span className="font-medium text-white">Kamlesh Saini</span>. <br />
            I’m a passionate Full Stack Developer with expertise in the MERN
            stack and modern web technologies. I specialize in building scalable
            web applications, service-based projects, and dynamic frontends with
            clean, maintainable code.
            <br />
            <br />
            I graduated from the National Institute of Technology (NIT) Hamirpur
            in the 2022–2024 batch, with a CGPA of 8.5. My academic foundation,
            combined with practical project experience, has sharpened my
            problem-solving skills and ability to deliver efficient, real-world
            solutions.
            <br />
            <br />I enjoy exploring new technologies, solving challenging
            problems, and continuously growing as a developer. Beyond coding, I
            love discovering new ideas, watching good series, and spending time
            with friends. 🚀
            <br />
            <br />
            I’m always eager to learn, adapt, and innovate in the fast-paced
            tech world. My goal is to build impactful solutions that make a real
            difference.
          </p>
        </div>
      </div>

      {/* counter section */}
      <div className="w-full bg-zinc-900/50 py-4 sm:py-12 mt-6 rounded-2xl shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-around items-center text-center divide-y sm:divide-y-0 sm:divide-x divide-zinc-700">
          
          {/* Projects */}
          <div className="flex-1 px-6 py-6">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent transition-transform duration-300 hover:scale-110">
              <CountUp start={0} end={20} duration={4} />+
            </h2>
            <p className="text-base sm:text-lg mt-2 text-zinc-400">Projects 🚀</p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-500 mt-1 px-2">
              I have successfully completed 20+ projects ranging from personal to client-based work, focusing on modern UI/UX, scalable backend systems, and performance-driven solutions.
            </p>
          </div>

          {/* DSA Problems */}
          <div className="flex-1 px-6 py-6">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent transition-transform duration-300 hover:scale-110">
              <CountUp start={0} end={150} duration={4} />+
            </h2>
            <p className="text-base sm:text-lg mt-2 text-zinc-400">DSA Problems 💡</p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-500 mt-1 px-2">
              With 150+ problems solved across platforms like LeetCode, CodeStudio, and GFG, I have built a strong foundation in data structures and algorithms.
            </p>
          </div>

          {/* Training Experience */}
          <div className="flex-1 px-6 py-6">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent transition-transform duration-300 hover:scale-110">
              <CountUp start={0} end={6} duration={4} />
            </h2>
            <p className="text-base sm:text-lg mt-2 text-zinc-400">Training Experience 🎓</p>
            <p className="text-xs sm:text-sm md:text-base text-zinc-500 mt-1 px-2">
              I gained 5–6 months of intensive training experience in full-stack development, where I worked on real-time projects and collaborated in team-based environments.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;
