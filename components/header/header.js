import React from 'react'
import { useMediaQuery } from 'react-responsive';


export default function Header({ bgImage }) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024)' })
    return (
        <div className="relative h-screen bg-gradient-to-l from-gray-700 via-gray-900 to-black">
            <div
                className="absolute inset-0 z-0 bg-contain lg:bg-cover"
                style={{ backgroundImage: `url(${bgImage.src})`, transform: isTabletOrMobile ? "rotate(90deg)" : "rotate(0deg)" }}
            />
            <div className="relative z-10 flex flex-col justify-center items-start h-full">
                <h1 className='headerContent text-[#da3e52]'
                // className="lg:text-6xl text-4xl md:text-5xl font-bold  text-green-700 leading-normal bg-transparent lg:pl-16 pl-8 md:pl-16" 
                
                >
                    Empowering SMEs with  <br className="hidden md:block" />
                    Data-Driven Solutions.
                </h1>
                <h3 className='subHeading text-gray-300'
                // className=" w-full flex lg:pl-64  text-xl md:text-3xl lg:text-4xl pt-3 md:pt-7 leading-normal text-blue-950 font-semibold"
                >
                    Transforming Small and Medium Enterprises with<br/> Data-Powered Solutions and Customer-Centric <br/>Marketing Strategies.
                </h3>
            </div>
        </div>
        // <div className={styles.container}>
        //     <div className={styles.title}>
        //         {/* <span className='text-2xl text-red-600  font-bold h-0 pl-2'>Accounting &amp; Audit Firm<br /></span> */}
        //         Building Trust, <br className='hidden md:block' />Strengthening Businesses.</div>
        //     <div className={styles.subtitle}>Saudi Arabia&apos;s leading innovative<br />Accounting & Auditing services.
        //         {/* <br />Saudi Arabia&apos;s leading innovative
        //     <br />Accounting & Auditing services */}
        //     </div>
        // </div>
    )
}
