import React, { useState } from "react";
import { SkillSafari_Compounds_key } from "../component_src/header_src";
import { FaStar } from "react-icons/fa";import { FaStarHalf } from "react-icons/fa";
import FullStackDevCourse from "./FullStackDevCourse";
import Wave from "./Wave";
import { FaLinkedinIn } from "react-icons/fa6";
import Join_Community from "./Join_Community";
import Specialist from "./Specialist";
import SkillSafari_dashboard from "./SkillSafari_dashboard";
import { Link } from "react-router-dom";
import AutoTypingAnimation from "./AutoTypeingMainPage";
import './AutoTypeContent.css'

function Main_content() {
  window.scroll(0,0)

  const [trainer_1, setTrainer_1] = useState(false);
  const [trainer_2, setTrainer_2] = useState(false);
  const [trainer_3, setTrainer_3] = useState(false);

  return (
    <div className="">
      <div className=" max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center sm:px-10 px-0 md:mt-0 mt-5">
        <div className=" md:text-left text-center ">
          <div className="font-bold md:text-[38px] text-[25px] my-0 ">{SkillSafari_Compounds_key.main_content.left.left_title_one}
                <h2 className="text-[36px] font-[700]  text-[#f3274f] ">
            <AutoTypingAnimation />
            </h2>
          </div>
          <div className="font-bold text-[36px] mb-10 ">{SkillSafari_Compounds_key.main_content.left.left_title_two}</div>
          <div className="my-2">
            <Link to='/full-stack-developer-course' className=" transition duration-700 ease-in-out px-[60px] font-semibold text-[18px] py-6 leading-none rounded-md bg-red-500 text-white hover:rounded-full slow-reaction">{SkillSafari_Compounds_key.main_content.left.left_button}</Link>
          </div>
        </div>
        <div className=" flex justify-end items-center flex-col md:mt-10 md:ml-10 mt-10">
          <img src={SkillSafari_Compounds_key.main_content.right.img_src} alt="" width={"420px"} height={"510px"} className=" md:scale-100 sm:scale-105 scale-105 " />
          <div className=" w-[360px] p-3 max-w-[95%] bg-white bottom-20 md:px-5 md:py-3 rounded-xl border border-stone-200 lg:-translate-y-[170px] lg:-translate-x-[250px] -translate-y-[60px]">
            <div className=" text-[#868686]">{SkillSafari_Compounds_key.main_content.right.approached_sentence}</div>
            <div className="flex items-center gap-x-3 text-orange-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /> <span className="text-black">{SkillSafari_Compounds_key.main_content.right.rating}</span></div>
          </div>
        </div>
      </div>
      <div className=" bg-[#F6F6F9] p-5">
        <div className="text-center font-semibold text-[28px] text-[#212529]">
          {SkillSafari_Compounds_key.Our_Accreditations.title}
        </div>
        <div className="flex items-center justify-center gap-10 mt-5">
          <div className="bg-[#FEF4E5] p-3 w-[160px] h-[70px] flex items-center">
            <img src={SkillSafari_Compounds_key.Our_Accreditations.image_1} alt="" width={"100%"} height={"100%"} />
          </div>
          <div className="bg-[#FEF4E5] p-3 w-[160px] h-[70px] flex items-center">
            <img src={SkillSafari_Compounds_key.Our_Accreditations.image_2} alt="" width={"100%"} height={"100%"} />
          </div>
        </div>
      </div>
      <div className=" bg-[#1C2042] px-5 py-16  lg:p-[6rem]">
        <div className="text-[24px] md:text-[30px] lg:text-[28px] text-center font-semibold text-white tracking-wide">{SkillSafari_Compounds_key.Dark_content.title_one}</div>
        <div className="text-[18px] text-center font-normal tracking-wide text-white mt-3">{SkillSafari_Compounds_key.Dark_content.title_two}</div>

        <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 mt-[70px] justify-center gap-10">

          <div className="flex items-center shadow max-w-2xl text-justify lg:m-0 mx-2">
            <img src={SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_1.symbol} alt="" className="hidden mr-5 w-[30px] sm:w-[50px] xl:inline " />
            <div className="">
              <div className=" text-[#FB9A34] sm:text-[32px] text-[25px] sm:font-[500] font-[600] flex justify-start items-center">
                <img src={SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_1.symbol} alt="" className="w-[30px] h-[30px] xl:hidden inline ml-5 mr-2"/>{SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_1.title}
              </div>
              <div className=" text-[18px] text-[#C8D0DB]">{SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_1.content}</div>
            </div>
          </div>
          <div className="flex items-center shadow max-w-2xl text-justify lg:m-0 mx-2">
            <img src={SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_2.symbol} alt="" className="hidden mr-5 w-[30px] sm:w-[50px] xl:inline " />
            <div className="">
              <div className=" text-[#CA317D] sm:text-[32px] text-[25px] sm:font-[500] font-[600] flex justify-start items-center">
                <img src={SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_2.symbol} alt="" className="w-[30px] h-[20px] xl:hidden inline ml-5 mr-2"/>{SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_2.title}
              </div>
              <div className=" text-[18px] text-[#C8D0DB]">{SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_2.content}</div>
            </div>
          </div>
          <div className="flex items-center shadow max-w-2xl text-justify lg:m-0 mx-2">
            <img src={SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_3.symbol} alt="" className="hidden mr-5 w-[30px] sm:w-[50px] xl:inline " />
            <div className="">
              <div className=" text-[#2699FB] sm:text-[32px] text-[25px] sm:font-[500] font-[600] flex justify-start items-center">
                <img src={SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_3.symbol} alt="" className="w-[35px] h-[30px] xl:hidden inline ml-5 mr-2"/>{SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_3.title}
              </div>
              <div className=" text-[18px] text-[#C8D0DB]">{SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_3.content}</div>
            </div>
          </div>
          <div className="flex items-center shadow max-w-2xl text-justify lg:m-0 mx-2">
            <img src={SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_4.symbol} alt="" className="hidden mr-5 w-[30px] sm:w-[50px] xl:inline " />
            <div className="">
              <div className=" text-[#F2256F] sm:text-[32px] text-[25px] sm:font-[500] font-[600] flex justify-start items-center">
                <img src={SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_4.symbol} alt="" className="w-[40px] h-[30px] xl:hidden inline ml-5 mr-2"/>{SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_4.title}
              </div>
              <div className=" text-[18px] text-[#C8D0DB]">{SkillSafari_Compounds_key.Dark_content.dar_content_4box.box_4.content}</div>
            </div>
          </div>
        </div>
      </div>
      <FullStackDevCourse />
      <Wave />
      <div className="bg-[#E8F3FA] w-[100%] p-10 grid place-items-center">
        <div className="text-center font-[600] text-[28px]">
            {SkillSafari_Compounds_key.Svg_content.content_2} 
        </div>
        <marquee behavior="" direction="right" scrollamount="12">
          <div className="flex items-center justify-center gap-x-5 my-2">
            {SkillSafari_Compounds_key.hired_companies_one.map((target,index) => <img key={index} src={target} alt={`Company_${index}`} width={"150px"}/>)}
          </div>
        </marquee>
        <marquee behavior="" direction="left"  scrollamount="12">
          <div className="flex items-center justify-center gap-x-5 my-2">
            {SkillSafari_Compounds_key.hired_companies_two.map((target,index) => <img key={index} src={target} alt={`Company_${index}`} width={"150px"}/>)}
          </div>
        </marquee>
      </div>
      <div className=" py-10">
        <div className="text-center text-[28px] font-[600]">{SkillSafari_Compounds_key.Svg_content.content_3}</div>
        <div className="text-center text-[28px] font-[600]">{SkillSafari_Compounds_key.Svg_content.content_3_1}</div>
      </div>



      <div className="flex flex-wrap items-center justify-center gap-5">
        <div className=" border p-3 rounded-2xl relative cursor-pointer hover:shadow-lg duration-300 hover:-translate-y-2" onClick={()=> setTrainer_1(!trainer_1)}>
          <img src={SkillSafari_Compounds_key.Industial_specialist.specialist_1.img} alt="" width={"190px"}/>
          <div className=" bg-[#1B71B6] w-fit mx-auto p-2 rounded-full absolute left-2/4 -translate-x-2/4 -translate-y-4">
            <FaLinkedinIn className="text-white text-xl" />
          </div>
          <br />
          <div className="text-center font-[600] text-[#2b2f4e] text-[18px] my-1">{SkillSafari_Compounds_key.Industial_specialist.specialist_1.name}</div>
          <div className="text-center font-[400] text-[#7c7c7c] text-[16px] my-1">{SkillSafari_Compounds_key.Industial_specialist.specialist_1.worksOn}</div>
        </div>


        <div className=" border p-3 rounded-2xl relative cursor-pointer hover:shadow-lg duration-300 hover:-translate-y-2" onClick={()=> setTrainer_2(!trainer_2)}>
          <img src={SkillSafari_Compounds_key.Industial_specialist.specialist_2.img} alt="" width={"190px"}/>
          <div className=" bg-[#1B71B6] w-fit mx-auto p-2 rounded-full absolute left-2/4 -translate-x-2/4 -translate-y-4">
            <FaLinkedinIn className="text-white text-xl" />
          </div>
          <br />
          <div className="text-center font-[600] text-[#2b2f4e] text-[18px] my-1">{SkillSafari_Compounds_key.Industial_specialist.specialist_2.name}</div>
          <div className="text-center font-[400] text-[#7c7c7c] text-[16px] my-1">{SkillSafari_Compounds_key.Industial_specialist.specialist_2.worksOn}</div>
        </div>


        <div className=" border p-3 rounded-2xl relative cursor-pointer hover:shadow-lg duration-300 hover:-translate-y-2" onClick={()=> setTrainer_3(!trainer_3)}>
          <img src={SkillSafari_Compounds_key.Industial_specialist.specialist_3.img} alt="" width={"190px"}/>
          <div className=" bg-[#1B71B6] w-fit mx-auto p-2 rounded-full absolute left-2/4 -translate-x-2/4 -translate-y-4">
            <FaLinkedinIn className="text-white text-xl" />
          </div>
          <br />
          <div className="text-center font-[600] text-[#2b2f4e] text-[18px] my-1">{SkillSafari_Compounds_key.Industial_specialist.specialist_3.name}</div>
          <div className="text-center font-[400] text-[#7c7c7c] text-[16px] my-1">{SkillSafari_Compounds_key.Industial_specialist.specialist_3.worksOn}</div>
        </div>
        <Specialist trainer_1={trainer_1} setTrainer_1={setTrainer_1} trainer_2={trainer_2} setTrainer_2={setTrainer_2} trainer_3={trainer_3} setTrainer_3={setTrainer_3}/>
      </div>

      <Join_Community />
      <SkillSafari_dashboard />

    </div>
  );
}

export default Main_content;
