import React from 'react'

const Discover = () => {

    const productList = [
        {
            name: "Main Headquarters",
            heading: "Miss Aarti",
            title: "At the Main Headquarters, Miss Aarti leads with grace, Turning visions into success, making every challenge a race.",
            bg: "bg-[#fff]"

        }, {
            name: "Regional Offices",
            heading: "Miss Kashish",
            title: "In every Regional Office, Miss Kashish shines bright, Guiding the team with vision, making progress take flight.",
            bg: "bg-[#fff]"

        }
    ]
    return (
        <>
            <div>
                <div className=' sm:py-10 py-8'>
                    <h1 className='text-black sm:text-[2.5rem] text-[1.7rem]'>Discover Our Office Locations</h1>
                    <p className='text-black sm:text-[0.9rem] text-[0.7rem]'>
                        Estatein is here to serve you across multiple locations. Whether you are looking to
                        meet our team, discuss real estate opportunities, or simply drop by for a chat,
                        we have offices conveniently located to serve your needs. Explore the categories
                        below to find the Estatein office nearest to you
                    </p>
                </div>
                <div className='text-black sm:gap-5 gap-3 grid grid-flow-row sm:grid-cols-5 grid-cols-3'>
                    <button className=' w-auto bg-[white] shadow-gray-300  shadow-sm  rounded px-5 py-3 '>All</button>
                    <button className=' w-auto bg-[white] shadow-gray-300  shadow-sm  rounded px-5 py-3 '>Regional</button>
                    <button className=' w-auto bg-[white] shadow-gray-300  shadow-sm  rounded sm:px-4 px-2 py-3 '>International</button>
                </div>

                <div className='mt-8  sm:py-10 py-4'>
                    <div className='grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5'>
                        {productList?.map((data, index) => {

                            const { heading, name, title, bg } = data

                            return <div key={index} className={` ${index == 2 && "col-span-2 sm:col-span-1"} h-[auto] w-full rounded-lg p-4 py-8 text-black ${bg}  text-start shadow-md shadow-gray-400`}>
                                <div>
                                    <p className="text-[0.9rem] sm:ml-4 ml-0 mt-1">
                                        {name}
                                    </p>
                                    <h1 className="text-[1.3rem] sm:ml-4 ml-0 mt-1">
                                        {heading}
                                    </h1>
                                    <p className='text-[0.7rem] sm:ml-4 ml-0'>
                                        {title}
                                    </p>

                                    <div>
                                        <form>
                                            <div className='py-6 grid grid-flow-row sm:grid-cols-2 grid-cols-2 sm:gap-3 gap-3 sm:px-4 px-0'>
                                                <input className=' bg-[#F5EFFF] outline-none text-black rounded-3xl shadow-sm shadow-gray-300 px-4 py-3 sm:py-2 text-[0.7rem] text-center w-full' value="✉️ info@estatein.com" />
                                                <input className=' bg-[#F5EFFF] outline-none text-black rounded-3xl shadow-sm shadow-gray-300 px-4 py-3 sm:py-2 text-[0.7rem] text-center w-full' value="📞+1 (123) 456-7890" />
                                            </div>
                                            <div className='sm:px-4 px-0 py-3'>
                                                <button className='bg-[#a589eb6a] text-white w-full rounded-md py-3 '>Get Direction</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Discover;
