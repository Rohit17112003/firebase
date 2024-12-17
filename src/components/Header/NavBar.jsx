import { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";

const NavBar = () => {
    const { setIsMenu } = useContext(MenuContext)
    const design = (
        <>
            <div className="w-full shadow-sm shadow-gray-300 h-[10vh] bg-[#fff] sm:shadow-gray-300 sm:shadow-lg lg:h-[12vh] flex flex-row items-center justify-between px-5 lg:px-[2rem] ">
                {/* name  */}
                <div className="text-[#000] text-[1.5rem] lg:text-[1.4rem] font-[500] flex flex-row items-center gap-2">
                    {/* Avatar  */}
                    <div className="h-[1.7em] w-[1.7em] rounded-full overflow-hidden md:hidden">
                        <a href="https://ibb.co/RNvFsrv"><img src="https://i.ibb.co/ScsjMYs/miss.jpg" alt="miss" border="0" /></a>
                    </div>

                    <h1>Hii, Aarti 👋</h1>
                </div>

                <div onClick={() => setIsMenu(true)} className="sm:hidden">
                    <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="1.9em" width="1.9em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"></path></svg>
                </div>

            </div>
        </>
    );
    return design;
};

export default NavBar;