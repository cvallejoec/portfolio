import React from 'react';

import Thumbnail from '../assets/static/trabajo-1.gif';
import IconReact from '../assets/static/tool-react.svg';
import IconScraping from '../assets/static/service-scraping.svg';
import IconNode from '../assets/static/tool-node.svg';
import IconMap from '../assets/static/tool-map.svg';
import IconDatabase from '../assets/static/service-database.svg';

import Tool from '../components/Tool.jsx';

const Portfolio = () => {
  return (
    <div className="text-portfolio_white flex flex-col items-center justify-center pt-16">
      <section className="background-hero flex items-center justify-center h-48 w-full">
        <h2 className="text-portfolio_white text-4xl text-center font-bold">
          Portfolio
        </h2>
      </section>
      <h2 className="my-16 text-xl text-center uppercase">My Own Blog</h2>
      <div className="mx-4 md:mx-32">
        <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-16 md:gap-32">
          <div className="flex flex-col justify-center items-center">
            <a href="https://miventanadev.com/semaforizacion" target="_blank">
              <img
                src="https://1.bp.blogspot.com/-aHFL94qLYXA/Xz6Xag19JhI/AAAAAAAAnY4/gFinacnE604nef5omBd9NOWV1k1fvIKvQCLcBGAsYHQ/s1920/trabajo-2.gif"
                className="w-full lg:w-full"
              />
            </a>
            <div className="w-full lg:w-3/4 flex flex-col mt-8 ">
              <a
                href="https://miventanadev.com/blog"
                target="_blank"
                className="bg-portfolio_orange text-portfolio_white my-4 py-3 text-center rounded-md text-xl"
              >
                Try it!
                <i className="lni lni-star-filled ml-2"></i>
              </a>
              <a
                href="https://github.com/cvallejoec"
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
                icon={IconNode}
                title="NodeJS"
                description="CRUD created with Express. Each endpoint is a functional API."
              />
              <Tool
                icon={IconReact}
                title="ReactJS"
                description="To render the frontend based on the API."
              />
              <Tool
                icon={IconDatabase}
                title="MongoDB"
                description="To manage all data."
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-2xl text-center my-8">Objective</h3>
            <p className="text-portfolio_gray text-center">
              Show to world my thoughts, my experiences, and my knowledge in a
              Blog.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center my-8">Description</h3>
            <p className="text-portfolio_gray text-center">
              I wanted to create my own site not using any framework like
              WordPress or Gatsby. Just a NodeJS CRUD, where I can consume it by
              any client.
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
                  <li>I didn't know anything about Node JS</li>
                  <li>Use a Markdown structure to write each article</li>
                  <li>It was just the second time I use MongoDB</li>
                </ol>
              </div>
              <div>
                <h3 className="text-2xl text-center my-8">How I Overcome It</h3>
                <ul className="grid grid-cols-1 portfolio-list text-portfolio_gray ">
                  <li>
                    Learn from zero how to create useful endpoints in Platzi and
                    Udemy
                  </li>
                  <li>
                    I had to learn the concept of "sanitize" the Markdown in
                    order to parse it to pure HTML
                  </li>
                  <li>
                    In this time I create a better professional architechture
                  </li>
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
