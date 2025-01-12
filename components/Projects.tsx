"use client";

import { animate, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Project from "./ui/Project";

const projectsData = [
  {
    name: "OEI Asset Management",
    description: "",
    url: "/projects/oeiassetmanagement.jpeg",
    tech: ["ReactJS", "TailwindCSS", "TypeScript"],
    link: "https://oeiassetmanagement.netlify.app",
  },
  {
    name: "OEI Loan Application",
    description: "",
    url: "/projects/oeiinv.jpeg",
    tech: ["ReactJS", "TailwindCSS", "JavaScript"],
    link: "https://omegaemirateinv.netlify.app",
  },
  {
    name: "WiseInvestorX Crypto and Giftcard Sales Platform (Suitable for only mobile screens)",
    description: "",
    url: "/projects/wiseinvestorx.jpeg",
    tech: ["ReactJS", "TailwindCSS", "JavaScript"],
    link: "https://wise-investor-x.netlify.app",
  },
  {
    name: "Ecurrency Landing Page",
    description: "",
    url: "/projects/ecurrency.jpeg",
    tech: ["ReactJS", "TailwindCSS", "TypeScript"],
    link: "https://myecurrencyproject.netlify.app",
    github: "https://github.com/PeeroDemba/myecurrency",
  },
  {
    name: "Customer Relationship Management",
    description: "",
    url: "/projects/crm.jpeg",
    tech: ["ReactJS", "TailwindCSS", "TypeScript"],
    link: "https://crm-peterhart.netlify.app",
  },
  {
    name: "School Report Card",
    description: "",
    url: "/projects/schoolresult.jpeg",
    tech: ["HTML", "CSS", "SASS"],
    link: "https://school-result.netlify.app",
    github: "https://github.com/PeeroDemba/school-result",
  },
  {
    name: "Advice Generator Application",
    description: "",
    url: "/projects/advice.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://guileless-biscotti-eac5df.netlify.app",
    github: "https://github.com/PeeroDemba/Advice-Generator-App",
  },
  {
    name: "Age Calculator Application",
    description: "",
    url: "/projects/agecalculator.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://guileless-ganache-be9314.netlify.app",
    github: "https://github.com/PeeroDemba/Age-Calculator-App",
  },
  {
    name: "Base Apparel Landing Page",
    description: "",
    url: "/projects/baseapparel.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://chimerical-pony-884f3d.netlify.app",
    github: "https://github.com/PeeroDemba/Base-Apparel-Coming-Soon",
  },
  {
    name: "Blogr Landing Page",
    description: "",
    url: "/projects/blogr.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://quiet-chimera-2c4888.netlify.app",
    github: "https://github.com/PeeroDemba/Blogr-Landing-Page",
  },
  {
    name: "Bootcamp Testimonial Slider",
    description: "",
    url: "/projects/bootcamptestimonial.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://superb-pasca-a99c76.netlify.app",
    github: "https://github.com/PeeroDemba/Coding-Bootcamp-Testimonial-Slider",
  },
  {
    name: "Clipboard Landing Page",
    description: "",
    url: "/projects/clipboard.jpeg",
    tech: ["HTML", "CSS", "SASS"],
    link: "https://funny-crostata-fc5330.netlify.app",
    github: "https://github.com/PeeroDemba/Clipboard-Landing-Page",
  },
  {
    name: "Crowdfunding Product Page",
    description: "",
    url: "/projects/crowdfund.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://regal-pithivier-b094b1.netlify.app",
    github: "https://github.com/PeeroDemba/Crowdfunding-Product-Page",
  },
  {
    name: "Fylo Landing Page 1",
    description: "",
    url: "/projects/fylo1.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://bright-fairy-be4400.netlify.app",
    github:
      "https://github.com/PeeroDemba/Fylo-Landing-Page-with-Two-Column-Layout",
  },
  {
    name: "Fylo Landing Page 2",
    description: "",
    url: "/projects/fylo2.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://strong-caramel-b271ed.netlify.app",
    github: "https://github.com/PeeroDemba/Fylo-Dark-Theme-Landing-Page",
  },
  {
    name: "Huddle Landing Page 1",
    description: "",
    url: "/projects/huddle1.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://aquamarine-cheesecake-303141.netlify.app",
    github:
      "https://github.com/PeeroDemba/Huddle-Landing-Page-with-Curved-Sections",
  },
  {
    name: "Huddle Landing Page 2",
    description: "",
    url: "/projects/huddle2.jpeg",
    tech: ["HTML", "CSS", "SASS"],
    link: "https://zesty-parfait-e74a2a.netlify.app",
    github:
      "https://github.com/PeeroDemba/Huddle-Landing-Page-with-Alternating-Feature-Blocks",
  },
  {
    name: "Insure Landing Page",
    description: "",
    url: "/projects/insure.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://superlative-lokum-af6926.netlify.app",
  },
  {
    name: "Interactive Card Details Form",
    description: "",
    url: "/projects/interactivecard.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://superlative-kelpie-e208bb.netlify.app",
    github: "https://github.com/PeeroDemba/Insure-Landing-Page",
  },
  {
    name: "Interactive Pricing Component",
    description: "",
    url: "/projects/interactivepricing.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://scintillating-pastelito-89af5d.netlify.app",
    github: "https://github.com/PeeroDemba/Interactive-Pricing-Component",
  },
  {
    name: "Intro Component",
    description: "",
    url: "/projects/introcomponent.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://bejewelled-phoenix-643b26.netlify.app",
    github: "https://github.com/PeeroDemba/Intro-Component-with-Signup-Form",
  },
  {
    name: "Intro Section",
    description: "",
    url: "/projects/introsection.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://rococo-jalebi-6eb2f8.netlify.app",
    github:
      "https://github.com/PeeroDemba/Intro-Section-with-Dropdown-Navigation",
  },
  {
    name: "Loopstudios Landing Page",
    description: "",
    url: "/projects/loopstudios.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://ephemeral-nasturtium-f02e75.netlify.app",
    github: "https://github.com/PeeroDemba/Loopstudios-Landing-Page",
  },
  {
    name: "Naval Battle Game",
    description: "",
    url: "/projects/navalbattle.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://navalbattle.netlify.app",
    github: "https://github.com/PeeroDemba/Naval-Battle",
  },
  {
    name: "News Homepage",
    description: "",
    url: "/projects/newshomepage.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://whimsical-khapse-0476c3.netlify.app",
    github: "https://github.com/PeeroDemba/News-Homepage",
  },
  {
    name: "Project Tracking Intro Component",
    description: "",
    url: "/projects/projecttracking.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://grand-hamster-b33407.netlify.app",
    github: "https://github.com/PeeroDemba/Project-Tracking-Intro-Component",
  },
  {
    name: "Social Media Dashboard",
    description: "",
    url: "/projects/socialmedia.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://shiny-concha-7997b7.netlify.app",
    github:
      "https://github.com/PeeroDemba/Social-Media-Dashboard-with-Theme-Switcher",
  },
  {
    name: "Social Proof Section",
    description: "",
    url: "/projects/socialproof.jpeg",
    tech: ["HTML", "CSS", "SASS"],
    link: "https://unrivaled-semifreddo-19aae7.netlify.app",
    github: "https://github.com/PeeroDemba/Social-Proof-Section",
  },
  {
    name: "Sunnyside Agency Landing Page",
    description: "",
    url: "/projects/sunnysideagency.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://bespoke-toffee-a4546a.netlify.app",
    github: "https://github.com/PeeroDemba/Sunnyside-Agency-Landing-Page",
  },
  {
    name: "Tip Calculator Application",
    description: "",
    url: "/projects/tipcalculator.jpeg",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    link: "https://marvelous-biscuit-07ba9e.netlify.app",
    github: "https://github.com/PeeroDemba/Tip-Calculator-App",
  },
  {
    name: "Personal Portfolio Application",
    description: "",
    url: "/projects/portfolio.jpeg",
    tech: ["NextJS", "TailwindCSS", "TypeScript", "Framer Motion"],
    link: "https://peter-jonathan-hart.vercel.app",
    github: "https://github.com/PeeroDemba/portfolio",
  },
];

const projectButtons = [
  "All",
  "HTML",
  "CSS",
  "SASS",
  "TailwindCSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "Framer Motion",
];

function Projects() {
  const [tech, setTech] = useState("All");
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const buttonsRef = useRef<HTMLButtonElement[]>([]);

  const handleClick = useCallback(() => {
    animate(buttonsRef.current[prevIndex.current], { opacity: 0.5, scale: 1 });
    animate(buttonsRef.current[index], { opacity: 1, scale: 1.2 });
  }, [index]);

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index, handleClick]);

  return (
    <div id="projects" className="min-h-screen py-20">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-600 dark:text-white transition-colors mb-6 self-start">
        Projects
      </h2>
      <div className="flex flex-wrap items-center justify-between gap-4 py-10">
        {projectButtons.map((e, i) => (
          <motion.button
            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
            key={i}
            ref={(el) => {
              if (el !== null) {
                buttonsRef.current.push(el);
              }
            }}
            onClick={() => {
              setTech(e);
              setIndex(i);
            }}
            className="border text-gray-400 border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wide"
          >
            {e}
          </motion.button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {projectsData
          .filter((e) => {
            return e.tech.some((item) =>
              tech === "All" ? true : item === tech
            );
          })
          .map((e, i) => (
            <motion.div key={i} layout>
              <Project data={e} index={index} />
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
