import React from 'react'

const OurTeam = () => {

    const productList = [
        {
            image: "https://i.ibb.co/QpqGBvx/IMG-20241207-164355.jpg",
            name: "Miss Priya",
            title: "Founder OF This Websites"

        }, {
            image: "https://i.ibb.co/pvV0CXq/IMG-20241208-142549.jpg",
            name: "Miss Pratima",
            title: "Chief Real Estate Officers Here"

        }, {
            image: "https://i.ibb.co/sszwnvq/IMG-20241219-141739.jpg",
            name: "Miss Aarti",
            title: "Head of Property Management"

        }, {
            image: "https://i.ibb.co/F7JYW8b/IMG-20241207-165157.jpg",
            name: "Miss Kashish",
            title: "Legal Counsel This Friends Team"
        }
    ]
    return (
        <div>
            <div className='container flex flex-col  gap-[1.1rem] mt-12 sm:mt-16'>
                <h1 className='sm:text-[2.4rem] text-[2rem] font-[500] text-[black] sm:mt-0 -mt-4'>Meet the Estatein Team</h1>
                <p className='text-[0.90rem] sm:text-[0.98rem] tracking-wider font-sans font-thin text-black from-neutral-50 -mt-3'>
                    At Estatein, our success is driven by the dedication and expertise of our
                    team. Get to know the people behind our mission to make your real estate dreams a reality.</p>
            </div>

            <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 sm:gap-3 gap-0 '>

                {productList?.map((data, index) => {

                    const { image, name, title } = data

                    return <div key={index} className={`sm:mt-12 mt-6  text-black`}>
                        <div className=''>
                            <div className=' text-center sm:p-4 p-6 shadow shadow-gray-500 rounded-lg'>
                                <div className='shadow-sm shadow-gray-400'>
                                    <img src={image} alt='here is images' className='w-full sm:h-60 rounded-sm h-full'/>
                                </div>
                                <div className='text-center'>
                                    <img src='../Assets2/Button.svg' className='m-auto -mt-5 '/>
                                </div>
                                <h1 className='mt-6 sm:text-[1.2rem] text-[1.8rem]'>{name}</h1>
                                <p className='sm:text-[0.8rem] text-[1.2rem] py-1 pb-4'>{title}</p>
                                <input placeholder=" Say Hello 👋" className='w-full outline-none shadow shadow-gray-300 rounded-3xl sm:px-2 sm:py-1 py-3 px-4' />
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default OurTeam;
