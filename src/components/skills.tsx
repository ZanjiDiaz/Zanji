import React from "react";
import "../assets/css/skills.css";
import { motion } from "framer-motion";
import Game from "../assets/img/game.png";
import Web from "../assets/img/web.png";

const SkillDiv = (props: any) => {
  return (
    <div className="bg-gradient p-1 mt-[2.5vh] h-full skillDiv rounded-lg lg:w-1/3 ">
      <div className="bg-white w-full h-full m-0 rounded-lg">
        <div className="flex h-1/2 lg:h-1/3 justify-center items-center lg:pt-[2.5vh]">
          <img
            src={props.image}
            alt=""
            className="w-1/3 lg:w-1/3 lg:mt-[5vh]"
          />
        </div>
        <div className="h-1/2 pb-[2.5vh] lg:h-2/3 lg:flex lg:flex-col lg:items-center lg:justify-center ">
          <h1 className="font-bold">{props.title}</h1>
          <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded my-2 dark:bg-gray-700" />
          <p className="px-5 text-[.75rem] lg:mt-[1.5vh] lg:text-justify lg:text-sm">
            {props.details}
          </p>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div
      className="skill px-[5vh] w-screen lg:w-screen lg:h-screen lg:flex lg:justify-center lg:items-center"
      id="skills"
    >
      <div className="h-1/2 pt-[5vh] items-center hidden lg:flex lg:justify-center font-black lg:w-screen lg:h-screen">
        <div className="box-shadow lg:ab lg:rounded-lg lg:w-2/3 lg:h-3/4 skill-photo lg:flex lg:items-end lg:text-white lg:font-normal">
          <a
            href="https://www.pexels.com/photo/man-in-black-shirt-sits-behind-desk-with-computers-2102416/"
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-lg credit w-full h-full"
          >
            Photo by Djordje Petrovic
          </a>
        </div>
      </div>
      <div className="h-1/2 py-[5vh] flex flex-col justify-center items-center lg:items-start lg:w-screen lg:h-screen">
        <p className="intro lg:text-justify">
          <span className="text-gradient text-center text-4xl lg:text-7xl">
            Skills
          </span>
          <br />
          <span className="text-details text-justify text-md lg:text-xl">
            Proficient in HTML, CSS, JavaScript, and Unity Game Development, I'm
            now diving into ReactJS for even greater possibilities.
          </span>
        </p>
        <div className="lg:flex lg:gap-20 lg:justify-start">
          <SkillDiv
            image={Web}
            title="Front-End Development"
            details="
            Front-end development designs and builds the user interface of websites and web applications."
          />
          <SkillDiv
            image={Game}
            title="Unity Game Dev"
            details="Unity is a popular cross-platform game development engine used to create 2D and 3D video games for various platforms."
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
