import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectSection = () => {
  const [current, setCurrent] = useState(0);

  const projects = [
    {
      title: "Online Learning Platform",
      desc: "A modern online learning platform to explore courses, enhance skills, and track progress.",
      img: "/project_img/p1.jpg",
      tech: ["React.JS", "TailwindCSS"],
      github: "https://github.com/Kamleshsaini1118/EduLearning",
      live: "https://edu-learning-pink.vercel.app/",
    },
    {
      title: "Food Delivery App",
      desc: "A full-stack web app for browsing, ordering, and managing food deliveries in real time.",
      img: "/project_img/p2.jpg",
      tech: ["React", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Kamleshsaini1118/Food-Delivery",
      live: "https://food-delivery-delta-drab.vercel.app/",
    },
    {
      title: "Cab Booking System",
      desc: "A full-stack cab booking platform where users can book rides, track drivers in real-time, and make secure payments. Built for seamless ride management and better travel experience.",
      img: "/project_img/p3.jpg",
      tech: ["React", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Kamleshsaini1118/UBER/",
      live: "https://maintenance-orcin.vercel.app/",
    },
    {
      title: "Cademy - Course Platform",
      desc: "An online learning platform for browsing, enrolling, and managing courses with ease.",
      img: "/project_img/p4.jpg",
      tech: ["React", "ChakraUI", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Kamleshsaini1118/Cademy",
      live: "https://maintenance-orcin.vercel.app/",
    },
    {
      title: "Gemini Clone",
      desc: "An AI-powered web app replicating Gemini’s interface and functionality using Gemini API.",
      img: "/project_img/p5.jpg",
      tech: ["React", "CSS", "GeminiAPI", "JavaScript"],
      github: "https://github.com/Kamleshsaini1118/Gemini-Clone",
      live: "https://gemini-clone-three-mu.vercel.app/",
    },
    // {
    //   title: "Mountain Explorer",
    //   desc: "Find trails, maps, and guides for breathtaking mountain hikes.",
    //   img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    //   tech: ["Next.js", "Node.js"],
    //   github: "https://github.com/",
    //   live: "https://example.com",
    // },
  ];

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="text-white  md:py-2 bg rounded-xl mx-2 md:mx-4">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-thin py-2 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
          My Works
        </h1>
        <p className="mx-2 md:mx-16 my-4 text-gray-400 max-w-2xl text-sm md:text-base">
          "Building projects that solve today’s problems and grow with tomorrow’s needs. Code today, scale tomorrow, impress forever."
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-5xl mx-auto overflow-hidden mt-4">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-2"
            >
              <div className="relative w-full h-[320px] sm:h-[380px] md:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group">
                {/* Background Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 md:p-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-200 mt-1 md:mt-2">
                    {project.desc}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-3">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-white/80 text-gray-800 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-3 md:mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 text-lg md:text-xl"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 text-lg md:text-xl"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 mt-2 ${
                current === index ? "bg-green-400 scale-110 w-4 h-2" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
