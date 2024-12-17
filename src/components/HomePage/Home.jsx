import React from "react";
import Hero from "./Hero";
import Featured from "./Featured";
// import MySliders from "./Sliders.jsx/Sliders"    ;
import Frequently from "./Frequently";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      {/* <MySliders /> */}
      <Frequently />
    </>
  );
};

export default Home;
