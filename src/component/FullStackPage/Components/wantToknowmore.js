import React from "react";
import JsonCardData from "../fullStackDev.json";
import { Link } from "react-router-dom";

const Knowmore = () => {
  const knowMore = JsonCardData.Knowmore;

  return (
    <div
      className="mt-8 w-full p-10 text-center"
      style={{ backgroundColor: "#1C2042" }}
    >
      <h1 className="text-3xl font-bold mb-5 mx-auto text-white">
        {knowMore.Title}
      </h1>

      <div className="flex flex-wrap items-center justify-center text-white">
        <div className="max-w-7xl">
          <div className="flex mb-5">
            <p className="text-lg ">{knowMore.Content}</p>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center md:w-1/2 mx-auto">
            <Link to={"tel:+918111099100"} className="px-5 py-2 min-w-40 hover:rounded-full bg-[#f3274f] rounded-lg text-[18px]">Call Us</Link>
            <a href="https://api.whatsapp.com/send?phone=+918111099100" className="px-5 py-2 min-w-40 hover:rounded-full bg-[#2bb63f] text-[18px] rounded-lg">Whatsapp Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowmore;
