import React from "react";
import {
  TbSquareRoundedChevronLeftFilled,
  TbSquareRoundedChevronRightFilled,
} from "react-icons/tb";

const Studentresume = ({ studentDetail }) => {
  const slideLeft = () => {
    let slider = document.querySelector("#slider" + cntId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.querySelector("#slider" + cntId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="border h-full w-full">
      <div className="flex">
        <h1 className="text-2xl">StudentName</h1>
        <h3 className="text-sm text-gray-500">StudentMail</h3>
        <div className="relative flex items-center group w-full">
          <TbSquareRoundedChevronLeftFilled
            onClick={slideLeft}
            className="transition-all duration-300 left-0 cursor-pointer text-white text-[40px] absolute opacity-50 hover:opacity-100 z-10 hidden group-hover:block"
          />
          <TbSquareRoundedChevronRightFilled
            onClick={slideRight}
            className="transition-all duration-300 right-0 cursor-pointer text-white text-[40px] absolute opacity-50 hover:opacity-100 z-10 hidden group-hover:block"
          />
          <div
            id={"slider" + cntId}
            className="flex flex-row w-full mx-4 h-full overflow-x-scroll scroll-smooth gap-x-2 snap-x"
          >
            Skills
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentresume;
