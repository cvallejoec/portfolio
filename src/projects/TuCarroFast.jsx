import React from 'react';

import Tool from '../components/Tool.jsx';

import IconPHP from '../assets/static/tool-php.svg';
import IconWordPress from '../assets/static/tool-wordpress.svg';
import IconWooCommerce from '../assets/static/too-woocommerce.svg';

const TuCarroFast = () => {
  return (
    <div className="text-portfolio_white flex flex-col items-center justify-center pt-16">
      <section className="background-hero flex items-center justify-center h-48 w-full">
        <h2 className="text-portfolio_white text-4xl text-center font-bold">
          Portfolio
        </h2>
      </section>
      <h2 className="my-16 text-xl text-center uppercase">
        TuCarroFast E-Commerce
      </h2>
      <div className="mx-4 md:mx-32">
        <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-16 md:gap-32">
          <div className="flex flex-col justify-center items-center">
            <a href="https://miventanadev.com/semaforizacion" target="_blank">
              <img
                src="https://1.bp.blogspot.com/-zgT3952LSv0/Xz6Xr4vpEJI/AAAAAAAAnZA/bKPcDzbS8RMt6rMVYnTAmAJZRBQYRE9pACLcBGAsYHQ/s1920/trabajo-4.gif"
                className="w-full lg:w-full"
              />
            </a>
            <div className="w-full lg:w-3/4 flex flex-col mt-8 ">
              <a
                href="https://tucarrofast.com"
                target="_blank"
                className="bg-portfolio_orange text-portfolio_white my-4 py-3 text-center rounded-md text-xl"
              >
                Try it!
                <i className="lni lni-star-filled ml-2"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl my-8 sm:my-0">
              Tools & Frameworks
            </h3>
            <div>
              <Tool
                icon={IconPHP}
                title="PHP"
                description="All the frontend using Hooks."
              />
              <Tool
                icon={IconWordPress}
                title="WordPress"
                description="All the frontend using Hooks."
              />
              <Tool
                icon={IconWooCommerce}
                title="WooCommerce"
                description="All the frontend using Hooks."
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-2xl text-center my-8">Objective</h3>
            <p className="text-portfolio_gray text-center">
              Create a concessionaire E-Commerce where users could been
              redirected to a WhastApp phone number.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-center my-8">Description</h3>
            <p className="text-portfolio_gray text-center">
              This concessionaire has multiple cars on its storage. They needed
              to have a digital transform on them, so the perfect solution were
              to take its store and set it online.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TuCarroFast;
