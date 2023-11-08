import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"
import Partners from "@/components/Partners"
import Image from "next/image";
import Link from "next/link";
import React from "react"
import { useMediaQuery } from "react-responsive"
import pr1 from "../public/pr1.jpg"

export default function AboutUs() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className=" bg-zinc-900 text-gray-300">
      <Navbar path="/" />
      <div className="aboutUsContainer mx-4 lg:mx-16">
        <div className="aboutUsMain">
          <div className="aboutUsMainH1">
            <h1 className="MeetBeacon">
              <span>About Us</span>
            </h1>
            
              <p>
                <span className=" font-semibold flex justify-start">Simplifying Data and Marketing for SMEs.</span>
              </p>
            <p className="text-justify mt-4 text-gray-300">
              Hello there! Welcome to Nexwave. We&apos;re not just another tech company; we&apos;re your partners,
              bringing the magic of data right to your doorstep. Why? Because <span className=" text-red-600 font-semibold">
                we believe in the potential of every small and medium-sized enterprise, just like yours.</span>
              <br />
              Founded on the principles of simplicity, clarity, and genuine care, Nexwave is here to demystify the buzzwords and jargon, turning them into
              tangible results for your business.
              We&apos;re passionate about understanding your needs, your dreams,
              and the challenges you face daily. That&apos;s why we&apos;ve rallied a team of ML wizards, AI enthusiasts,
              data engineers, and storytellers to ensure <span className=" text-red-600 font-semibold">
                you get the best of both worlds: technology and marketing.
              </span>
            </p>
          </div>
          <div className="aboutUsMainImg">
            <Image
              src={pr1}
              width={400}
              height={400}
              className="BeaconImg"
            />
          </div>
          <div className="aboutUsP">
            <p className="  text-justify my-4">
              But why data, you ask? Well, in this ever-evolving digital landscape,
              data is the silent hero behind successful decisions.
              It&apos;s like the compass guiding ships safely to the shore. While data is everywhere,
              its true potential often remains hidden. At Nexwave, <span className="text-red-600 font-semibold  text-justify my-4">we&apos;re here to unveil that treasure for you.</span> We delve deep into numbers,
              transforming them into stories and insights that can pave the path for your business&apos;s growth.
            </p>
            <p className="  text-justify my-4">
              Our dedication extends beyond services. We&apos;re committed to empowering every SME, whether you&apos;re
              just dipping your toes into the world of data or you&apos;re looking to scale new heights. We break down
              complex processes into digestible steps, making your journey seamless and enjoyable.
            </p>
            <p className=" text-justify my-4">
              So, if you&apos;re seeking a partner who understands the heartbeats of SMEs,
              cherishes the power of data, and speaks your language, you&apos;re in the right place. At Nexwave, we&apos;re not just about business;
              we&apos;re about people, dreams, and the future.
            </p>
            <p className=" text-justify my-4">
              Come, be a part of our community. Let&apos;s grow, learn, and flourish together!
            </p>
          </div>
        </div>
      </div>

      <div className="mx-4 lg:mx-16 mt-24 aboutUsCardContainer">
        <div className="aboutUsCard bg-black text-white">
          <div className="cardNumber">
            <h1>01</h1>
          </div>
          <div className="cardHeading">
            <h1>Mission</h1>
          </div>
          <div className="cardDesc">
            <p className="  text-justify my-4">
              To level the playing field by equipping SMEs with data-powered solutions previously reserved for industry giants.
              We are here to guide, support, and empower every business,
              regardless of size, on their journey to harness the transformative power of data.
            </p>
          </div>
        </div>

        <div className="aboutUsCard bg-red-800">
          <div className="cardNumber cardNumber2">
            <h1>02</h1>
          </div>
          <div className="cardHeading cardHeading2">
            <h1>Vision</h1>
          </div>
          <div className="cardDesc cardDesc2">
            <p className="text-red-600  text-justify my-4">
              To spearhead a future where every SME, irrespective of its size,
              leverages data-driven strategies for growth and innovation.
              Our vision is a business landscape where data is the equalizing force,
              setting new standards of success for all
            </p>
          </div>
        </div>
      </div>

      <div className="aboutUsContainer mx-4 lg:mx-16 mt-12 mb-12">
        <div className="aboutUsMain">
          {/* <div className="aboutUsMainImg">
            <Image
              src="/pr2.jpg"
              width={400}
              height={400}
              className="BeaconImg"
            />
          </div> */}
          <div className="aboutUsMainH1">
            <h1 className="MeetBeacon">
              Core  <span>Values</span>
            </h1>
          </div>
          <div className="aboutUsP">
            <TitleData title="Simplicity in Solutions" subtitle="Breaking down complex data and technologies into easy-to-understand insights for our clients." />
            <TitleData title="Client Partnership" subtitle="We don&apos;t just provide services; we collaborate, ensuring our client&apos;s goals align with ours." />
            <TitleData title="Authenticity" subtitle="Always genuine, always transparent. We keep our communication straightforward and real." />
            <TitleData title="Continuous Learning" subtitle="The tech world is ever-evolving, and so are we. We commit to staying updated to serve our clients better." />
            <TitleData title="Empowerment" subtitle="We empower SMEs with the right tools and knowledge, enabling them to harness the full potential of data." />
            <TitleData title="Integrity and Trust" subtitle="Doing the right thing always, even when no one is watching. Our client&apos;s trust is our most cherished asset." />
          </div>
        </div>
      </div>

      <Partners />
      <div className="whyUsContainer bg-red-800">
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






function TitleData(props) {
  return (
    <div>
      <p className="  text-justify my-4">
        <span className="font-bold text-lg">{props.title}</span>
        <br />
        {props.subtitle}
      </p>

    </div>
  )
}



