import React from "react";
import JsonCardData from "../fullStackDev.json";
import { usePopupBtn } from "../../../Globalbtn";

const Company = () => {
  const companies = JsonCardData.companys;
  const { isOpen, togglePopup } = usePopupBtn();

  return (
    <div className="container mx-auto mt-8 p-5 text-center max-w-screen-xl">
      <h1 className="text-3xl font-bold mb-4 text-center">{companies.title}</h1>
      <div className="grid grid-cols-4 gap-4">
        {companies.images.map((image, index) => (
          <img key={index} src={image} alt={`Partner ${index + 1}`} />
        ))}
      </div>
      <p className="mt-4">{companies.text}</p>
      <button
        className="w-fit md:px-28 px-5 bg-[#F3274F] text-white py-4 text-lg rounded-md hover:bg-blue-600 transition duration-300" onClick={togglePopup}
      >
        {companies.button}
      </button>
    </div>
  );
};

export default Company;
