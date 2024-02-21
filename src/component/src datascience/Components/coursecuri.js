import React from "react";
import JsonCardData from "../fullStackDev.json";

import { usePopupBtn } from "../../../Globalbtn";


const CourseCurriculum = () => {
  const course = JsonCardData["Course Curriculum"];
  
const { isOpen, togglePopup } = usePopupBtn();

  return (
    <>
      <div className=" shadow-skillsafari mx-auto pb-8 px-8 mb-5 " style={{ backgroundColor: "#1C2042" }}>
        <h2 className="text-2xl font-bold mb-4 py-5 border-b border-gray-300 text-white text-center">
          {course.Title}
        </h2>
        <div className="flex flex-col">
          <div className="grid md:grid-cols-2 grid-cols-1 w-[100%]">
            {course.WeekSchedule.map((item, index) => (
              <>
                <div key={index} className="col p-5">
                  <h1 className="font-[500] text-[24px] text-white">
                    {item.week} - {item.moduleTitle}
                  </h1>
                  <p className={"mt-2 text-base leading-6 text-white "}>
                    {item.description}
                  </p>
                </div>
              </>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button className="w-fit md:px-28 px-5 bg-[#F3274F] text-white py-4 text-lg rounded-md hover:bg-blue-600 transition duration-300" onClick={togglePopup}>
              View Curriculum
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCurriculum;