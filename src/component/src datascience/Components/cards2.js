import React from "react";
import JsonCardData from "../fullStackDev.json";

const Cards2 = () => {
  const cardData2 = JsonCardData.Section3;

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-3xl font-bold mb-4">{cardData2.Title}</h1>

      <div className="flex flex-wrap justify-center">
        <div className="w-1/2  md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4">
          <img
            src="https://res.cloudinary.com/skill-safari/image/upload/v1688626100/website/web%20images/nasscom_ivm0o1.webp"
            alt="Image 1"
            className="w-[auto] h-[auto] mx-auto mb-2"
          />
        </div>
        <div className="w-1/2  md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4">
          <img
            src="https://res.cloudinary.com/skill-safari/image/upload/v1688626100/website/web%20images/iabac_lsk3ij.webp"
            alt="Image 2"
            className="w-[auto] h-[auto] mx-auto mb-2"
          />
        </div>
        <div className="w-1/2  md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4">
          <img
            src="https://res.cloudinary.com/skill-safari/image/upload/v1688626100/website/web%20images/skill_india_nff8zb.webp"
            alt="Image 3"
            className="w-[auto] h-[auto] mx-auto mb-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards2;
