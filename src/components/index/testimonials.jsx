import React from "react";
import quote from "../../assets/image/quote.png";
import company1 from "../../assets/image/company1.png";
import JohnDoe1 from "../../assets/image/johnDoe1.jpg";
import react from "../../assets/image/logos-software/react.png";
import JohnDoe2 from "../../assets/image/johnDoe2.jpg";
import JohnDoe3 from "../../assets/image/johnDoe3.jpg";
import company2 from "../../assets/image/company2.png";
import company3 from "../../assets/image/company3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="dark:bg-darkBG">
      <Slider {...settings}>
        <div>
          <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-darkBG">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),black)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center dark:bg-darkBG dark:shadow-darkBG dark:ring-lightBG/5" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <img className="mx-auto h-12" src={company1} alt="" />
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 dark:text-lightBG">
                  <p>
                    “Jizan is an exceptional front-end developer with a remarkable ability to turn complex designs into clean, functional, and visually appealing interfaces. Their expertise in HTML, CSS, Bootstrap, JavaScript, and JQuery consistently exceeds our expectations.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src={JohnDoe1}
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900 dark:text-lightBG">
                      John Doe
                    </div>
                    <svg
                      viewBox="0 0 2 2"
                      width={3}
                      height={3}
                      aria-hidden="true"
                      className="fill-gray-900 dark:fill-lightBG"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600 dark:text-lightBG">
                    Sample Only
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
        <div>
          <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-darkBG">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),black)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center dark:bg-darkBG dark:shadow-darkBG dark:ring-lightBG/5" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <img className="mx-auto h-12" src={company2} alt="" />
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 dark:text-lightBG">
                  <p>
                    “Jizan brings creativity and technical skill to every project. Their keen eye for design and understanding of user experience is evident in the seamless, intuitive interfaces they create. They are a true asset to any development team.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src={JohnDoe2}
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900 dark:text-lightBG">
                      John Doe
                    </div>
                    <svg
                      viewBox="0 0 2 2"
                      width={3}
                      height={3}
                      aria-hidden="true"
                      className="fill-gray-900 dark:fill-lightBG"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600 dark:text-lightBG">
                    Sample Only
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
        <div>
          <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-darkBG">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),black)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center dark:bg-darkBG dark:shadow-darkBG dark:ring-lightBG/5" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <img className="mx-auto h-12" src={company3} alt="" />
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 dark:text-lightBG">
                  <p>
                    “Jizan's ability to create user-friendly, responsive interfaces has greatly enhanced our products. Their use of industry-standard tools ensures our applications are modern and efficient. Jizan's dedication and collaborative spirit make them a standout front-end developer.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src={JohnDoe3}
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900 dark:text-lightBG">
                      John Doe
                    </div>
                    <svg
                      viewBox="0 0 2 2"
                      width={3}
                      height={3}
                      aria-hidden="true"
                      className="fill-gray-900 dark:fill-lightBG"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600 dark:text-lightBG">
                    Sample Only
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
      </Slider>
    </div>
  );
};

export default testimonials;
