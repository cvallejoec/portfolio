import React from 'react';

import IconGitHub from '../icons/icon-github.jsx';
import IconLinkedIn from '../icons/incon-linkedin.jsx';
import IconWhatsApp from '../icons/icon-whatsapp.jsx';
import IconEmail from '../icons/icon-email.jsx';

const Hero = () => {
  return (
    <div className="text-portfolio_white  h-screen flex flex-col justify-center pl-8 lg:pl-48 background-hero">
      <div className="pt-40">
        <div className="flex">
          <IconGitHub
            link="https://github.com/cvallejoec"
            width="30"
            fill="text-portfolio_gray fill-current"
          />
          <IconLinkedIn
            link="https://www.linkedin.com/in/cvallejoec/"
            width="30"
            fill="text-portfolio_gray fill-current"
          />
          <IconEmail
            link="mailto:cvallejo.ec@miventanadev.com"
            width="30"
            fill="text-portfolio_gray fill-current"
          />
          <IconWhatsApp
            link="https://api.whatsapp.com/send?phone=593998143091&text=Hola%20Carlos!%20Vi%20tu%20portafolio%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n"
            width="30"
            fill="text-portfolio_gray fill-current"
          />
        </div>
        <h1 className="text-4xl my-4 md:text-6xl">I am Carlos Vallejo</h1>
        <div>
          <span className="text-3xl block my-4 md:text-4xl">Programmer</span>
        </div>
      </div>
      <div className="bg-portfolio_orange w-16 h-16  mt-32 flex justify-center items-center cursor-pointer">
        <svg
          className="w-4 text-portfolio_white fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style={{ enableBackground: 'new 0 0 512 512' }}
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M441.156,322.876l-48.666-47.386c-3.319-3.243-8.619-3.234-11.93,0.017l-81.894,80.299V8.533
			c0-4.71-3.823-8.533-8.533-8.533h-68.267c-4.71,0-8.533,3.823-8.533,8.533v347.273l-81.894-80.299
			c-3.311-3.243-8.602-3.251-11.921-0.017l-48.666,47.386c-1.655,1.604-2.586,3.806-2.586,6.11c0,2.304,0.939,4.506,2.586,6.11
			l179.2,174.481c1.655,1.613,3.806,2.423,5.948,2.423c2.15,0,4.292-0.811,5.956-2.423l179.2-174.481
			c1.647-1.604,2.577-3.806,2.577-6.11C443.733,326.682,442.803,324.48,441.156,322.876z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
