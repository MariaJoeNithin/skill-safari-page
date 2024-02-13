import React from "react";
import jsonData from "../fullStackDev.json";
import ContactForm from "./clientForm";

const FullStackPage = () => {
  const section1 = jsonData.Section1;

  return (
    <>
      <section id="Section1" className=" bg-[#1C2042] text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="col-span-1 flex flex-col gap-7 p-2 justify-center">
            <h2 className="md:text-4xl text-6xl font-bold">{section1.Title}</h2>

              <p className="md:text-xl text-lg text-red-700 ">{section1.Description}</p>
              <p className="text-xl border border-red-700 font-[900] rounded-md max-w-fit p-1">
                Next Batch Starts: {section1.BatchStart["Next Batch Starts"]}
              </p>
            </div>
            <div className="col-span-1  text-white md:p-5 p-1 pb-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FullStackPage;