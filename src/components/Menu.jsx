import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';

import Emblem from '../assets/static/emblem.png';
import Retrato from '../assets/static/retrato.jpeg';

const Menu = () => {
  let location = useLocation();

  if (location.pathname === '/') {
    return (
      <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 fixed w-screen z-30">
        <div className="flex-1 flex justify-between items-center">
          <Link to="/">
            <img
              src={Emblem}
              alt="emblem"
              className="w-16 lg:ml-32 xl:ml-48 prueba"
            />
          </Link>
        </div>
        <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>
        <input type="checkbox" className="hidden" id="menu-toggle" />
        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-portfolio_gray pt-4 lg:pt-0">
              <ScrollLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="cursor-pointer lg:p-4 py-3 px-0 block border-t-2 border-transparent hover:border-portfolio_orange hover:text-portfolio_gray_dark uppercase text-right font-bold">
                  Home
                </li>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="cursor-pointer lg:p-4 py-3 px-0 block border-t-2 border-transparent hover:border-portfolio_orange hover:text-portfolio_gray_dark uppercase text-right font-bold">
                  Services
                </li>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="about-me"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="cursor-pointer lg:p-4 py-3 px-0 block border-t-2 border-transparent hover:border-portfolio_orange hover:text-portfolio_gray_dark uppercase text-right font-bold">
                  About Me
                </li>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="cursor-pointer lg:p-4 py-3 px-0 block border-t-2 border-transparent hover:border-portfolio_orange hover:text-portfolio_gray_dark uppercase text-right font-bold">
                  Skills
                </li>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="cursor-pointer lg:p-4 py-3 px-0 block border-t-2 border-transparent hover:border-portfolio_orange hover:text-portfolio_gray_dark uppercase text-right font-bold">
                  Portfolio
                </li>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="cursor-pointer lg:p-4 py-3 px-0 block border-t-2 border-transparent hover:border-portfolio_orange hover:text-portfolio_gray_dark uppercase text-right font-bold">
                  Testimonials
                </li>
              </ScrollLink>
            </ul>
          </nav>
          <a
            href="#"
            className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor-pointer"
          >
            <img
              src={Retrato}
              className="rounded-full w-10 h-10 border-2 border-transparent hover:border-portfolio_orange"
              alt="Carlos Vallejo"
            />
          </a>
        </div>
      </header>
    );
  } else {
    return (
      <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 fixed w-screen z-30">
        <div className="flex-1 flex justify-between items-center">
          <Link to="/">
            <img
              src={Emblem}
              alt="emblem"
              className="w-16 lg:ml-32 xl:ml-48 prueba"
            />
          </Link>
        </div>
        <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>
        <input type="checkbox" className="hidden" id="menu-toggle" />
        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-portfolio_gray pt-4 lg:pt-0">
              <Link to="/">
                <li className="cursor-pointer lg:p-4 py-3 px-0 block border-t-2 border-transparent hover:border-portfolio_orange hover:text-portfolio_gray_dark uppercase text-right font-bold">
                  Home
                </li>
              </Link>
              <Link to="/">
                <li className="cursor-pointer lg:p-4 py-3 px-0 block border-t-2 border-transparent hover:border-portfolio_orange hover:text-portfolio_gray_dark uppercase text-right font-bold">
                  Services
                </li>
              </Link>
              <Link to="/">
                <li className="cursor-pointer lg:p-4 py-3 px-0 block border-t-2 border-transparent hover:border-portfolio_orange hover:text-portfolio_gray_dark uppercase text-right font-bold">
                  About Me
                </li>
              </Link>
              <Link to="/#skills">
                <li className="cursor-pointer lg:p-4 py-3 px-0 block border-t-2 border-transparent hover:border-portfolio_orange hover:text-portfolio_gray_dark uppercase text-right font-bold">
                  Skills
                </li>
              </Link>
              <Link to="/">
                <li className="cursor-pointer lg:p-4 py-3 px-0 block border-t-2 border-transparent hover:border-portfolio_orange hover:text-portfolio_gray_dark uppercase text-right font-bold">
                  Portfolio
                </li>
              </Link>
              <Link to="/">
                <li className="cursor-pointer lg:p-4 py-3 px-0 block border-t-2 border-transparent hover:border-portfolio_orange hover:text-portfolio_gray_dark uppercase text-right font-bold">
                  Testimonials
                </li>
              </Link>
            </ul>
          </nav>
          <a
            href="#"
            className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 cursor-pointer"
          >
            <img
              src={Retrato}
              className="rounded-full w-10 h-10 border-2 border-transparent hover:border-portfolio_orange"
              alt="Carlos Vallejo"
            />
          </a>
        </div>
      </header>
    );
  }
};

export default Menu;
