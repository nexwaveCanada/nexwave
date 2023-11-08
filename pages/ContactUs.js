import Address from "@/components/Address";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import qrCode from '/public/qrcode.png'
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Popup from "reactjs-popup";

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [hideNavBar, setHideNavBar] = useState(false)

  useEffect(() => {

    const scrollHandler = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= window.innerHeight / 2) {
        setHideNavBar(true)
      } else {
        setHideNavBar(false)
      }
    };
    window.addEventListener('scroll', scrollHandler);
  })

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();
    // setIsLoading(true);
    // console.log(form.current);
    // emailjs
    //   .sendForm('service_dqqvrig', 'template_9mza6hh', form.current, 'IxZZgHa1tCoeypQM0')
    //   .then((result) => {
    //     setMessage("Submitted successfully!")
    //     console.log(result.text);
    //     setIsLoading(false);
    //     setIsOpen(!isOpen);
    //     form.current.reset();
    //   })
    //   .catch((error) => {
    //     setMessage("Something went wrong please try again!")
    //     console.log(error.text);
    //     setIsLoading(false);
    //     setIsOpen(!isOpen);
    //   });
  };

  return (
    <div className=" bg-zinc-900">
      <Navbar path="/" hideNav={hideNavBar} />
      {/* <div className='bg-green-600 justify-center items-center flex flex-col h-72'>
        <div className='lg:w-2/3 w-full pl-8 lg:pl-0'>
          <h1 className=', font-bold md:text-4xl text-3xl lg:text-6xl pb-2 lg:pb-4 text-white'>Let&apos;s talk</h1>
        </div>
        <p className='w-full px-8 lg:px-0 lg:w-2/3 text-white md:text-lg text-base lg:text-xl'>We&apos;re here for you. Our Saudi Arabia-based accounting and
          audit firm
          combines expertise with care. Share your business goals, questions, or concerns, and we&apos;ll provide personalized solutions.
          Reach out today and let&apos;s start a conversation that drives your success.</p>
        <div className='w-full px-8 lg:px-0 lg:w-2/3'>
          <button className='bg-white text-red-600 px-16 font-bold mt-4 py-2 text-lg'>Call</button>
        </div>
      </div> */}

      <div className="contactContainer mx-4 lg:mx-16">
        <div className="contactContent ">
          <div className="contactContentWrap bg-red-800">
            <div className="contactHeading">
              <h1>Get in touch</h1>
            </div>
            <div className="contactDesc pb-7">
              <p className=" text-justify mt-4">
                Take the first step towards a data-driven future.
                Join Nexwave and unlock the power of data to scale your business and make a
                lasting impact on your customers.
                Together, we&apos;ll transform your business into a thriving and customer-centric brand.
              </p>
              <p className="  text-justify mt-4">
                Contact us now to embark on this exciting journey of growth and success!.
              </p>
            </div>
            <div className="flex flex-row justify-center items-center">
              <Image
                src={qrCode}
                height={0}
                width={0}
                className="lg:block hidden  w-1/3 "
              />
            </div>

          </div>

          <div className="contactForm text-gray-300">
            <form
              method="POST"
              target="_blank"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="formName">
                <div className="firstName">
                  <h1>First Name</h1>
                  <input type="text" placeholder="John" name="from_name" required />
                </div>
                <div className="lirstName">
                  <h1>Last Name</h1>
                  <input type="text" placeholder="Doe" name="last_name" required />
                </div>
              </div>
              <div className="companyName">
                <h1>Company Name</h1>
                <input type="text" placeholder="Random Company" name="company_name" required />
              </div>
              <div className="email">
                <h1>Email</h1>
                <input type="text" placeholder="abc@gmail.com" name="email" required />
              </div>
              <div className="number">
                <h1>Phone Number</h1>
                <input type="text" placeholder="(+966) 7865322" name="phNumber" required />
              </div>

              <div className="message">
                <h1>Message</h1>
                <textarea
                  name="message"
                  placeholder="Message Us"
                  width="100%"
                />
              </div>

              <button
                className="contactButtonContainer mt-6" style={{ height: 50 }}
                type="submit"
                value="submit"
              > {isLoading ? "Loading..." : "Contact Us"}</button>

            </form>
            <Popup
              open={isOpen}
              closeOnEsc={true}
              closeOnOverlayClick={true}
            >
              <div className='p-4 justify-center bg-white items-center'>
                <p>{message}</p>
                <div className='flex justify-center pt-5'>
                  <button onClick={handleClick} className='justify-center bg-red-400 px-4 text-white'>Close
                  </button>
                </div>
              </div>
            </Popup>
          </div>
        </div>
      </div>
      {/* <div className=" my-10 flex justify-center w-full items-center flex-col lg:flex-row">
        <p className="lg:w-1/3 w-full lg:px-0 px-8 text-justify pb-5 text-green-900  lg:pr-32">
          If there&apos;s anything you need assistance with or if you have any
          questions, thoughts, or worries, please don&apos;t hesitate to reach
          out to us. Our dedicated support team is here for you, ready to
          provide help.
        </p>

        <ContactForm />
      </div> */}
      <Address />
      <Footer path={'/'} />
    </div>
  );
}
