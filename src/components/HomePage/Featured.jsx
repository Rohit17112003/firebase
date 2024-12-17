import Slider from "react-slick";
import React from "react";
import { useRef } from "react";

const Featured = () => {
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
      <div className="shadow-sm -mt-12 sm:mt-0">
        <div className="sm:py-20 py-10">
          <h1 className="text-black sm:text-[3rem] text-[1.7rem]">
            Featured Properties
          </h1>

          <div className="flex justify-between">
            <p className="text-black sm:text-[0.8rem] text-[0.7rem] ">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available <br></br>through Estatein. Click &quot;View
              Details&quot; for more information.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Slider
          {...settings}
          ref={sliderRef}
          className="max-w-[61rem] mt-5 outline-none overflow-x-hidden"
        >
          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/DWbWQGp">
              <img
                src="https://i.ibb.co/yPRPqhS/IMG-20240818-WA0067.jpg"
                alt="IMG-20240818-WA0067"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/cYSTR2N">
              <img
                src="https://i.ibb.co/GH4PGCV/IMG-20240818-WA0122.jpg"
                alt="IMG-20240818-WA0122"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/GPL64Tk">
              <img
                src="https://i.ibb.co/bdZ0MJL/IMG-20240818-WA0064.jpg"
                alt="IMG-20240818-WA0064"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/54QYWFr">
              <img
                src="https://i.ibb.co/mTnvC89/IMG-20240818-WA0042.jpg"
                alt="IMG-20240818-WA0042"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/QHTGL3Q">
              <img
                src="https://i.ibb.co/ZgFC5pX/IMG-20240818-WA0119.jpg"
                alt="IMG-20240818-WA0119"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/rfR7VXN">
              <img
                src="https://i.ibb.co/3Y9rnPQ/IMG-20240818-WA0046.jpg"
                alt="IMG-20240818-WA0046"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/YQqMNPx">
              <img
                src="https://i.ibb.co/H4ksKBj/IMG-20240818-WA0121.jpg"
                alt="IMG-20240818-WA0121"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/8X8GpVx">
              <img
                src="https://i.ibb.co/BwsvxR6/IMG-20240818-WA0052.jpg"
                alt="IMG-20240818-WA0052"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/7zsPP8J">
              <img
                src="https://i.ibb.co/sP8nnkv/IMG-20240818-WA0031.jpg"
                alt="IMG-20240818-WA0031"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/RNvwpCC">
              <img
                src="https://i.ibb.co/f91wYCC/IMG-20240818-WA0040.jpg"
                alt="IMG-20240818-WA0040"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/gJvC1nm">
              <img
                src="https://i.ibb.co/M78LTXZ/IMG-20240818-WA0123.jpg"
                alt="IMG-20240818-WA0123"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/db1BnY1">
              <img
                src="https://i.ibb.co/yhG0LjG/IMG-20240818-WA0105.jpg"
                alt="IMG-20240818-WA0105"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/0YfQL0M">
              <img
                src="https://i.ibb.co/YftbS5k/IMG-20240818-WA0039.jpg"
                alt="IMG-20240818-WA0039"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/thTbjSw">
              <img
                src="https://i.ibb.co/N3dLDXg/IMG-20240818-WA0033.jpg"
                alt="IMG-20240818-WA0033"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/Rbn5vXR">
              <img
                src="https://i.ibb.co/fFRc13j/IMG-20240818-WA0061.jpg"
                alt="IMG-20240818-WA0061"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/hYvvsGw">
              <img
                src="https://i.ibb.co/41xxWb3/IMG-20240818-WA0063.jpg"
                alt="IMG-20240818-WA0063"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/4KhGj1z">
              <img
                src="https://i.ibb.co/pbY83hc/IMG-20240818-WA0056.jpg"
                alt="IMG-20240818-WA0056"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/7p8yZrK">
              <img
                src="https://i.ibb.co/ykGsZgq/IMG-20240818-WA0054.jpg"
                alt="IMG-20240818-WA0054"
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

export default Featured;
