import React from "react";
import "../assets/css/projects.css";
import Web from "../assets/img/skill-photo.jpg";
import Netflix from "../assets/img/netflix2.jpg";
import tailwindcss from "../assets/img/tailwindcss.png";
import Unity from "../assets/img/unityproj.png";
import geospy from "../assets/img/geospy.png";
import cpu from "../assets/img/cpu.png";
const ProjectBox = (props: any) => {
  return (
    <>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="group relative block w-3/4 h-[15vh] bg-[#001220] lg:w-[17.5vw] lg:h-full lg:rounded-lg"
      >
        <img
          alt="Developer"
          src={props.image}
          className="absolute inset-0 h-full rounded-lg w-full object-cover object-top transition-opacity opacity-50 group-hover:opacity-20 lg:rounded-lg lg:opacity-75"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
            {props.type}
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">
            {props.title}
          </p>
          <p className="text-md text-white sm:text-md">{props.sub}</p>

          <div className="hidden lg:block mt-24 sm:mt-48 lg:mt-32">
            <div className=" translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 ">
              <p className="text-sm text-white text-center">{props.details}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};
const projects = () => {
  return (
    <div
      className="h-screen bg-[#001220] lg:flex lg:flex-col items-center justify-evenly shadow-md bg-projects"
      id="projects"
    >
      <div className="flex w-screen justify-center items-center py-[5vh]">
        <p>
          <span className="text-white font-[700] text-center text-4xl lg:text-7xl">
            Projects
          </span>
        </p>
      </div>
      <div className="project flex flex-col lg:flex-row justify-center items-center gap-5 pb-[5vh]">
        <ProjectBox
          title="Endless"
          type="Mobile Game"
          image={Unity}
          details="Endless is a Unity game where you dodge blocks endlessly, aiming for high scores in a captivating and polished gaming experience."
          link="https://www.mediafire.com/file/abehelndqco60ma/Endless_build_6.21.21.apk/file"
        />
        <ProjectBox
          title="Sample Company Website"
          type="Website"
          image={tailwindcss}
          link="https://zanjidiaz.github.io/ReactJS-Tailwind/"
          details="This is a sample company website that I have made using ReactJS and TailwindCSS."
        />
        <ProjectBox
          title="GeoSpy"
          type="Browser Game"
          image={geospy}
          details="GeoSpy is a free version of the popular game 'GeoGuessr', I made this so that people who can't afford the monthly subscription of GeoGuessr can experience the game for FREE!."
          link="https://zanjidiaz.github.io/GeoSpy/"
        />
        <ProjectBox
          title="Netflix Clone"
          type="Web App"
          image={Netflix}
          sub="(Profile Section Only)"
          link="https://zanjidiaz.github.io/netflix-app/"
          details="Netflix is a leading subscription-based streaming service offering a vast array of movies, 
          TV shows, documentaries, and original content since its digital transition in 2007."
        />
        <ProjectBox
          title="CPU Scheduling"
          type="C#"
          image={cpu}
          details="Our project is a C# implementation of the Round Robin CPU scheduling algorithm, ensuring equitable CPU time allocation for multitasking processes."
          link="https://www.mediafire.com/file/fl5t3zjoqcmug9i/CPU_Scheduling_-_Round_Robin.rar/file"
        />
      </div>
    </div>
  );
};

export default projects;
