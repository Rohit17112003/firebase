import React, { useContext } from 'react'
import Drawer from './Drawer'
import { MenuContext } from '../Context/MenuContext'

const MobileDrawer = ({ close }) => {
    const { setIsMenu } = useContext(MenuContext)

    return (
        <div className='w-full flex flex-row justify-end h-[100vh] fixed z-[9999] bg-[#0000008c] backdrop-blur-sm'>
            <div className="flex flex-row w-[75%] h-full">

                {/* Close button  */}
                <div
                    onClick={() => setIsMenu(false)}
                    className="h-10 w-12 m-1 flex items-center justify-center border-2 border-[#fff]  text-[1.2rem] text-red-500 flex-all-center"
                >
                    <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="0"
                        viewBox="0 0 15 15"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>

                <Drawer />
            </div>
        </div>
    )
}

export default MobileDrawer
