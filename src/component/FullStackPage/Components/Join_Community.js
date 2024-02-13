import React from "react";
import JsonCardData from "../fullStackDev.json";
import { FaDiscord } from "react-icons/fa";

function Joincommunity() {
  let community = JsonCardData["Join_Community"];
  return (
    <>
      <div className="container rounded-md shadow-skillsafari mx-auto  pb-8 px-8">
        <h2 className="text-2xl font-bold mb-4 py-5 border-b border-gray-300">
          {community.title}
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="col flex flex-col gap-5 justify-center items-center">
            <div className="text-[#212529]">{community.content}</div>
            <button
              id="discord-button"
              className="font-[600] text-[18px] bg-[#404EED] transition-all duration-700 text-white flex items-center px-7 py-2 hover:rounded-full rounded-md"
            >
              <FaDiscord className="text-5xl" /> Join Our Discord
            </button>
          </div>

          <div className="col md:flex hidden justify-center items-center">
            <img src={community.images} alt="community" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Joincommunity;
