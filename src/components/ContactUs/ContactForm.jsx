import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <div>
                <div className='sm:pt-6 mt-4'>
                    <h1 className='text-black sm:text-[2.5rem] text-[1.7rem]'>Let is Connect</h1>
                    <p className='text-black sm:text-[0.9rem] text-[0.7rem]'>
                        We are excited to connect with you and learn more about your real estate goals.
                        Use the form below to get in touch with Estatein. Whether you are a prospective
                        client, partner, or simply curious about our services, we are here to answer your
                        questions and provide the assistance you need.
                    </p>
                </div>
                <div className='mt-6'>
                    <div className=' sm:px-10 px-4 sm:py-12 py-4 rounded shadow bg-white shadow-gray-600'>
                        <form>
                            <div className='grid grid-flow-row sm:grid-cols-3 grid-cols-1 justify-center text-black gap-5 sm:gap-3 font-sans'>
                                <div>
                                    <label>First Name</label><br></br>
                                    <input className=' bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none ' type='text' placeholder='Enter First Name' />
                                </div>
                                <div>
                                    <label>Last Name</label><br></br>
                                    <input className=' bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none ' type='text' placeholder='Enter Last Name' />
                                </div>
                                <div>
                                    <label>Email</label><br></br>
                                    <input className=' bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none ' type='email' placeholder='Enter Your Email' />
                                </div>
                            </div>

                            <div className='grid grid-flow-row sm:grid-cols-3 grid-cols-1 justify-center text-black gap-5 sm:gap-3 font-sans pt-9'>
                                <div>
                                    <label>Phone</label><br></br>
                                    <input className=' bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none ' type='number' placeholder='Enter Phone Number' />
                                </div>
                                <div>
                                    <label>Inquiry Type</label><br></br>
                                    <input className=' bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none ' type='text' placeholder='Select Inquiry Type' />
                                </div>
                                <div>
                                    <label>How Did You Hear About Us?</label><br></br>
                                    <input className=' bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none ' type='number' placeholder='Select' />
                                </div>
                            </div>

                            <div className=' text-black font-sans pt-9'>
                                <label>Message</label>
                                <textarea className='bg-[#FDF7F4] py-3 sm:py-2 px-3  shadow-sm shadow-gray-400 mt-2 rounded text-black w-full outline-none' placeholder='Enter your Message here...' />
                            </div>
                            <div className=' text-black font-sans pt-9 sm:flex justify-between block'>
                                <div>
                                    <input type='checkbox' className='bg-[white]' /> <span>I agree with Terms of Use and Privacy Policy</span>
                                </div>
                                <button className='text-white bg-[#CDC1FF] sm:mt-0 mt-4 px-5 sm:py-3 py-4 rounded sm:w-auto text-center w-full'>Send Your Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;
