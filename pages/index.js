import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react'
import Header from '@/components/header/header'
import firstImage from '../public/second.jpeg'
import secondImage from '../public/third.jpeg'
import bgImage from '../public/headerLine.svg'
import mobFirstImage from '../public/mob1.jpeg'
import mobSecondImage from '../public/mob2.jpeg'
import mobThirdImage from '../public/mob3.jpeg'
import line1 from '../public/lineW1.svg'
import line2 from '../public/lineW2.svg'
import line3 from '../public/lineW3.svg'
import canada from '../public/first.jpeg'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsLetter from '@/components/NewsLetter'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Partners from '@/components/Partners'
import { useMediaQuery } from "react-responsive"
import dynamic from 'next/dynamic';

const ImageBox = dynamic(
  () => import('@/components/image_container/imageBox.js'),
  { ssr: false }
);

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [hideNavBar, setHideNavBar] = useState(false)
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    setMounted(true);
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

  return (

   mounted && <div className=" bg-gray-800 w-full">
      <Navbar path="" hideNav={hideNavBar} />
      <Header bgImage={bgImage} />
      {
        !isMobile &&
        <div>
          <ImageBox imagePath={canada} text={<>
            Enterprise <br className=' lg:hidden' />Data Solutions
          </>} bgColor='rgba(0, 0, 0, 0.5)'
            discription="Understanding your business data isn't just an advantage; it's a necessity. 
          Our custom data solutions transform those numbers into actionable insights, leading you straight to smarter 
          decisions and bigger wins. Dive into clarity, cut through the noise, and let's grow together!"
            bgImage={line1}
            id={'incorporation'}
          />
          <ImageBox imagePath={firstImage} text={<>
            Custom <br className=' lg:hidden' />AI Solutions
          </>} bgColor='rgba(0, 0, 0, 0.5)'
            discription="Imagine a tool that learns, evolves, and works tirelessly for your success. That's what our custom AI solutions 
          offer. From simplifying tasks to uncovering hidden opportunities, AI isn't just tech jargon; it's your next business ally. 
          Ready to harness the power of smart, personalized AI?"
            bgImage={line2}
            id={'consultation'}
          />
          <ImageBox imagePath={secondImage} text={<>
            Enterprise<br className=' lg:hidden' /> UX Solutions
          </>} bgColor='rgba(0, 0, 0, 0.5)'
            discription="Ever wondered why some digital platforms feel so...right? It’s all about the user experience (UX). Our 
          Enterprise UX solutions create brand experiences that are intuitive, efficient, and delightful. Turn your digital space into a powerful asset that resonates with your customers."
            bgImage={line3}
            id={'financial'}

          />
        </div>
      }
      <div>
        {isMobile && <div>
          <ImageBox imagePath={mobFirstImage} text={<>
            Enterprise <br className=' lg:hidden' />Data Solutions
          </>} bgColor='rgba(0, 0, 0, 0.5)'
            discription="Understanding your business data isn't just an advantage; it's a necessity. 
            Our custom data solutions transform those numbers into actionable insights, leading you straight to smarter 
            decisions and bigger wins. Dive into clarity, cut through the noise, and let's grow together!"
            bgImage={line1}
            id={'incorporation'}
          />
          <ImageBox imagePath={mobSecondImage} text={<>
            Custom <br className=' lg:hidden' />AI Solutions
          </>} bgColor='rgba(0, 0, 0, 0.5)'
            discription="Imagine a tool that learns, evolves, and works tirelessly for your success. That's what our custom AI solutions 
          offer. From simplifying tasks to uncovering hidden opportunities, AI isn't just tech jargon; it's your next business ally. 
          Ready to harness the power of smart, personalized AI?"
            bgImage={line2}
            id={'consultation'}
          />
          <ImageBox imagePath={mobThirdImage} text={<>
            Enterprise<br className=' lg:hidden' /> UX Solutions
          </>} bgColor='rgba(0, 0, 0, 0.5)'
            discription="Ever wondered why some digital platforms feel so...right? It’s all about the user experience (UX). Our 
          Enterprise UX solutions create brand experiences that are intuitive, efficient, and delightful. Turn your digital space into a powerful asset that resonates with your customers."
            bgImage={line3}
            id={'financial'}
          />

        </div>}
        <Services />
        <WhyUs />
      </div>
      <Partners />
      <NewsLetter />
      <Footer path={"/"} />
    </div>
  )
}
