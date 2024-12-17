import Drawer from "../SideBar/Drawer";
import NavBar from "../Header/NavBar";
import { useContext } from "react";
import { DashboardScreenContext } from "../Context";
import MobileDrawer from "../SideBar/MobileDrawer";
import { MenuContext } from "../Context/MenuContext";
import StartFooter from "../Footer/StartFooter";
import Footer from "../Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Layout = ({ children }) => {
  const { currentScreen } = useContext(DashboardScreenContext);
  const { isMenu } = useContext(MenuContext);

  return (
    <>
      {isMenu && <MobileDrawer />}

      <div className="max-w-[100vw] flex flex-row relative bg-[#f8f7f5]">
        <div className="md:w-[30%] xl:w-[25%] 2xl:w-[20%] hidden lg:block">
          <Drawer />
        </div>
        <div className="w-full h-[100vh] flex flex-col relative">
          <div className="w-full ">
            <NavBar />
          </div>
          <div className="w-full lg:h-[90vh] overflow-y-auto custom-scrollbar px-3 lg:px-[2rem] ">
            <div className="w-full">{currentScreen}</div>
            <StartFooter />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
