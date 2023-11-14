import React, { useState } from "react";
import { useRef } from "react";
import "../assets/css/header.css";
import Project from "../components/projects";
const Header = () => {
  const [color, setColor] = useState(false);
  const changeHeader = () => {
    if (window.scrollY >= 150) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeHeader);
  const handleHome = () => {
    const home = document.getElementById("home");
    if (home) {
      // 👇 Will scroll smoothly to the top of the next section
      home.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSkills = () => {
    const skills = document.getElementById("skills");
    if (skills) {
      // 👇 Will scroll smoothly to the top of the next section
      skills.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleProjects = () => {
    const projects = document.getElementById("projects");
    if (projects) {
      // 👇 Will scroll smoothly to the top of the next section
      projects.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      // 👇 Will scroll smoothly to the top of the next section
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header className="hidden z-50 h-[7.5vh] m-auto fixed w-screen lg:flex justify-center">
        <ul
          className={
            color
              ? "w-full lg:mt-[2.5vh] h-full  rounded-lg flex justify-center items-center gap-5 lg:w-max header active"
              : "w-full h-full p-1 rounded-lg flex justify-center items-center gap-5 lg:w-max header"
          }
        >
          <div
            className={
              color
                ? "flex gap-10 p-5 bg-[#001220] rounded-lg justify-center items-center h-full w-full"
                : "flex gap-10 p-5 rounded-sm justify-center items-center h-full w-full "
            }
          >
            <li className="text-[1rem] lg:text-[1.25rem]" onClick={handleHome}>
              Home
            </li>
            <li className="text-[1em] lg:text-[1.25rem]" onClick={handleSkills}>
              Skills
            </li>
            <li
              className="text-[1rem] lg:text-[1.25rem]"
              onClick={handleProjects}
            >
              Projects
            </li>
            <li
              className="text-[1rem] lg:text-[1.25rem]"
              onClick={handleContact}
            >
              Contact
            </li>
          </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
