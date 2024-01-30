import React from "react";
import JsonCardData from "../learninghubdev.json";
import { FaMeteor } from "react-icons/fa";

const OutcomeBased = () => {
  let Outcome = JsonCardData["Outcome Based Learning"];
  return (
    <>
      <div className="container rounded-md shadow-skillsafari mx-auto  pb-8 px-8">
        <div className="flex justify-center items-center">
          <h1 className="text-[32px] font-[700] mb-4 border-black border-b-4 text-center inline-block">
            {Outcome.Title}
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="col bg-orange-100 h-[100%] rounded-md px-4 py-2">
            <p className="text-[24px] text-[#212529] font-[500px] text-center">
              {Outcome.text}
            </p>
          </div>
          <div className="md:flex hidden p-8">
            <img src={Outcome.images} alt="Outcome" />
          </div>
          <div className=" flex flex-col md:hidden">
            {Outcome.newContent.map((item, index) => (
              <div className="grid grid-cols-6 p-5 my-[12px] shadow-skillsafari">
                <div
                  key={index}
                  className="col-span-1 h-full flex justify-center items-center text-[#FF9900] text-[36px]"
                >
                  <FaMeteor />
                </div>
                <div className="col-span-5 ">
                  <div className="flex flex-col gap-2">
                    <div className="font-[500] text-[24px]">{item.title}</div>
                    <div className="font-[300] text-[#555]">{item.cnt}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center items-center">
              <button className="w-fit mt-8 md:px-10 px-5 bg-[#F3274F] text-white py-4 text-lg rounded-md hover:bg-blue-600 transition duration-300">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutcomeBased;
