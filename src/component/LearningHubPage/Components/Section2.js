import React from "react";
import JsonCardData from "../learninghubdev.json";

const Section2 = () => {
  const cardData = JsonCardData.Section2;

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="container p-5 mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {cardData["accredited by"].Title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8">
          {cardData["accredited by"].images.map((item, index) => (
            <div
              key={index}
              className="col h-[100%] bg-orange-100 rounded-md p-4 text-center"
            >
              <img
                src={item}
                alt={`Icon ${index + 1}`}
                className="w-[auto] h-[auto] mx-auto mb-2"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container p-5 mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {cardData["Step into the World"].Title}
        </h2>
        <iframe
          className=" w-full min-h-96 rounded-xl"
          src="https://www.youtube.com/embed/O61JDJ74kT0?si=-1BwICGsAXegfW31"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Section2;
