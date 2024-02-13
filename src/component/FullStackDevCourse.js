import React from 'react';
import { SkillSafari_Compounds_key } from '../component_src/header_src';

function FullStackDevCourse() {
  return (
    <div className='sm:p-5 p-2 mt-10 '>
        <div className=" border-2 shadow-2xl py-5 px-0 xl:px-16 rounded-3xl xl:flex xl:justify-between xl:gap-10 xl:max-w-7xl mx-auto ">
            <div className="xl:inline hidden bg-center bg-cover w-[160px] h-[400px] rounded-xl" style={{background:`url(${SkillSafari_Compounds_key.Course_details.img_src})`}}>
            </div>
            <div className="xl:w-[55%]">
                <div className="xl:p-0 px-10">
                    <div className='text-[25px] text-[#1c2042] font-medium'>{SkillSafari_Compounds_key.Course_details.Course_Title}</div>
                    <ul className='pl-4 list-[circle]'>
                        <li className='text-[#555555] font-[400] xl:text-[20px] sm:text-[20px] text-[17px] my-2'>{SkillSafari_Compounds_key.Course_details.description_1}</li>
                        <li className='text-[#555555] font-[400] xl:text-[20px] sm:text-[20px] text-[17px] my-2'>{SkillSafari_Compounds_key.Course_details.description_2}</li>
                        <li className='text-[#555555] font-[400] xl:text-[20px] sm:text-[20px] text-[17px] my-2'>{SkillSafari_Compounds_key.Course_details.description_3}</li>
                    </ul>
                </div>
                <div className=" lg:grid xl:grid-cols-2 xl:scale-100 scale-90 xl:w-fit w-[100%] md:grid-cols-4 flex justify-between gap-x-2 flex-wrap items-center">
                    <div className=" flex gap-5 items-center m-2">
                        <img src={SkillSafari_Compounds_key.Course_details.box_content.box_1.img} alt="" width={"80px"} />
                        <div className=" font-[400] w-[120px] text-[#212529]">{SkillSafari_Compounds_key.Course_details.box_content.box_1.about}</div>
                    </div>
                    <div className=" flex gap-5 items-center m-2">
                        <img src={SkillSafari_Compounds_key.Course_details.box_content.box_2.img} alt="" width={"80px"} />
                        <div className=" font-[400] w-[120px] text-[#212529]">{SkillSafari_Compounds_key.Course_details.box_content.box_2.about}</div>
                    </div>
                    <div className=" flex gap-5 items-center m-2">
                        <img src={SkillSafari_Compounds_key.Course_details.box_content.box_3.img} alt="" width={"80px"} />
                        <div className=" font-[400] w-[140px] text-[#212529]">{SkillSafari_Compounds_key.Course_details.box_content.box_3.about}</div>
                    </div>
                    <div className=" flex gap-5 items-center m-2">
                        <img src={SkillSafari_Compounds_key.Course_details.box_content.box_4.img} alt="" width={"80px"} />
                        <div className=" font-[400] w-[120px] text-[#212529]">{SkillSafari_Compounds_key.Course_details.box_content.box_4.about}</div>
                    </div>
                </div>
            </div>
            <div className="lg:mt-20 w-fit mx-auto">
                <button className=' md:px-[3rem] md:py-[1rem] px-[30px] py-[10px] font-[600] text-[18px] text-white rounded-lg bg-[#f3274f]'>
                    {SkillSafari_Compounds_key.Course_details.Button_content}
                </button>
            </div>
        </div>
    </div>
  )
}

export default FullStackDevCourse