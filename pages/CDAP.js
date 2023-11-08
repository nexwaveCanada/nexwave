import Address from "@/components/Address";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import qrCode from "/public/qrcode.png";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { toast } from "react-toastify";

const eligible_expenses = [
  "Website Development",
  "(SEO) Search Engine Optimization",
  "Google Ads",
  "Mobile App Development",
  "Marketing Campaigns",
  "Upgrades to Software and Hardware",
  "(PPC) Pay-per-click advertising",
];

const requirements = [
    "Have done a minimum  of $500,000 in revenue  in one of the past three tax years.",
    "One salaried employee on payroll with a T4",
    "The owner of the business needs to reside in Canada AND be a resident of Canada"
]
const Ring = ({ children }) => (
  <div className=" relative rounded-full max-w-fit px-3 py-1 text-sm leading-6 ring-1 ring-gray-100/30 hover:ring-gray-100/40 text-gray-400">
    {children}
  </div>
);

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const steps = [


    { name: 'Step 1', description: 'Short consultation with one of our Senior Business Advisors.', href: '#', status: 'current' },
    {
      name: 'Step 2',
      description: 'Proceed with Service Sales Agreement and deposit.',
      href: '#',
      status: 'current',
    },
    { name: 'Step 3', description: 'Fill out a questionnaire to provide us with some general information about your business', href: '#', status: 'current' },
    // { name: 'Theme', description: 'Faucibus nec enim leo et.', href: '#', status: 'upcoming' },
    // { name: 'Preview', description: 'Iusto et officia maiores porro ad non quas.', href: '#', status: 'upcoming' },
  ]

