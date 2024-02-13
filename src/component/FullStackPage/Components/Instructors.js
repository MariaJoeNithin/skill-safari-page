import React from "react";

import JsonCardData from "../fullStackDev.json";

import { FaLinkedinIn } from "react-icons/fa";

const Instructors = () => {
  const instructors = JsonCardData.Instructors;

  return (
    <div className="container rounded-md shadow-skillsafari mx-auto  pb-8 px-8">
      <h2 className="text-2xl font-bold mb-4 py-5 border-b border-gray-300">
        {instructors.Title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 items-center justify-center mx-[12px] px-16">
        {instructors.InstructorDetails.map((cnt, index) => (
          <a key={index} href={cnt.profileLink} className=" cursor-pointer">
            <div className="instructor col border border-[#faf6ed] h-[100%] rounded-lg  items-center justify-center "
            >
              <div className="flex items-center justify-center relative">
                <img
                  src={cnt.images}
                  alt={`Icon ${index + 1}`}
                  className=" w-[auto] inline h-[100%] mb-2"
                />
                <p
                  id="LinkedInicon"
                  className="text-lg text-white absolute justify-center flex items-center bottom-5 bg-[#1b71b6] h-[40px] w-[40px] rounded-full"
                >
                  <FaLinkedinIn />
                </p>
              </div>
              <p className="font-[600] text-[24px] pb-2 text-[#2b2f4e] text-center">
                {cnt.InstructorName}
              </p>
              <p className="text-[16px] text-center pb-[16px] leading-[24px] text-[#7c7c7c] ">
                {cnt.workPlace}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
