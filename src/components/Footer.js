import React from 'react'
import '../style/header.css'

export default function Footer() {
  return (
 <>
 <footer>
    <div class="ft">
        <footer>
            <div class="ft_main">
                <div class="footer_content">
                    <div class="footer_items contact">
                      <div class="ft_1st_det">
                        <div class="st_head">
                            <strong>CONTACT</strong>
                        </div>
                        <p>38, Viharkunj Soc. Complex,Opp. Bharat Petrol Pump,  Dabhoi-Waghodia Ring Road,
                            Somatalav, vadodara.

                            Pincode-390025.

                        </p>
                        <div class="ft_tel">
                            <span>PHONE: +91 70696 28193</span>
                            <span>Email:purnagroup.sales@gmail.com</span>
                        </div>
                        <div class="social_link">

                            <ul>

                                <li><a
                                        href="https://www.indiamart.com/purnagroup/?srsltid=AfmBOoqbGrPR6WNjHJ7TZfLvzc7-OG2gO-3XbHFGduY-JfT_y3woyRwm"><img src="./assets/indiamart.png" alt=""/></a></li>
                                <li><a
                                        href=" "><img
                                        src="./assets/instagram.png" alt=""/></a></li>
                            </ul>
                        </div>
                      </div>
                    </div>
                    <div class="footer_items link">
                        <div class="link_items">
                            <div class="st_head">
                                <strong>LINK</strong>
                            </div>
                            <ul>
                                <li><a href="./main_page.html">HOME</a></li>
                                <li><a href="./power_product.html">PRODUCTS</a></li>
                                <li><a href="./energy_product.html">PRODUCTS</a></li>
                                <li><a href="./our_service.html">SERVICES</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer_items touch">
                        <div class="st_head gt">
                            <strong>GET IN TOUCH</strong>
                        </div>
                        <div class="get_in_touch">
                            <div class="touch_name">
                                <label for="">Name</label>
                                <input type="text"/>
                            </div>

                            <div class="touch_mobile">
                                <label for="">Mobile</label>
                                <input type="text" name="" id=""/>
                            </div>
                            <div class="touch_email">
                                <label for="">Email</label>
                                <input type="text"/>
                            </div>
                            <div class="touch_message">
                                <label for="">Write massage</label>
                                <textarea name="" id=""></textarea>
                            </div>
                            <div class="footer_submit">
                                <button>Send message</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="whatsapp_link">
                    <link rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
                    <a href="https://wa.me/7069628193" class="float" target="_blank">
                        <i class="fa fa-whatsapp my-float"></i>
                    </a>
                </div>
                <div class="call_link">
                    <link rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
                    <a href="tel:+91-7069628193" class="float_call" target="_blank">
                        <i class="fa-solid fa-phone"></i>
                    </a>
                </div>
            </div>
        </footer>
    </div>
  </footer>
 
 </>
  )
}
