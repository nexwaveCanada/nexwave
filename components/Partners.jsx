import React from 'react'
import logo1 from '/public/brands/logo1.png'
import logo3 from '/public/brands/logo3.png'
import logo4 from '/public/brands/logo4.png'
import logo6 from '/public/brands/logo6.png'
import logo7 from '/public/brands/logo7.png'
import logo8 from '/public/brands/logo8.png'
import logo9 from '/public/brands/logo9.png'
import logo10 from '/public/brands/logo10.png'
import logo11 from '/public/brands/logo11.png'
import logo12 from '/public/brands/logo12.png'
import logo13 from '/public/brands/logo13.png'
import logo14 from '/public/brands/logo15.png'
import logo15 from '/public/brands/shami.jpg'
import logo16 from '/public/brands/gisco.jpg'
import logo17 from '/public/brands/logo17.png'
import logo18 from '/public/brands/logo18.png'
import logo19 from '/public/brands/logo19.png'
import logo20 from '/public/brands/logo20.png'
import logo21 from '/public/brands/chic.png'
import Image from 'next/image'

export default function Partners() {
    const logoSet = [logo1, logo3, logo4, logo6, logo7, logo8, logo9, logo10, logo20, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo21]
    return (
        <div className='flex flex-col justify-center items-start bg-white px-4 lg:px-16 py-8 md:py-16 w-full'>
            <h1 className='mx-4 lg:mx-16 font-roboto text-red-600 font-semibold my-4 md:my-8 text-center'>
                CLIENTS WHO TRUST US
            </h1>
            <ul className="grid lg:grid-cols-10 gap-4 lg:mx-12 my-8 col-span-1 md:grid-cols-5 grid-cols-3">
                {logoSet.map((logo, index) => (
                    <li key={index} className="">
                        <Image src={logo} alt={`Logo${index}`} width={0} height={0} className="mx-auto h-2/3 md:h-2/3 w-4/5 text-center object-contain" />
                    </li>
                ))}
            </ul>
        </div>
    )
}
