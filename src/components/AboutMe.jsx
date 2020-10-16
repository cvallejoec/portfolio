import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Retrato from '../assets/static/retrato-degradado-transparente.png';
import Curriculum from '../assets/static/Currículum.pdf';

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center"
      id="about-me"
    >
      <h2 className="mt-24 mb-16 text-3xl">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        <img
          src={Retrato}
          className="w-11/12 md:w-10/12 mx-auto "
          alt="this-is-me"
        />
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
          <div data-aos="fade-up">
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
                <p>(+593) 0998143091</p>
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
              className="bg-portfolio_orange px-2 py-3 text-sm font-semibold uppercase mr-2 lg:px-8"
              href="mailto:cvallejo.ec@gmail.com"
            >
              Contact Me
              <i className="lni lni-arrow-right ml-2"></i>
            </a>
            <a
              className="border px-2 py-3 text-sm font-semibold uppercase lg:px-8"
              href={Curriculum}
              download
            >
              <i className="lni lni-download mr-2"></i>
              Download CV
            </a>
            {/* <a
              className="bg-portfolio_orange px-4 py-1 md:px-6 md:py-2 md:font-semibold uppercase mr-4"
              href=""
            >
              Contact Me
              <i className="lni lni-arrow-right ml-2"></i>
            </a>
            <a
              className="border px-4 py-1 md:px-6 md:py-2 md:font-semibold uppercase"
              href=""
            >
              <i className="lni lni-download mr-2"></i>
              Download CV
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
