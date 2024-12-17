import React, { useContext } from "react";
import Layout from "../Layout/Layout";
import { DashboardScreenContext } from "../Context";

const MainDahboard = () => {
  const { currentScreen } = useContext(DashboardScreenContext);
  console.log(currentScreen, "screen");
  return <Layout>{/* <Dasboard /> */}</Layout>;
};

export default MainDahboard;
