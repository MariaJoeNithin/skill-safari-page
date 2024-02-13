import React from "react";
import jsonData from "../fullStackDev.json";
import { FaCalendarDay } from "react-icons/fa6";

const Enroll = () => {
  const data = jsonData.EnrollNow;
  return (
    <>
      <div className="grid md:grid-cols-8 grid-cols-1 max-w-7xl mx-auto p-2 mt-16">
        <div className="cols md:col-span-6">
          <h2 className=" text-2xl">{data.heading}</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2 m-2">
            {data.content.map((cnt, index) => (
              <div
                key={index}
                className=" h-[100%] rounded-md p-4 grid grid-cols-8 gap-2 "
              >
                <div className="col-span-2">
                  <img
                    src={cnt.image}
                    alt={`Icon ${index + 1}`}
                    className=" w-[auto] inline md:max-h-[46px] max-h-[100px] mx-auto mb-2 "
                  />
                </div>
                <p className="text-[20px] col-span-6 flex items-center">{cnt.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" cols md:col-span-2">
          <div className="flex border flex-col rounded-xl overflow-hidden">
            <div className="image relative">
              <img
                src={data.enrollImage}
                className="w-full h-auto"
                alt="Enroll-Now"
              />
              <span className="px-2 py-1 rounded-lg absolute top-2 right-2 bg-[#f90]">
                {data["Seats Left"]} Seats Left
              </span>
            </div>
            <div className="cnt m-5 rounded-xl bg-orange-200 text-center min-h-[135px] flex items-center justify-center flex-col">
              <p>Next Batch Starting From :</p>
              <span>
                <FaCalendarDay className=" inline-block m-1" />
                {data.NextBatch},
              </span>
            </div>
            <button className="w-full bg-[#F3274F] mb-4 max-w-40 mx-auto text-white py-4 text-lg rounded-md hover:bg-blue-600 transition duration-300">
              <a href={data.link}>Book Now</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enroll;