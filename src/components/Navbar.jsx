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
    <nav className="fixed top-0 left-0 w-full bg-black text-white p-4 shadow-md z-[100]">
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
          <ScrollLink to="contact" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-green-500">
            Contact
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
        <ScrollLink onClick={() => setOpen(false)} to="tech" smooth={true} duration={600} offset={-70} className="cursor-pointer hover:text-green-500">
          Skills
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

