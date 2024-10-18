import React, { useState } from 'react';
 
import '../style/OurServices.css'

const OurServices = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <header>
                <div className="head_plane webheader">
                    <div className="header_area">
                        <div className="hrader_items">
                            <div className="main_logo">
                                <img src="./assets/mainlogo.png" alt="" />
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
                                    <a href="./main_page.html">
                                        <img src="./assets/mainlogo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="hrader_items">
                                <div className="sub_logo">
                                    <a href="./main_page.html">
                                        <img src="https://teslapowerusa.com/assets/images/tesla-logo-1.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="menuline" onClick={toggleMenu}>
                                <i className="fa-solid fa-bars"></i>
                            </div>
                        </div>
                    </div>

                    {menuOpen && (
                        <div className="hrader_items mobile_mennnu">
                            <div className="closer_menu" onClick={toggleMenu}>
                                <button>close</button>
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
                    )}
                </div>
            </header>

            <main>
                <div className="our_services">
                    <div className="services_main">
                        <img src="https://static.wixstatic.com/media/11062b_81edbbc97b4e402bba95354cffac8a99~mv2.jpg/v1/fill/w_1349,h_500,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_81edbbc97b4e402bba95354cffac8a99~mv2.jpg" alt="" />
                    </div>
                    <div className="service_details">
                        <div className="service_item">
                            <div className="services_picture">
                                <img src="https://static.wixstatic.com/media/0d3089_1ed5ddd702a44528ab4da4be381f8bbd~mv2.jpg/v1/fill/w_751,h_742,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_1ed5ddd702a44528ab4da4be381f8bbd~mv2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="service_item">
                            <div className="ser_all_det">
                                <div className="services_details">
                                    <h1>Our Services:</h1>
                                </div>
                                <div className="details_list">
                                    <ul>
                                        <li>- Turnkey Project Execution<span>&nbsp;&nbsp;(11 kV, 33 kV Switchyard, LT-HT & Metering Box, Transformer)</span></li>
                                        <li>- Substation Servicing & Maintenance work<span>&nbsp;&nbsp;(All type of insulator, connector rework & servicing)</span></li>
                                        <li>- Installation & Commissioning of LV, MV, HV Switchyard.</li>
                                        <li>- Line Stringing work</li>
                                        <li>- Equipment protection service</li>
                                        <li>- Painting work</li>
                                        <li>- Substation Earthing Work</li>
                                        <li>- Panel installation & Wiring work</li>
                                        <li>- Battery Revival Service</li>
                                        <li>- Backup AMC</li>
                                        <li>- UPS/Charger - Battery setup installation<span>&nbsp;&nbsp;(Substation backup solution)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="meetup">
                        <h1>MEET THE TEAM</h1>
                        <div className="our_meet">
                            <div className="meet_event">
                                <img src="https://static.wixstatic.com/media/0d3089_8989b494946f4f94a5136ed86a2a88a4~mv2.png/v1/fill/w_184,h_226,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_8989b494946f4f94a5136ed86a2a88a4~mv2.png" alt="" />
                            </div>
                            <div className="meet_event">
                                <img src="https://static.wixstatic.com/media/0d3089_51f539a37e7141ef9d5b1472b69d2e35~mv2.png/v1/fill/w_184,h_220,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_51f539a37e7141ef9d5b1472b69d2e35~mv2.png" alt="" />
                            </div>
                            <div className="meet_event">
                                <img src="https://static.wixstatic.com/media/0d3089_bd6d8112a67b4086a68b367076e01b19~mv2.png/v1/fill/w_184,h_220,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_bd6d8112a67b4086a68b367076e01b19~mv2.png" alt="" />
                            </div>
                            <div className="meet_event">
                                <img src="https://static.wixstatic.com/media/0d3089_c937e937e70c426cbe61ea4229cf8ac5~mv2.png/v1/fill/w_170,h_226,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_c937e937e70c426cbe61ea4229cf8ac5~mv2.png" alt="" />
                            </div>
                        </div>
                        <div className="our_meet2">
                            <div className="meet_event">
                                <img src="https://static.wixstatic.com/media/0d3089_19155908de5c491db66cba94cbb1c09d~mv2.png/v1/fill/w_321,h_220,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_19155908de5c491db66cba94cbb1c09d~mv2.png" alt="" />
                            </div>
                            <div className="meet_event">
                                <img src="https://static.wixstatic.com/media/0d3089_f79249cae6d44119b041c97bc8d9d34d~mv2.png/v1/fill/w_262,h_226,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_f79249cae6d44119b041c97bc8d9d34d~mv2.png" alt="" />
                            </div>
                            <div className="meet_event">
                                <img src="https://static.wixstatic.com/media/0d3089_efd54778694b404883da745cc3330ead~mv2.png/v1/fill/w_191,h_226,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0d3089_efd54778694b404883da745cc3330ead~mv2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div className="ft">
                    <div className="ft_main">
                        <div className="footer_content">
                            <div className="footer_items contact">
                                <div className="ft_1st_det">
                                    <div className="st_head">
                                        <strong>CONTACT</strong>
                                    </div>
                                    <p>38, Viharkunj Soc. Complex, Opp. Bharat Petrol Pump, Dabhoi-Waghodia Ring Road, Somatalav, Vadodara. Pincode-390025.</p>
                                    <div className="ft_tel">
                                        <span>PHONE: +91 70696 28193</span>
                                        <span>Email: purnagroup.sales@gmail.com</span>
                                    </div>
                                    <div className="social_link">
                                        <ul>
                                            <li>
                                                <a href="https://www.indiamart.com/purnagroup/?srsltid=AfmBOoqbGrPR6WNjHJ7TZfLvzc7-OG2gO-3XbHFGduY-JfT_y3woyRwm">
                                                    <img src="./assets/indiamart.png" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="./assets/instagram.png" alt="" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_items link">
                                <div className="link_items">
                                    <div className="st_head">
                                        <strong>LINK</strong>
                                    </div>
                                    <ul>
                                        <li>home</li>
                                        <li>product</li>
                                        <li>service</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer_items touch">
                                <div className="st_head gt">
                                    <strong>GET IN TOUCH</strong>
                                </div>
                                <div className="get_in_touch">
                                    <div className="touch_name">
                                        <label htmlFor="">Name</label>
                                        <input type="text" />
                                    </div>
                                    <div className="touch_mobile">
                                        <label htmlFor="">Mobile</label>
                                        <input type="text" />
                                    </div>
                                    <div className="touch_email">
                                        <label htmlFor="">Email</label>
                                        <input type="text" />
                                    </div>
                                    <div className="touch_message">
                                        <label htmlFor="">Write message</label>
                                        <textarea></textarea>
                                    </div>
                                    <div className="footer_submit">
                                        <button>Send message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="whatsapp_link">
                            <a href="https://wa.me/7069628193" className="float" target="_blank" rel="noreferrer">
                                <i className="fa fa-whatsapp my-float"></i>
                            </a>
                        </div>
                        <div className="call_link">
                            <a href="tel:+91-7069628193" className="float_call" target="_blank" rel="noreferrer">
                                <i className="fa-solid fa-phone"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default OurServices;

