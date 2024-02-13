import React from "react";
import FullStackNav from "./fullstackNav.js";
import Alchemyst from "./Alchemyst.js";
import HowDoes from "./howDoes.js";
import CourseCurriculum from "./Course Curriculum.js";
import Placement from "./placement.js";
import Instructors from "./Instructors.js";
import Join from "./Join_Community";
import Fees from "./CourseFees.js";
import Certificate from "./certificate.js";
import Company from "./hiring.js";
import FAQ from "./FAQ";

const Section3 = () => {
  return (
    <>
      <div className="container lg:mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-8 grid-cols-1 gap-5 p-5 relative lg:mx-auto ">
          <div className="col-span-2 lg:block hidden max-w-[300px] h-max sticky top-28">
            <FullStackNav />
          </div>
          <div className="lg:col-span-6 col">
            <div className="flex flex-col">
              <div className="col mb-5" id="Alchemyst">
                <Alchemyst />
              </div>
              <div className="col my-5" id="HowDoes">
                <HowDoes />
              </div>
              <div className="col my-5" id="CourseCurriculum">
                <CourseCurriculum />
              </div>
              <div className="col my-5" id="Instructors">
                <Instructors />
              </div>
              <div className="col my-5" id="Fees">
                <Fees />
              </div>
              <div className="col my-5" id="Certificate">
                <Certificate />
              </div>
              <div className="col my-5" id="Placement">
                <Placement />
              </div>
              <div className="col my-5" id="Company">
                <Company />
              </div>
              <div className="col my-5">
                <Join />
              </div>
              <div className="col mt-5" id="FAQ">
                <FAQ />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
