"use client";

import { RiArrowLeftSFill, RiDownloadLine } from "@remixicon/react";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-gray-600 dark:text-white transition-colors mb-14 self-start">
        About Me
      </h2>
      <div className="w-full flex items-center justify-between md:justify-center">
        <Image
          src="/about-me.png"
          alt="About Image"
          width={300}
          height={300}
          className="w-[200px] lg:w-[300px] md:block hidden h-auto"
        />
        <div className="bg-zinc-100 relative p-5 text-justify rounded-xl max-w-[800px] dark:bg-zinc-700 transition-colors">
          <span className="absolute -left-5 top-20 scale-[3] text-zinc-100 hidden md:block dark:text-zinc-700 transition-colors">
            <RiArrowLeftSFill />
          </span>
          <p className="text-xs dark:text-white leading-8 font-light text-gray-700 first-letter:pl-3 lg:text-[18px] sm:text-[14px]">
            Hi, I&apos;m Peter, a web & mobile developer. I blend the technical
            skills of web and mobile development. I write code in HTML, CSS,
            SASS, TailwindCSS, JavaScript, TypeScript, React and NextJS to build
            functional and responsive websites, while also using React Native
            and Expo to build functional and responsive mobile applications. My
            role allows me to ensure that websites and mobile applications not
            only work well but also look great and provide an excellent user
            experience.
          </p>
          <a
            href="/PETER JONATHAN-HART RESUME.pdf"
            download
            className="w-max font-light hover:bg-red-500 transition-colors text-white flex items-center gap-x-2 rounded-full border border-gray-300 bg-red-400 px-3 py-2 mt-6"
          >
            <span>Download Resume</span>
            <span>
              <RiDownloadLine />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
