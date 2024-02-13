import React from "react";
import JsonCardData from "../fullStackDev.json";

const Slot = () => {
  const slotData = JsonCardData.slots;

  return (
    <div className="container mx-auto mt-8 p-5 text-center">
      <h1 className="text-3xl  mb-4 ">{slotData.text}</h1>

      {slotData.button && (
        <button
          className={slotData.className}
          style={{
            backgroundColor: "#FF0000",
            color: "#FFFFFF", 
            borderRadius: "8px",
            padding: "10px 30px"
          }}
        >
          {slotData.button}
        </button>
      )}
    </div>
  );
};

export default Slot;
