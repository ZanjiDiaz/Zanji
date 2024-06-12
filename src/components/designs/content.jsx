import React from "react";
import { useRef } from "react";
import pic1 from "../../assets/image/promotional/1.jpg";
import pic2 from "../../assets/image/promotional/2.jpg";
import pic3 from "../../assets/image/promotional/3.jpg";
import pic4 from "../../assets/image/promotional/4.jpg";
import pic5 from "../../assets/image/promotional/5.jpg";
import pic6 from "../../assets/image/promotional/6.jpg";
import pic7 from "../../assets/image/promotional/7.jpg";
import pandemic from "../../assets/image/Screenshots/pandemic.png"

const Content = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const design = [
    {
      app: "The Pandemic",
      imgUrl: pandemic,
      description: "",
      link: "https://drive.google.com/file/d/1Dkyh1xbD9KUlZERJDVWKFFbf-7e680cY/view?usp=sharing",
      attName:"Jizan Villafuerte",
      role: "Lead developer/Designer",
    },
    // {
    //   app: "Travel Booking App",
    //   imgUrl: proto2,
    //   description: "",
    //   attLink: "https://www.freepik.com/free-vector/travel-booking-app-screens-collection_9440506.htm#fromView=search&page=1&position=4&uuid=f1dcf749-be4e-404f-8834-c2a9ad272e28",
    //   attName: "FreePik"
    // },
    // {
    //   app: "Go Cashless",
    //   imgUrl: proto3,
    //   description: "",
    //   attLink: "https://www.freepik.com/free-psd/go-cashless-website-template_18773710.htm#fromView=search&page=1&position=22&uuid=f1dcf749-be4e-404f-8834-c2a9ad272e28",
    //   attName: "FreePik"
    // },
  ];
  return (
    <>
      <div className="relative overflow-hidden bg-white dark:bg-darkBG">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-lightBG">
                Desktop Game
              </h1>
              <p className="mt-4 text-xl text-gray-500 dark:darkLight">
              With entry-level experience with Unity Game Engine. I have made a school project that uses C# for scripting.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src={pic1}
                            alt=""
                            className="h-full w-full object-fit object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={pic2}
                            alt=""
                            className="h-full w-full object-fit object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={pic4}
                            alt=""
                            className="h-full w-full object-fit object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={pic3}
                            alt=""
                            className="h-full w-full object-fit object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={pic5}
                            alt=""
                            className="h-full w-full object-fit object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={pic6}
                            alt=""
                            className="h-full w-full object-fit object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={pic7}
                            alt=""
                            className="h-full w-full object-fit object-center"
                          />
                        </div>
                      </div>
                      `
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleClick}
                  className="hidden rounded-md border border-transparent bg-primary px-8 py-3 text-center font-medium text-white hover:bg-secondary md:inline-block dark:bg-darkLight dark:text-dark dark:hover:bg-dark dark:hover:text-lightBG"
                >
                  See my game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-blue-50 dark:bg-darkBG dark:border-y-[.1rem] dark:border-dark"
        ref={ref}
      >
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary text-left md:text-center dark:text-darkLight">
              C# Scripting
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left md:text-center dark:text-lightBG">
              Unity Game Development
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left md:text-center dark:text-darkLight">
            With a fundamental understanding of Unity and proficiency in C# scripting, I can develop simple yet entertaining Unity games.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-1 xl:gap-x-8">
            {design.map((design) => (
              <div className="w-full h-full mt-6">
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                  <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800 ">
                    <img
                      src={design.imgUrl}
                      className="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl"
                      alt={design.app}
                    ></img>
                    <img
                      src={design.imgUrl}
                      className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
                      alt={design.app}
                    ></img>
                  </div>
                </div>
                <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                </div>
                <div className="flex items-center justify-center w-ful">
                 <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl dark:text-lightBG">
                    {design.app}
                  </h1>
                </div>
                <div className="flex items-center justify-center w-ful">
                  <h1 className=" text-md font-regular tracking-tight text-gray-400 sm:text-md lg:text-xl dark:text-lightBG">
                   {design.role}
                  </h1>
                
                </div>
                <div className="flex items-center justify-center w-ful">
                  <h1 className=" text-md font-medium tracking-tight text-gray-500 sm:text-md lg:text-xl dark:text-lightBG">
                    by {design.attName}
                  </h1>
                
                </div>
          
                <section className="text-gray-600 body-font ">
                  <div className="container px-5 mx-auto py-5">
                    <div className="flex flex-col gap-6 md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 ">
                      <a
                        target="_blank"
                        href={design.link}
                        className="bg-gray-100 border-2 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
                      >
                        <svg className="w-6 h-6" viewBox="-6.8887712 -3.69853465 81.96659882 46.80035628"  xmlns="http://www.w3.org/2000/svg"><path d="m20.7 8.3a51.47 51.47 0 0 1 9.34 1c2.9.55 5.85 1.56 8.83 1.55 2.28 0 4.12-1.6 4.1-3.53s-1.85-3.57-4.17-3.56a13.35 13.35 0 0 0 -3.9.65c.33-.23.66-.47 1-.68a26.14 26.14 0 0 1 15.1-3.68c5.6.26 11.46 2 15.8 5.72a19.9 19.9 0 0 1 6.62 17.82 19.75 19.75 0 0 1 -12.17 15.07 24 24 0 0 1 -14.45.52c-6.2-1.58-11.64-5-17.48-7.54a46.86 46.86 0 0 0 -10.57-2.68h.05a9 9 0 0 0 4.1-.7c1.74-.83 1.73-2.83.83-4.3-1.07-1.73-3.23-2.44-5.1-3a24.36 24.36 0 0 0 -10-.48 15.06 15.06 0 0 0 -6.83 2.52 5.67 5.67 0 0 0 -1.8 2.2c3.08-8.53 9.2-7.57 13-9.9a2.16 2.16 0 0 0 -1.57-3.94 7.24 7.24 0 0 0 -2.92 1.46l-.85.65s3.04-5.17 13.04-5.17z" fill="currentColor"/><path d="m23.64 23.78.06.06zm32.46-10.73c-4.08 0-5.76 2.57-10.18 5-7.65 4.18-12.2 2.4-12.2 2.62s3.1 1.53 10.7 5.22a27 27 0 0 0 11.73 3.15 8 8 0 1 0 0-16z" fill="#d3d3d3"/></svg>
                        <span className="ml-4 flex items-start flex-col leading-none">
                          <span className="text-xs text-gray-600 mb-1">
                            GET IT ON
                          </span>
                          <span className="title-font font-medium">
                            Google Drive
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </section>
      
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
