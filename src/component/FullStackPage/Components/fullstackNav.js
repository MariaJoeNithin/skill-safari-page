import React, { useState } from "react";
import Popup from "../../popUP";
import { usePopupBtn } from "../../../Globalbtn";
  


const FullStackNav = () => {
  // const [openPopUp, setOpenPopUp] = useState(false);

  const {  togglePopup } = usePopupBtn();
 
  return (
    <>
      <div className="flex flex-col pb-8 px-8 shadow-skillsafari rounded-lg ">
        <h1 className=" text-[25px] font-[600] py-5">
          Full Stack Developer Course
        </h1>
        <hr />
        <ul className="py-5 flex flex-col gap-5">
          <li>
            <a href="#Alchemyst">Alchemyst Advantage</a>
          </li>
          <li>
            <a href="#HowDoes">How Skill Safari work</a>
          </li>
          <li>
            <a href="#CourseCurriculum">Course Curriculum</a>
          </li>
          <li>
            <a href="#Instructors">Instructors</a>
          </li>
          <li>
            <a href="#Fees">Course Fee's</a>
          </li>
          <li>
            <a href="#Certificate">Certfication</a>
          </li>
          <li>
            <a href="#Placement">Placements</a>
          </li>
          <li>
            <a href="#FAQ">FAQ</a>
          </li>
        </ul>
        <button className="w-full bg-[#F3274F] text-white py-4 text-lg rounded-md hover:bg-blue-600 transition duration-300"  onClick={togglePopup}>
          Know More
        </button>
      </div>
    </>
  );
};

export default FullStackNav;
