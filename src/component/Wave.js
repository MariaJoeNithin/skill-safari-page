import React, { useState } from "react";
import { SkillSafari_Compounds_key } from "../component_src/header_src";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import CardCarousel from "./LearningHubPage/Components/StudentReview";

function Wave() {

  const [showMore, setShowMore] = useState(true);

  return (
    <div className="mt-20">
      <div className="text-center  text-[#212529] font-[600] flex items-center justify-center gap-x-3 ">
        <FaGraduationCap className="text-[28px]" /> <span className="sm:text-[28px] text-[25px]">{SkillSafari_Compounds_key.Svg_content.title}</span>
      </div>
{/*      
     <div className={` max-w-screen-2xl ${showMore ? " overflow-y-hidden h-[550px]" : ""} flex justify-center gap-10 flex-wrap mx-auto py-10 px-2 my-3`}>
      {SkillSafari_Compounds_key.Students_Testinomial.map(target => <div key={target.student_name} className="rounded-xl border hover:shadow-xl duration-300 w-[400px] h-[500px]  p-5">
        <img src={target.banner} alt="" width={"100%"} className="rounded-xl"/>
        <div className="mt-5 text-[#555555] text-[16px]">"{target.thoughts}"</div>
        <div className="flex flex-col gap-2 mt-3">
        <div className="flex items-center text-orange-500">
            <FaStar className="text-[18px]" />
            <FaStar className="text-[18px]" />
            <FaStar className="text-[18px]" />
            <FaStar className="text-[18px]" />
            <FaStarHalf className="text-[18px]" />
             <span className="text-black text-[16px]">{target.rating}</span>
        </div>
        <div className="text-[19px] font-[500]">{target.student_name}</div>
        </div>
      </div>)}
     </div> */}
     <CardCarousel />
        <div className=" cursor-pointer my-3 w-fit mx-auto px-3 py-1 bg-red-500 text-white rounded-md" onClick={()=>setShowMore(!showMore)}>
          {showMore ? "Load More" : "Show Less"}
        </div>
    </div>
    
  );
}

export default Wave;

