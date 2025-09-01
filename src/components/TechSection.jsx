import React from "react";

const TechSection = () => {
  // Six empty boxes
  const boxes = ["", 
    "",
     "", "", "", ""];

  return (
    <div className="w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-2">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
          Technologies & Skills ⚡
        </h2>

        {/* Grid: 2 rows x 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {boxes.map((_, index) => (
            <div
              key={index}
              className="p-8 h-56 border border-zinc-900/50 shadow-lg hover:shadow-green-400/30 transition duration-300 bg-zinc-900/50 hover:-translate-y-2 flex flex-col justify-center items-center"
            >
              {/* Placeholder text, you can replace later */}
              <h3 className="text-2xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-zinc-400 text-center">Description</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSection;
