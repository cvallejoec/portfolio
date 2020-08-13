import React from 'react';

import Retrato from '../assets/static/retrato.jpeg';

const MySkills = () => {
  return (
    <section
      className="flex flex-col items-center justify-center mx-0 md:mx-32"
      id="skills"
    >
      <h2 className="mt-24 mb-16 text-3xl">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        <div className="w-11/12 md:w-full mx-auto">
          <h3 className="text-xl font-bold">Every Day is a New Challenge</h3>
          <p className="my-12 text-portfolio_gray text-lg">
            I like to keep learning, continue challenging myself, and do
            interesting things that matter. I'm young, with abundant energy, and
            that's what pulls me to work hard; to proof to myself that I can do
            better things than what I am doing now.
          </p>
          <p className="my-12 text-portfolio_gray text-lg">
            I'm a fast learner, able to pick up new skills and juggle different
            projects and roles with relative ease.
          </p>
          <a
            href=""
            className="uppercase border px-6 py-3 hover:bg-portfolio_white hover:text-portfolio_gray_dark hover:font-semibold"
          >
            Contact Me
          </a>
        </div>
        {/* <div className="w-11/12 md:w-10/12 mx-auto sm:max-w-sm"> */}
        <div className="w-11/12 mx-auto">
          <div
            className="shadow w-full bg-grey-light my-4"
            data-aos="flip-left"
          >
            <h2 className="my-4 text-xl">Teachable</h2>
            <div
              className="bg-portfolio_orange text-xs h-1 flex justify-end items-center leading-none text-right text-white"
              style={{ width: '100%' }}
            >
              <span className="block border-2 mb-12 p-1">100%</span>
            </div>
          </div>
          <div
            className="shadow w-full bg-grey-light my-4"
            data-aos="flip-left"
          >
            <h2 className="my-4 text-xl">Self-Learner</h2>
            <div
              className="bg-portfolio_orange text-xs h-1 flex justify-end items-center leading-none text-right text-white"
              style={{ width: '90%' }}
            >
              <span className="block border-2 mb-12 p-1">90%</span>
            </div>
          </div>
          <div
            className="shadow w-full bg-grey-light my-4"
            data-aos="flip-left"
          >
            <h2 className="my-4 text-xl">Teamworker</h2>
            <div
              className="bg-portfolio_orange text-xs h-1 flex justify-end items-center leading-none text-right text-white"
              style={{ width: '70%' }}
            >
              <span className="block border-2 mb-12 p-1">70%</span>
            </div>
          </div>
          <div
            className="shadow w-full bg-grey-light my-4"
            data-aos="flip-left"
          >
            <h2 className="my-4 text-xl">Leadership</h2>
            <div
              className="bg-portfolio_orange text-xs h-1 flex justify-end items-center leading-none text-right text-white"
              style={{ width: '85%' }}
            >
              <span className="block border-2 mb-12 p-1">85%</span>
            </div>
          </div>
          <div
            className="shadow w-full bg-grey-light my-4"
            data-aos="flip-left"
          >
            <h2 className="my-4 text-xl">Risk-Taker</h2>
            <div
              className="bg-portfolio_orange text-xs h-1 flex justify-end items-center leading-none text-right text-white"
              style={{ width: '80%' }}
            >
              <span className="block border-2 mb-12 p-1">80%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
