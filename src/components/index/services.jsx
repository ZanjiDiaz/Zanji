import React from "react";
import "../../assets/css/background.css";
import { FaReact, FaMicrosoft , FaUnity, FaLaptop } from "react-icons/fa";
import {
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  WindowIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Front-End Web Development",
    description: "I focus on web page creation, interactivity, and interface development using HTML, CSS, JavaScript, jQuery, ReactJS, and TailwindCSS.",
    icon: FaReact,
  },
  {
    name: "Game Development",
    description: "I possess basic skills in C# scripting and Unity for game development, focusing on creating interactive experiences.",
    icon: FaUnity, 
  },
  {
    name: "Microsoft Office Apps",
    description: "I am certified in Microsoft Word, Excel, and PowerPoint, proficient in utilizing these applications for document creation, data analysis, and presentation design.",
    icon: FaMicrosoft,
  },
  {
    name: "IT Support",
    description: "I have networking and basic to advanced troubleshooting skills, enabling me to diagnose and resolve technical issues efficiently, ensuring smooth operation of computer systems and networks.",
    icon: FaLaptop ,
  },
];
const services = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32 dark:bg-darkBG dark:border-y-[.1rem] dark:border-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary text-left md:text-center dark:text-darkLight">
              Skills
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left md:text-center dark:text-lightBG">
              Everything I know
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left md:text-center dark:text-darkLight">
            Most of the skills listed are entry-level, demonstrating my foundational knowledge and readiness to grow in the web development field.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16 text-left">
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-lightBG">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary ">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-darkLight">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
