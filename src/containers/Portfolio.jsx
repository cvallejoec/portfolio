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
      <h2 className="my-16 text-xl text-center uppercase">
        COVID-19 Status Alert in Ecuador
      </h2>
      <div className="mx-4 md:mx-32">
        <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-16 md:gap-32">
          <div className="flex flex-col justify-center items-center">
            <a href="https://miventanadev.com/semaforizacion" target="_blank">
              <img src={Thumbnail} className="w-full lg:w-full" />
            </a>
            <div className="w-full lg:w-3/4 flex flex-col mt-8 ">
              <a
                href="https://miventanadev.com/semaforizacion"
                target="_blank"
                className="bg-portfolio_orange text-portfolio_white my-4 py-3 text-center rounded-md text-xl"
              >
                Try It!
              </a>
              <a
                href=""
                target="_blank"
                className="border text-portfolio_white my-4 py-3 text-center rounded-md text-xl"
              >
                Check the code
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl my-8 sm:my-0">
              Tools & Frameworks
            </h3>
            <div>
              <Tool
                icon={IconReact}
                title="ReactJS"
                description="All the frontend using Hooks."
              />
              <Tool
                icon={IconScraping}
                title="Scraping"
                description="Into the government page to get the main source of information."
              />
              <Tool
                icon={IconNode}
                title="NodeJS"
                description="To get the form data and to verify when a light change happen."
              />
              <Tool
                icon={IconMap}
                title="LeafletJS"
                description="In order to render the map with its states and colours."
              />
              <Tool
                icon={IconDatabase}
                title="MongoDB"
                description="To manage all data and subscribers."
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-2xl text-center my-8">Objective</h3>
            <p className="text-portfolio_gray text-center">
              Subscribers get a notification when a Ecuador's canton light
              change of state. It could be just an email giving the news.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center my-8">Description</h3>
            <p className="text-portfolio_gray text-center">
              In this dashboard you can observe the actual state of COVID lights
              in each canton of Ecuador. Via scraping I determinade the API of
              the government and I started to extract the information from
              there.
            </p>
            <p className="text-portfolio_gray text-center">
              If you like you can subscribe with your name and email in the
              form, and you will receive a notification when some canton changes
              of state.
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
                  <li>Determinate the Government API</li>
                  <li>Draw the cantons</li>
                  <li>Color each canton based on its state</li>
                  <li>Detect the change and send de notification</li>
                </ol>
              </div>
              <div>
                <h3 className="text-2xl text-center my-8">How I Overcome It</h3>
                <ul className="grid grid-cols-1 portfolio-list text-portfolio_gray ">
                  <li>Check each request to server</li>
                  <li>
                    Look for a GeoJSON Ecuador's map. And start to parse it to
                    Leaflet module
                  </li>
                  <li>
                    Save a previous context of the state and compare it with the
                    new one
                  </li>
                  <li>
                    With Node Mailer I could send the email to each subscriber
                    of my MongoDB database
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
