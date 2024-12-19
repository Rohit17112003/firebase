import React from "react";

const MyBoidata = () => {
  return (
    <div>
      <div className="">
        <div className="sm:pt-6 mt-4">
          <h1 className="text-black sm:text-[2.5rem] text-[1.7rem]">
            Let is Connect
          </h1>
          <p className="text-black sm:text-[0.9rem] text-[0.7rem]">
            We are excited to connect with you and learn more about your real
            estate goals. Use the form below to get in touch with Estatein.
            Whether you are a prospective client, partner, or simply curious
            about our services, we are here to answer your questions and provide
            the assistance you need.
          </p>
        </div>
        <div className="mt-6">
          <div className=" sm:px-10 px-4 sm:py-12 py-4 rounded shadow bg-white shadow-gray-600">
            <form>
              <div className="grid grid-flow-row sm:grid-cols-3 grid-cols-1 justify-center text-black gap-5 sm:gap-3 font-sans">
                <div>
                  <label>Full Name</label>
                  <br></br>
                  <input
                    className=" bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none "
                    type="text"
                    placeholder="Miss Aarti Kumari"
                  />
                </div>
                <div>
                  <label>Father Name</label>
                  <br></br>
                  <input
                    className=" bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none "
                    type="text"
                    placeholder="Shree Maheshwar Mahato"
                  />
                </div>
                <div>
                  <label>Mother Name</label>
                  <br></br>
                  <input
                    className=" bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none "
                    type="text"
                    placeholder="Shree Mati Asha Devi"
                  />
                </div>
              </div>

              <div className="grid grid-flow-row sm:grid-cols-3 grid-cols-1 justify-center text-black gap-5 sm:gap-3 font-sans pt-9">
                <div>
                  <label>My Email Id</label>
                  <br></br>
                  <input
                    className=" bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none "
                    type="email"
                    placeholder="gpaartikumari@gmail.com"
                  />
                </div>
                <div>
                  <label>My Connect No</label>
                  <br></br>
                  <input
                    className=" bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none "
                    type="number"
                    placeholder="9931322794"
                  />
                </div>
                <div>
                  <label>My Height & Weight</label>
                  <br></br>
                  <input
                    className=" bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none "
                    type="number"
                    placeholder="5 feet 4 inch And 50kg"
                  />
                </div>
              </div>

              <div className="grid grid-flow-row sm:grid-cols-3 grid-cols-1 justify-center text-black gap-5 sm:gap-3 font-sans pt-9">
              <div>
                  <label>MY Date of Birth</label>
                  <br></br>
                  <input
                    className=" bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none "
                    type="number"
                    placeholder="01/01/2007"
                  />
                </div>
                <div>
                  <label>My Blood Group & Complexion</label>
                  <br></br>
                  <input
                    className=" bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none "
                    type="text"
                    placeholder="A+ And Fair"
                  />
                </div>
                <div>
                  <label>My caste</label>
                  <br></br>
                  <input
                    className=" bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none "
                    type="text"
                    placeholder="Kurmi (Mahato) Hindu"
                  />
                </div>
              </div>

              <div className=" text-black font-sans pt-9">
                <label>Message</label>
                <textarea
                  className="bg-[#FDF7F4] py-3 sm:py-2 px-3 mb-3 shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none"
                  placeholder="Enter Message here..."
                />
                <p> Education:- 10th - vanasthali vidyapeeth dhawachita rajganj,
                  dhanbad(2022)<br></br> At present :- Diploma ( computer Eng.)
                  government polytechnic bhaga dhanbad <br></br> Address:-
                  village+p.o:-bagdaha p.s:- Rajganj dist:-dhanbad state:-
                  jharkhand pin code:- 828113<br></br> My Skill:- .HTML .CSS .JAVASCRIPT .C
                  PROGRAMMING .C++ .AI .JAVA .PROGRAMMING .DSA .AI</p>
              </div>
              <div className=" text-black font-sans pt-9 sm:flex justify-between block">
                <div>
                  <input type="checkbox" className="bg-[white]" />{" "}
                  <span>I agree with Terms of Use and Privacy Policy</span>
                </div>
                <button className="text-white bg-[#CDC1FF] sm:mt-0 mt-4 px-5 sm:py-3 py-4 rounded sm:w-auto text-center w-full">
                  Send Your Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBoidata;
