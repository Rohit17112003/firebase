"use client";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" w-full">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 sm:py-14 py-4 gap-4">
        <div className="w-full sm:mt-0 mt-4">
          <p className="text-[#999999] font-[500] text-[1rem]">
            <Link to="/">Home</Link>
          </p>
          <p className="text-[0.8rem] text-[black] pt-1 xl:pt-6">
            Hero Section
          </p>
          <p className="text-[0.8rem] pt-1 xl:pt-4  text-[black]">Features</p>
          <p className="text-[0.8rem] pt-1 xl:pt-4  text-[black]">Slider</p>
          <p className="text-[0.8rem] pt-1 xl:pt-4  text-[black]">Frequently</p>
        </div>

        <div className="w-full sm:mt-0 mt-4">
          <p className="text-[#999999] font-[500] text-[1rem]">
            <Link to="/Videos">Videos</Link>
          </p>
          <p className="text-[0.8rem]  text-[black] pt-1 xl:pt-6">Our Story</p>
          <p className="text-[0.8rem] pt-1 xl:pt-4 text-[black]">Our Works</p>
          <p className="text-[0.8rem] pt-1 xl:pt-4 text-[black]">
            How It Works
          </p>
          <p className="text-[0.8rem] pt-1 xl:pt-4 text-[black]">Our Team</p>
          <p className="text-[0.8rem] pt-1 xl:pt-4 text-[black]">Our Clients</p>
        </div>

        <div className="w-full">
          <p className="text-[#999999] font-[500] text-[1rem]">
            <Link to="/Images">Images</Link>
          </p>
          <p className="text-[0.8rem]  text-[black] pt-2 sm:pt-1 xl:pt-6">
            Portfolio
          </p>
          <p className="text-[0.8rem] pt-1 xl:pt-4  text-[black]">Categories</p>
        </div>
        <div className="w-full">
          <p className="text-[#999999] font-[500] text-[1rem]">
            <Link to="/AboutUs">About Us</Link>
          </p>
          <p className="text-[0.8rem]  text-[black] pt-2 xl:pt-6">
            Valuation Mastery
          </p>
          <p className="text-[0.8rem] pt-1 xl:pt-4 text-[black]">
            Strategic Marketing
          </p>
          <p className="text-[0.8rem] pt-1 xl:pt-4 text-[black]">Our Team</p>
        </div>

        <div className="w-full ">
          <p className="text-[#999999] font-[500] text-[1rem] sm:mt-0 mt-2">
            <Link to="/ContactUs">Contact Us</Link>
          </p>
          <p className="text-[0.8rem]  text-[black] pt-1 xl:pt-6">
            Contact Form
          </p>
          <p className="text-[0.8rem]  text-[black] pt-1 xl:pt-6">Discover</p>
          <p className="text-[0.8rem] pt-1 xl:pt-4 text-[black]">Our Office</p>
        </div>

        <div className="w-full ">
          <p className="text-[#999999] font-[500] text-[1rem] sm:mt-0 mt-2">
            <Link to="/PersonalInfo">Personal Info</Link>
          </p>
          <p className="text-[0.8rem]  text-[black] pt-1 xl:pt-6">MyHistory</p>
          <p className="text-[0.8rem] pt-1 xl:pt-4 text-[black]">MyBoidata</p>
        </div>
      </div>

      <div className=" flex sm:justify-between justify-center flex-wrap w-full pt-3 sm:pt-0">
        <p className=" font-sans text-[0.8rem] tracking-wider text-black sm:mt-0 mt-12 w-full px-12 sm:px-0 sm:w-auto  sm:py-8 py-6 text-center">
          @2024 Make by Miss Aarti. All Rights Reserved.
          <span className=" ml-1">Terms & Conditions</span>
        </p>
        <span className="flex text-2xl text-[3.2rem] ml-4 sm:ml-0 sm:text-[2.2rem] gap-2 text-black sm:mt-7 -mt-36 sm:pt-0 pt-5 text-center">
          <Link href="https://www.facebook.com">
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.6v148.2H158.5V148.9h89.62v38.2h1.3c12.51-23.7 43.2-48.3 88.89-48.3 94.9 0 112.98 62.4 112.98 143.9z"></path>
            </svg>
          </Link>

          <Link href="https://www.instagram.com">
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
            >
              <path d="M459.4 151.7c-.3 4.9-.3 9.8-.3 14.7 0 150.8-114.6 324.7-324.7 324.7-64.5 0-124.6-18.9-175.3-51.4 9.2 1.1 18.5 1.7 27.9 1.7 55.3 0 106.8-18.8 147.7-50.6-51.8-.9-95.8-35.1-111.1-82.3 7.4 1.1 14.9 1.6 22.5 1.6 10.9 0 21.6-1.5 31.7-4.3-54.1-11.5-95.2-58.4-95.2-115.1 0-.5 0-1.1 .1-1.7 16.1 8.9 34.6 14 54.4 14.5-32.4-21.6-53.6-58.7-53.6-101 0-22.2 5.9-42.9 16.3-60.7 59.3 72.9 147.4 121.7 247.9 126.3-2-8.9-3.1-18.1-3.1-27.4 0-66.5 53.9-120.5 120.5-120.5 34.7 0 65.9 14.4 87.9 37.5 27.5-5.4 53.4-15.7 76.8-29.8-9.1 28.4-28.2 52.4-53.2 67.7z"></path>
            </svg>
          </Link>
        </span>
      </div>
    </div>
  );
};
export default Footer;
