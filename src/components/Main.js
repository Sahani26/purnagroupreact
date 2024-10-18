import React, { useEffect } from 'react';
import './header.css'; // Assuming you have these CSS files
import '..style/main.css';
import $ from 'jquery'; // If you're using jQuery for some functionalities

const Main = () => {
  useEffect(() => {
    // Initialize Slick Slider
    $('.slider').slick({
      autoplaySpeed: 1000,
      arrows: true,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // Handle scroll behavior
    const handleScroll = () => {
      const header = $('.header_page_area');
      const scrollPosition = $(window).scrollTop();
      const adjustmentFactor = 100;
      const baseValue = -20;
      header.css('backgroundPositionY', `${baseValue * (scrollPosition / adjustmentFactor)}px`);

      const hh = $('header').outerHeight();
      const dh = $(document).height();
      const wh = $(window).height();

      if (scrollPosition > hh) {
        $('header').removeClass('scroll-down').addClass('scroll-up');
      } else {
        if (scrollPosition + wh < dh) {
          $('header').removeClass('scroll-up').addClass('scroll-down');
        }
      }
    };

    $(window).on('scroll', handleScroll);

    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    $('.mobile_mennnu').toggleClass('menu_on');
    $('.bank_div').toggleClass('bank_div_on');
  };

  return (
    <div className="main_component">
      <main>
        <div className="welcome_area">
          <div className="wel_pict header_page_area">
            <div className="welcome_cotain">
              <h1 className="animate__animated animate__bounceInLeft">
                Welcome To <span> We are engaged in manufacturing and supplying of a wide range of Insulation Component</span>
              </h1>
              <a className="btn btn-hero animate__animated animate__bounceInLeft" href="./contactus.html">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="aboutus">
          <div className="about_head">
            <h1>ABOUT US</h1>
          </div>
          <p>
            &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; <strong>We</strong> are engaged in manufacturing and supplying of a wide range of Insulation Component of 11kV Shroud, Bird guard, Bus bar insulation, Thermal pad, Vertical terminal boot, Cable joint kit, Insulation binding tape. These are manufactured using high quality Insulation material and in compliance with the defined quality standards. Acknowledged for their dimensional accuracy and application specific designs, our products are widely used in different industries such as, Industrial Molding, Automobile Industries, Electrical Industries, Medical Industries etc. As we wish to cater to world markets, We design customize solution & manufactured by our own unit. That is the reason at PURNA, the quest for quality begins long before production we ensure that the highest-grade raw material goes into the making of insulation compound.
          </p>
          <p>
            &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; <strong>We</strong> are one of the leading Supplier & Authorized Distributor of <strong>TESLA POWER USA</strong>. Expert in UPS & Inverter power solution. We sell & service all major UPS & Inverter, Batteries brand. We believe in building exceptional relationships through superior service, best-in-market products, and expert critical power design assuring our customers the highest level of availability, functionality, and durability. We provide statewide UPS Inverter batteries related service all over Gujarat.
          </p>
        </div>

        <div className="clint_area">
          <h1>OUR CLIENTS</h1>
          <div className="our_clint_area slickslider">
            <div className="slider">
              {[
                './assets/adani.webp',
                './assets/american.webp',
                './assets/bob.webp',
                './assets/hdfc.png',
                './assets/indus.webp',
                './assets/mgvcl.webp',
                './assets/suzlon.webp',
                './assets/tata.webp',
                './assets/terent.webp',
                './assets/texh.webp',
              ].map((src, index) => (
                <div className="slide" key={index}>
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
