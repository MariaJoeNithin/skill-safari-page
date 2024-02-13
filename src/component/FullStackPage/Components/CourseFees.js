import React from "react";
import JsonCardData from "../fullStackDev.json";
import { Link } from "react-router-dom";

const Fees = () => {
  const feesData = JsonCardData.fees;

  return (
    <div className="container rounded-md shadow-skillsafari mx-auto  pb-8 px-8">
      <h2 className="text-2xl font-bold mb-4 py-5 border-b border-gray-300">
        {feesData.title}
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 ">
        <div className="card col flex justify-end ">
          <div className="md:w-fit w-full h-full bg-[#EEFFF7] p-5 shadow-skillsafari rounded-lg">
            <p className="font-[600] text-[24px] text-center mb-5">
              {feesData.card1.title}
            </p>
            <p className="text-[16px] text-[#555] leading-[24px]">
              {feesData.card1.text1}
            </p>
            <p className="text-[16px] text-blue-500 leading-[24px]">
              {feesData.card1.text2}
            </p>
          </div>
        </div>
        <div className="card col ">
          <div className="md:w-fit w-full h-full p-5 bg-[#F6EDE7] shadow-skillsafari rounded-lg">
            <p className="font-[600] text-[24px] text-center mb-5">
              {feesData.card2.title}
            </p>
            <p className="text-[16px] text-[#555] leading-[24px]">
              {feesData.card2.text1}
            </p>
          </div>
        </div>
      </div>
      <p className="p-2 my-5 text-center w-full">
        Only a Few Slots Lefts, Enroll Now to confirm your slot
      </p>
      <div className="flex justify-center items-center">
        <Link to="/Enroll" className="w-fit md:px-28 px-5 bg-[#F3274F] text-white py-4 text-lg rounded-md hover:bg-blue-600 transition duration-300">
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default Fees;