export default function CDAP() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [hideNavBar, setHideNavBar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= window.innerHeight / 2) {
        setHideNavBar(true);
      } else {
        setHideNavBar(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const form = useRef();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const name = e.target.last_name.value;
    const company_name = e.target.company_name.value;
    const email = e.target.email.value;
    const phNumber = e.target.phNumber.value;
    const message = e.target.message.value;
    console.log(name, company_name, email, phNumber, message);
    const link = `https://docs.google.com/forms/d/e/1FAIpQLSedc-ie4QZTeLx-UlG4J5OEBbxahiWs5i8tnF9XuNbIFL-5lw/formResponse?usp=pp_url&entry.1826416980=${name}&entry.1057271815=${company_name}&entry.367426460=${email}&entry.1052955966=${phNumber}&entry.1638719691=${message}`
    try{
      const res = await fetch(link, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
      
    }catch(err){
      console.log(err)
      toast.success("Submitted successfully!");
      e.target.reset();
    }
  }

  return (
    <div>
      <Navbar path="/" hideNav={hideNavBar} />

      <div className="bg-black text-gray-100 flex justify-center w-full items-center flex-col lg:flex-row">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#790102] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-32">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-100 sm:text-2xl mb-10">
                CANADA DIGITAL ADOPTION PROGRAM
              </h1>
              <h1 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-2xl">
                WHAT IS THE PROGRAM?
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Canada Digital Adoption Program was created after COVID-19 to
                incentivize businesses to integrate technology to help boost
                marketing, organization, and overall efficiency of their
                businesses. The government noticed a need for companies to have
                a greater digital presence, and this program is meant to help
                business owners like yourself grow your company with the
                implementation of technology.
              </p>
              <p className="mt-10  text-gray-400 font-semibold">
                Eligible Expenses
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-6 gap-y-2">
                {eligible_expenses?.slice(0, 3).map((item, index) => (
                  <Ring>{item}</Ring>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center gap-x-6">
                {eligible_expenses?.slice(3, 6).map((item, index) => (
                  <Ring>{item}</Ring>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center gap-x-6">
                {eligible_expenses?.slice(6, 7).map((item, index) => (
                  <Ring>{item}</Ring>
                ))}
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        {/* <ContactForm /> */}
      </div>

      <div className="bg-black min-h-screen text-gray-100 flex justify-center w-full items-center flex-col lg:flex-row">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(90%-11rem)] aspect-[1155/678] w-[98.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-700 to-zinc-300 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-5xl py-10 sm:py-32 lg:py-32">
          <h1 className="text-2xl mb-12 font-bold tracking-tight text-gray-100 sm:text-2xl text-center">
            WHAT YOU ARE ELIGIBLE FOR
          </h1>

          <div className="flex flex-col sm:flex-row justify-evenly items-center w-full">
            <div className="sm:w-3/12">
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="https://images.inc.com/uploaded_files/image/1920x1080/getty_603992138_315591.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="sm:w-7/12 text-gray-400 tracking-tight mt-6 text-lg leading-8 px-10 sm:px-0  ">
              <p>
                If your business reported between <b>$500k-$5M</b> in revenue in
                any one of the years between 2020-2022, you may be eligible for
                the following
              </p>
              <p className="font-semibold mt-4">
                1. A $50,000 interest-free loan, payable over 6 years (first
                year no payment required) and;
              </p>

              <p className="font-semibold mt-4">
                2. A $15,000 grant to be used to pay for consultant costs and
                fees (inclusive of grant writing)
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row-reverse mt-20 justify-evenly items-center w-full">
            <div className="sm:w-3/12">
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="https://images.inc.com/uploaded_files/image/1920x1080/getty_603992138_315591.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="sm:w-7/12 text-gray-400 tracking-tight mt-6 text-lg leading-8 sm:text-right px-10 sm:px-0  ">
              <p>
            
If your business reported <b>over $5M</b> in revenue in
any one of the years between 2020-2022, you may
be eligible for the following
              </p>
              <p className="font-semibold mt-4">
              1. A $100,000 interest-free loan, payable over
6 years (first year no payment required) and;
              </p>

              <p className="font-semibold mt-4">
              2. A $15,000 grant to be used to pay for consultant
costs and fees (inclusive of grant writing)
              </p>
            </div>
          </div>
        </div>

         
      </div>

      {/* NeXT SECTION */}
      <div className="bg-black min-h-screen text-gray-100 flex justify-center w-full items-center flex-col lg:flex-row">
      <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#790102] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          </div>
        <div className="mx-auto max-w-5xl py-10 sm:py-32 lg:py-32">
          <h1 className="text-2xl mb-12 font-bold tracking-tight text-gray-100 sm:text-2xl text-center">
          3 REQUIREMENTS
          </h1>

          <div className="px-4 sm:flex justify-evenly items-center w-full gap-x-10 gap-y-4">
            {requirements.map((item, index) => (<div className="w-full my-4 text-center h-36 bg-gradient-to-r bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r rounded-2xl shadow-xl px-4 py-2 flex items-center justify-center">{item}</div>))}
          </div>
         

          
        </div>
        </div>
        <div className="bg-black relative">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#790102] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          </div>
        <div className="mx-auto max-w-5xl py-10 sm:py-32 lg:py-32">
        <h1 className="text-lg mb-12 font-bold tracking-tight text-gray-100 sm:text-2xl text-center ">
          IF YOU QUALIFY, WHAT'S NEXT?
          </h1>

          <div>
          <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden mx-auto">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
            {step.status === 'current' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-700" aria-hidden="true" />
                ) : null}
                <a href={step.href} className="group relative flex items-start" aria-current="step">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-800 bg-gray-500">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-800" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className=" font-medium text-red-700">{step.name}</span>
                    <span className="text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            ) : (
            <></>
            )}
          </li>
        ))}
      </ol>
    </nav>
              

          </div>
        </div>

            <div className="bg-black max-w-7xl pb-20  mx-auto text-gray-300 flex flex-col md:flex-row items-start px-10 md:px-0 justify-center">
              <div className="md:w-1/2">
              <h1 className="text-2xl mb-4 font-bold tracking-tight text-gray-100 sm:text-2xl  ">
              Want to know more about the program ?
          </h1>
                <h1 className="text-lg tracking-tight text-gray-300 ">Fill this form and we will get in touch with you.</h1>
              </div>
              <div className="md:w-1/2">
              <div className="contactForm">
            <form
              method="POST"
              target="_blank"
              ref={form}
              onSubmit={handleSubmit}
            >
              <div className="formName mb-2">
                <div className="w-full">
                  <h1>Name</h1>
                  <input type="text" placeholder="Doe" name="last_name" required className="bg-black"/>
                </div>
              </div>
              <div className="companyName  mb-2">
                <h1>Company Name</h1>
                <input type="text" placeholder="Random Company" name="company_name" required className="bg-black"/>
              </div>
              <div className="email  mb-2">
                <h1>Email</h1>
                <input type="text" placeholder="abc@gmail.com" name="email" required className="bg-black" />
              </div>
              <div className="number  mb-2">
                <h1>Phone Number</h1>
                <input type="text" placeholder="(+966) 7865322" name="phNumber" required className="bg-black text-white" />
              </div>

              <div className="message  mb-2">
                <h1>Message</h1>
                <textarea
                className="bg-black"
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

         
      </div>
      <Footer path={"/"} />
    </div>
  );
}
