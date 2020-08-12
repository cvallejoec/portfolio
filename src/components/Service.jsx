import React, { useEffect } from 'react';

const Service = ({ icon, title, description }) => {
  return (
    <div
      data-aos="fade-up"
      className="m-10 flex flex-col items-center sm:items-start"
    >
      <img src={icon} className="w-16" alt={icon} />
      <h2 className="my-8 text-2xl">{title}</h2>
      <p className="text-portfolio_gray text-center sm:text-left">
        {description}
      </p>
      <div className="bg-portfolio_orange w-8 h-1 mt-10"></div>
    </div>
  );
};

export default Service;
