import React from 'react'
import logo1 from '/public/brands/logo1.png'
import logo2 from '/public/brands/logo2.png'
import logo3 from '/public/brands/logo3.png'
import logo4 from '/public/brands/logo4.png'
import logo5 from '/public/brands/logo5.png'
import logo6 from '/public/brands/logo6.png'
import logo7 from '/public/brands/logo7.png'
import logo8 from '/public/brands/logo8.png'

import Image from 'next/image'

export default function Partners() {
    const logoSet = [logo1, logo2, logo4, logo3, logo5, logo6, logo7, logo8]
    return (
        <div className='flex flex-col justify-center items-start bg-black bg-opacity-90 px-4 lg:px-16 py-8 md:py-16 w-full'>
            <h1 className='mx-4 lg:mx-16  text-red-600 font-semibold my-4 md:my-8 text-center'>
                CLIENTS WHO TRUST US
            </h1>
            <ul className="grid lg:grid-cols-8 gap-6 lg:mx-12 my-8 col-span-1 md:grid-cols-5 grid-cols-3">
                {logoSet.map((logo, index) => (
                    <li key={index} className="">
                        <Image src={logo} alt={`Logo${index}`} width={350} height={350} className="mx-auto h-2/3 md:h-16  text-center object-contain" />
                    </li>
                ))}
            </ul>
        </div>
    )
}
