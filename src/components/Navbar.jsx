import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";
import { Link as ScrollLink } from "react-scroll"; // 👈 react-scroll import

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.6, ease: "power3.out" }
      );

      gsap.fromTo(
        menuRef.current.querySelectorAll("a"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, delay: 0.2, duration: 0.5 }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [open]);

  return (
    <nav className="bg-black text-white p-4 relative">
      {/* Top Navbar */}
      <div className="container mx-auto flex justify-between items-center px-4 md:px-12 relative z-[60]">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <ScrollLink to="home" smooth={true} duration={600} offset={-70}>
            <span style={{ color: "gray" }}>{"{"}</span>
            KS
            <span style={{ color: "gray" }}>{"}"}</span>
          </ScrollLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-base font-semibold">
          <ScrollLink to="about" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-green-500">
            About
          </ScrollLink>
          <ScrollLink to="tech" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-green-500">
            Skills
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-green-500">
            Projects
          </ScrollLink>
          <ScrollLink to="achievements" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-green-500">
            Achievements
          </ScrollLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl z-[70]"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu (GSAP controlled) */}
      <div
        ref={menuRef}
        className="fixed -top-35 right-0 h-full w-[80%] bg-black text-white flex flex-col items-center justify-center px-8 space-y-6 text-lg font-semibold z-50 md:hidden"
        style={{ transform: "translateX(100%)" }}
      >
        <ScrollLink onClick={() => setOpen(false)} to="about" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-green-500">
          About
        </ScrollLink>
        <ScrollLink onClick={() => setOpen(false)} to="projects" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-green-500">
          Projects
        </ScrollLink>
        <ScrollLink onClick={() => setOpen(false)} to="achievements" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-green-500">
          Achievements
        </ScrollLink>
        <ScrollLink onClick={() => setOpen(false)} to="contact" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-green-500">
          Contact
        </ScrollLink>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[1px] bg-gray-600 mt-4"></div>
    </nav>
  );
};

export default Navbar;


// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoMdClose } from "react-icons/io";
// import { MdDarkMode, MdLightMode } from "react-icons/md";
// import gsap from "gsap";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(true); // default: dark
//   const menuRef = useRef(null);

//   // GSAP mobile menu animation
//   useEffect(() => {
//     if (open) {
//       gsap.fromTo(
//         menuRef.current,
//         { x: "100%" },
//         { x: "0%", duration: 0.6, ease: "power3.out" }
//       );

//       gsap.fromTo(
//         menuRef.current.querySelectorAll("a"),
//         { y: 30, opacity: 0 },
//         { y: 0, opacity: 1, stagger: 0.15, delay: 0.2, duration: 0.5 }
//       );
//     } else {
//       gsap.to(menuRef.current, {
//         x: "100%",
//         duration: 0.5,
//         ease: "power3.in",
//       });
//     }
//   }, [open]);

//   // Apply dark/light mode to <html>
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <nav className="bg-white dark:bg-black text-black dark:text-white p-4 relative transition-colors duration-300">
//       {/* Top Navbar */}
//       <div className="container mx-auto flex justify-between items-center px-4 md:px-12 relative z-[60]">
//         {/* Logo */}
//         <div className="text-3xl font-bold">
//           <Link to="/">
//             <span className="text-gray-500">{"{"}</span>
//             KS
//             <span className="text-gray-500">{"}"}</span>
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 text-base font-semibold">
//           <Link to="/about" className="hover:text-green-500">
//             About
//           </Link>
//           <Link to="/projects" className="hover:text-green-500">
//             Project's
//           </Link>
//           <Link to="/achievements" className="hover:text-green-500">
//             Achievements
//           </Link>
//           <Link to="/contact" className="hover:text-green-500">
//             Contact
//           </Link>
//         </div>

//         {/* Right Side: Dark/Light Toggle + Mobile Menu */}
//         <div className="flex items-center gap-4">
//           {/* Dark/Light Mode Button */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
//             aria-label="Toggle Dark Mode"
//           >
//             {darkMode ? <MdLightMode /> : <MdDarkMode />}
//           </button>

//           {/* Mobile Hamburger */}
//           <button
//             className="md:hidden text-2xl z-[70]"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <IoMdClose /> : <GiHamburgerMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         ref={menuRef}
//         className="fixed top-0 right-0 h-full w-[80%] bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center px-8 space-y-6 text-lg font-semibold z-50 md:hidden"
//         style={{ transform: "translateX(100%)" }}
//       >
//         <Link onClick={() => setOpen(false)} to="/about" className="hover:text-green-500">
//           About
//         </Link>
//         <Link onClick={() => setOpen(false)} to="/projects" className="hover:text-green-500">
//           Project's
//         </Link>
//         <Link onClick={() => setOpen(false)} to="/achievements" className="hover:text-green-500">
//           Achievements
//         </Link>
//         <Link onClick={() => setOpen(false)} to="/contact" className="hover:text-green-500">
//           Contact
//         </Link>
//       </div>

//       {/* Divider */}
//       <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-600 mt-4"></div>
//     </nav>
//   );
// };

// export default Navbar;
