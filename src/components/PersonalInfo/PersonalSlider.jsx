import Slider from "react-slick";
import React from "react";
import { useRef } from "react";

const PersonalSlider = () => {
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
      <div className="shadow-sm -mt-6">
        <div className="sm:py-20 py-10">
          <h1 className="text-black sm:text-[3rem] text-[1.7rem]">
            PersonalSlider Properties
          </h1>

          <div className="flex justify-between">
            <p className="text-black sm:text-[0.8rem] text-[0.7rem] ">
              Explore our handpicked selection of PersonalSlider properties.
              Each listing offers a glimpse into exceptional homes and
              investments available <br></br>through Estatein. Click &quot;View
              Details&quot; for more information.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Slider
          {...settings}
          ref={sliderRef}
          className="max-w-[61rem] mt-0 outline-none overflow-x-hidden"
        >
          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/LvF5Wwv">
              <img
                src="https://i.ibb.co/vDFYG5D/1728696678860.jpg"
                alt="1728696678860"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/VQwLgmz">
              <img
                src="https://i.ibb.co/BrnfyNQ/1728697212024.jpg"
                alt="1728697212024"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/Pc4Wq4s">
              <img
                src="https://i.ibb.co/2vPMGP0/1728698237875.jpg"
                alt="1728698237875"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/qn0VXHZ">
              <img
                src="https://i.ibb.co/g7vhH0n/1728698628836.jpg"
                alt="1728698628836"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/h7KG7cZ">
              <img
                src="https://i.ibb.co/xCMnCYf/1728698876456.jpg"
                alt="1728698876456"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/WtkRR30">
              <img
                src="https://i.ibb.co/PQcVVYM/1728832168929.jpg"
                alt="1728832168929"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/BnFjCDJ">
              <img
                src="https://i.ibb.co/Z27KMsr/1728652826949.jpg"
                alt="1728652826949"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/Lg2hKN1">
              <img
                src="https://i.ibb.co/kDW6ZmX/1728697051496.jpg"
                alt="1728697051496"
                border="0"
              />
            </a>
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

export default PersonalSlider;
