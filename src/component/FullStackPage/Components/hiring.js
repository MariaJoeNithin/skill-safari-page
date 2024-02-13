import React from "react";
import JsonCardData from "../fullStackDev.json";

const Company = () => {
  const companies = JsonCardData.companys;

  return (
    <div className="container rounded-md shadow-skillsafari mx-auto  pb-8 px-8">
      <h1 className="text-3xl font-bold mb-4 text-center">{companies.title}</h1>
      <div className="grid grid-cols-4 gap-4">
        {companies.images.map((image, index) => (
          <img key={index} src={image} alt={`Partner ${index + 1}`} />
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
