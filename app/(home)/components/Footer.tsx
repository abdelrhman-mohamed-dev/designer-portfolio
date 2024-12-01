import { CodeXml } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SiBehance, SiGithub, SiLinkedin } from "react-icons/si";
import { FaPenNib } from "react-icons/fa6";


export default function Footer() {
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
    <div className="border-t mt-10">
      <div className="py-10 flex flex-col gap-5 justify-between items-center">
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 flex items-center gap-1">
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
      </div>
    </div>
  );
}
