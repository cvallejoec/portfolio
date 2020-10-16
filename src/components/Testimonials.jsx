import React from 'react';

import Retrato from '../assets/static/profile.png';
import RetratoNancy from '../assets/static/retrato-nancy.jpeg';
import RetratoRomeo from '../assets/static/retrato-romeo.jpg';

import Testimonial from './Testimonial.jsx';

const Testimonials = () => {
  return (
    <section
      className="carousel relative flex flex-col items-center"
      id="testimonials"
    >
      <h2 className="mt-24 mb-32 sm:mb-20 text-3xl">Testimonials</h2>
      {/* <div className="carousel-inner relative overflow-hidden sm:w-2/3 md:w-3/4 lg:w-2/4 mx-auto pt-12 pb-12"> */}
      <div className="carousel-inner relative sm:w-2/3 md:w-3/4 lg:w-2/4 mx-auto pt-12 pb-32 sm:pb-20">
        {/* <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden
          defaultChecked="checked"
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: '50vh' }}
        >
          <div>
            <Testimonial
              text="Lorem fistrum nostrud incididunt minim minim. Magna minim ut magna. Hasta luego Lucas jarl se calle ustée a gramenawer occaecat occaecat sexuarl enim tiene musho peligro papaar papaar. Tiene musho peligro magna adipisicing ut pupita. Diodenoo aliquip llevame al sircoo voluptate dolore condemor. "
              picture={Retrato}
              name="Jhon Doe 1"
              charge="My Charge"
            />
          </div>
        </div> */}
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden
          defaultChecked="checked"
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: '50vh' }}
        >
          <div>
            <Testimonial
              text="
                Una persona  con alto conocimiento que desarrolla sin problema lo que le solicita, altamente inteligente capaz de resolver los inconvenientes al instante.
                Por sus excelentes habilidades y profundo conocimiento se hace una persona confiable y muy transparente."
              picture={RetratoNancy}
              name="Nancy Boada"
              charge="CEO, TuCarroFast"
            />
          </div>
        </div>
        <input
          className="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: '50vh' }}
        >
          <div>
            <a href="https://www.linkedin.com/in/romcabrera/" target="_blank">
              <Testimonial
                text="Carlos is a very resourceful and skilled software engineer. I can attest to the fact that he just needs a couple of days (or hours) to investigate and learn new technologies and put them to use. His enthusiasm is contagious, and his work ethics is top notch."
                picture={RetratoRomeo}
                name="Romeo Cabrera"
                charge="Senior Data Scientist"
              />
            </a>
          </div>
        </div>
        {/* Add additional indicators for each slide*/}
        <ol className="carousel-indicators">
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-1"
              className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-2"
              className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >
              •
            </label>
          </li>
          {/* <li className="inline-block mr-3">
            <label
              htmlFor="carousel-3"
              className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >
              •
            </label>
          </li> */}
        </ol>
      </div>
    </section>
  );
};

export default Testimonials;
