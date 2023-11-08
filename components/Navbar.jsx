import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import NavItem from "./Navitem";
import logo from 'public/brands/Nexwave---White.png'
import Image from "next/image";
import { useMediaQuery } from 'react-responsive'


const Navbar = ({ path, hideNav }) => {
    const MENU_LIST = [
        { text: "About Us", href: "/AboutUs" },
        { text: "Services", href: path + "#services" },
        { text: "Contact Us", href: "/ContactUs" },
        { text: "CDAP", href: "/CDAP" },

    ];
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const prevScrollPos = useRef(0);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    const stylesCustom = {
        
        
        active: {
            visibility: "visible",
            transition: "all 0.5s",
            backgroundColor: "#FFFFFF",
        },
        hidden: {
            visibility: "hidden",
            transition: "all 0.5s",
            transform: "translateY(-100%)"
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > prevScrollPos.current) {
                // Scrolling down
                if (scrollDirection !== 'down') {
                    setScrollDirection('down');
                }
            } else {
                // Scrolling up
                if (scrollDirection !== 'up') {
                    setScrollDirection('up');
                }
            }
            prevScrollPos.current = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollDirection]);

   
    return (
        <header id='' 
         style={!hideNav||isTabletOrMobile || scrollDirection == "up"?stylesCustom.active : stylesCustom.hidden}
         >
            <nav className="nav bg-black text-gray-300  shadow-lg ">
                <Link href={"/"}>
                    <Image
                        className="h-10 md:h-20 w-auto md:my-0 my-4"
                        src={logo}
                        alt=""
                    />
                </Link>
                <div
                    onClick={() => setNavActive(!navActive)}
                    className={`nav__menu-bar`}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                    {MENU_LIST.map((menu, idx) => (
                        <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                        >
                            <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;