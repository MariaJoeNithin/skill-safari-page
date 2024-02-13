import React from 'react';
import { SkillSafari_Compounds_key } from '../component_src/header_src';

function SkillSafari_dashboard() {
  return (
    <div className=' max-w-7xl lg:flex items-center justify-between mx-auto gap-14 mt-20 lg:p-6 md:p-5 sm:p-8 p-4'>
        <div className=" text-[#212529] flex lg:flex-col -gap-1 lg:justify-normal  justify-center lg:mb-0 mb-5">
            <span className='sm:text-[28px] text-[18px] font-[600]'>{SkillSafari_Compounds_key.Skill_safari_dashboard.left.title_1}</span>
            <span className='sm:text-[28px] text-[18px] font-[600]'>{SkillSafari_Compounds_key.Skill_safari_dashboard.left.title_2}</span>
            <span className='sm:text-[28px] text-[18px] font-[600]'>{SkillSafari_Compounds_key.Skill_safari_dashboard.left.title_3}</span>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 justify-center sm:px-0 px-10 lg:gap-10 gap-5 lg:w-8/12">
            {SkillSafari_Compounds_key.Skill_safari_dashboard.right.map((target,index) =>
                <div className="" key={index}>
                    <div className={` text-[40px] font-[700] my-3`} style={{color:`#${target.title_color}`}}>{target.title}</div>
                    <div className="">{target.content} {target.title_color}</div>
                </div>
            )}
        </div>
    </div>
  )
}

export default SkillSafari_dashboard