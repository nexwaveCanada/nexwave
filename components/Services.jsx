import React from 'react'
import clsx from 'clsx'
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

export default function Services() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    let d1 = ""
    let d2 = ""
    let d3 = ""
    let d4 = ""
    let d5 = ""
    let d6 = ""
    let d7 = ""
    let d8 = ""
    let d9 = ""
    let d10 = ""
    const [service, setService] = useState("Tech");
    if (service === "Tech") {
        d1 = "Enterprise Data Solutions "
        d2 = "Customized AI Solutions"
        d3 = "Business Intelligence and Visualization"
        d4 = "Website & App Development"
        d5 = "Automation (Business Automation Solutions/ Business Process Automation/Business Process Optimization)"
    }
    if (service === "Marketing") {
        d1 = "Branding"
        d2 = "Digital Marketing"
        d3 = "Design."
        d4 = "User Experience Enhancement"
        d5 = "Content"
    }


    return (
        <div className="flex flex-col items-left lg:justify-center w-auto lg:h-screen sticky top-0 bg-cover bg-gray-100 scroll-smooth" id='services'>
            <h1 className="ml-4 lg:ml-32 pb-8 md:pb-16  text-red-600 font-semibold pt-14 lg:pt-0   ">
                FEATURED SERVICES
            </h1>
            <div className='lg:hidden flex flex-row justify-center overflow-x-scroll mb-10 pl-0'>
                <div className={
                    clsx(
                        "flex justify-center items-center align-middle p-4 font-bold w-52 md:w-full",
                        service === "Tech" ? "text-white bg-red-600 " : "text-gray-400 "
                    )
                }
                    onClick={() => setService("Tech")}
                >Technology<br /> Solutions
                    {/* and Startup Assistance */}
                </div>
                <div className={
                    clsx(
                        "flex justify-center items-center align-middle p-4 font-bold w-52 md:w-full",
                        service === "Marketing" ? "text-white bg-red-600" : "text-gray-400"
                    )
                }
                    onClick={() => setService("Marketing")}
                >Marketing<br /> Solutions</div>
                {/* <div className={
                    clsx(
                        "flex justify-center items-center align-middle p-4 font-bold w-52",
                        service === "financial" ? "text-white bg-red-600" : "text-gray-400"
                    )
                }
                    onClick={() => setService("financial")}
                >Financial Accounting &amp; Services</div>
                <div className={
                    clsx(
                        "flex justify-center items-center align-middle p-4 font-bold w-52",
                        service === "audit" ? "text-white bg-red-600" : "text-gray-400 "
                    )
                }
                    onClick={() => setService("audit")}
                >Audit &amp; Taxation</div> */}

            </div>
            <div className='flex flex-col items-center lg:flex-row lg:overflow-x-auto lg:w-full overflow-x-auto'>
                <ul className=" lg:pr-20 w-full lg:w-1/3  flex-row lg:flex-col justify-center px-4 lg:px-16 overflow-y-auto overflow-x-auto hidden lg:block">
                    <li
                        className={clsx(
                            " font-bold text-lg md:text-xl lg:text-3xl lg:hover:text-4xl md:hover:text-2xl  pb-8 md:pb-10 text-left lg:text-right cursor-pointer",
                            service === "Tech" ? "text-red-600" : "text-gray-400"
                        )}
                        onClick={() => setService("Tech")}
                    >Technology<br /> Solutions<br />
                        {/* and<br />Startup Assistance */}
                    </li>
                    <li
                        className={clsx(
                            " font-bold text-lg md:text-xl lg:text-3xl lg:hover:text-4xl md:hover:text-2xl  pb-8 md:pb-10 text-left lg:text-right cursor-pointer",
                            service === "Marketing" ? "text-red-600" : "text-gray-400"
                        )}
                        onClick={() => setService("Marketing")}
                    >Marketing<br /> Solutions
                    </li>
                    {/* <li
                        className={clsx(
                            " font-bold text-lg md:text-xl lg:text-3xl lg:hover:text-4xl md:hover:text-2xl  pb-8 md:pb-10 text-left lg:text-right cursor-pointer ",
                            service === "financial" ? "text-red-600" : "text-gray-400"
                        )}
                        onClick={() => setService("financial")}
                    >Financial &amp; <br /> Accounting<br />Services
                    </li>
                    <li
                        className={clsx(
                            " font-bold text-lg md:text-xl lg:text-3xl lg:hover:text-4xl md:hover:text-2xl  pb-8 md:pb-10 text-left lg:text-right cursor-pointer",
                            service === "audit" ? "text-red-600" : "text-gray-400"
                        )}
                        onClick={() => setService("audit")}
                    >Audit &amp;<br />Taxation
                    </li> */}


                </ul>
                <ol className="pl-4 md:pl-16 w-full md:w-2/3 pb-10 lg:pb-0 pt-4 flex flex-col items-center ">
                    {/* <li className="text-xl lg:text-4xl text-red-600 font-bold pb-2 md:pb-4">{d1}</li> */}
                    <div className="pt-0 lg:mt-0 ml-4 lg:ml-16">
                        <li className="text-lg lg:text-2xl md:text-xl font-bold pb-2 lg:pb-4 text-teal-600">{d1}</li>
                        <li className="text-lg lg:text-2xl font-bold pb-2 md:text-xl lg:pb-4 text-teal-600">{d2}</li>
                        <li className="text-lg lg:text-2xl text-teal-600 font-bold md:text-xl pb-2 lg:pb-4">{d3}</li>
                        <li className="text-lg lg:text-2xl text-teal-600 font-bold md:text-xl pb-2 lg:pb-4">{d4}</li>
                        <li className="text-lg lg:text-2xl text-teal-600 font-bold md:text-xl pb-2 lg:pb-4">{d5}</li>
                        {/* <li className="text-lg lg:text-2xl text-teal-600 font-bold pb-2 lg:pb-4">{d6}</li>
                        <li className="text-lg lg:text-2xl text-teal-600 font-bold pb-2 lg:pb-4">{d7}</li>
                        <li className="text-lg lg:text-2xl text-teal-600 font-bold pb-2 lg:pb-4">{d8}</li>
                        <li className="text-lg lg:text-2xl text-teal-600 font-bold pb-2 lg:pb-4">{d9}</li>
                        <li className="text-lg lg:text-2xl text-teal-600 font-bold pb-2 lg:pb-4">{d10}</li> */}
                    </div>
                </ol>
            </div>
        </div>
    )
}
