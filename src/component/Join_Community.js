import React from "react";
import { SkillSafari_Compounds_key } from "../component_src/header_src";
import { FaDiscord } from "react-icons/fa";

function Join_Community() {
  return <div className="w-fit p-1 mx-auto mt-10">
    <div className=" sm:p-10 md:flex md:items-center md:gap-10">
        <div className=" xl:w-[350px] xl:h-[450px] lg:w-[250px] lg:h-[300px] md:w-[250px] md:h-[330px] bg-center bg-cover w-[310px] h-[450px] mx-auto" style={{backgroundImage:`url(${SkillSafari_Compounds_key.Join_our_community.image_src})`}} >
        </div>
        <div className=" xl:w-[800px] lg:w-[600px] max-w-[100%] md:w-[400px] md:p-0 px-5 md:mt-0 mt-10 ">
            <div className=" leading-10">
                <div className="font-[600] text-[28px] text-[#212529]">{SkillSafari_Compounds_key.Join_our_community.title.t_1}</div>
                <div className="font-[600] text-[28px] text-[#212529]">{SkillSafari_Compounds_key.Join_our_community.title.t_2}</div>
            </div>
            <div className="font-[400] text-[16px] text-[#212529] md:mt-10 mt-5 text-justify">{SkillSafari_Compounds_key.Join_our_community.content}</div>
            <div className="mt-10">
                <button className="font-[600] text-[18px] bg-[#404EED] text-white flex items-center px-7 py-2 rounded-md">
                    <FaDiscord className="text-5xl" /> {SkillSafari_Compounds_key.Join_our_community.button}
                </button>
            </div>
        </div>
    </div>
  </div>;
}

export default Join_Community;
