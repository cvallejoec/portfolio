import React from 'react';

import Tool from '../components/Tool.jsx';

import IconPython from '../assets/static/tool-python.svg';
import IconScraping from '../assets/static/service-scraping.svg';
import IconXPath from '../assets/static/tool-xpath.svg';

const Portfolio = () => {
  return (
    <div className="text-portfolio_white flex flex-col items-center justify-center pt-16">
      <section className="background-hero flex items-center justify-center h-48 w-full">
        <h2 className="text-portfolio_white text-4xl text-center font-bold">
          Portfolio
        </h2>
      </section>
      <h2 className="my-16 text-xl text-center uppercase">CIA Declassified</h2>
      <div className="mx-4 md:mx-32">
        <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-16 md:gap-32">
          <div className="flex flex-col justify-center items-center">
            <a href="https://miventanadev.com/semaforizacion" target="_blank">
              <img
                src="https://1.bp.blogspot.com/-r1DhOy90yag/Xz6XjnRRwkI/AAAAAAAAnY8/Imryqq61JfUpduX5VJUTwIzaaQIBkrxNwCLcBGAsYHQ/s1920/trabajo-3.gif"
                className="w-full lg:w-full"
              />
            </a>
            <div className="w-full lg:w-3/4 flex flex-col mt-8 ">
              <a
                href="https://cvallejoec.github.io/platzi-intelligence-agency/pia_web/"
                target="_blank"
                className="bg-portfolio_orange text-portfolio_white my-4 py-3 text-center rounded-md text-xl"
              >
                Try it!
                <i className="lni lni-star-filled ml-2"></i>
              </a>
              <a
                href="https://github.com/cvallejoec/platzi-intelligence-agency"
                target="_blank"
                className="border text-portfolio_white my-4 py-3 text-center rounded-md text-xl"
              >
                Check the code
                <i className="lni lni-github-original ml-2"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl my-8 sm:my-0">
              Tools & Frameworks
            </h3>
            <div>
              <Tool
                icon={IconPython}
                title="Python"
                description="All the frontend using Hooks."
              />
              <Tool
                icon={IconScraping}
                title="Scrapy"
                description="Specialized asynchronous scraping framework"
              />
              <Tool
                icon={IconXPath}
                title="XPath"
                description="Precision language to extract the data"
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-2xl text-center my-8">Objective</h3>
            <p className="text-portfolio_gray text-center">
              Extract declassified documents of CIA's website.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center my-8">Description</h3>
            <p className="text-portfolio_gray text-center">
              I create Spyders with the order to enter and extract every
              declassified document on CIA's page and feed with them my website.
            </p>
            <p className="text-portfolio_gray text-center">
              To do this I followed all the robots.txt rules.
            </p>
          </div>
        </section>
        <section>
          <div className="flex flex-col justify-center items-center">
            <h2
              data-aos="fade-up"
              className="text-3xl text-center my-12 font-semibold border border-portfolio_orange inline px-16 py-4"
            >
              Feedback
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-32 px-8">
              <div>
                <h3 className="text-2xl text-center my-8">Obstacles I found</h3>
                <ol className="grid grid-cols-1 portfolio-list text-portfolio_gray ">
                  <li>Determinate the correct XPath links</li>
                  <li>Know how Scrapy asynchronous props work</li>
                </ol>
              </div>
              <div>
                <h3 className="text-2xl text-center my-8">How I Overcome It</h3>
                <ul className="grid grid-cols-1 portfolio-list text-portfolio_gray ">
                  <li>Inquire on each line of HTML looking for a pattern</li>
                  <li>Lear from rudiments how Scrapy works</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
