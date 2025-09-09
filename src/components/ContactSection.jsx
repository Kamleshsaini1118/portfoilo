import React from "react";
import { FaTwitter, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen text-white font-sans m-3 md:m-[70px] ">
      {/* Left Section */}
      <div
        className="flex-1.5 flex flex-col justify-end p-8 md:p-16 bg-cover bg-center rounded-t-xl md:rounded-l-xl"
        style={{ backgroundImage: "url('/bg-1.png')" }}
      >
        <div>
          <h1 className="text-2xl md:text-5xl font-light mb-3 md:mb-4">
            Keep In Touch...
          </h1>
          <p className="text-gray-300 text-sm font-thin md:text-lg leading-relaxed max-w-xl mb-4 md:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis volupta
          </p>
          <div className="flex space-x-4 text-xl md:text-2xl">
            <FaTwitter className="cursor-pointer opacity-70 hover:opacity-100 transition" />
            <FaFacebookF className="cursor-pointer opacity-70 hover:opacity-100 transition" />
            <FaGoogle className="cursor-pointer opacity-70 hover:opacity-100 transition" />
            <FaInstagram className="cursor-pointer opacity-70 hover:opacity-100 transition" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-zinc-900/40 p-5 md:p-16 pt-20 flex flex-col justify-center rounded-b-xl md:rounded-r-xl">
        <div>
          <h2 className="text-4xl md:text-6xl font-thin mb-2">Get a quote</h2>
          <p className="text-zinc-500 font-thin text-sm md:text-base mb-6">We will get back to you in 24 hours</p>

          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-2 mb-2">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40 placeholder:text-sm placeholder:font-light"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40 placeholder:text-sm placeholder:font-light"
            />
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col md:flex-row gap-2 mb-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40 placeholder:text-sm placeholder:font-light"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40 placeholder:text-sm placeholder:font-light"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Type message here"
            className="w-full p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40  min-h-[100px] mb-1 resize-y placeholder:text-sm placeholder:font-light"
          ></textarea>

          {/* Button */}
          <button className="w-full bg-green-600 hover:bg-green-800 cursor-pointer text-white font-thin py-3 rounded-md transition">
            Get quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
