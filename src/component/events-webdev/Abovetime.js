import { FaClock } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";

import jsonData from "./Events-WebDev.json";

import React from "react";
let abdata = jsonData.aboveCnt;

const Abovetime = () => {
  const icons = [
    <FaClock className="text-yellow-500" />,
    <FaTools className="text-yellow-500" />,
    <FaVideo className="text-yellow-500" />,
    <FaClipboard className="text-yellow-500" />,
  ];

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 max-w-5xl mx-auto place-items-center">
        {abdata.map((ab, index) => (
          <div
            key={index}
            className="col flex flex-col min-w-[156px] h-[156px] shadow-skillsafari rounded p-[10px]  gap-4"
          >
            <p className="p-3 rounded-full bg-[#ff990050] h-[35px] w-[35px] text-[20px] flex justify-center items-center">
              {icons[index]}
            </p>
            <p className=" text-[#ff9900] text-[14px] font-[400]">{ab.title}</p>
            <p className="text-[18px]">{ab.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Abovetime;
