import Link from 'next/link';
import React from 'react'


function NewsLetter() {
	return (
		<div className=" bg-red-600 px-8 py-16 md:py-0 md:px-16  flex lg:flex-row flex-col lg:justify-between justify-center items-center md:h-96 lg:px-32 lg:py-60">
			<div className=" w-full lg:w-1/2">
				<div className="text-white   md:text-justify  text-lg md:text-2xl lg:text-4xl font-semibold">
					Our dedicated support team is here to help you. If you have any questions, please reach out to us and we&apos;ll do our best to assist you.
				</div>
				
				{/* <form className="pt-3 px-4 md:px-0">
						<input className="border border-white py-1.5 px-4 focus:outline-none focus:border-black bg-transparent text-white placeholder-slate-800 w-full md:w-1/2" placeholder="Your Name" />
						<input className="border border-white py-1.5 px-4 focus:outline-none focus:border-black bg-transparent text-white placeholder-slate-800 w-full md:w-1/2" placeholder="Your Email Address" />
						<button className="bg-white text-green-900 p-2 mt-2">Submit</button>
					</form> */}
			</div>
			<div className='w-full lg:w-1/2  justify-center flex'><Link href={'/ContactUs'} className='md:w-2/3 md:pl-8'>
				<button className="bg-white text-red-600 p-4  my-4 lg:my-36 font-semibold w-full text-xl lg:text-3xl" >Reach out to us</button></Link>
			</div>

		</div>




	)
}

export default NewsLetter