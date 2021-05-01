import React from 'react';

const Tool = ({ icon, title, description }) => {
  return (
    <div
      data-aos="flip-right"
      className="flex justify-start items-center my-10"
    >
      <img src={icon} className="w-16 mr-8" />
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-portfolio_gray">{description}</p>
      </div>
    </div>
  );
};

export default Tool;
