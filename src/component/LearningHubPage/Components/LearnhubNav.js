import React from "react";
import jsonCnt from "../learninghubdev.json";

const LearnhubNav = () => {
  let navList = jsonCnt.navPage;
  return (
    <>
      <div className="flex flex-col pb-8 px-4 shadow-skillsafari  rounded-lg">
        <h1 className=" text-[28px] font-[500] my-5 px-[8px] text-center flex flex-col items-center justify-center rounded-md bg-[#fef4e5] shadow-lg">
          How
          <img
            src="https://res.cloudinary.com/skill-safari/image/upload/v1689931206/2.0-logo_rie3fo.webp"
            alt="Alchemyst"
          />
          works
        </h1>
        <hr />
        <ul className="py-5 flex flex-col items-center justify-center text-center gap-5">
          <li>
            <a href={navList.BookmarkLinks[0]} className="flex flex-col gap-2">
              <img
                src={navList.navimages[0]}
                alt={navList.Stages[0]}
                className=" max-h-[120px] learnNav"
              />
              {navList.Stages[0]}
            </a>
          </li>
          <img
            className=" max-h-[48px] w-[3px]"
            src={navList.lineImg}
            alt="NavLine"
          />
          <li>
            <a href={navList.BookmarkLinks[1]} className="flex flex-col gap-2">
              <img
                src={navList.navimages[1]}
                alt={navList.Stages[1]}
                className=" max-h-[120px] learnNav"
              />
              {navList.Stages[1]}
            </a>
          </li>
          <img
            className=" max-h-[48px] w-[3px]"
            src={navList.lineImg}
            alt="NavLine"
          />
          <li>
            <a href={navList.BookmarkLinks[2]} className="flex flex-col gap-2">
              <img
                src={navList.navimages[2]}
                alt={navList.Stages[2]}
                className=" max-h-[120px] learnNav "
              />

              {navList.Stages[2]}
            </a>
          </li>
        </ul>
        <button className="w-full bg-[#F3274F] text-white py-4 text-lg rounded-md hover:bg-blue-600 transition duration-300">
          Know More
        </button>
      </div>
    </>
  );
};

export default LearnhubNav;
