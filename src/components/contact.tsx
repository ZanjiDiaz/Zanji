import React from "react";
import "../assets/css/contact.css";
import phone from "../assets/img/phone.png";
import mail from "../assets/img/mail.png";
import socials from "../assets/img/socials.png";
import Barong from "../assets/img/barong.jpg";
import Icon from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";

const contact = () => {
  return (
    <div
      className="bg-contact h-screen w-screen flex flex-col items-center justify-evenly shadow-md"
      id="contact"
    >
      <div className="flex w-screen justify-center items-start">
        <p>
          <span className="text-[#001220] font-[700] text-center text-4xl lg:text-7xl">
            Contact Me
          </span>
        </p>
      </div>
      <div className="w-screen flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="bg-[#001220] shadow-md w-3/4 h-[25vh] lg:w-[25vw] lg:h-[50vh] rounded-lg ">
          <div className="h-1/4 w-full flex justify-center items-center my-2">
            <h1 className="text-center text-white font-bold text-xl lg:text-3xl">
              Socials
            </h1>
          </div>
          <div className="w-full">
            <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700" />
          </div>
          <div className="h-1/2 w-full flex justify-center items-center">
            <div>
              <Icon path={mdiLinkedin} size={1} />
            </div>
          </div>
        </div>
        <div className="bg-[#f5fe6d] shadow-md w-3/4 h-[25vh] lg:w-[25vw] lg:h-[50vh] rounded-lg ">
          <div className="h-1/4 w-full flex justify-center items-center my-2">
            <h1 className="text-center text-[#001220] font-bold text-xl lg:text-3xl">
              Phone
            </h1>
          </div>
          <div className="w-full">
            <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700" />
          </div>
          <div className="h-1/2 w-full">
            <div></div>
          </div>
        </div>
        <div className="bg-[#001220] shadow-md w-3/4 h-[25vh] lg:w-[25vw] lg:h-[50vh] rounded-lg ">
          <div className="h-1/4 w-full flex justify-center items-center my-2">
            <h1 className="text-center text-white font-bold text-xl lg:text-3xl">
              Email
            </h1>
          </div>
          <div className="w-full">
            <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700" />
          </div>
          <div className="h-1/2 w-full">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
