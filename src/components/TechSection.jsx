import React from "react";

const TechSection = () => {
  const boxes = [
    {
      title: "Welcome to My Tech Skills",
      desc: "This section showcases my core technical skills and knowledge areas across development and optimization.",
      customStyle: true,
    },
    {
      title: "Languages",
      desc: "C++, Python",
    },
    {
      title: "Frontend Development",
      desc: "HTML & CSS, JavaScript, React.js, Tailwind CSS",
    },
    {
      title: "Backend Development",
      desc: "Node.js & Express.js for building APIs and server-side logic efficiently.",
    },
    {
      title: "Database",
      desc: "SQL (MySQL) for relational data, NoSQL (MongoDB) for flexible schema design.",
    },
    {
      title: "SEO Optimization",
      desc: "Optimizing websites for search engines to improve visibility and traffic.",
    },
  ];

  return (
    <div className="w-full py-20 bg-black text-white">
      <div className="w-full mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
          Technologies & Skills ⚡
        </h2>

        {/* Grid: 2 rows x 3 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {boxes.map((box, index) => (
            <div
              key={index}
              className={`group p-6 sm:p-8 transition-transform duration-300 flex flex-col justify-center items-center 
                ${
                  box.customStyle
                    ? "h-60 md:h-60 border-2 border-zinc-900/50 shadow-xl"
                    : "h-60 bg-zinc-900/50 border-2 border-zinc-900/50 shadow-lg"
                }
                active:-translate-y-2 focus:-translate-y-2
                hover:-translate-y-2 group-hover:shadow-lg
                ${
                  box.customStyle
                    ? "hover:shadow-purple-500/40 group-hover:shadow-purple-500/40"
                    : "hover:shadow-green-400/30 group-hover:shadow-green-400/30"
                }
              `}
            >
              <h3
                className={`text-center font-semibold mb-2 ${
                  box.customStyle ? "text-lg md:text-2xl" : "text-lg md:text-2xl"
                }`}
              >
                {box.title}
              </h3>
              <p
                className={`text-center ${
                  box.customStyle
                    ? "text-zinc-500 text-xs md:text-base"
                    : "text-zinc-500 text-xs md:text-base"
                }`}
              >
                {box.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSection;
