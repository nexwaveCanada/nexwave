import Image from "next/image";
import React from "react";
import logo from 'public/logo-black.png'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";


function Footer({ path }) {
	return (
		<>
			<div className="bg-gray-100 h-1/2 w-full flex md:flex-row flex-col justify-around items-start lg:p-20 p-15">
				<div className="p-5 ">
					<ul>
						<Image
							className='partnerLogo'
							src={logo}
							height={0}
							width={0}
							alt="Logo"
						/>
						<div className="h-8" />

						<li className="text-gray-500 text-md pb-2  hover:text-red-600 cursor-pointer font-Roboto">
						(123) 456-7890
						</li>
						<li className="text-gray-500 text-md pb-2  hover:text-red-600 cursor-pointer font-Roboto">
						hello@reallygreatsite.com
						</li>
						<li className="text-gray-500 text-md pb-2  hover:text-red-600 cursor-pointer font-Roboto">
						123 Anywhere St. Any City, ST 12345
						</li>
						
					</ul>
				</div>
				{/* <div className="p-5">
					<ul>
						<p className="text-red-600 font-bold text-2xl pb-4 font-Roboto">About Us</p>
						<li className="text-gray-500 text-md pb-2  cursor-pointer font-Roboto">
							Who we are
						</li>
						<li className="text-gray-500 text-md pb-2 0 cursor-pointer font-Roboto">
							Careers
						</li>
						<li className="text-gray-500 text-md pb-2  cursor-pointer font-Roboto">
							Our mission
						</li>
						<li className="text-gray-500 text-md pb-2  cursor-pointer font-Roboto">
							Our vision
						</li>
					</ul>
				</div> */}
				<div className="p-5">
					<ul>
						<p className="text-red-600 font-bold text-2xl pb-4 font-Roboto">Services</p>
						<Link href= {path + "#incorporation"}>
							<li className="text-gray-500 text-md pb-2  cursor-pointer font-Roboto">
							Enterprise Data Solutions
							</li></Link>
						<Link href={path + "#consultation"}>
							<li className="text-gray-500 text-md pb-2  cursor-pointer font-Roboto">
							Custom AI Solutions
							</li></Link>
						<Link href={path + "#financial"}>
							<li className="text-gray-500 text-md pb-2  cursor-pointer font-Roboto">
							Enterprise UX Solutions
							</li>
						</Link>
					
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-red-600 font-bold text-2xl pb-4 font-Roboto">Our Company</p>
						<Link href={'/AboutUs'}>
							<li className="text-gray-500 text-md pb-2  cursor-pointer font-Roboto">
								About us
							</li></Link>
						<Link href={'/ContactUs'}>
							<li className="text-gray-500 text-md pb-2  cursor-pointer font-Roboto">
								Contact us
							</li></Link>
						{/* <li className="text-gray-500 text-md pb-2  cursor-pointer font-Roboto">
							FAQ
						</li> */}
					</ul>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row items-center lg:items-end w-full px-4 lg:pr-32 md:justify-end justify-center bg-gray-100">
				<div className="text-teal-600 font-bold md:text-xl uppercase text-sm font-Roboto">
					Connect with us on
				</div>
				<ul className="flex gap-6 justify-center pt-5 lg:pt-0 lg:pl-2.5">
					<li>
						<FaInstagram className="text-3xl cursor-pointer hover:text-yellow-600 text-teal-600" />
					</li>
					<li>
						<FaTwitter className="text-3xl cursor-pointer hover:text-blue-600 text-teal-600" />
					</li>
					<li>
						<FaLinkedin className="text-3xl cursor-pointer hover:text-blue-600 text-teal-600 " />
					</li>
					<li>
						<FaYoutube className="text-3xl cursor-pointer hover:text-red-600 text-teal-600" />
					</li>
				</ul>
			</div>
			<div className="flex flex-col md:flex-row text-center bg-gray-100 px-4 md:px-32 py-4 md:py-8 justify-between">
				<h1 className="text-gray-800 font-Roboto">
					© 2023 by Nexwave | All Right Reserved | Powered by <a href="https://procube.cx/" className=" font-Roboto font-bold">procube.cx</a>
				</h1>
				<h1 className="text-red-600 font-bold uppercase mt-4 md:mt-0 font-Roboto">
					Privacy policy | Terms & Conditions
				</h1>
			</div>
		</>
	);
}

export default Footer;