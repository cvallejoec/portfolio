import React, { useState, useEffect } from 'react';
import TextLoop from 'react-text-loop';
import { Link } from 'react-scroll';

import IconGitHub from '../icons/icon-github.jsx';
import IconLinkedIn from '../icons/incon-linkedin.jsx';
import IconWhatsApp from '../icons/icon-whatsapp.jsx';
import IconEmail from '../icons/icon-email.jsx';
import IconTikTok from '../icons/icon-tiktok.jsx';

const Hero = () => {
  return (
    <section
      className="text-portfolio_white  h-screen flex flex-col justify-center pl-8 lg:pl-48 background-hero bg-center"
      id="home"
    >
      <div className="pt-40">
        <div className="flex">
          <IconGitHub
            link="https://github.com/cvallejoec"
            width="30"
            fill="hover:text-portfolio_gray_light text-portfolio_gray fill-current"
          />
          <IconLinkedIn
            link="https://www.linkedin.com/in/cvallejoec/"
            width="30"
            fill="hover:text-portfolio_gray_light text-portfolio_gray fill-current"
          />
          <IconEmail
            link="mailto:cvallejo.ec@miventanadev.com"
            width="30"
            fill="hover:text-portfolio_gray_light text-portfolio_gray fill-current"
          />
          <IconWhatsApp
            link="https://api.whatsapp.com/send?phone=593998143091&text=Hola%20Carlos!%20Vi%20tu%20portafolio%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n"
            width="30"
            fill="hover:text-portfolio_gray_light text-portfolio_gray fill-current"
          />
          <IconTikTok
            link="https://www.tiktok.com/@cvallejo.ec"
            width="30"
            fill="hover:text-portfolio_gray_light text-portfolio_gray fill-current"
          />
        </div>
        <h1 className="text-4xl my-4 md:text-6xl" data-aos="fade-right">
          I am Carlos Vallejo
        </h1>
        <div className="">
          <TextLoop
            interval={3000}
            springConfig={{ stiffness: 800, damping: 70 }}
          >
            <a className="text-2xl my-4 md:text-4xl px-4 py-3 border sm:px-10 sm:py-4 w-auto">
              Developer
            </a>
            <a className="text-2xl my-4 md:text-4xl px-4 py-3 border sm:px-10 sm:py-4 w-auto">
              Focused
            </a>
            <a className="text-2xl my-4 md:text-4xl px-4 py-3 border sm:px-10 sm:py-4 w-auto">
              Friendly
            </a>
            <a className="text-2xl my-4 md:text-4xl px-4 py-3 border sm:px-10 sm:py-4 w-auto">
              Hard Worker
            </a>
            <a className="text-2xl my-4 md:text-4xl px-4 py-3 border sm:px-10 sm:py-4 w-auto">
              Creative Person
            </a>
          </TextLoop>
        </div>
      </div>
      <Link
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <div className="bg-portfolio_orange w-16 h-16  mt-32 flex justify-center items-center cursor-pointer">
          <i className="lni lni-arrow-down"></i>
        </div>
      </Link>
    </section>
  );
};

export default Hero;
