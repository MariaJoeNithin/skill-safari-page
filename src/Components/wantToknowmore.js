import React from "react";
import JsonCardData from "../learninghubdev.json";

const Knowmore = () => {
  const knowMore = JsonCardData.Knowmore;

  return (
    <div
      className="mt-8 w-full p-5 text-center"
      style={{ backgroundColor: "#1C2042" }}
    >
      <h1 className="text-3xl font-bold mb-2 mx-auto text-white">
        {knowMore.Title}
      </h1>

      <div className="flex flex-wrap items-center justify-center text-white">
        <div className="max-w-7xl">
          <div className="flex mb-4">
            <p className="text-lg ">{knowMore.Content}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-evenly md:w-1/2 mx-auto">
            <button className="button-1 text-[18px]">Call Us</button>
            <button className="button-2 text-[18px]">Whatsapp Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowmore;
