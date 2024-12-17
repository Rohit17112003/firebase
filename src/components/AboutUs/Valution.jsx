import React from "react";

const Valution = () => {
  const productList = [
    {
      name: "200+",
      title: "Happy Customers",
      bg: "bg-[#F2F9FF]",
    },
    {
      name: "10k+",
      title: "Properties For Clients",
      bg: "bg-[#F2F9FF]",
    },
    {
      name: "16+",
      title: "Years of Experience",
      bg: "bg-[#F2F9FF]",
    },
  ];

  return (
    <div>
      <div className="w-full">
        <div className=" sm:grid grid-cols-1 sm:grid-cols-2 flex flex-col-reverse gap-5  w-full">
          <div className=" flex flex-col  gap-[1.1rem] sm:mt-0 -mt-20">
            <h1 className="sm:text-[2.4rem] text-[2rem] font-[500] text-[#000000] mt-4">
              Our Journey
            </h1>
            <span className="text-[0.90rem] sm:text-[0.98rem] tracking-wider font-sans font-thin text-black from-neutral-50 -mt-3">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </span>
            <div className="pb-0 sm:pb-0 md:pb-8 lg:pb-0 flex flex-wrap sm:flex-nowrap gap-8 sm:gap-5"></div>
            <div className="mt-2 mb-12 sm:mb-0">
              <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-2">
                {productList?.map((data, index) => {
                  const { name, title, bg } = data;

                  return (
                    <div
                      key={index}
                      className={` ${
                        index === 2 && "col-span-2"
                      } h-[5.5rem] w-full rounded-lg p-1 text-black ${bg} sm:text-start text-center shadow shadow-gray-600`}
                    >
                      <div>
                        <h1 className="text-[2rem] sm:ml-4 ml-0 mt-1">
                          {name}
                        </h1>
                        <p className="text-[0.7rem] sm:ml-4 ml-0">{title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex sm:items-end sm:justify-end h-[26rem] sm:h-[35rem] -mt-12 sm:-mt-4 ">
            <img
              src="../images/Sub Container.svg"
              alt="herologo"
              className=" box-cover h-full rounded-[0.8rem] sm:rounded-none "
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Valution;
