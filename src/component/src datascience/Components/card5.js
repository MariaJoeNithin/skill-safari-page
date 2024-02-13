import React from "react";
import JsonCardData from "../fullStackDev.json";

const Cards5 = () => {
  const cardData5 = JsonCardData.section6;

  return (
    <div className="container mx-auto mt-8 text-center max-w-screen-lg mb-4">
      <h1 className="text-3xl font-bold mb-4 mx-auto">
        {cardData5.Title}
      </h1>

      {cardData5.Rows.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mb-8"
        >
          <div className="col mx-auto ">
            <img
              src={row.Image.src}
              alt={row.Image.alt}
              className="w-full max-w-[650px] h-auto rounded-lg"
            />
          </div>
          <div className="col">
            <div className="flex  mb-4">
              <p className="text-lg ">{row.Heading}</p>
              <p>{row.Title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards5;
