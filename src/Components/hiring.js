import React from "react";
import JsonCardData from "../learninghubdev.json";

const Company = () => {
  const companies = JsonCardData.companys;

  return (
    <div className="container rounded-md shadow-skillsafari mx-auto  p-8">
      <div className="flex justify-center items-center">
        <h1 className="text-[28px] font-[700] mb-4 pb-1 border-black border-b-2 text-center inline-block">
          {companies.title}
        </h1>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4 md:p-10 justify-center items-center">
        {companies.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Partner ${index + 1}`}
            className=" h-auto w-full"
          />
        ))}
      </div>
      <p className="p-2 my-5 text-center w-full">{companies.text}</p>
      <div className="flex justify-center items-center">
        <button className="w-fit md:px-28 px-5 bg-[#F3274F] text-white py-4 text-lg rounded-md hover:bg-blue-600 transition duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Company;
