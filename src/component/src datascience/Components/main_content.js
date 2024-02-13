import React from "react";
import { SkillSafari_Compounds_key } from "../component_src/header_src";
import { FaStar } from "react-icons/fa";import { FaStarHalf } from "react-icons/fa";

function Main_content() {
  return (
    <div>
      <div className=" max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className=" md:text-left text-center ">
          <p className="font-bold text-[38px] my-4">{SkillSafari_Compounds_key.main_content.left.left_title_one}</p>
          <p className="font-bold text-[36px] my-4">{SkillSafari_Compounds_key.main_content.left.left_title_two}</p>
          <p>
            <button className=" px-[60px] font-semibold text-[18px] py-7 leading-none rounded-md bg-red-500 text-white">{SkillSafari_Compounds_key.main_content.left.left_button}</button>
          </p>
        </div>
        <div className=" flex justify-center relative">
          <img src={SkillSafari_Compounds_key.main_content.right.img_src} alt="" width={"415px"} height={"510px"} className=""/>
          <div className="">
            <p></p>
            <p className="flex items-center gap-x-3"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_content;
