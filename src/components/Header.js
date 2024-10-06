import React, { useState } from 'react';
import "../style/header.css";
import mainlogo from "../assets/mainlogo.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Changed to false to indicate the menu is closed by default

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header>
                <div className="head_plane webheader">
                    <div className="header_area">
                        <div className="hrader_items">
                            <div className="main_logo">
                                <img src={mainlogo} alt="" />
                            </div>
                        </div>

                        <div className="hrader_items mobile_mennnu">
                            <div className="header_heading">
                                <h1><span>PURNA </span>GROUP</h1>
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
                        <div className="hrader_items">
                            <div className="sub_logo">
                                <img src="https://teslapowerusa.com/assets/images/tesla-logo-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="responsive_header">
                    <div className="head_plane mobileheader">
                        <div className="header_area">
                            <div className="hrader_items">
                                <div className="main_logo">
                                    <img src={mainlogo} alt="" />
                                </div>
                            </div>
                            <div className="hrader_items">
                                <div className="sub_logo">
                                    <a href="./main_page.html">
                                        <img src="https://teslapowerusa.com/assets/images/tesla-logo-1.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="menuline" id="menuopen">
                                <button onClick={toggleMenu}>
                                    <img src={menu} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={isMenuOpen ? 'hrader_items mobile_mennnu menu_on' : 'hrader_items mobile_mennnu'}>
                        <div className="closer_menu" id="close_menu">
                            <button onClick={toggleMenu}>
<<<<<<< HEAD
                               close
=======
                                Close
>>>>>>> c32fafc99f9b2bda2dff7cdae0bd34c3100e28e2
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
