import React from "react";
import {
  BookOpenIcon,
  BoltIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid";
import promotion from "../../assets/image/promotional/myphoto.png";
const feat = [
  {
    name: "Bachelor's Degree: ",
    description:
      "I hold a Bachelor's degree in Information Technology Major in Network and Web Applications, obtained from Bataan Peninsula State University.",
    icon: AcademicCapIcon,
  },
  {
    name: "Fast Learner",
    description:
      "I'm naturally quick to learn, eagerly absorbing new skills and knowledge. This ability drives my passion for continuous growth and adaptability.",
    icon: BoltIcon,
  },
  {
    name: "Knowledge-seeker",
    description:
      "I'm a curious learner, motivated by a constant desire to grow. During my college days, I delved into game development, photo/video editing, and web development, nurturing my passion for diverse skills.",
    icon: BookOpenIcon,
  },
];

const Card = (props) => {
  return (
    <div className="transition-all duration-[.5s] hover:-translate-y-10 border-2 border-blue-200 h-full py-[2vh] rounded-xl flex flex-col gap-4 justify-center items-center w-3/4 lg:w-full">
      <img width="75" height="75" src={props.imgUrl} alt="web-design" />
      <h2 className="font-inter font-bold text-xl text-dark lg:text-2xl">
        {props.title}
      </h2>
      <p className="font-inter text-dark w-full text-center px-6 lg:px-10 lg:w-full">
        {props.desc}
      </p>
    </div>
  );
};
const features = () => {
  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-darkBG">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary dark:text-darkLight">
                  A brief introduction
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-lightBG">
                  Who is{" "}
                  <span className=" font-league font-bold  text-blue-300">
                    jizandev.
                  </span>{" "}
                  ?
                </p>
                <p className="mt-6 text-lg text-justify leading-8 text-gray-600 dark:text-darkLight">
                  I am Jizan Diaz Villafuerte, I hold a bachelor's degree in
                  Information Technology Major in Network and Web Application. I
                  am known to have a cheerful and pleasing personality.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none ">
                  {feat.map((feat) => (
                    <div key={feat.name} className="relative pl-9 text-left">
                      <dt className="inline font-semibold text-gray-900 dark:text-lightBG">
                        <feat.icon
                          className="absolute left-1 top-1 h-5 w-5 text-primary"
                          aria-hidden="true"
                        />
                        {feat.name}
                      </dt>{" "}
                      <dd className="inline dark:text-darkLight">
                        {feat.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-center bg-transparent border-none justify-center lg:justify-normal ">
              <img
                src={promotion}
                alt="Product showcase here"
                className=" max-w-max rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default features;
