import React from "react";

const StartFooter = () => {
  return (
    <div>
      <div>
        <div className="gap-[1.1rem] sm:grid block grid-cols-5">
          <div className="col-span-5 sm:pr-20 pr-0">
            <h1 className="sm:text-[2.4rem] text-[2rem] font-[500] text-[#00000] sm:pt-10 pt-8">
              Start Your Real Estate Journey Today
            </h1>
            <p className="text-[0.80rem] sm:text-[0.85rem] tracking-wider font-sans font-thin text-black from-neutral-50 mt-1">
              Your dream property is just a click away. Whether you are looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <div className="flex justify-center items-center sm:mt-12 mt-5">
            <div className="bg-[#703BF7] sm:hidden  block px-4 sm:py-3 py-4 rounded w-full text-center text-[1rem]">
              <button className="text-white">Explore Properties</button>
            </div>
          </div>
        </div>
        <hr className="border-b border-solid border-[#48434344] sm:mt-6 mt-10 w-full" />
      </div>
    </div>
  );
};

export default StartFooter;
