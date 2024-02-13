import React from "react";

import JsonCardData from "../fullStackDev.json";

const Placement = () => {
  const placementCard = JsonCardData.Placements;

  return (
    <div className="container rounded-md shadow-skillsafari mx-auto  pb-8 px-8">
      <h2 className="text-2xl font-bold mb-4 py-5 border-b border-gray-300">
        {placementCard.Title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
        {placementCard.content.map((cnt, index) => (
          <div key={index} className="col bg-[#fef4e5] h-[100%] rounded-lg p-4">
            <div className="flex items-center justify-center">
              <img
                src={cnt.images}
                alt={`Icon ${index + 1}`}
                className=" w-[auto] inline h-[64px] mx-auto mb-2"
              />
            </div>
            <p className="font-[600] text-[24px] text-center">
              {cnt.ContentTitle}
            </p>
            <p className="text-[16px] text-[#555] leading-[24px]">
              {cnt.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placement;
