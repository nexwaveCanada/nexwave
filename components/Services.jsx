import React, { Fragment } from 'react'
import clsx from 'clsx'
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Tab } from '@headlessui/react';

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
        d5 = "Business Automation Solutions"
    }
    if (service === "Marketing") {
        d1 = "Branding"
        d2 = "Digital Marketing"
        d3 = "Design Strategy"
        d4 = "User Experience Enhancement"
        d5 = "Content Strategy"
    }



    const services = [
        {title:"AI & Data",content:["Virtual AI assistants","Data Visualization & Analytics","Forecasting","AI recommendation engines","AI Chatbots"]},
        {title:"Websites",content:["Web Design","Web Development","Web Apps","Backends"]},
        {title:"Ecommerce",content:["Ecommerce Development","Ecommerce Consultation","Ecommerce ad management"]},
        {title:"Mobile Apps",content:["Native Mobile Apps","Hybrid Mobile Apps"]},
        {title:"UI/UX",content:["User Interface Design","Design Thinking Consulting","User Experience Design","UX Research","UX Audit"]},
        {title:"Branding",content:["Brand Identity","Print & Packaging Design","Rebranding","Naming","Brand Strategy","Design Audit","SEO","SEM","Social Media Management"]},
    ]

    return (
        <div className="flex bg-gradient-to-b from-gray-900 to-gray-800 bg-gradient-to-r flex-col items-left lg:justify-center w-auto lg:h-screen sticky top-0 bg-cover bg-gray-100 scroll-smooth" id='services'>
            <h1 className="ml-4 lg:ml-32 pb-8 md:pb-16  text-red-600 font-semibold pt-14 lg:pt-0   ">
                FEATURED SERVICES
            </h1>
    <Tab.Group vertical={true} as={"div"} className="w-full max-w-7xl mx-auto sm:flex  ">
      <Tab.List className="sm:w-3/12 flex flex-col text-white   justify-start items-start">
        {services.map((service) => <Tab as={Fragment} className="">
        {({ selected }) => (<div className={`text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight px-2 py-4 text-md cursor-pointer font-semibold  ${selected ? 'text-red-500 ' : 'text-gray-300  hover:text-gray-100'}`}>{service?.title}</div>
            )}</Tab>)}
      </Tab.List>
      <Tab.Panels className="sm:w-9/12 px-6 rounded-md bg-zinc-900 text-white w-full py-6">
        
      {services.map((service) => 
      <Tab.Panel className="divider-y divider-gray-100"  data-aos="fade-in"
      data-aos-easing="linear"
      data-aos-duration="200">
        <div className={`text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight px-2 py-4 text-md cursor-pointer font-semibold text-gray-500 `}>{service?.title}</div>
        {service?.content?.map((i) => <div className='px-3 text-gray-300 hover:text-gray-200 tracking-tight text-lg my-3'>{i}</div>)}</Tab.Panel>
      
      )}

       
      </Tab.Panels>
    </Tab.Group>
        </div>
    )
}
