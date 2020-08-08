import React from 'react';

import Service from './Service.jsx';

import ServiceReact from '../assets/static/service-react.svg';

const Services = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-24 mb-16 text-3xl">My Services</h2>
      <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Service
          icon={ServiceReact}
          title="ReactJS"
          description="Professional architecture. Based on Hooks and Server Side Rendering."
        />
        <Service
          icon={ServiceReact}
          title="ReactJS"
          description="Professional architecture. Based on Hooks and Server Side Rendering."
        />
        <Service
          icon={ServiceReact}
          title="ReactJS"
          description="Professional architecture. Based on Hooks and Server Side Rendering."
        />
        <Service
          icon={ServiceReact}
          title="ReactJS"
          description="Professional architecture. Based on Hooks and Server Side Rendering."
        />
        <Service
          icon={ServiceReact}
          title="ReactJS"
          description="Professional architecture. Based on Hooks and Server Side Rendering."
        />
      </div>
    </div>
  );
};

export default Services;
