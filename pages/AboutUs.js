import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Partners from "@/components/Partners";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

export default function AboutUs() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className=" bg-gray-100">
      <Navbar path="/" />
      <div className="aboutUsContainer mx-4 lg:mx-16">
        <div className="aboutUsMain">
          <div className="aboutUsMainH1">
            <h1 className="MeetBeacon">
              Nextwave <span>About Us</span>
            </h1>
            <p>
              <span className=" font-semibold">Simplifying Data and Marketing for SMEs.</span>
            </p>
            <p className=" text-justify mt-4 text-black">
              Hello there! Welcome to Nexwave. We're not just another tech company; we&apos;re your partners,
              bringing the magic of data right to your doorstep. Why? Because <span className=" text-red-600 font-semibold">
                we believe in the potential of every small and medium-sized enterprise, just like yours.</span>
              <br />
              Founded on the principles of simplicity, clarity, and genuine care, Nexwave is here to demystify the buzzwords and jargon, turning them into
              tangible results for your business.
              We&apos;re passionate about understanding your needs, your dreams,
              and the challenges you face daily. That&apos;s why we&apos;ve rallied a team of ML wizards, AI enthusiasts, data engineers, and storytellers to ensure <span className=" text-red-600 font-semibold">
                you get the best of both worlds: technology and marketing.
              </span>
            </p>
          </div>
          <div className="aboutUsMainImg">
            <Image
              src="/pr1.jpg"
              width={400}
              height={400}
              className="BeaconImg"
            />
          </div>
          <div className="aboutUsP">
            <p className="text-red-600  text-justify my-4">
              Our process at the core is a human-centered design approach. We immerse ourselves in your customers world
              to better understand their needs and pain points, creating innovative solutions that elevate their experience
              with your brand or product
            </p>
            <p className="text-red-600  text-justify my-4">
              We are continually questioning and eternally curious, whether watching the waves of the wider world,
              examining the technical details of a production or getting inside the minds of consumers
            </p>
            {/* <p className="text-red-600  text-justify my-4">
              Despite their growth and success, the team at Beacon Management
              Consultants remained committed to their founding principles of
              integrity, professionalism, and exceptional service. They
              continued to invest in their team members, providing ongoing
              training and development to ensure that they could offer the best
              possible service to their clients.
            </p>
            <p className="text-red-600  text-justify my-4">
              Today, Beacon Management Consultants is one of the most esteemed
              auditing and accounting firms in the industry, known for their
              exceptional service, deep expertise, and unwavering commitment to
              their client&apos;s success. They are proud of the relationships
              they have built over the years and look forward to continuing to
              serve their clients for many years to come.
            </p> */}
          </div>
        </div>
      </div>

      <div className="mx-4 lg:mx-16 mt-24 aboutUsCardContainer">
        <div className="aboutUsCard">
          <div className="cardNumber">
            <h1>01</h1>
          </div>
          <div className="cardHeading">
            <h1>Mission</h1>
          </div>
          <div className="cardDesc">
            <p className="text-red-600  text-justify my-4">
              To demystify the world of data and marketing for SMEs, empowering them with actionable insights and solutions that drive growth.
              We commit to guiding every business, whether novice or expert, on their unique data journey,
              providing personalized support every step of the way.
            </p>
          </div>
        </div>

        <div className="aboutUsCard">
          <div className="cardNumber cardNumber2">
            <h1>02</h1>
          </div>
          <div className="cardHeading cardHeading2">
            <h1>Vision</h1>
          </div>
          <div className="cardDesc cardDesc2">
            <p className="text-red-600  text-justify my-4">
              To be the go-to destination for SMEs, transforming them into data-driven leaders in their respective fields.
              We envision a future where every SME effortlessly
              integrates data into their decision-making, setting new benchmarks of success and innovation..
            </p>
          </div>
        </div>
      </div>

      <div className="aboutUsContainer mx-4 lg:mx-16 mt-12 mb-12">
        <div className="aboutUsMain">
          <div className="aboutUsMainImg">
            <Image
              src="/pr2.jpg"
              width={400}
              height={400}
              className="BeaconImg"
            />
          </div>

          <div className="aboutUsMainH1">
            <h1 className="MeetBeacon">
              Our Clients <span>Inspire Us</span>
            </h1>
            {/* <p>
              Saudi Arabia's leading innovative Accounting & Auditing services.
            </p> */}
            <p className="text-red-600  text-justify mt-4 client">
              At Beacon Management Consultants, we are proud to have helped
              businesses in Saudi Arabia grow and flourish through our services.
              We have had the privilege of working with some of the most
              innovative and forward-thinking companies in the country, and we
              are honored to have played a small part in their success.
            </p>
          </div>
          <div className="aboutUsP">
            <p className="text-red-600  text-justify lg:my-4">
              We know that running a business in Saudi Arabia is not easy,
              especially in today&apos;s fast-paced and constantly evolving
              economy. That&apos;s why we are grateful for the trust that our
              clients have placed in us to help them navigate the complexities
              of accounting, auditing, tax, and regulatory compliance. We take
              that responsibility seriously and work tirelessly to provide our
              clients with the support and guidance they need to achieve their
              goals.
            </p>
            <p className="text-red-600  text-justify my-4">
              We are also grateful for the opportunity to work with so many
              talented and dedicated professionals in Saudi Arabia. Our team
              members have deep expertise in a wide range of industries, and
              they bring a wealth of knowledge and experience to every
              engagement. Together, we have helped our clients overcome
              challenges, seize opportunities, and achieve their full
              potential.
            </p>
            <p className="text-red-600  text-justify my-4">
              As we reflect on our journey so far, we are filled with gratitude
              for the support of our clients, partners, and colleagues in Saudi
              Arabia. We are dedicated to delivering great service and value to
              our clients and helping this country thrive.
            </p>
          </div>
        </div>
      </div>

      <Partners />
      <div className="whyUsContainer">
        <div className="whyUsContent mx-4 lg:mx-16 mt-12 mb-12">
          <div>
            <div className="whyUsH1">
              <h1 className="mx-0 lg:mx-16  text-red-600 font-semibold my-4 md:my-8 text-start">
                Why Us?
              </h1>
            </div>
            <div className="whyUsPoints">

              <p className="md:w-2/4  text-sm md:text-xl text-white text-left mx-0 lg:mx-16 pb-4"
              >What sets Nexwave apart from the rest? We know<span > data, markets, and customers</span> like the back of our hand. Our data-powered strategy and marketing solutions
                enable you to make
                <span >well-informed decisions that will drive growth and foster innovation.</span>
              </p>

            </div>
          </div>
          <div className="WhyUsbutton">
            <Link href={'/ContactUs'}> <button >Reach out to us</button></Link>
          </div>
        </div>
      </div>
      <Footer path={'/'} />
    </div>
  );
}
