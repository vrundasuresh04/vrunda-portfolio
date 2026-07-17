import About from "@/components/about/About";
import ParallaxBackground from "@/components/backgrounds/ParallaxBackground";

import Contact from "@/components/contact/Contact";
import Header1 from "@/components/headers/Header1";
import Intro from "@/components/intro/Intro";
import Portfolio from "@/components/portfolio/Portfolio";
import Profile from "@/components/profile/Profile";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import ResumeHeading from "@/components/resume/ResumeHeading";
import Tools from "@/components/resume/Tools";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Home Image || Braxton - Personal Portfolio & Resume React Nextjs Template",
  description: "Braxton - Personal Portfolio & Resume React Nextjs Template",
};
export default function Home() {
  return (
    <>
      <Header1 />
      <ParallaxBackground />
      <Profile profileImage="/img/avatars/vrunda_avatar.png" />
      <div id="content" className="content">
        <div className="content__wrapper">
          <Intro />
          <Portfolio />
          <About />
          <section id="resume" className="inner resume">
            <ResumeHeading />
            <Education />
            <div id="experience">
              <Experience />
            </div>
            <div id="skills">
              <Tools />
            </div>
          </section>
          <Contact />
        </div>
      </div>
    </>
  );
}
