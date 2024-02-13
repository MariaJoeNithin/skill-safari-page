import React from "react";
import JsonCardData from "../fullStackDev.json";

const Certificate = () => {
  const Certification = JsonCardData["Certification"];

  return (
    <>
      <div className="container rounded-md shadow-skillsafari mx-auto  pb-8 px-8">
        <h2 className="text-2xl font-bold mb-4 py-5 border-b border-gray-300">
          {Certification.Title}
        </h2>
        <div className="flex flex-col">
          <div className="flex ">{Certification.text}</div>
          <div className="flex mx-auto mt-8">
            <img
              src={Certification.images}
              alt="Outcome"
              className=" max-w-[500px] min-w-[160px] w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
