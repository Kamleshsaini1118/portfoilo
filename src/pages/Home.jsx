import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechSection from "../components/TechSection";
import ProjectSection from "../components/ProjectSection";
import AchievementSection from "../components/AchivementSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="tech">
        <TechSection />
      </div>

      <div id="projects">
        <ProjectSection />
      </div>

      <div id="achievements">
        <AchievementSection />
      </div>

      <div id="contact" >
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
