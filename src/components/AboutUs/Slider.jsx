import React from "react";
import { useRef } from "react";
import Slider from "react-slick";

const AboutUsSlider = () => {
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
      <div className="max-w-full -mt-10 pb-14 sm:pb-28">
        <Slider
          {...settings}
          ref={sliderRef}
          className="max-w-[61rem] mt-5 outline-none overflow-x-hidden gap-5"
        >

<div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/h2fTQ23">
              <img
                src="https://i.ibb.co/BTNYWT0/IMG-20241218-WA0029.jpg"
                alt="IMG-20241218-WA0029"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/vdHbZmw">
              <img
                src="https://i.ibb.co/PWNRw4m/IMG-20241218-WA0030.jpg"
                alt="IMG-20241218-WA0030"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/1bBSN8H">
              <img
                src="https://i.ibb.co/3kVJbBt/IMG-20241218-WA0031.jpg"
                alt="IMG-20241218-WA0031"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/n82FKTB">
              <img
                src="https://i.ibb.co/Lhw3sMr/IMG-20241218-WA0032.jpg"
                alt="IMG-20241218-WA0032"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/4J61KRW">
              <img
                src="https://i.ibb.co/wY9cBhy/IMG-20241218-WA0034.jpg"
                alt="IMG-20241218-WA0034"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/3T4Mj10">
              <img
                src="https://i.ibb.co/rQFczkZ/IMG-20241218-WA0036.jpg"
                alt="IMG-20241218-WA0036"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/1d7VPxZ">
              <img
                src="https://i.ibb.co/pRbDMp2/IMG-20241218-WA0037.jpg"
                alt="IMG-20241218-WA0037"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/TRR1Gwy">
              <img
                src="https://i.ibb.co/vmmhWc9/IMG-20241218-WA0039.jpg"
                alt="IMG-20241218-WA0039"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/K7VSwQv">
              <img
                src="https://i.ibb.co/gwthVXK/IMG-20241218-WA0041.jpg"
                alt="IMG-20241218-WA0041"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/kxnCfZS">
              <img
                src="https://i.ibb.co/56DHyZR/IMG-20241218-WA0043.jpg"
                alt="IMG-20241218-WA0043"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/ZzCPT0X">
              <img
                src="https://i.ibb.co/s9rG3ZR/IMG-20241218-WA0044.jpg"
                alt="IMG-20241218-WA0044"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/44fGHHm">
              <img
                src="https://i.ibb.co/VMNZssj/IMG-20241218-WA0046.jpg"
                alt="IMG-20241218-WA0046"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/vqs9kCq">
              <img
                src="https://i.ibb.co/kB3ZXVB/IMG-20241218-WA0048.jpg"
                alt="IMG-20241218-WA0048"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/G5J564b">
              <img
                src="https://i.ibb.co/LZPZFX2/IMG-20241218-WA0050.jpg"
                alt="IMG-20241218-WA0050"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/YNzhBh6">
              <img
                src="https://i.ibb.co/FhSz4z9/IMG-20241218-WA0004.jpg"
                alt="IMG-20241218-WA0004"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/XzXM5hC">
              <img
                src="https://i.ibb.co/hKswdPm/IMG-20241218-WA0006.jpg"
                alt="IMG-20241218-WA0006"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/z8VHY9t">
              <img
                src="https://i.ibb.co/9wH3LKd/IMG-20241218-WA0011.jpg"
                alt="IMG-20241218-WA0011"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/f4kfcPd">
              <img
                src="https://i.ibb.co/Fg52Pj4/IMG-20241218-WA0010.jpg"
                alt="IMG-20241218-WA0010"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/vdGCfsY">
              <img
                src="https://i.ibb.co/rpSKqbs/IMG-20241218-WA0009.jpg"
                alt="IMG-20241218-WA0009"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/rQD4PqL">
              <img
                src="https://i.ibb.co/kGNQnzr/IMG-20241218-WA0016.jpg"
                alt="IMG-20241218-WA0016"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/6Frtttx">
              <img
                src="https://i.ibb.co/ZxGgggP/IMG-20241218-WA0015.jpg"
                alt="IMG-20241218-WA0015"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/fDyTPmq">
              <img
                src="https://i.ibb.co/FHydjGm/IMG-20241218-WA0014.jpg"
                alt="IMG-20241218-WA0014"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/8m7NWpD">
              <img
                src="https://i.ibb.co/VLqJ7ZW/IMG-20241218-WA0019.jpg"
                alt="IMG-20241218-WA0019"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/M8gZ5F4">
              <img
                src="https://i.ibb.co/PTrFzqn/IMG-20241218-WA0018.jpg"
                alt="IMG-20241218-WA0018"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/51QhGbT">
              <img
                src="https://i.ibb.co/fX3dqjM/IMG-20241218-WA0020.jpg"
                alt="IMG-20241218-WA0020"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/yf1vg4F">
              <img
                src="https://i.ibb.co/GxLYCHQ/IMG-20241218-WA0024.jpg"
                alt="IMG-20241218-WA0024"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/Rc4qmrW">
              <img
                src="https://i.ibb.co/SB7z8Yp/IMG-20241218-WA0022.jpg"
                alt="IMG-20241218-WA0022"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/Rc4qmrW">
              <img
                src="https://i.ibb.co/SB7z8Yp/IMG-20241218-WA0022.jpg"
                alt="IMG-20241218-WA0022"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/Y8cWRJ3">
              <img
                src="https://i.ibb.co/Cvbt14z/IMG-20241218-WA0025.jpg"
                alt="IMG-20241218-WA0025"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/kSb4H1k">
              <img
                src="https://i.ibb.co/NyD9VSQ/IMG-20241218-WA0026.jpg"
                alt="IMG-20241218-WA0026"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/brxbbL3">
              <img
                src="https://i.ibb.co/8jJYY2B/IMG-20241218-WA0027.jpg"
                alt="IMG-20241218-WA0027"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/gjqq7yV">
              <img
                src="https://i.ibb.co/M2wwhn6/IMG-20241218-WA0028.jpg"
                alt="IMG-20241218-WA0028"
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

export default AboutUsSlider;
