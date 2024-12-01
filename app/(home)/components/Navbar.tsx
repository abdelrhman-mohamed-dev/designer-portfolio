import Link from "next/link";
import React from "react";

import { SiGithub, SiLinkedin, SiBehance } from "react-icons/si";
import { FaPenNib } from "react-icons/fa6";

import { CodeXml } from "lucide-react";

export default function Navbar() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/mustafa-el-hoseny-1a300528a/",
      label: "Linkedin",
      icon: SiLinkedin,
    },
    {
      link: "https://www.behance.net/mustafaelhosenyy",
      label: "Behance",
      icon: SiBehance,
    },
  ];
  return (
    <nav className="py-10 flex justify-between items-center animate-move-down">
      <h1 className="cursor-pointer text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 flex gap-2 items-center">
        {`Mustafa`} <FaPenNib className="h-6 w-6 text-green-500" />
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <Link
              key={social.label}
              href={social.link}
              aria-label={social.label}
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
