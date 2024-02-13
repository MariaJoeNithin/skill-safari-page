import React from "react";
import JsonCardData from "../fullStackDev.json";

const Cards4 = () => {
  const cardData4 = JsonCardData.section5;

  return (
    <div className="container mb-4 mx-auto my-8 text-center max-w-screen-lg">
      <h1 className="text-3xl font-bold mb-10 mx-auto">
        {cardData4.Title}
      </h1>

      {cardData4.Rows.map((row, index) => (
        <div key={index} 
        className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mb-8">
          <div className="w-full col">
            <div className="text-center md:text-left">
              <h2 className="text-xl mb-2">{row.Heading}</h2>
              <p>{row.Title}</p>
            </div>
          </div>
          <div className="w-full col ">
            <img
              src={row.Image.src}
              alt={row.Image.alt}
              className="w-full h-auto max-w-[650pxs] rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards4;
