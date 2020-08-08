import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-24 mb-16 text-3xl">About Me</h1>
      <div className="bg-portfolio_orange">
        <img src="" />
        <div>
          <span>Hi There</span>
          <p>
            In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at
            sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id
            efficitur sagittis, urna est ultricies eros, ac porta sem turpis
            quis leo. Nulla in feugiat elit.
          </p>
          <div>
            <div>
              <label>Name:</label>
              <p>Carlos Vallejo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
