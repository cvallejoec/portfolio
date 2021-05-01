import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <section
      className="flex flex-col items-center justify-center mx-4 md:mx-32"
      id="portfolio"
    >
      <h2 className="mt-24 mb-16 text-3xl">My Best Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="my-4">
          <Link to="/semaforizacion">
            <img
              className="w-10/12 mx-auto"
              src="https://1.bp.blogspot.com/-ctdZgTdP8T8/Xz6ETxSy8iI/AAAAAAAAnX8/35p-5UEnr3Y3OgQbDs4xnMFJ_qyqAFpUQCLcBGAsYHQ/s1901/screenshot-trabajo-1.png"
            />
            <p className="text-portfolio_gray text-center text-xl my-2">
              COVID-19 Status Alert
            </p>
          </Link>
        </div>
        <div className="my-4">
          <Link to="/blog">
            <img
              className="w-10/12 mx-auto"
              src="https://1.bp.blogspot.com/-5L0aKekyMWQ/Xz6EqCSBBnI/AAAAAAAAnYE/kZ5w1-ykTF8XTHZ4guu3CXekRVTUWDotwCLcBGAsYHQ/s1896/screenshot-trabajo-2.png"
            />
            <p className="text-portfolio_gray text-center text-xl my-2">
              Personal Blog
            </p>
          </Link>
        </div>
        <div className="my-4">
          <Link to="/cia-declassified">
            <img
              className="w-10/12 mx-auto"
              src="https://1.bp.blogspot.com/-AW06lf1tB6I/Xz6JBDy0qzI/AAAAAAAAnYQ/UPcvvo_Tm90KsQQC9TDuLM9EIERPzcfFQCLcBGAsYHQ/s1402/screenshot-trabajo-3.png"
            />
            <p className="text-portfolio_gray text-center text-xl my-2">
              CIA Declassified
            </p>
          </Link>
        </div>
        <div className="my-4">
          <Link to="/tucarrofast">
            <img
              className="w-10/12 mx-auto"
              src="https://1.bp.blogspot.com/-GoDglTlrnKM/Xz6Lx_gn3iI/AAAAAAAAnYc/JORnGODoJvYLBg4n_IdNsWGO3JvXA_djwCLcBGAsYHQ/s1895/screenshot-trabajo-4.png"
            />
            <p className="text-portfolio_gray text-center text-xl my-2">
              TuCarroFast
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
