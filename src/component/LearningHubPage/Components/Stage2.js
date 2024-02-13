import React from "react";

import JsonCardData from "../learninghubdev.json";

const Stage2 = () => {
  const stg2 = JsonCardData["Stage 2"];

  return (
    <div className="container rounded-md shadow-skillsafari mx-auto  pb-8 px-8">
      <h2 className="text-2xl font-bold mb-4 py-5 border-b border-gray-300">
        {stg2.Title}
      </h2>
      <div className="flex flex-col gap-5">
        <div className="col bg-orange-100 h-[100%] rounded-md p-4">
          <p className="text-[20px] text-[#212529] mb-4">{stg2.subTopic}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-5">
          {stg2.program.map((pgm, index) => (
            <div
              key={index}
              className="col bg-orange-100 border rounded-md flex flex-col items-center"
            >
              <div className="careerpathTitle p-4 text-2xl font-[700] text-center">
                {pgm.Title}
              </div>
              <div className="flex flex-wrap justify-evenly mb-4">
                {pgm.images.map((imag, index) => (
                  <img
                    key={index}
                    src={imag}
                    alt={`Icon ${index + 1}`}
                    className="max-w-[60px]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="w-fit mt-8 md:px-10 px-5 bg-[#F3274F] text-white py-4 text-lg rounded-md hover:bg-blue-600 transition duration-300">
          Choose your career path now!
        </button>
      </div>
    </div>
  );
};

export default Stage2;
