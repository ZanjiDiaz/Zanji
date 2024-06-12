import React from "react";
import logo from "../../assets/image/logos-software/logo-vertical.png";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
const footer = () => {
  return (
    <section className="py-10 w-screen bg-gray-50 sm:pt-16 lg:pt-24 dark:bg-darkBG dark:border-y-[.1rem] dark:border-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <h1 className=" font-league text-left font-bold text-xl text-gray-900 dark:text-lightBG">
              jizandev.
            </h1>

            <p className="text-left leading-relaxed text-gray-600 mt-7 dark:text-darkLight">
              Aspiring front-end web developer actively seeking opportunities to
              code and shape the future.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/jizanvillafuerte/"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-primary focus:bg-primary"
                >
                  <svg
                    className="w-3 h-3"
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 310 310"
                    fill="currentColor"
                  >
                    <g id="XMLID_801_">
                      <path
                        id="XMLID_802_"
                        d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
                      />
                      <path
                        id="XMLID_803_"
                        d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                      />
                      <path
                        id="XMLID_804_"
                        d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
                      />
                    </g>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://github.com/ZanjiDiaz"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-primary focus:bg-primary"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-left font-semibold tracking-widest text-gray-400 uppercase dark:text-lightBG">
              Projects
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/mobileapps"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary dark:text-darkLight dark:hover:text-dark"
                >
                  {" "}
                  Mobile Game{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/websites"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary dark:text-darkLight dark:hover:text-dark"
                >
                  {" "}
                  Websites{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/pcgame"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary dark:text-darkLight dark:hover:text-dark"
                >
                  {" "}
                  Desktop Game{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-left font-semibold tracking-widest text-gray-400 uppercase dark:text-lightBG">
              Support me
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  target="_blank"
                  href="https://buymeacoffee.com/jizandev"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary dark:text-darkLight dark:hover:text-dark"
                >
                  {" "}
                  Buy me a coffee{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <a
              href="mailto:diazjizan@gmail.com"
              className="inline-flex w-1/2 items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-primary rounded-md hover:bg-tertiary focus:bg-tertiary dark:bg-darkLight dark:text-darkBG dark:hover:bg-dark dark:hover:text-darkLight"
            >
              Hire me
            </a>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200 dark:ring-1 dark:ring-lightBG/5" />

        <p className="text-sm text-center text-gray-600 dark:text-darkLight">
          © Copyright 2024, All Rights Reserved by{" "}
          <span className="font-league font-bold text-gray-900 dark:text-lightBG">
            jizandev.
          </span>
        </p>
      </div>
    </section>
  );
};

export default footer;
