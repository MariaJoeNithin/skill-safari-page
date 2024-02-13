import React from 'react'
import { SkillSafari_Compounds_key } from '../component_src/header_src';
import { ImLinkedin } from "react-icons/im";
import { IoIosCloseCircle } from "react-icons/io";

function Specialist({trainer_1,setTrainer_1, trainer_2,setTrainer_2, trainer_3,setTrainer_3}) {

  return (
    <>
    <div className={` ${trainer_1 ? "block slide-anime" : "hidden"} border-2 xl:w-[700px] lg:w-[700px] md:w-[85%] w-[90%] bg-white absolute sm:translate-y-0 -translate-y-28 shadow-2xl rounded-xl`}>
          <div className="md:flex md:items-center md:justify-center h-full gap-10 relative">
              <button onClick={()=> setTrainer_1(!trainer_1) } className='w-fit absolute top-1 right-1 text-lg flex items-center gap-x-2 p-1 rounded-full bg-red-500 text-white'> <IoIosCloseCircle className=' text-xl' /></button>
              <div className="flex items-center justify-center md:m-0 m-5">
                  <img src={SkillSafari_Compounds_key.Industial_specialist.specialist_1.img} alt="" width={"200px"} />
              </div>
              <div className="md:w-2/4 p-5 ">
                  <div className='font-[600] md:flex md:items-center gap-x-3 my-4 bg-gray-100 w-fit px-3 py-1 rounded shadow-md md:mx-0 mx-auto'>
                      <span className='font-[600] text-[18px] text-[#2b2f4e]'>{SkillSafari_Compounds_key.Industial_specialist.specialist_1.name}</span> -
                      <span className='font-[600] text-[18px] text-[#7c7c7c]'>{SkillSafari_Compounds_key.Industial_specialist.specialist_1.worksOn}</span>
                  </div>
                  <div className=' tracking-wide indent-10 text-justify'>{SkillSafari_Compounds_key.Industial_specialist.specialist_1.description_1}</div>
                  <a className=' px-3 py-2 rounded-lg hover:bg-blue-600 font-semibold w-fit my-5 md:mx-0 mx-auto bg-blue-500 text-white flex items-center gap-x-2' href="https://www.linkedin.com/in/kskishorebabu/" target='_blank'><ImLinkedin className='text-2xl' /> Take a Look</a>
              </div>
          </div>
      </div>
      
      <div className={` ${trainer_2 ? "block slide-anime" : "hidden"}  border-2 xl:w-[700px] lg:w-[700px] md:w-[85%] w-[90%] bg-white absolute sm:translate-y-0 -translate-y-28 shadow-2xl rounded-xl`}>
              <div className="md:flex md:items-center md:justify-center h-full gap-10 relative">
                  <button onClick={()=> setTrainer_2(!trainer_2) } className='w-fit absolute top-1 right-1 text-lg flex items-center gap-x-2 p-1 rounded-full bg-red-500 text-white'> <IoIosCloseCircle className=' text-xl' /></button>
                  <div className="flex items-center justify-center md:m-0 m-5">
                      <img src={SkillSafari_Compounds_key.Industial_specialist.specialist_2.img} alt="" width={"200px"} />
                  </div>
                  <div className="md:w-2/4 p-5 ">
                      <div className='font-[600] md:flex md:items-center gap-x-3 my-4 bg-gray-100 w-fit px-3 py-1 rounded shadow-md md:mx-0 mx-auto'>
                          <span className='font-[600] text-[18px] text-[#2b2f4e]'>{SkillSafari_Compounds_key.Industial_specialist.specialist_2.name}</span> -
                          <span className='font-[600] text-[18px] text-[#7c7c7c]'>{SkillSafari_Compounds_key.Industial_specialist.specialist_2.worksOn}</span>
                      </div>
                      <div className=' tracking-wide indent-10 text-justify'>{SkillSafari_Compounds_key.Industial_specialist.specialist_2.description_1}</div>
                      <a className=' px-3 py-2 rounded-lg hover:bg-blue-600 font-semibold w-fit my-5 md:mx-0 mx-auto bg-blue-500 text-white flex items-center gap-x-2' href="https://www.linkedin.com/in/sathishkumar-shanmugam-27790a106/" target='_blank'><ImLinkedin className='text-2xl' /> Take a Look</a>
                  </div>
              </div>
          </div>

          <div className={` ${trainer_3 ? "block slide-anime" : "hidden"} border-2 xl:w-[700px] lg:w-[700px] md:w-[85%] w-[90%] bg-white absolute sm:translate-y-0 -translate-y-28 shadow-2xl rounded-xl`}>
              <div className="md:flex md:items-center md:justify-center h-full gap-10 relative">
                  <button onClick={()=> setTrainer_3(!trainer_3) } className='w-fit absolute top-1 right-1 text-lg flex items-center gap-x-2 p-1 rounded-full bg-red-500 text-white'> <IoIosCloseCircle className=' text-xl' /></button>
                  <div className="flex items-center justify-center md:m-0 m-5">
                      <img src={SkillSafari_Compounds_key.Industial_specialist.specialist_3.img} alt="" width={"200px"} />
                  </div>
                  <div className="md:w-2/4 p-5 ">
                      <div className='font-[600] md:flex md:items-center gap-x-3 my-4 bg-gray-100 w-fit px-3 py-1 rounded shadow-md md:mx-0 mx-auto'>
                          <span className='font-[600] text-[18px] text-[#2b2f4e]'>{SkillSafari_Compounds_key.Industial_specialist.specialist_3.name}</span> -
                          <span className='font-[600] text-[18px] text-[#7c7c7c]'>{SkillSafari_Compounds_key.Industial_specialist.specialist_3.worksOn}</span>
                      </div>
                      <div className=' tracking-wide indent-10 text-justify'>{SkillSafari_Compounds_key.Industial_specialist.specialist_3.description_1}</div>
                      <a className=' px-3 py-2 rounded-lg hover:bg-blue-600 font-semibold w-fit my-5 md:mx-0 mx-auto bg-blue-500 text-white flex items-center gap-x-2' href="https://www.linkedin.com/in/dilip-m-b8021637/" target='_blank'><ImLinkedin className='text-2xl' /> Take a Look</a>
                  </div>
              </div>
          </div>
          </>
  )
}

export default Specialist