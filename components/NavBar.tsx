"use client";

import {
  RiBriefcaseLine,
  RiCopyrightLine,
  RiHome5Line,
  RiProjectorLine,
  RiUserLine,
} from "@remixicon/react";
import Link from "next/link";

function NavBar({ id }: { id: string }) {
  return (
    <div className="sm:w-[70px] w-[50px] h-screen fixed left-0 top-0 flex flex-col bg-zinc-50 dark:bg-zinc-800 z-30 justify-between border-r border-gray-200 px-2 sm:px-4 py-5">
      <Link href="">
        <span className="text-3xl font-semibold text-red-400">P</span>.
        <span className="block w-min rotate-90 dark:text-white transition-colors origin-bottom text-[12px] font-semibold">
          Hart
        </span>
      </Link>
      <div className="flex flex-col gap-4 sm:gap-y-4">
        <Link className="group flex items-center flex-col" href="#home">
          <span
            className={`text-2xl transition-all ${
              id === "home"
                ? "text-red-500 group-hover:scale-110"
                : "text-yellow-600 group-hover:scale-125"
            }`}
          >
            <RiHome5Line />
          </span>
          <span
            className={`text-[8px] hidden dark:text-white tracking-wide -translate-x-2 opacity-0 group-hover:block group-hover:translate-x-0 group-hover:opacity-100 duration-300 transition-all text-center
              ${id === "home" ? " translate-x-0 opacity-100 block" : "hidden"}`}
          >
            Home
          </span>
        </Link>
        <Link className="group flex items-center flex-col" href="#about">
          <span
            className={`text-2xl transition-all ${
              id === "about"
                ? "text-red-500 group-hover:scale-110"
                : "text-yellow-600 group-hover:scale-125"
            }`}
          >
            <RiUserLine />
          </span>
          <span
            className={`text-[8px] tracking-wide dark:text-white group-hover:block -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 transition-all text-center
              ${
                id === "about" ? " translate-x-0 opacity-100 block" : "hidden"
              }`}
          >
            About
          </span>
        </Link>
        <Link className="group flex items-center flex-col" href="#skills">
          <span
            className={`text-2xl transition-all ${
              id === "skills"
                ? "text-red-500 group-hover:scale-110"
                : "text-yellow-600 group-hover:scale-125"
            }`}
          >
            <RiBriefcaseLine />
          </span>
          <span
            className={`text-[8px] tracking-wide dark:text-white -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 transition-all text-center group-hover:block
              ${
                id === "skills" ? " translate-x-0 opacity-100 block" : "hidden"
              }`}
          >
            Skills
          </span>
        </Link>
        <Link className="group flex items-center flex-col" href="#projects">
          <span
            className={`text-2xl transition-all ${
              id === "projects"
                ? "text-red-500 group-hover:scale-110"
                : "text-yellow-600 group-hover:scale-125"
            }`}
          >
            <RiProjectorLine />
          </span>
          <span
            className={`text-[8px] tracking-wide dark:text-white -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 transition-all text-center group-hover:block
              ${
                id === "projects" ? "translate-x-0 opacity-100 block" : "hidden"
              }`}
          >
            Projects
          </span>
        </Link>
      </div>
      <p className="flex text-[10px] items-center justify-center text-gray-500 mt-6">
        <span className="absolute left-1/2 w-max flex dark:text-gray-200 transition-colors items-center -rotate-90 origin-bottom-left tracking-wide">
          <RiCopyrightLine /> 2022 - {new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
}

export default NavBar;
