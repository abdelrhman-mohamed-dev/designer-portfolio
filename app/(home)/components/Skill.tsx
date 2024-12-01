"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "@/components/ui/title";
import { BadgeCheck } from "lucide-react";
import React from "react";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiAdobeillustrator,
  SiSketch,
  SiTailwindcss,
  SiAdobephotoshop,
  SiWebflow,
  SiProton,
  SiAdobexd,
  SiTypescript,
  SiSuperuser,
  SiPearson,
  SiFigma
} from "react-icons/si";

import { RiAiGenerate, RiArtboardLine } from "react-icons/ri";


export default function Skill() {
  const Skills = [
    {
      text: "Figma",
      Icon: SiFigma,
    },
    {
      text: "Sketch",
      Icon: SiSketch,
    },
    {
      text: "Adobe Illustrator",
      Icon: SiAdobeillustrator,
    },
    {
      text: "Adobe XD",
      Icon: SiAdobexd,
    },
    {
      text: "Webflow",
      Icon: SiWebflow,
    },
    {
      text: "Adobe Photoshop",
      Icon: SiAdobephotoshop,
    },
    {
      text: "Proto Typing",
      Icon: SiProton,
    },
    {
      text: "User Flow",
      Icon: RiAiGenerate,
    },
    {
      text: "Wireframing",
      Icon: RiArtboardLine,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills"
        className="flex flex-col justify-center items-center -rotate-6"
      >
        <BadgeCheck className="text-green-500" />
      </Title>
      <HoverEffect items={Skills} />
    </div>
  );
}
