import React from "react";
import LearnhubNav from "./LearnhubNav";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import OutcomeBased from "./OutcomeBased";
import Company from "./hiring";

const Section3 = () => {
  return (
    <>
      <div className="container lg:mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-8 grid-cols-1 gap-5 p-5 relative lg:mx-auto ">
          <div className="col-span-2 lg:block hidden max-w-[300px] h-max sticky top-28">
            <LearnhubNav />
          </div>
          <div className="lg:col-span-6 col">
            <div className="flex flex-col">
              <div className="col mb-5" id="stage1">
                <Stage1 />
              </div>
              <div className="col mb-5" id="stage2">
                <Stage2 />
              </div>
              <div className="col mt-5" id={"OutcomeBased"}>
                <OutcomeBased />
              </div>
              <div className="col mt-5" id="stage3">
                <Stage3 />
              </div>
              <div className="col mt-5" id={"Company"}>
                <Company />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
