import React from "react";
import JsonCardData from "../fullStackDev.json";

const Company = () => {
  const companies = JsonCardData.companys;

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
        className="text-white font-bold py-2 px-4 rounded mt-2"
        style={{
          backgroundColor: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "8px",
          padding: "10px 30px"
        }}
      >
        {companies.button}
      </button>
    </div>
  );
};

export default Company;
