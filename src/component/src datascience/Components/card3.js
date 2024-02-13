import React from "react";
import JsonCardData from "../fullStackDev.json";

const Cards3 = () => {
  const cardData4 = JsonCardData.Section4;

  return (
    <div className="container mx-auto mt-8 text-center max-w-screen-lg bg-rgb-232-243-250">
      <h1 className="text-3xl font-bold mb-4">{cardData4.Title}</h1>

      <div className="text-2xl font-bold mb-2 bg-orange-100 p-5">
        {cardData4.Headings[0]}
      </div>

      <div className="flex justify-center items-center">
        {cardData4.Images.map((image, index) => (
          <div key={index} className={image.width + " " + image.marginBottom}>
            <img
              src={image.src}
              alt={image.alt}
              className={"w-[60vw] min-w-[40vw] h-100 rounded-lg " + image.rounded}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards3;
