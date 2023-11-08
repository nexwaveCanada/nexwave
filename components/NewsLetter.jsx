import Image from 'next/image'
import supportImage from "../public/support.jpeg"
import Link from 'next/link'
import React from 'react'


function NewsLetter() {
	return (
		<div className="flex lg:flex-row bg-[#790102] flex-col lg:justify-between justify-center items-center lg:h-auto  ">
			
			<Image src={supportImage} className=' h-auto w-screen lg:h-full md:w-full lg:w-auto pb-7 lg:pb-0' alt="support image"/>

				{/* <form className="pt-3 px-4 md:px-0">
						<input className="border border-white py-1.5 px-4 focus:outline-none focus:border-black bg-transparent text-white placeholder-slate-800 w-full md:w-1/2" placeholder="Your Name" />
						<input className="border border-white py-1.5 px-4 focus:outline-none focus:border-black bg-transparent text-white placeholder-slate-800 w-full md:w-1/2" placeholder="Your Email Address" />
						<button className="bg-white text-green-900 p-2 mt-2">Submit</button>
					</form> */}
		
			<div className='w-full lg:w-1/2  justify-center flex flex-col items-center h-auto my-6 px-5 md:my-0 md:px-0'><Link href={'/ContactUs'} className='md:w-2/3 md:pl-8'>
				<div className="text-white   md:text-justify  text-lg md:text-2xl lg:text-2xl ">
					Our dedicated support team is here to help you. If you have any questions, please reach out to us and we&apos;ll do our best to assist you.
				</div>
				<button className="bg-white text-red-600 p-4  my-4  font-semibold w-full text-xl lg:text-3xl rounded-full" >Reach out to us</button></Link>
			</div>

		</div>




	)
}

export default NewsLetter