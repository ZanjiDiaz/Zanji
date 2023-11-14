import React from "react";
import "../assets/css/hero.css";
import Zanji from "../assets/img/zanji.jpeg";
const hero = () => {
  return (
    <div
      className="bg-pattern px-[5vh] w-screen h-screen m-auto lg:flex"
      id="home"
      onLoad={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className="h-1/2 pt-[10vh] lg:pt-[35vh] lg:relative items-center flex justify-center font-black lg:w-screen lg:h-screen lg:items-start">
        <p className=" flex font-black text-5xl lg:text-7xl text-[#feeed8] opacity-10 absolute -translate-y-28 lg:translate-x-[3vw] lg:-translate-y-16">
          Front-End Dev
        </p>
        <p className="intro lg:text-justify">
          <span className="text-white drop-shadow-md text-center text-4xl lg:text-7xl">
            Hi! I'm Jizan
          </span>
          <br />
          <span className="text-[#ffc270] font-light text-justify text-md lg:text-xl">
            Aspiring front-end web developer actively seeking opportunities to
            code and shape the future.
          </span>
        </p>
      </div>
      <div className="h-1/2 items-center flex justify-center lg:pt-[5vh] lg:w-screen lg:h-screen">
        <div className="magicpattern w-full h-full lg:w-3/5 lg:h-3/5"></div>
      </div>
      <div className="scroll-to-projects hidden lg:hidden lg:justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default hero;
