import React from "react";
import { MdContacts } from "react-icons/md";
import { SkillSafari_Compounds_key } from "../component_src/header_src";

function Help() {
  return (
    <div className="fixed bottom-0 hover:bg-[#F3274F] bg-[#F3274F] backdrop-blur-md py-5 z-20 transition-all duration-500 w-screen text-white">
      <div className="flex items-center justify-center text-[16px] flex-wrap gap-x-1">
        <MdContacts className="text-2xl"/>
        {SkillSafari_Compounds_key.help_line.sentence_1}
        <a href="tell:+918111099100" className="text-[18px] font-[600] text-gray-200 hover:text-white" >{SkillSafari_Compounds_key.help_line.number}</a>
        {SkillSafari_Compounds_key.help_line.sentence_2}
        <a href="mailto:connect@skillsafari.in" className="text-[18px] font-[600] text-gray-200 hover:text-white">{SkillSafari_Compounds_key.help_line.sentence_3}</a>
      </div>
    </div>
  );
}

export default Help;