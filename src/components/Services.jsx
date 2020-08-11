import React, { useEffect } from 'react';

import Service from './Service.jsx';

import ServiceFrontend from '../assets/static/service-frontend.svg';
import ServiceBackend from '../assets/static/service-backend.svg';
import ServiceScraping from '../assets/static/service-scraping.svg';
import ServiceApi from '../assets/static/service-api.svg';
import ServiceDatabase from '../assets/static/service-database.svg';
import ServiceGit from '../assets/static/service-git.svg';

const Services = () => {
  return (
    <section className="flex flex-col items-center" id="services">
      <h2 className="mt-24 mb-16 text-3xl">I Have Knowledge In</h2>
      <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Service
          icon={ServiceFrontend}
          title="Frontend"
          description="Expert on Single Page Applications using JS frameworks like ReactJS and Angular. Also I work with pure CSS or Tailwind CSS framework."
        />
        <Service
          icon={ServiceBackend}
          title="Backend"
          description="From database to endpoints; I can build all the infraestructure, of any aplication. With experience in NodeJS and PHP."
        />
        <Service
          icon={ServiceScraping}
          title="Web Scraping"
          description="If you want to extract information of any website, I can do it for you with Python, and serve the information to you ready to analyze."
        />
        <Service
          icon={ServiceApi}
          title="API's"
          description="Professional REST architecture in JSON format, ready to consume by any client. It could be either a web client or a mobile one."
        />
        <Service
          icon={ServiceDatabase}
          title="Databases"
          description="I've been in touch with SQL and NoSQL databases. I can use MySQL, PostgreSQL, SQL Server and also MongoDB estructure."
        />
        <Service
          icon={ServiceGit}
          title="Git & GitHub"
          description="Finally, either if I'm working alone or with a team, I use productive workflows in order to get the best results."
        />
      </div>
    </section>
  );
};

export default Services;
