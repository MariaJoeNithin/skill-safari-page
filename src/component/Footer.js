import React from 'react';import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SkillSafari_Compounds_key } from '../component_src/header_src';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='w-full h-[fit] bg-[#E8F3FA] p-10'>
        <div className=" max-w-screen-2xl mx-auto flex items-center justify-around gap-10 flex-wrap">
            <div className="xl:w-[400px] w-[80%]">
                <img src={SkillSafari_Compounds_key.header.brand_logo} alt="" width={"200px"} />
                <div className=" text-justify my-5 tracking-wide text-[#555555]">{SkillSafari_Compounds_key.footer.content}</div>
            </div>
            <div className=" flex lg:justify-center justify-start gap-5 flex-wrap">

                <div className="mx-3">
                    <div className="font-[600] text-[18px] text-[#333755]">{SkillSafari_Compounds_key.footer.title_1.text}</div>
                    <div className="flex flex-col">
                        <Link className='hover:text-[#fb9600] my-2 text-[18px]'>{SkillSafari_Compounds_key.footer.title_1.branches_1}</Link>
                        <Link className='hover:text-[#fb9600] my-2 text-[18px]'>{SkillSafari_Compounds_key.footer.title_1.branches_2}</Link>
                    </div>
                </div>

                <div className="mx-3">
                    <div className="font-[600] text-[18px] text-[#333755]">{SkillSafari_Compounds_key.footer.title_2.text}</div>
                    <div className="flex flex-col">
                        <Link className='hover:text-[#fb9600] my-2 text-[18px]'>{SkillSafari_Compounds_key.footer.title_2.branches_1}</Link>
                        <Link className='hover:text-[#fb9600] my-2 text-[18px]'>{SkillSafari_Compounds_key.footer.title_2.branches_2}</Link>
                        <Link className='hover:text-[#fb9600] my-2 text-[18px]'>{SkillSafari_Compounds_key.footer.title_2.branches_3}</Link>
                        <Link className='hover:text-[#fb9600] my-2 text-[18px]'>{SkillSafari_Compounds_key.footer.title_2.branches_4}</Link>
                    </div>
                </div>

                <div className="mx-3">
                    <div className="font-[600] text-[18px] text-[#333755]">{SkillSafari_Compounds_key.footer.title_3.text}</div>
                    <div className="flex flex-col">
                        <Link className='hover:text-[#fb9600] my-2 text-[18px] '>{SkillSafari_Compounds_key.footer.title_3.branches_1}</Link>
                        <Link className='hover:text-[#fb9600] my-2 text-[18px]'>{SkillSafari_Compounds_key.footer.title_3.branches_2}</Link>
                        <Link className='hover:text-[#fb9600] my-2 text-[18px]'>{SkillSafari_Compounds_key.footer.title_3.branches_3}</Link>
                        <Link className='hover:text-[#fb9600] my-2 text-[18px]'>{SkillSafari_Compounds_key.footer.title_3.branches_4}</Link>
                    </div>
                </div>


            </div>
        </div>
        <div className="flex items-center justify-center gap-5 mt-10">
            <a href='https://www.facebook.com/SkillSafari.in/' target='_blank' className='shadow-xl p-2 hover:shadow-lg hover:-translate-y-1 duration-200  rounded-md bg-transparent'><RiFacebookFill   className=' cursor-pointer text-3xl  text-[#2699FB]  hover:text-[#316FF6]' title='FaceBook'/></a>
            <a href='https://www.instagram.com/skillsafari.in/' target='_blank' className=' shadow-xl p-2 hover:shadow-lg hover:-translate-y-1 duration-200 rounded-md instagram '><FaInstagram  className=' cursor-pointer text-3xl ' title='Instagram'/></a>
            <a href='https://twitter.com/Skill_Safari' target='_blank' className='shadow-xl hover:shadow-lg p-2 hover:-translate-y-1 duration-200 rounded-md  bg-transparent'><FaTwitter  className=' cursor-pointer text-3xl  text-[#2699FB]  hover:text-[#1DA1F2]' title='Twitter'/> </a>
            <a href='https://www.linkedin.com/school/skill-safari/' target='_blank' className='shadow-xl p-2 hover:shadow-lg hover:-translate-y-1 duration-200  rounded-md bg-transparent'><FaLinkedinIn  className=' cursor-pointer text-3xl  text-[#2699FB]  hover:text-[#0077b5]' title='Linked In'/></a>
            <a href='https://www.youtube.com/channel/UCPue6kVuf98UZvqjkLFUAjA' target='_blank' className='shadow-xl p-2 hover:shadow-lg hover:-translate-y-1 duration-200 rounded-md  bg-transparent'><FaYoutube  className=' cursor-pointer text-3xl text-[#2699FB] hover:text-[#CD201F]' title='You Tube' /></a>
        </div>
        <div className="my-10 text-center text-[16px] font-[400] text-[#7d7d7d]">{SkillSafari_Compounds_key.footer.copy_rightes}</div>
    </div>
  )
}

export default Footer