"use client";
import Footer from "@/components/Footer";
import About from "@/components/Homepage/About";
import Contact from "@/components/Homepage/Contact";
import Hero from "@/components/Homepage/Hero";
import HireMe from "@/components/Homepage/hireme/HireMe";
import Project from "@/components/Homepage/projects/Project";
import Skills from "@/components/Homepage/skills/Skills";
import Designs from "@/components/Homepage/UI/UX/Designs";
import NavBar from "@/components/NavBar";
import React from "react";

export default function Home(): React.JSX.Element {
  return (
    <div className="subpixel-antialiased w-full lg:py-10 md:py-9 py-5 relative lg:px-24 md:px-16 px-5">
      <NavBar />
      <div className="is-reveal pt-36 z-0 m-auto lg:w-[58rem] md:w-[90%]">
        <Hero />
        <About />
        <Project />
        <Designs />
        <Skills />
        <HireMe />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
