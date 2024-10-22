import React, { useState, useEffect } from 'react';
import "../style/header.css";
import mainlogo from "../assets/mainlogo.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerClass, setHeaderClass] = useState('scroll-down');

    // Toggle menu open/close
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle scroll effect
    const handleScroll = () => {
        const st = window.scrollY;
        const headerHeight = document.querySelector('header').offsetHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        if (Math.abs(scrollPosition - st) > 5) {
            if (st > scrollPosition && st > headerHeight) {
                setHeaderClass('scroll-up');
            } else if (st + windowHeight < documentHeight) {
                setHeaderClass('scroll-down');
            }
            setScrollPosition(st);
        }
    };

    useEffect(() => {
        // Scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    useEffect(() => {
        // Background scroll effect
        const handleBackgroundScroll = () => {
            const header = document.querySelector('.header_page_area');
            if (header) {
                const scrollY = window.scrollY;
                const adjustmentFactor = 100;
                const baseValue = -20;
                header.style.backgroundPositionY = `${baseValue * (scrollY / adjustmentFactor)}px`;
            }
        };

        window.addEventListener('scroll', handleBackgroundScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleBackgroundScroll);
        };
    }, []);

    return (
        <>
            <header className={headerClass}>
                <div className="head_plane webheader">
                    <div className="header_area">
                        <div className="hrader_items">
                            <div className="main_logo">
                                <img src={mainlogo} alt="Main Logo" />
                            </div>
                        </div>

                        <div className="hrader_items mobile_mennnu">
                            <div className="header_heading">
                                <h1><span>PURNA </span>GROUP</h1>
                            </div>
                            <div className="header_option">
                                <ul>
                                    <li><a href="./">HOME</a></li>
                                    <li><a href="./power">POWER PRODUCTS</a></li>
                                    <li><a href="./energy">ENERGY PRODUCTS</a></li>
                                    <li><a href="./service">OUR SERVICES</a></li>
                                    <li><a href="./contactus">CONTACT US</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="hrader_items">
                            <div className="sub_logo">
                                <img src="https://teslapowerusa.com/assets/images/tesla-logo-1.png" alt="Sub Logo" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="responsive_header">
                    <div className="head_plane mobileheader">
                        <div className="header_area">
                            <div className="hrader_items">
                                <div className="main_logo">
                                    <img src={mainlogo} alt="Main Logo" />
                                </div>
                            </div>
                            <div className="hrader_items">
                                <div className="sub_logo">
                                    <a href="./main_page.html">
                                        <img src="https://teslapowerusa.com/assets/images/tesla-logo-1.png" alt="Sub Logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="menuline" id="menuopen">
                                <button onClick={toggleMenu}>
                                    <img src={menu} alt="Menu Icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={isMenuOpen ? 'hrader_items mobile_mennnu menu_on' : 'hrader_items mobile_mennnu'}>
                        <div className="closer_menu" id="close_menu">
                            <button onClick={toggleMenu}>
                                close
                            </button>
                        </div>
                        <div className="header_option">
                            <ul>
                                <li><a href="./main_page.html">HOME</a></li>
                                <li><a href="./power_product.html">POWER PRODUCTS</a></li>
                                <li><a href="./energy_product.html">ENERGY PRODUCTS</a></li>
                                <li><a href="./our_service.html">OUR SERVICES</a></li>
                                <li><a href="./contactus.html">CONTACT US</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="bank_div">
                        {/* Add bank related content if necessary */}
                    </div>
                </div>
            </header>
        </>
    );
}
