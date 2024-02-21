import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { InternProgram_JSON } from "../component_src/InternShip_JSON";
import { MdVideocam } from "react-icons/md";
import { FaClipboard } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { FaMeteor } from "react-icons/fa6";
import Wave from "./Wave";
import { FaCircleCheck } from "react-icons/fa6";
import { IoShieldHalfSharp } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import FAQ from "./FAQ";

function InternProgram() {
  window.scroll(0,0)
  return (
    <div>
      <div className=" max-w-screen-xl mx-auto p-10 grid grid-cols-1 xl:grid-cols-2 gap-10 ">
        <div className="flex flex-col gap-1 xl2:w-full lg:w-[85%] md:w-[95%] mx-auto ">
          <div className="font-[500] md:text-[62px] text-[55px] text-[#212529] lg:leading-[80px] leading-[60px] md:text-left text-center">
            {InternProgram_JSON.HomeScreenComponent.left.content_1}
          </div>
          <div className="font-[400] md:text-[16px] text-[#555555] mt-10 text-justify ">
            {InternProgram_JSON.HomeScreenComponent.left.content_2}
          </div>
          <button className="text-white px-8 py-3 rounded bg-[#F3274F] font-[600] w-fit text-[18px] underline mt-5">
            {InternProgram_JSON.HomeScreenComponent.left.content_3}
          </button>
        </div>
        <div className=" relative xl2:w-auto w-fit mx-auto">
          <img
            src={InternProgram_JSON.HomeScreenComponent.right.image_src}
            width={"900px"}
            alt=""
          />
          <div className=" bg-[#FFFFFF] xl2:w-[355px] sm:w-[350px] sm:bottom-[10%] bottom-[-120px] w-[100%] text-[#868686] p-4 rounded-xl border-2 absolute">
            "{InternProgram_JSON.HomeScreenComponent.right.thoughts}"
            <div className="flex items-center text-[#fb8c00] my-1">
              <FaStar className="text-[15px]" />
              <FaStar className="text-[15px]" />
              <FaStar className="text-[15px]" />
              <FaStar className="text-[15px]" />
              <FaStarHalf className="text-[15px]" />
              <span className="text-black ml-3">
                {InternProgram_JSON.HomeScreenComponent.right.rating}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-10 sm:mt-[40px] mt-[150px]">
        <div className="text-center font-[600] text-[28px] text-[#212529]">
          {InternProgram_JSON.What_You_Will_Learn.title}
        </div>
        <div className="flex flex-wrap items-center md:gap-3 gap-8 md:justify-center justify-start px-5 w-[90%] mx-auto">
          <div className="flex items-center font-[500] text-[#ff9900] md:w-[250px] gap-5">
            <span className="p-3 rounded-full bg-[#ff990050]">
              <MdVideocam className="text-[1.5rem]" />
            </span>
            <span className="text-[23px] font-[500]">
              {InternProgram_JSON.What_You_Will_Learn.Learn_Points_1}
            </span>
          </div>
          <div className="flex items-center font-[500] text-[#ff9900] md:w-[250px] gap-5">
            <span className="p-3 rounded-full bg-[#ff990030]">
              <FaClipboard className="text-[1.5rem]" />
            </span>
            <span className="text-[23px] font-[500]">
              {InternProgram_JSON.What_You_Will_Learn.Learn_Points_2}
            </span>
          </div>
          <div className="flex items-center font-[500] text-[#ff9900] md:w-[250px] gap-5">
            <span className="p-3 rounded-full bg-[#ff990040]">
              <FaUserCheck className="text-[1.5rem]" />
            </span>
            <span className="text-[23px] font-[500]">
              {InternProgram_JSON.What_You_Will_Learn.Learn_Points_3}
            </span>
          </div>
        </div>
      </div>

      <div className=" w-[1300px] max-w-[90%]  mx-auto grid grid-cols-1 lg:grid-cols-2 mt-20">
        <div className="flex items-center flex-col md:gap-24 gap-16 md:px-20 sm:px-10 px-5">
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
            <div className="flex flex-col gap-3">
              <div className=" text-[16px] font-[400] text-[#212529]">
                {InternProgram_JSON.Learn_Process.process_1.title}
              </div>
              <div className=" text-[16px] font-[300] text-[#555555]">
                {InternProgram_JSON.Learn_Process.process_1.content}
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
            <div className="flex flex-col gap-3">
              <div className=" text-[16px] font-[400] text-[#212529]">
                {InternProgram_JSON.Learn_Process.process_2.title}
              </div>
              <div className=" text-[16px] font-[300] text-[#555555]">
                {InternProgram_JSON.Learn_Process.process_2.content}
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
            <div className="flex flex-col gap-3 ">
              <div className=" text-[16px] font-[400] text-[#212529]">
                {InternProgram_JSON.Learn_Process.process_3.title}
              </div>
              <div className=" text-[16px] font-[300] text-[#555555]">
                {InternProgram_JSON.Learn_Process.process_3.content}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 w-full">
            <div className="md:py-4 md:px-6 py-3 px-4 rounded-xl shadow-skillsafari w-fit text-[#ff9900] relative">
              <FaMeteor className="md:text-[2.5rem] " />
            </div>
            <div className="flex flex-col gap-3">
              <div className=" text-[16px] font-[400] text-[#212529]">
                {InternProgram_JSON.Learn_Process.process_4.title}
              </div>
              <div className=" text-[16px] font-[300] text-[#555555]">
                {InternProgram_JSON.Learn_Process.process_4.content}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:block flex items-center justify-center">
          <img
            src={InternProgram_JSON.Learn_Process.Brand_Ambassedor}
            alt=""
            className="lg:w-full md:w-[85%] sm:w-[80%] w-[90%]"
          />
        </div>
      </div>
      <div className=" max-w-screen-xl mx-auto flex items-center justify-center mt-20 flex-col gap-10">
        <a
          href=""
          target="_blank"
          className="text-white px-8 py-3 rounded bg-[#F3274F] font-[600] w-fit text-[18px] "
        >
          {InternProgram_JSON.HomeScreenComponent.left.content_3}
        </a>
        <div className=" text-center font-[600] text-[28px] text-[#212529] mt-14">
          {InternProgram_JSON.Skill_title}
        </div>
        <div className="grid md:grid-cols-7 sm:grid-cols-3 grid-cols-3 items-center justify-center gap-5 px-10">
          {InternProgram_JSON.Skill_Images.map((target, index) => (
            <img
              key={index}
              src={target}
              alt={`image_${index}`}
              width={"100px"}
              className="border-2 rounded-xl"
            />
          ))}
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-16 px-5 xl:w-[1000px] md:w-[700px] w-[80%] ">
          {InternProgram_JSON.Week_Plans.map((target, index) => (
            <div
              key={index}
              className="px-10 py-5  rounded-md shadow-skillsafari w-[100%]"
            >
              <div className="font-[500] text-[24px] text-[#212529]">
                {target.Time}
              </div>
              <div className="font-[400] text-[1rem] text-[#212529]">
                {target.Content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Wave />
      <div className="">
        <div className=" text-center text-[#212529] text-[28px] font-[600] mt-10">
          {InternProgram_JSON.price_card_title}
        </div>
        <div className=" flex flex-wrap items-center gap-5 justify-center w-fit max-w-full mx-auto mt-10 px-10">
          {InternProgram_JSON.Pricing_card.map((target, index) => (
            <div
              key={index}
              className=" bg-[#1C2042] py-8 md:px-10 px-3 m-0 border border-gray-500 sm:w-[370px] w-[300px]  sm:min-h-[600px]"
            >
              <div className="font-[500] md:text-[32px] text-[26px] text-[#ffffff] text-center">
                {target.tilte}
              </div>
              <div className="font-[500] md:text-[32px] text-[26px] text-[#ffffff] text-center mt-5">
                {target.price}
              </div>
              <div className="font-[400] md:text-[16px] text-[#ffffff] sm:p-4 p-3 border-b border-gray-600">
                {target.time}
              </div>
              <div className="font-[400] md:text-[16px] text-[#ffffff] sm:p-4 p-3 border-b border-gray-600">
                <span className="font-bold">Skills :</span>
                {target.skills}
              </div>
              <div className="font-[400] md:text-[16px] text-[#ffffff] sm:p-4 p-3 border-b border-gray-600">
                {" "}
                <span className="font-bold">Projects :</span> {target.project}
              </div>
              <div className="font-[400] md:text-[16px] text-[#ffffff] sm:p-4 p-3 border-gray-600">
                {" "}
                {target.content}
              </div>
              <div className=" text-center mt-10">
                <a
                  href={target.button}
                  target="_blank"
                  className="text-white bg-[#F3274F] px-5 py-3 hover:rounded-full rounded-md font-[600] text-[18px]"
                >
                  {InternProgram_JSON.HomeScreenComponent.left.content_3}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-[28px] font-[600] text-[#212529] text-center mt-36">
          {InternProgram_JSON.progarm_title}
        </div>
        <div className=" mt-10 px-10 w-[1200px] max-w-full mx-auto grid items-center justify-center text-center xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-7 gap-5 ">
          {InternProgram_JSON.program_content.map((target, index) => (
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
            {InternProgram_JSON.apply_title}
          </div>
          <div className="text-center">
            <a
              className="px-6 py-3 bg-[#F3274F] hover:rounded-full text-[18px] text-white  rounded-md font-[600]"
              href="https://forms.office.com/pages/responsepage.aspx?id=i4FKPaEHy0uRXguB-B1nAMaRaDyy3DdNo_P1pDh4CLdURE81UVVHWk0xQTEwVUJSNllaUTJZSk8xSi4u"
              target="_blank"
            >
              {InternProgram_JSON.HomeScreenComponent.left.content_3}
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#E8F3FA] py-20 mt-10">
        <div className="text-center text-[#212529] text-[28px] font-[600] my-10">
          {InternProgram_JSON.trainer_title}
        </div>
        <div className="sm:w-[700px] max-w-[85%] mx-auto grid sm:grid-cols-2 gap-3 grid-cols-1 p-7 bg-white rounded-[30px]">
          <img
            src={InternProgram_JSON.trainer_image}
            alt=""
            className=" sm:w-11/12 w-[300px] mx-auto"
          />
          <div className="font-[400] text-[16px] text-[#212529] text-justify my-5">
            {InternProgram_JSON.trainer_about}
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <div className="mt-5 px-5">
        <div className="text-center font-[600] text-[28px] text-[#212529]">
          {InternProgram_JSON.certificate_page.title_1}
        </div>
        <div className="text-center font-[400] text-[18px] text-[#212529]">
          {InternProgram_JSON.certificate_page.title_2}
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1  xl:w-[1200px]  mx-auto gap-8 my-20 md:px-14 px-5">
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-5">
              <div className="text-[#ff9900]  p-3 rounded-full bg-[#ff9900] bg-opacity-20 ">
                <IoShieldHalfSharp className="text-2xl" />
              </div>
              <div className="">
                <div className="text-[#f3274f] text-[25px] font-[400]">
                  {InternProgram_JSON.certificate_page.left_side.pink_title_1}
                </div>
                <div className="text-[#555555] text-[16px] font-[300] mt-4">
                  {InternProgram_JSON.certificate_page.left_side.content_1}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="text-[#ff9900]  p-3 rounded-full bg-[#ff9900] bg-opacity-20 ">
                <FaShareAlt className="text-2xl" />
              </div>
              <div className="">
                <div className="text-[#f3274f] text-[25px] font-[400]">
                  {InternProgram_JSON.certificate_page.left_side.pink_title_2}
                </div>
                <div className="text-[#555555] text-[16px] font-[300] mt-4">
                  {InternProgram_JSON.certificate_page.left_side.content_2}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="text-[#ff9900]  p-3 rounded-full bg-[#ff9900] bg-opacity-20 ">
                <FaLock className="text-2xl" />
              </div>
              <div className="">
                <div className="text-[#f3274f] text-[25px] font-[400]">
                  {InternProgram_JSON.certificate_page.left_side.pink_title_3}
                </div>
                <div className="text-[#555555] text-[16px] font-[300] mt-4">
                  {InternProgram_JSON.certificate_page.left_side.content_3}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={InternProgram_JSON.certificate_page.right}
              alt=""
              className="w-[full]"
            />
          </div>
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

export default InternProgram;
