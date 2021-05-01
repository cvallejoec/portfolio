import React from 'react';

import IconQuote from '../icons/icon-quote.jsx';

const Testimonial = ({ text, picture, name, charge }) => {
  return (
    <div className="flex flex-col justify-center items-center h-64">
      <IconQuote
        width="30"
        fill="text-portfolio_white fill-current"
        background="bg-portfolio_orange"
      />
      <p className="text-portfolio_gray my-8 text-center text-lg">{text}</p>
      <img src={picture} className="w-32 rounded-full" />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <h4 className="text-portfolio_gray">{charge}</h4>
    </div>
  );
};

export default Testimonial;
