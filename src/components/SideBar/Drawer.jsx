
import React, { useContext, useState } from "react";
import { GET_TABS } from "../../Data";
import { DashboardScreenContext } from "../Context";
import { MenuContext } from "../Context/MenuContext";
const Drawer = () => {
    const [activeTab, setActiveTab] = useState(0);
    const { setCurrentScreen } = useContext(DashboardScreenContext);
    const { setIsMenu } = useContext(MenuContext)

    const design = (
        <>
            <div className="relative w-full h-[100vh] bg-[#040440] flex flex-col gap-[2.3rem] px-[1.2rem] py-[2rem]">
                {/* ---------------- Logo ---------------- */}
                <div className="w-full flex flex-row items-center gap-2 text-[#fff] px-2">
                    <span className="text-3xl">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        </svg>
                    </span>
                    <span className="text-[1.2rem] font-[500]">Dashboard</span>
                </div>

                {/* ---------------- Tab Container ---------------- */}
                <div className="w-full flex flex-col gap-5">
                    {GET_TABS?.map((val, index) => {
                        const { isBordered, path, text, icon, comp } = val;
                        return (
                            <>
                                <div key={index} onClick={() => { setCurrentScreen(comp); setIsMenu(false) }} className="w-full ">
                                    <div className="tap-btn transition-all  cursor-pointer w-full h-[2.5rem] px-[0.5rem] rounded-md flex flex-row items-center justify-between text-[#fff] hover:bg-[#2d2d69]">
                                        <div className="flex flex-row items-center gap-[0.7rem]">
                                            <div
                                                className={`h-7 w-7 rounded-[5px] ${isBordered ? "border-[1px]" : null
                                                    }  flex items-center justify-center`}
                                            >
                                                <span className="text-[1.2rem] ">{icon}</span>
                                            </div>
                                            <span className="text-[0.95rem] pt-[2px] font-[400] capitalize">
                                                {text}
                                            </span>
                                        </div>
                                        <span className="text-[1.1rem] arrow">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                stroke-width="0"
                                                viewBox="0 0 24 24"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>

                <div className="absolute bottom-[2rem] left-0 w-full ">
                    <div className="w-[90%] mx-auto  py-3 rounded-md bg-[#2d2d69]  px-[1rem] flex items-center flex-row justify-between ">
                        <div className="flex items-center flex-row gap-2">
                            {/* Avatar  */}
                            <div className="h-[34px] w-[34px] rounded-full overflow-hidden">
                                <a href="https://ibb.co/RNvFsrv"><img src="https://i.ibb.co/ScsjMYs/miss.jpg" alt="miss" border="0" /></a>

                            </div>
                            {/* Designation  */}
                            <div className="h-full flex flex-col  text-[#fff] ">
                                <span className="text-sm font-bold">Aarti</span>
                                <span className="text-xs font-[500] text-gray-500">
                                    Project manager
                                </span>
                            </div>
                        </div>

                        <div className="cursor-pointer transition-all h-8 w-8 flex items-center justify-center text-gray-500 hover:text-[#fff] hover:bg-[#9496ad55] rounded">
                            <span className="text-[1.5rem] ">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    return design;
};

export default Drawer;