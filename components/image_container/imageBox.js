import React from 'react'
import styles from './imagebox.module.css'
import { useMediaQuery } from 'react-responsive';


export default function ImageBox({ imagePath, text, bgColor, discription, id }) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024)' })
    const containerStyle = {
        backgroundColor: bgColor
    }
    return (
        <div
            style={{ backgroundImage: `url(${imagePath.src})`, }}
            className={styles.c} id={id}>
            <div className={styles.container} style={containerStyle}>
                {/* <div
                    className=" w-full bg-contain bg-opacity-90 bg-black/[.8]"
                    // style={{ backgroundImage: `url(${bgImage.src})`, transform: isTabletOrMobile ? "rotate(90deg)" : "rotate(0deg)" }}
                > */}
                <p className={styles.text}>{text}</p>
                <p className=' pl-0 lg:pl-0 w-full lg:w-2/5 md:w-3/4 md:text-left lg:pt-4 opacity-100
                 text-white text-lg  md:text-xl sm:w-3/4 '>
                    {discription}
                </p>
            </div>
        </div>
    )
}
