import React from 'react';

import Retrato from '../assets/static/retrato.jpeg';

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="mt-24 mb-16 text-3xl">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        <img src={Retrato} className="w-11/12 md:w-10/12 mx-auto " />
        <div className="w-11/12 md:w-full mx-auto md:pr-16">
          <span className="block px-4 py-4 border-2 w-32 text-center text-xl font-bold">
            Hi There
          </span>
          <p className="my-12 text-portfolio_gray text-lg">
            I'm passionate about learning new things. If I don't know something,
            just allow me a couple of days, I will investigate, and finally I
            will be working on that new feature for you. I feel happy and
            satisfied when I serve to people and also when I work to get a
            company goal.
          </p>
          <div>
            <div className="grid sm:grid-cols-2">
              <div className="my-2">
                <label className="text-portfolio_orange font-bold">Name:</label>
                <p>Carlos Vallejo</p>
              </div>
              <div className="my-2">
                <label className="text-portfolio_orange font-bold">
                  Email:
                </label>
                <p>cvallejo.ec@gmail.com</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2">
              <div className="my-2">
                <label className="text-portfolio_orange font-bold">
                  Phone:
                </label>
                <p>(+593) 0998143981</p>
              </div>
              <div className="my-2">
                <label className="text-portfolio_orange font-bold">
                  Residence:
                </label>
                <p>Quito - Ecuador</p>
              </div>
            </div>
          </div>
          <hr className="border-1 border-portfolio_gray my-8" />
          <div>
            <a
              className="bg-portfolio_orange px-4 py-1 md:px-6 md:py-2 md:font-semibold uppercase mr-4"
              href=""
            >
              Contact Me
            </a>
            <a
              className="border px-4 py-1 md:px-6 md:py-2 md:font-semibold uppercase"
              href=""
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
