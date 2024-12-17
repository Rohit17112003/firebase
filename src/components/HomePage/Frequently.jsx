import React from "react";
import { useRef } from "react";
import Slider from "react-slick";

const Frequently = () => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="sm:py-24 sm:pb-16 py-10">
        <h1 className="text-black sm:text-[3rem] text-[1.6rem]">
          Frequently Asked Questions
        </h1>
        <p className="text-black sm:text-[0.9rem] text-[0.7rem]">
          Find answers to common questions about Estateins services, property
          listings, and the real estate process. We are here to provide clarity
          and assist you every step of the way.
        </p>
      </div>

      <div className="max-w-full">
        <Slider
          {...settings}
          ref={sliderRef}
          className="max-w-[61rem] mt-5 outline-none overflow-x-hidden gap-5"
        >
          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="#">
              <img
                class="w-full h-[300px] object-cover"
                src="https://i.ibb.co/KWb6Pf4/Screenshot-2023-09-15-12-53-38-80-6012fa4d4ddec268fc5c7112cbb265e7.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="#">
              <img
                class="w-full h-[300px] object-cover"
                src="https://i.ibb.co/KWb6Pf4/Screenshot-2023-09-15-12-53-38-80-6012fa4d4ddec268fc5c7112cbb265e7.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="#">
              <img
                class="w-full h-[300px] object-cover"
                src="https://i.ibb.co/KWb6Pf4/Screenshot-2023-09-15-12-53-38-80-6012fa4d4ddec268fc5c7112cbb265e7.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Slider>

        <div>
          <hr className=" border-solid border-[#292828] sm:mt-8 mt-6" />

          <div className="text-black flex justify-between gap-2 mt-3">
            <div>
              <button className="text-white text-left sm:hidden block rounded-md bg-[#1A1A1A] border border-[#292828] py-3 items-center px-4">
                View All Properties
              </button>
            </div>
            <div className="flex gap-3">
              <div>
                <button
                  className="border border-[#292828] h-14 w-14 rounded-full p-3"
                  onClick={handlePrev}
                >
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="25px"
                      width="30px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div>
                <button
                  className="border border-[#292828] h-14 w-14 rounded-full p-3"
                  onClick={handleNext}
                >
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="25px"
                      width="30px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frequently;
