import React from 'react';

const Strategic = () => {
    const productList = [
        {
            image: "https://i.ibb.co/ZWBWNj3/IMG-20241207-165004.jpg",
            name: "Miss Aarti ",
            title: "Miss Aarti ka fashion sense aise hai jaise Instagram ne unko Style Icon bana diya ho Aur jab woh office mein aati hain toh lagta hai ki sabka mood automatically upgrade ho gaya ho",
            bg: "bg-[#FBFBFB]"

        }, {
            image: "https://i.ibb.co/M9sxj9H/IMG-20241207-165225.jpg",
            name: "Miss Khushboo ",
            title: "Miss Khushboo ki muskaan aise hai jaise perfume ki bottle khul gayi ho Aur unki awaaz sunke lagta hai jaise sabhi birds ne concert dena start kar diya ho",
            bg: "bg-[#FBFBFB]"

        }, {
            image: "https://i.ibb.co/4sD0LpC/IMG-20241208-163730.jpg",
            name: "Miss Priya ",
            title: "Miss Priya ki aankhon mein aise sparkle hai jaise phone ka flash light kabhi off hi na ho Aur jab woh chali jaati hain toh lagta hai ki office mein WiFi signal bhi weak ho gaya ho",
            bg: "bg-[#FBFBFB]"

        }, {
            image: "https://i.ibb.co/r0gWr3f/IMG-20241207-170124.jpg",
            name: "Miss Rani ",
            title: "Miss Rani ka style aise hai jaise fashion magazine ne unko cover page pe daal diya ho Aur unki baaton mein itna swag hai ki lagta hai ki koi rapper unse tips le raha ho",
            bg: "bg-[#FBFBFB]"

        }
    ]
    return (
        <div className='-mt-6 sm:-mt-20'>
            <div className=''>
                <h1 className='sm:text-[2.4rem] text-[2rem] font-[500] text-[#000000] '>
                    Our Values
                </h1>
                <span className="text-[0.90rem] sm:text-[0.90rem] tracking-wider font-sans font-thin text-black from-neutral-50 -mt-3">
                    Our story is one of continuous growth and evolution. We started as a small
                    team with big dreams, determined to create a real estate
                    platform that transcended the ordinary.
                </span>
            </div>
            <div className=' col-span-2 mt-6'>
                <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 sm:gap-3'>
                    {productList?.map((data, index) => {

                        const { image, name, title, bg } = data

                        return <div key={index} className={` w-full rounded-lg py-10 pl-4 pr-4 sm:pr-1 text-black ${bg} sm:text-start text-start shadow shadow-gray-600`}>
                            <div>
                                <div className=' sm:ml-3 ml-0  flex'>
                                    <div className='pb-4'>
                                        <div className='border border[#FBFBFB] rounded-full'>
                                            <img src={image} className='h-12 w-12 rounded-full' />
                                        </div>
                                    </div>
                                    <h1 className="text-[1.65rem] sm:ml-4 ml-4 mt-1 ">
                                        {name}
                                    </h1>
                                </div>

                                <p className='text-[0.85rem] sm:ml-4 ml-0 font-thin font-sans from-neutral-50'>
                                    {title}
                                </p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Strategic;
