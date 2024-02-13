import React from "react";
import JsonCardData from "../fullStackDev.json";

const Alchemyst = () => {
  const Alchemyst = JsonCardData["Alchemyst Advantage"];

  return (
    <div className="container rounded-md shadow-skillsafari mx-auto  pb-8 px-8">
      <h2 className="text-2xl font-bold mb-4 py-5 border-b border-gray-300">
        {Alchemyst.Title}
      </h2>
      <div className="flex flex-col gap-5">
        {Alchemyst.subTopic.images.map((image, index) => (
          <div key={index} className="bg-orange-100 h-[100%] rounded-md p-4">
            <p className="font-[600] text-[24px]">
              <span>
                <img
                  src={image}
                  alt={`Icon ${index + 1}`}
                  className=" w-[auto] inline h-[48px] mx-auto mb-2"
                />
              </span>
              {Alchemyst.subTopic.subTitle[index]}
            </p>
            <p className="text-[16px]">{Alchemyst.subTopic.Text[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alchemyst;
