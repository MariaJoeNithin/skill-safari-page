import React from "react";
import JsonCardData from "../fullStackDev.json";

const Section2 = () => {
  const cardData = JsonCardData.Section2;

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="container p-5 mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {cardData.Title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
          {cardData.subHeading.imgCaption.map((caption, index) => (
            <div
              key={index}
              className="col h-[100%] bg-orange-100 rounded-md p-4 text-center"
            >
              <img
                src={cardData.subHeading.images[index]}
                alt={`Icon ${index + 1}`}
                className="w-20 h-20 mx-auto mb-2"
              />
              <p className="font-[600] text-[18px]">{caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
