import React from 'react';

const IconQuote = ({ width, fill, background }) => {
  const class_bg =
    'flex justify-center items-center w-16 h-16 py-8 ' + background;
  return (
    <div className={class_bg}>
      <svg
        id="Capa_1"
        enable-background="new 0 0 409.294 409.294"
        height={width}
        viewBox="0 0 409.294 409.294"
        width={width}
        className={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m233.882 29.235v175.412h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412z" />
        <path d="m0 204.647h116.941c0 64.48-52.461 116.941-116.941 116.941v58.471c96.728 0 175.412-78.684 175.412-175.412v-175.412h-175.412z" />
      </svg>
    </div>
  );
};

export default IconQuote;
