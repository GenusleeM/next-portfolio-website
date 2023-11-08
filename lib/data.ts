import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bcs Hons Computer Science",
    location: "University Of Zimbabwe, ZW",
    description:
      "I graduated with a FIRST CLASS DEGREE after 4 years of studying. I immediately found a job as a software developer.",
    icon: React.createElement(LuGraduationCap),
    date: "June, 2023",
  },
  {
    title: "Software Developer Intern",
    location: "39 Van Praagh Ave, Milton Park, Harare, Zimbabwe",
    description:
      "I worked as an intern software developer for a year at Fanset International. I gained skills to work as a full stack software developer using MERN stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 - Aug 2022",
  },
  {
    title: "Full-Stack Software Developer",
    location: "39 Van Praagh Ave, Milton Park, Harare, Zimbabwe",
    description:
      "I'm now employed as a full-stack developer at the Fanset International Group of Companies. My stack includes React, Next.js, TypeScript, Node Js, Spring boot, Flutter, MYSQL, POSTGRES, and MongoDB.",
    icon: React.createElement(FaReact),
    date: "Sept 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Murimi 247",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Famba 247",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "RtnLoad",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Springboot",
  "Flutter",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MYSQL",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
] as const;
