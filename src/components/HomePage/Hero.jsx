import React from "react";

const Hero = () => {
  const productList = [
    {
      name: "✨ Hey Beauties! ✨",
      title: "Love you all to the friends group! 🚀",
      bg: "bg-[white]",
    },
    {
      name: "Stay Bold 🔥",
      title: "Feel free to tweak it according to your vibe! 😊",
      bg: "bg-[white]",
    },
    {
      name: "Dream Big 🦋",
      title: "Support Each Other Always 💞",
      bg: "bg-[white]",
    },
  ];

  return (
    <div className="w-full backdrop-blur-sm shadow-sm shadow-white overflow-x-hidden">
      <div className=" sm:grid grid-cols-1 sm:grid-cols-2 flex flex-col-reverse  w-full">
        <div className="flex flex-col  gap-[1.1rem]">
          <h1 className="sm:text-[2.4rem] text-[2rem] font-[500] text-[#000]  mt-72 sm:mt-16">
            Discover Your Dream <br></br>
            Aarti with Estatein
          </h1>
          <span className="font-normal text-[0.90rem] sm:text-[0.66rem] from-neutral-50">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home
            <br></br> that matches your dreams miss Aarti ji.
          </span>
          <div className="pb-0 sm:pb-0 md:pb-8 lg:pb-0 flex flex-wrap sm:flex-nowrap gap-5 sm:gap-5">
            <button
              className={` py-4 sm:py-0  shadow-sm shadow-gray-300  text-[0.9rem] sm:mt-5 h-[3.3rem] w-full sm:w-[8.3rem] mt-6  text-white bg-[#3725874c] px-[0.6rem] rounded-[0.5rem] `}
            >
              Learn More
            </button>

            <button
              className={` py-4 sm:py-0  shadow-sm shadow-gray-300 text-[0.9rem] sm:mt-5 h-[3.3rem] sm:w-[11rem] w-full text-white bg-[#292828] px-[0.8rem] rounded-[0.5rem] `}
            >
              Browse Properties
            </button>
          </div>
          <div className="mt-4 mb-12 sm:mb-0 sm:pr-10 pr-0">
            <div className="grid grid-flow-row col-span-3 gap-5">
              {productList?.map((data, index) => {
                const { name, title, bg } = data;

                return (
                  <div
                    key={index}
                    className={`${index === 2 && "col-span-1 block"} ${
                      index === 2 && "col-span-1 sm:hidden"
                    }   w-full rounded-lg p-1 text-black ${bg}  text-center shadow-md shadow-gray`}
                  >
                    <div className="py-4">
                      <h1 className="text-[2rem]">{name}</h1>
                      <p className="text-[0.7rem]">{title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex sm:items-end sm:justify-end h-[26rem] sm:h-[35rem] mt-4 sm:mt-10 mb-16 sm:mb-0">
          <a href="https://ibb.co/wdWPLCk">
            <img
              className="sm:hidden block w-full rounded-lg shadow-md shadow-gray-400"
              src="https://i.ibb.co/518S9v0/IMG-20241219-140127.jpg"
              alt="IMG-20241219-140127"
              border="0"
            />
          </a>
          <a href="https://ibb.co/HVBzzJZ">
            <img
              className="sm:block hidden box-cover h-full w-full "
              src="https://i.ibb.co/qd7ssZ6/IMG-20241108-193507-765.webp"
              alt="IMG-20241108-193507-765"
              border="0"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
