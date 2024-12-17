import React from "react";

const OurOffice = () => {
  return (
    <>
      <div className="mt-4">
        <h1 className="text-black sm:text-[2.5rem] text-[1.7rem]">
          Our Office
        </h1>
        <p className="text-black sm:text-[0.9rem] text-[0.7rem]">
          Our office is a hub of innovation and collaboration, Where ideas
          thrive and teamwork fuels our passion. Together, we create solutions
          that drive success and growth.
        </p>
      </div>

      <div className="py-4 -mt-8">
        <div className="container bg-[#fff] shadow-md shadow-gray-400 sm:py-8 py-4 sm:px-8 px-3 mt-11 rounded-md">
          <div className="grid grid-flow-row grid-cols-2 sm:gap-7 gap-3">
            <div>
              <img
                src="../images/Image (1).svg"
                alt="one"
                className="w-full"
              />
            </div>
            <div>
              <img
                src="../images/Image (6).svg"
                alt="two"
                className="w-full"
              />
            </div>
          </div>
          <div className="grid grid-flow-row grid-cols-4 sm:gap-7 gap-3 sm:pt-7 pt-3">
            <div className="col-span-2">
              <img
                src="../images/Image (2).svg"
                alt="one"
                className="w-full h-full"
              />
            </div>
            <div>
              <img
                src="../images/Image (4).svg"
                alt="two"
                className="w-full h-full "
              />
            </div>
            <div>
              <img
                src="../images/Image (3).svg"
                alt="two"
                className="w-full h-full "
              />
            </div>
          </div>
          <div className="grid grid-flow-row sm:grid-cols-2 grid-cols-1 sm:gap-7 gap-3 sm:pt-7 pt-5">
            <div>
              <h1 className="text-black sm:text-[2rem] text-[1.4rem]">
                Explore Estatein is World
              </h1>
              <p className="text-black sm:text-[0.8rem] text-[0.7rem]">
                Step inside the world of Estatein, where professionalism meets
                warmth, and expertise meets passion. Our gallery offers a
                glimpse into our team and workspaces, inviting you to get to
                know us better.
              </p>
            </div>
            <div>
              <img
                src="../images/Image (5).svg"
                alt="two"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className=" border-solid border-[#48434344] sm:mt-12 mt-4 w-full" />
    </>
  );
};

export default OurOffice;
