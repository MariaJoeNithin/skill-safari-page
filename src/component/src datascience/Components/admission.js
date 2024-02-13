import React from "react";
import JsonCardData from "../fullStackDev.json";

const Admission = () => {
  const admiss = JsonCardData.admission;

  const containerStyle = {
    borderLeft: "2px solid rgb(255,199,132)",
    padding: "10px",
  };

  return (
    <div className="container mx-auto mt-8 p-5 text-center">
      <h1 className="text-3xl  font-bold mb-4">{admiss.title}</h1>

      <div
        className="flex flex-col max-w-2xl mx-auto  items-center"
        style={containerStyle}
      >
        {admiss.subheadings.map((subheading, index) => (
          <div key={index} className=" mb-8 text-left ">
            <h2 className="text-2xl font-semibold ">{subheading.title}</h2>
            <p className="mt-2 text-gray-600 ml-4">{subheading.paragraph}</p>
            {subheading.subheadings1 && (
              <ul className="list-disc list-inside mt-2">
                <li className="ml-4">{subheading.subheadings1[0].list1}</li>
                <li className="ml-4">{subheading.subheadings1[0].list2}</li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admission;
