import React from "react";

import JsonCardData from "../learninghubdev.json";

const Stage1 = () => {
  const stg1 = JsonCardData["Stage 1"];

  return (
    <div className="container rounded-md shadow-skillsafari mx-auto  pb-8 px-8">
      <h2 className="text-2xl font-bold mb-4 py-5 border-b border-gray-300">
        {stg1.Title}
      </h2>
      <div className="flex flex-col gap-5">
        <div className="col bg-orange-100 h-[100%] rounded-md p-4">
          <p className="text-[20px] text-[#212529] mb-4">
            {stg1.subTopic.content}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            {stg1.subTopic.images.map((image, index) => (
              <div
                key={index}
                className="col grid grid-cols-1 sm:grid-cols-6 items-center"
              >
                <img
                  src={image}
                  alt={`Icon ${index + 1}`}
                  className="col sm:col-span-1 max-w-14 inline h-[auto] my-3"
                />
                <p className="col sm:col-span-4 sm:ps-5 sm:max-w-[163px] text-[#212529] ">
                  {stg1.subTopic.imgCaption[index]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="col bg-orange-100 h-[100%] rounded-md p-4">
          <p className="text-[20px] text-[#212529] mb-4">
            {stg1.program.Title}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4">
            {stg1.program.images.map((image, index) => (
              <div key={index} className="col items-center">
                <img
                  src={image}
                  alt={`Icon ${index + 1}`}
                  className="rounded justify-center sm:justify-start max-w-[100px] inline h-[auto] my-3"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage1;
