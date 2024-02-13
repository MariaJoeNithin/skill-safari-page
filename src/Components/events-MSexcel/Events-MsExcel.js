import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import MsEvents from "./Events-MsExcel.json";
import { MdVideocam } from "react-icons/md";
import { FaClipboard } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { FaMeteor } from "react-icons/fa6";
// import Wave from "../Wave.png";
import { FaCircleCheck } from "react-icons/fa6";
import { IoShieldHalfSharp } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import FAQ from "./FAQ";

function Msexcel() {
  const webd = MsEvents;
  return (
    <div>
      <div className=" max-w-screen-xl mx-auto p-10 grid grid-cols-1 xl:grid-cols-2 gap-10 ">
        <div className="col flex flex-col gap-1 mx-auto ">
          <p className="text-lg border-2 border-[#f2256f] rounded-md max-w-fit p-0 my-2">
            {webd.homeScreenComponent.left.date}
          </p>
          <div className="font-[600] text-[58px] text-[#212529] lg:leading-[80px] leading-[60px] md:text-left text-center">
            {webd.homeScreenComponent.left.content_1}
          </div>
          <div className="text-center md:text-left font-[700]">
            <span className="text-[14px] text-[#888] line-through">
              ₹ {webd.homeScreenComponent.left.CourseFee}
            </span>
            <span className="text-[40px] text-[#ff9900]">
              ₹ {webd.homeScreenComponent.left.currentFee}
            </span>
          </div>
          <div className="font-[400] md:text-[16px] text-[#555555] mt-4 text-left ">
            {webd.homeScreenComponent.left.content_2}
          </div>
          <button className="text-white px-8 py-3 rounded bg-[#F3274F] font-[600] w-fit text-[18px] mt-5">
            {webd.homeScreenComponent.left.content_3}
          </button>
        </div>
        <div className="col relative xl2:w-auto w-fit mx-auto">
          <img
            src={webd.homeScreenComponent.right.image_src}
            className="w-[auto]"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-10 sm:mt-[40px] mt-[150px]">
        <div className="text-center font-[600] text-[28px] text-[#212529]">
          {webd.What_You_Will_Learn.title}
        </div>
        <div className="flex flex-wrap items-center md:gap-3 gap-8 md:justify-center justify-start px-5 w-[90%] mx-auto">
          <div className="flex items-center font-[500] text-[#ff9900] md:w-[250px] gap-5">
            <span className="p-3 rounded-full bg-[#ff990050]">
              <MdVideocam className="text-[1.5rem]" />
            </span>
            <span className="text-[23px] font-[500]">
              {webd.What_You_Will_Learn.Learn_Points_1}
            </span>
          </div>
          <div className="flex items-center font-[500] text-[#ff9900] md:w-[250px] gap-5">
            <span className="p-3 rounded-full bg-[#ff990030]">
              <FaClipboard className="text-[1.5rem]" />
            </span>
            <span className="text-[23px] font-[500]">
              {webd.What_You_Will_Learn.Learn_Points_2}
            </span>
          </div>
          <div className="flex items-center font-[500] text-[#ff9900] md:w-[250px] gap-5">
            <span className="p-3 rounded-full bg-[#ff990040]">
              <FaUserCheck className="text-[1.5rem]" />
            </span>
            <span className="text-[23px] font-[500]">
              {webd.What_You_Will_Learn.Learn_Points_3}
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl">
        <div className="col flex items-center flex-col md:gap-24 gap-16 px-5 mt-20">
          <div className="flex items-center gap-5 w-full">
            <div className="md:py-4 md:px-6 py-3 px-4 rounded-xl shadow-skillsafari w-fit text-[#ff9900] relative">
              <FaMeteor className="md:text-[2.5rem] " />
              <img
                className="absolute left-[50%] md:bottom-[-120%] bottom-[-200%] translate-x-[-50%]"
                src="https://res.cloudinary.com/skill-safari/image/upload/v1678183544/website/web%20images/yellow-line_ma6p4f.png"
                alt=""
                width={"3px"}
              />
            </div>
            <div className="flex items-center justify-center">
              <div className=" text-[16px] font-[400] text-[#212529]">
                {webd.Learn_Process.process_1.title}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 w-full">
            <div className="md:py-4 md:px-6 py-3 px-4 rounded-xl shadow-skillsafari w-fit text-[#ff9900] relative">
              <FaMeteor className="md:text-[2.5rem] " />
              <img
                className="absolute left-[50%] md:bottom-[-120%] bottom-[-200%] translate-x-[-50%]"
                src="https://res.cloudinary.com/skill-safari/image/upload/v1678183544/website/web%20images/yellow-line_ma6p4f.png"
                alt=""
                width={"3px"}
              />
            </div>
            <div className="flex items-center justify-center">
              <div className=" text-[16px] font-[400] text-[#212529]">
                {webd.Learn_Process.process_2.title}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 w-full">
            <div className="md:py-4 md:px-6 py-3 px-4 rounded-xl shadow-skillsafari w-fit text-[#ff9900] relative">
              <FaMeteor className="md:text-[2.5rem] " />
              <img
                className="absolute left-[50%] md:bottom-[-120%] bottom-[-200%] translate-x-[-50%]"
                src="https://res.cloudinary.com/skill-safari/image/upload/v1678183544/website/web%20images/yellow-line_ma6p4f.png"
                alt=""
                width={"3px"}
              />
            </div>
            <div className="flex items-center justify-center ">
              <div className=" text-[16px] font-[400] text-[#212529]">
                {webd.Learn_Process.process_3.title}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 w-full">
            <div className="md:py-4 md:px-6 py-3 px-4 rounded-xl shadow-skillsafari w-fit text-[#ff9900] relative">
              <FaMeteor className="md:text-[2.5rem] " />
            </div>
            <div className="flex items-center justify-center">
              <div className=" text-[16px] font-[400] text-[#212529]">
                {webd.Learn_Process.process_4.title}
              </div>
            </div>
          </div>
        </div>
        <div className="col flex items-center justify-center mt-20">
          <img
            src={webd.Learn_Process.Brand_Ambassador}
            alt=""
            className="lg:w-full md:w-[85%] sm:w-[80%] w-[90%] rounded"
          />
        </div>
      </div>

      <div className=" max-w-screen-xl mx-auto flex items-center justify-center mt-20 flex-col gap-10">
        <a
          href=""
          target="_blank"
          className="text-white px-8 py-3 rounded bg-[#F3274F] font-[600] w-fit text-[18px] "
        >
          {webd.homeScreenComponent.left.content_3}
        </a>
      </div>
      <div className="">
        <div className="text-[28px] font-[600] text-[#212529] text-center my-20">
          {webd.Program_title}
        </div>
        <div className=" mt-10 px-10 w-[1200px] max-w-full mx-auto grid items-center justify-center text-center xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-7 gap-5 ">
          {webd.Program_content.map((target, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl flex gap-3 items-center justify-start bg-[#ff9900] bg-opacity-10"
            >
              <span className="p-[9px] rounded-full bg-[#ff9900] bg-opacity-25 text-[#ff9900]">
                <FaCircleCheck className="text-[25px]" />
              </span>
              <span className="font-[700] text-[16px] text-[#222222] text-left">
                {target.program_name}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10 mt-20">
          <div className="text-center text-[#555555] text-[16px] font-[300]">
            {webd.Apply_title}
          </div>
          <div className="text-center">
            <a
              className="px-6 py-3 bg-[#F3274F] hover:rounded-full text-[18px] text-white  rounded-md font-[600]"
              href="https://forms.office.com/pages/responsepage.aspx?id=i4FKPaEHy0uRXguB-B1nAMaRaDyy3DdNo_P1pDh4CLdURE81UVVHWk0xQTEwVUJSNllaUTJZSk8xSi4u"
              target="_blank"
            >
              {webd.homeScreenComponent.left.content_3}
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#E8F3FA] py-20 mt-10">
        <div className="text-center text-[#212529] text-[28px] font-[600] my-10">
          {webd.trainer_title}
        </div>
        <div className="sm:max-w-[850px] max-w-[85%] mx-auto grid md:grid-cols-8 gap-3 grid-cols-1 p-8 bg-white rounded-[30px]">
          <div className="col md:col-span-3 flex flex-col text-center items-center justify-center gap-2">
            <img
              src={webd.Trainer_image}
              alt=""
              className=" max-w-[250px] mx-auto"
            />
            <p className=" text-[#f3274f] text-[18px]">{webd.Trainer_name}</p>
            <p className="text-[#555] font-[300]">{webd.Trainer_role}</p>
          </div>

          <div className="col md:col-span-5 font-[400] text-[16px] text-[#212529] min-h-full flex justify-center items-center text-justify my-5">
            <p>{webd.Trainer_about} </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className="mt-5 px-5">
        <div className="text-center font-[600] text-[28px] text-[#212529]">
          {webd.Certificate_page.title_1}
        </div>
        <div className="text-center font-[400] text-[18px] text-[#212529]">
          {webd.Certificate_page.title_2}
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1  xl:w-[1200px]  mx-auto gap-8 my-20 md:px-14 px-5">
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-5">
              <div className="text-[#ff9900]  p-3 rounded-full bg-[#ff9900] bg-opacity-20 ">
                <IoShieldHalfSharp className="text-2xl" />
              </div>
              <div className="">
                <div className="text-[#f3274f] text-[25px] font-[400]">
                  {webd.Certificate_page.left_side.pink_title_1}
                </div>
                <div className="text-[#555555] text-[16px] font-[300] mt-4">
                  {webd.Certificate_page.left_side.content_1}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="text-[#ff9900]  p-3 rounded-full bg-[#ff9900] bg-opacity-20 ">
                <FaShareAlt className="text-2xl" />
              </div>
              <div className="">
                <div className="text-[#f3274f] text-[25px] font-[400]">
                  {webd.Certificate_page.left_side.pink_title_2}
                </div>
                <div className="text-[#555555] text-[16px] font-[300] mt-4">
                  {webd.Certificate_page.left_side.content_2}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="text-[#ff9900]  p-3 rounded-full bg-[#ff9900] bg-opacity-20 ">
                <FaLock className="text-2xl" />
              </div>
              <div className="">
                <div className="text-[#f3274f] text-[25px] font-[400]">
                  {webd.Certificate_page.left_side.pink_title_3}
                </div>
                <div className="text-[#555555] text-[16px] font-[300] mt-4">
                  {webd.Certificate_page.left_side.content_3}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={webd.Certificate_page.right}
              alt=""
              className="w-[full]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 my-20">
        <div className="text-center text-[#555555] text-[16px] font-[300]">
          {webd.apply_title}
        </div>
        <div className="text-center">
          <a
            className="px-6 py-3 bg-[#F3274F] hover:rounded-full text-[18px] text-white  rounded-md font-[600]"
            href="https://forms.office.com/pages/responsepage.aspx?id=i4FKPaEHy0uRXguB-B1nAMaRaDyy3DdNo_P1pDh4CLdURE81UVVHWk0xQTEwVUJSNllaUTJZSk8xSi4u"
            target="_blank"
          >
            {webd.homeScreenComponent.left.content_3}
          </a>
        </div>
      </div>
      <div className="font-[600] text-[28px] text-[#212529] text-center my-10">
        FAQ
      </div>
      <FAQ />
      <br />
      <br />
    </div>
  );
}

export default Msexcel;
