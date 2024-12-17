"use client";
import { useRef } from "react";
import Slider from "react-slick";

import React from "react";

const MySliders = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <Slider {...settings} ref={sliderRef}>
        {/* <div className="border border-black">
          <a href="https://ibb.co/nj6rGYd">
            <img
              className="w-full"
              src="https://i.ibb.co/KWb6Pf4/Screenshot-2023-09-15-12-53-38-80-6012fa4d4ddec268fc5c7112cbb265e7.jpg"
              alt="Screenshot-2023-09-15-12-53-38-80-6012fa4d4ddec268fc5c7112cbb265e7"
              border="0"
            />
          </a>
        </div> */}
     
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
  );
};

export default MySliders;
