import React from "react";

const content = () => {
  return (
    <>
      {" "}
      <section className="relative bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24 dark:bg-darkBG">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-darkLight">
              How we started
            </p>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-lightBG">
              Our story
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8 dark:text-darkLight">
              Why would you choose our Company?
            </p>
          </div>
          <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-full lg:grid-cols-4">
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)] dark:bg-dark"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900 dark:bg-dark dark:border-0 dark:group-hover:text-lightBG dark:group-hover:bg-darkLight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 group-hover:text-white dark:text-lightBG"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 dark:text-lightBG">
                  What, When and Where
                </h3>
                <h4 className="mt-2 text-left text-gray-700 text-sm dark:text-darkLight">
                John joined WebTech Solutions as a Front-End Developer in January 2018, driven by his passion for crafting intuitive user interfaces. His decision stemmed from the desire to contribute to innovative web projects and enhance user experiences through cutting-edge design techniques.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)] dark:bg-dark"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900 dark:bg-dark dark:border-0 dark:group-hover:text-lightBG dark:group-hover:bg-darkLight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-600 group-hover:text-white dark:text-lightBG"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 dark:text-lightBG">
                  The problem
                </h3>
                <h4 className="mt-2 text-left text-gray-700 text-sm dark:text-darkLight">
                Encountering a common challenge upon joining, John identified the lack of responsiveness in the company's websites across different devices. To address this, he conducted thorough research and implemented responsive design principles using HTML, CSS, and Bootstrap, aiming to elevate user experiences and bolster client satisfaction.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)] dark:bg-dark"
                aria-hidden="true"
              ></span>
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900 dark:bg-dark dark:border-0 dark:group-hover:text-lightBG dark:group-hover:bg-darkLight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-5 w-5 text-gray-600 group-hover:text-white dark:text-lightBG"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 dark:text-lightBG">
                  The solution
                </h3>
                <h4 className="mt-2 text-left text-gray-700 text-sm dark:text-darkLight">
                Implementing a strategic solution, John revamped the company's websites by leveraging his expertise in HTML, CSS, and Bootstrap. His focus on responsive design principles ensured seamless adaptation to varying screen sizes and device types, optimizing performance and enhancing usability.
                </h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900 dark:bg-dark dark:border-0 dark:group-hover:text-lightBG dark:group-hover:bg-darkLight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-5 w-5 text-gray-600 group-hover:text-white dark:text-lightBG"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 dark:text-lightBG">
                  Present
                </h3>
                <h4 className="mt-2 text-left text-gray-700 text-sm dark:text-darkLight">
                Continuously honing his skills, John remains dedicated to staying updated on the latest trends and technologies in front-end development. His unwavering commitment and expertise play a pivotal role in WebTech Solutions' success, consistently exceeding client expectations and driving user engagement with exceptional web designs.
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className="bg-white py-24 sm:py-32 dark:bg-darkBG dark:border-y-[.1rem] dark:border-dark">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-lightBG">
              Meet our team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-darkLight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              risus nec nunc cursus ornare. Proin molestie libero a auctor
              euismod.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                ></img>
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-lightBG">
                    Jane Doe
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-primary dark:text-darkLight">
                    CEO
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                ></img>
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-lightBG">
                    Jizan Villafuerte
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-primary dark:text-darkLight">
                    Front-End Developer
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default content;
