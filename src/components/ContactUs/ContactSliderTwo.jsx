import React from "react";
import { useRef } from "react";
import Slider from "react-slick";

const ContactSliderTwo = () => {
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
      <div className="max-w-full mt-8">
        <Slider
          {...settings}
          ref={sliderRef}
          className="max-w-[61rem] mt-5 outline-none overflow-x-hidden gap-5"
        >
          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/7N75m9d">
              <img
                src="https://i.ibb.co/2YXQ4b1/IMG-20241219-WA0115.jpg"
                alt="IMG-20241219-WA0115"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/jf9hPkS">
              <img
                src="https://i.ibb.co/NCgxd2M/IMG-20241219-WA0108.jpg"
                alt="IMG-20241219-WA0108"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/6wJwP6v">
              <img
                src="https://i.ibb.co/Gp3p2gs/IMG-20241219-WA0113.jpg"
                alt="IMG-20241219-WA0113"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/DYhQtHx">
              <img
                src="https://i.ibb.co/2Sxdy1D/IMG-20241219-WA0023.jpg"
                alt="IMG-20241219-WA0023"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/qNsnqH8">
              <img
                src="https://i.ibb.co/bsB3w4V/IMG-20241219-WA0024.jpg"
                alt="IMG-20241219-WA0024"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/yRWXQMM">
              <img
                src="https://i.ibb.co/N3Zsykk/IMG-20241219-WA0026.jpg"
                alt="IMG-20241219-WA0026"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/j64YKkS">
              <img
                src="https://i.ibb.co/Lkpywd3/IMG-20241219-WA0029.jpg"
                alt="IMG-20241219-WA0029"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/59Cqmv9">
              <img
                src="https://i.ibb.co/FWcG2JW/IMG-20241219-WA0028.jpg"
                alt="IMG-20241219-WA0028"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/ZNSrMQQ">
              <img
                src="https://i.ibb.co/YbXSL55/IMG-20241219-WA0027.jpg"
                alt="IMG-20241219-WA0027"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/5GGsLwz">
              <img
                src="https://i.ibb.co/mbbh4gY/IMG-20241219-WA0032.jpg"
                alt="IMG-20241219-WA0032"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/WDgnnDm">
              <img
                src="https://i.ibb.co/YDp22DH/IMG-20241219-WA0037.jpg"
                alt="IMG-20241219-WA0037"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/c3FckyS">
              <img
                src="https://i.ibb.co/zxRhQmT/IMG-20241219-WA0041.jpg"
                alt="IMG-20241219-WA0041"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/LJ8jj2b">
              <img
                src="https://i.ibb.co/HxVwwk1/IMG-20241219-WA0052.jpg"
                alt="IMG-20241219-WA0052"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/19bKwqq">
              <img
                src="https://i.ibb.co/30kWLNN/IMG-20241219-WA0056.jpg"
                alt="IMG-20241219-WA0056"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/t3wc2yW">
              <img
                src="https://i.ibb.co/1bYKXHw/IMG-20241219-WA0043.jpg"
                alt="IMG-20241219-WA0043"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/ZdsMh5Q">
              <img
                src="https://i.ibb.co/qBGrRKH/IMG-20241219-WA0069.jpg"
                alt="IMG-20241219-WA0069"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/h2dJTRJ">
              <img
                src="https://i.ibb.co/8PxLQDL/IMG-20241219-WA0076.jpg"
                alt="IMG-20241219-WA0076"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/b5RRj5H">
              <img
                src="https://i.ibb.co/0yVVpyB/IMG-20241219-WA0075.jpg"
                alt="IMG-20241219-WA0075"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/s2y8b90">
              <img
                src="https://i.ibb.co/L8nVYdL/IMG-20241219-WA0085.jpg"
                alt="IMG-20241219-WA0085"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/sb8gLBs">
              <img
                src="https://i.ibb.co/WGmHSTB/IMG-20241219-WA0078.jpg"
                alt="IMG-20241219-WA0078"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/nnFWJKY">
              <img
                src="https://i.ibb.co/P9dSHVP/IMG-20241219-WA0079.jpg"
                alt="IMG-20241219-WA0079"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/s2y8b90">
              <img
                src="https://i.ibb.co/L8nVYdL/IMG-20241219-WA0085.jpg"
                alt="IMG-20241219-WA0085"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/fCQw8kB">
              <img
                src="https://i.ibb.co/FBnTs5N/IMG-20241219-WA0087.jpg"
                alt="IMG-20241219-WA0087"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/pbF53Xm">
              <img
                src="https://i.ibb.co/KbvS9y1/IMG-20241219-WA0091.jpg"
                alt="IMG-20241219-WA0091"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/7p94zJC">
              <img
                src="https://i.ibb.co/myx8BCT/IMG-20241219-WA0093.jpg"
                alt="IMG-20241219-WA0093"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/Q8zgq1t">
              <img
                src="https://i.ibb.co/cbMBp7V/IMG-20241219-WA0102.jpg"
                alt="IMG-20241219-WA0102"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/cgGKXG0">
              <img
                src="https://i.ibb.co/yfwmBwt/IMG-20241219-WA0205.jpg"
                alt="IMG-20241219-WA0205"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/fqXXtP0">
              <img
                src="https://i.ibb.co/BcffjSs/IMG-20241219-WA0206.jpg"
                alt="IMG-20241219-WA0206"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/9hb042h">
              <img
                src="https://i.ibb.co/YXcSd8X/IMG-20241219-WA0207.jpg"
                alt="IMG-20241219-WA0207"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/m49S1fy">
              <img
                src="https://i.ibb.co/L1xvbVg/IMG-20241219-WA0212.jpg"
                alt="IMG-20241219-WA0212"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/XJzszpV">
              <img
                src="https://i.ibb.co/PC5h54t/IMG-20241219-WA0211.jpg"
                alt="IMG-20241219-WA0211"
                border="0"
              />
            </a>
          </div>

          <div class="sm:max-w-sm max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            <a href="https://ibb.co/PDtq5CY">
              <img
                src="https://i.ibb.co/z6NqSf5/IMG-20241219-WA0199.jpg"
                alt="IMG-20241219-WA0199"
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

export default ContactSliderTwo;
