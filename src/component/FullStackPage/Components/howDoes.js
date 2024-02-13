import React from "react";
import JsonCardData from "../fullStackDev.json";

const HowDoes = () => {
  const HowSkill = JsonCardData["How Skill Safari work"];
  const Outcome = JsonCardData["Outcome Based Learning"];

  return (
    <>
      <div className="container rounded-md shadow-skillsafari mx-auto pb-8 px-8 mb-5">
        <h2 className="text-2xl font-bold mb-4 py-5 border-b border-gray-300">
          {HowSkill.Title}
        </h2>
        <div className="flex ">
          <img src={HowSkill.images} alt="howSkillSafariWork" />
        </div>
      </div>
      <div className="container rounded-md shadow-skillsafari mx-auto  pb-8 px-8">
        <h2 className="text-2xl font-bold mb-4 py-5 border-b border-gray-300">
          {Outcome.Title}
        </h2>
        <div className="flex flex-col">
          <div className="flex ">{Outcome.text}</div>
          <div className="flex ">
            <img src={Outcome.images} alt="Outcome" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowDoes;
