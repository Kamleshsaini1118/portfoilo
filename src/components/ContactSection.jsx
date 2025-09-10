// import React, { useRef } from "react";
// import { FaTwitter, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
// import emailjs from "@emailjs/browser";

// const ContactSection = () => {

//     const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_6jhjx2w",   // 🔹 service ID
//         "template_iw2ihyr",  // 🔹 template ID
//         form.current,
//         "your_public_key"    // 🔹 Replace with your EmailJS public key
//       )
//       .then(
//         (result) => {
//           console.log("Message sent:", result.text);
//           alert("✅ Message sent successfully!");
//           form.current.reset();
//         },
//         (error) => {
//           console.error("Error:", error.text);
//           alert("❌ Something went wrong, try again.");
//         }
//       );
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen text-white font-sans m-3 md:m-[70px] ">
//       {/* Left Section */}
//       <div
//         className="flex-1.5 flex flex-col justify-end p-8 md:p-16 bg-cover bg-center rounded-t-xl md:rounded-l-xl"
//         style={{ backgroundImage: "url('/bg-1.png')" }}
//       >
//         <div>
//           <h1 className="text-2xl md:text-5xl font-light mb-3 md:mb-4">
//             Keep In Touch...
//           </h1>
//           <p className="text-gray-300 text-sm font-thin md:text-lg leading-relaxed max-w-xl mb-4 md:mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis volupta
//           </p>
//           <div className="flex space-x-4 text-xl md:text-2xl">
//             <FaTwitter className="cursor-pointer opacity-70 hover:opacity-100 transition" />
//             <FaFacebookF className="cursor-pointer opacity-70 hover:opacity-100 transition" />
//             <FaGoogle className="cursor-pointer opacity-70 hover:opacity-100 transition" />
//             <FaInstagram className="cursor-pointer opacity-70 hover:opacity-100 transition" />
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex-1 bg-zinc-900/40 p-5 md:p-16 pt-8 md:pt-20 flex flex-col justify-center rounded-b-xl md:rounded-r-xl">
//         <div>
//           <h2 className="text-4xl md:text-6xl font-thin mb-2">Get a quote</h2>
//           <p className="text-zinc-500 font-thin text-sm md:text-base mb-6">We will get back to you in 24 hours</p>

//           {/* Name Fields */}
//           <div className="flex flex-col md:flex-row gap-2 mb-2">
//             <input
//               type="text"
//               placeholder="First Name"
//               className="flex-1 p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40 placeholder:text-sm placeholder:font-light"
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               className="flex-1 p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40 placeholder:text-sm placeholder:font-light"
//             />
//           </div>

//           {/* Email & Phone */}
//           <div className="flex flex-col md:flex-row gap-2 mb-2">
//             <input
//               type="email"
//               placeholder="Email"
//               className="flex-1 p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40 placeholder:text-sm placeholder:font-light"
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="flex-1 p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40 placeholder:text-sm placeholder:font-light"
//             />
//           </div>

//           {/* Message */}
//           <textarea
//             placeholder="Type message here"
//             className="w-full p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40  min-h-[100px] mb-1 resize-y placeholder:text-sm placeholder:font-light"
//           ></textarea>

//           {/* Button */}
//           <button className="w-full bg-green-600 hover:bg-green-800 cursor-pointer text-white font-thin py-3 rounded-md transition">
//             Get quote
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;

import React, { useRef } from "react";
import { FaTwitter, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // ⏳ Show instant loading toast
    const loadingToast = toast.loading("Sending your message...", {
      position: "top-center",
    });

    emailjs
      .sendForm(
        "service_6jhjx2w",
        "template_wx1r5yb",
        form.current,
        "EADXyW2jDJGacPRFc"
      )
      .then(
        (result) => {
          toast.update(loadingToast, {
            render: "✅ Message sent successfully! I'll get back to you soon.",
            type: "success",
            isLoading: false,
            autoClose: 2000,
            theme: "colored",
          });
          form.current.reset();
        },
        (error) => {
          toast.update(loadingToast, {
            render: "❌ Something went wrong. Please try again.",
            type: "error",
            isLoading: false,
            autoClose: 3000,
            theme: "colored",
          });
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen text-white font-sans m-3 md:m-[70px]">
      {/* Toastify container */}
      <ToastContainer />

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
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
      <div className="flex-1 bg-zinc-900/40 p-5 md:p-16 pt-8 md:pt-20 flex flex-col justify-center rounded-b-xl md:rounded-r-xl">
        <div>
          <h2 className="text-4xl md:text-6xl font-thin mb-2">Get a quote</h2>
          <p className="text-zinc-500 font-thin text-sm md:text-base mb-6">
            We will get back to you in 24 hours
          </p>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail}>
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-2 mb-2">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="flex-1 p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40 placeholder:text-sm placeholder:font-light"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="flex-1 p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40 placeholder:text-sm placeholder:font-light"
              />
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row gap-2 mb-2">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="flex-1 p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40 placeholder:text-sm placeholder:font-light"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="flex-1 p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40 placeholder:text-sm placeholder:font-light"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Type message here"
              required
              className="w-full p-3 bg-zinc-900 text-gray-300 rounded-[4px] placeholder-gray-200/40 min-h-[100px] mb-1 resize-y placeholder:text-sm placeholder:font-light"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-800 cursor-pointer text-white font-thin py-3 rounded-md transition"
            >
              Get quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
