import React from "react";
import { Brain } from "lucide-react";
import {
  SiFigma,
  SiProton,
} from "react-icons/si";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { RiAiGenerate } from "react-icons/ri";

const page = () => {
  const test = [
    {
      title: "NinjaHome app landing page",
      tech: [SiFigma, SiProton, RiAiGenerate],
      link: "https://ninjahome.net/",
      cover: "/project-1.png",
      background: "bg-indigo-500",
    },
    {
      title: "Coupons Wadi Website",
      tech: [SiFigma, SiProton, RiAiGenerate],
      link: "https://couponswadi.com/",
      cover: "/project-2.png",
      background: "bg-green-500",
    },
    {
      title: "LA CASA app",
      tech: [SiFigma, SiProton, RiAiGenerate],
      link: "https://couponswadi.com/",
      cover: "/project-3.png",
      background: "bg-cyan-500",
    },
    {
      title: "Fa9ran Ecommerce app",
      tech: [SiFigma, SiProton, RiAiGenerate],
      link: "https://couponswadi.com/",
      cover: "/project-4.png",
      background: "bg-pink-500",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-black overflow-hidden ">
        <div className="dark:bg-black bg-white relative dark:bg-grid-white/[0.03] bg-grid-black/[0.2] ">
          <div className="max-w-7xl mx-auto p-5 ">
            <Navbar />
            <HeroSection />
          </div>
          <div className="h-10 xl:h-23 bg-gradient-to-t form-black absolute -bottom-5 left-0 xl:bottom-0 w-full" />
        </div>
        <div className="max-w-7xl mx-auto p-5 mt-20">
          <Skill />
          <div className="flex flex-col gap-20">
            <Projects
              projects={test}
              title={{ text: "Projects", icon: Brain }}
            />
            {/*
              <Projects
              projects={test}
              title={{ text: "Backend", icon: Brain }}
  />*/}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
