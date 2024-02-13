import React from "react";
import JsonCardData from "../fullStackDev.json";

const Fees = () => {
  const feesData = JsonCardData.fees;

  return (
    <div className="container mx-auto mt-8 p-5 text-center">
      <h1 className="text-3xl font-bold mb-4"> {feesData.title}</h1>

      <div className="flex flex-wrap justify-around">
        {feesData.cards.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 p-4"
            style={{ backgroundColor: "#1C2042", borderRadius: "8px" }}
          >
            <div className="flex flex-col mb-4 text-white">
              <h2 className="text-xl mb-4"style={{ fontSize: "1.5rem" }}>{card.text1}</h2>
              <h1 style={{ fontSize: "2.0rem", textDecoration: "line-through" }}>{card.text2}</h1>

              <h1 style={{ fontSize: "2.0rem" }}>{card.text3}</h1>
              <p className="border-b border-white mb-2">{card.text4}</p>
              <p>{card.text5}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fees;
