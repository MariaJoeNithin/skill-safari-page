import React from "react";
import JsonCardData from "../learninghubdev.json";

const Certificate = () => {
  const Certification = JsonCardData["Certification"];

  return (
    <>
      <div className="container mx-auto  pb-8 px-5 ">
        <div className="flex justify-center items-center">
          <h1 className="text-[32px] font-[700] mb-4 border-black border-b-4 text-center inline-block">
            {Certification.Title}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col h-full flex justify-center items-center font-[500] text-[24px]">
            {Certification.text}
          </div>
          <div className="col mx-auto mt-8">
            <img src={Certification.images} alt="Outcome" className=" w-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
