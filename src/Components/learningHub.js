import React from "react";
import jsonData from "../learninghubdev.json";
import Knowmore from "./wantToknowmore";
import ContactForm from "./clientForm";
import Section2 from "./Section2";
import Section3 from "./Section3";
import FAQ from "./FAQ";
import Certificate from "./certificate";
import CardCarousel from "./StudentReview";

const LearningHub = () => {
  const section1 = jsonData.Section1;

  return (
    <>
      <section id="Section1" className=" bg-[#1C2042] text-white">
        <div className="container mx-auto max-w-7xl flex flex-col justify-center align-middle">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 ">
            <div className="col-span-1 flex align-middle justify-center ">
              <div className="flex flex-col gap-y-7 md:p-5 p-2 justify-center ">
                <h2 className="md:text-4xl text-2xl">{section1.Title1}</h2>
                <h2 className="md:text-4xl text-2xl">{section1.Position}</h2>
                <h2 className="md:text-4xl text-2xl">{section1.Position}</h2>
                <p className="md:text-2xl text-lg ">{section1.Description}</p>
                <p className="text-xl border-2 border-[#f2256f] rounded-md max-w-fit p-1">
                  Next Batch Starts: {section1.BatchStart["Next Batch Starts"]}
                </p>
              </div>
            </div>

            <div className="col-span-1  text-white md:p-5 p-2 pb-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section id="Section2">
        <Section2 />
      </section>
      <section id="Section3">
        <Section3 />
      </section>
      <div className="mt-5 lg:mx-auto max-w-7xl ">
        <CardCarousel />
      </div>
      <div className="mt-5 lg:mx-auto max-w-7xl ">
        <Certificate />
      </div>
      <div className="mt-5 lg:mx-auto max-w-7xl">
        <FAQ />
      </div>
      <section id="Section4">
        <Knowmore />
      </section>
    </>
  );
};

export default LearningHub;
