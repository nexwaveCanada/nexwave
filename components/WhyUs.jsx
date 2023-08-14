import React, { useRef } from 'react'
import bgImage from '/public/line.jpg'


export default function WhyUs() {

    return (
        <div className="flex items-center justify-center w-auto  sticky top-0 bg-cover bg-white scroll-smooth h-full" style={{ backgroundImage: `url(${bgImage.src})` }}>
            <div className="relative w-screen h-screen flex bg-black/[.8] p-4 md:p-16 flex-col justify-center"
            > 
                <div className="w-full">
                    <h1 className="pt-8 pl-4 md:pt-16 md:pl-16 text-3xl md:text-5xl  font-semibold text-white" data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">Why Nexwave?</h1>
                </div>
                <div className="p-4 md:p-16 flex justify-center flex-col w-full items-center">
                    <p className="w-full lg:w-3/4  text-sm md:text-3xl text-white text-left " data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">What sets Nexwave apart from the rest? We know<span className=' text-teal-600'> data, markets, and customers</span> like the back of our hand. Our data-powered strategy and marketing solutions 
                        enable you to make 
                        <span className=' text-teal-600'> well-informed decisions that will drive growth and foster innovation.</span>
                        </p>
                    <div className="h-4 md:h-8"></div>
                    <p className="w-full lg:w-3/4  text-sm md:text-3xl text-white text-left " data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">With a comprehensive skill set that spans ML engineers, data engineers, AI engineers, and marketers, we have the expertise to 
                        <span className=' text-teal-600'> empower your business and elevate your brand.</span>
                        </p>
                    {/* <ol className="list-disc" data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <li className="pb-1 md:pb-3 text-base md:text-xl text-white  font-bold">Extensive expertise tailored to your business needs.</li>
                        <li className="pb-1 md:pb-3 text-base md:text-xl text-white  font-bold">Client-centric approach focused on your success.</li>
                        <li className="pb-1 md:pb-3 text-base md:text-xl text-white  font-bold">Meticulous compliance and accuracy.</li>
                        <li className="pb-1 md:pb-3 text-base md:text-xl text-white  font-bold">Timely and efficient service delivery.</li>
                        <li className="pb-1 md:pb-3 text-base md:text-xl text-white  font-bold">Transparent and open communication.</li>
                        <li className="pb-1 md:pb-3 text-base md:text-xl text-white  font-bold">Trustworthy handling of your confidential information.</li>
                    </ol> */}
                </div>
            </div>     
        </div>
    )
}
