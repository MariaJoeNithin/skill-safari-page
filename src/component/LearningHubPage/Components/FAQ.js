import React, { useState } from "react";
import JsonCardData from "../learninghubdev.json";

const FAQ = () => {
  const Faq = JsonCardData.FAQ;
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleIndex((id) => (id === index ? null : index));
  };

  return (
    <div className="container mx-auto  pb-8 px-8">
      <div className="flex justify-center items-center">
        <h1 className="text-[32px] font-[700] mb-4 border-black border-b-4 text-center inline-block">
          FAQ
        </h1>
      </div>
      <ul className="list-none grid gap-8 md:grid-cols-1 ">
        {Faq.map((item, index) => (
          <li
            key={index}
            className={`flex flex-col bg-white transition-all duration-500 border border-[#f8f1e4] rounded-xl overflow-hidden cursor-pointer  `}
            onClick={() => toggleAnswer(index)}
          >
            <div className={`p-4`}>
              <div
                className={`m-2 text-base font-semibold leading-6 w-full relative flex`}
              >
                <div className="xl:text-[20px] text-[18px] min-h-[32px] pe-11 flex items-center">
                  {item.Question}
                </div>
                <button className="flex items-center justify-center absolute right-2 top-0 rounded-lg text-[#f7a600] text-[24px] h-[32px] w-[32px] bg-[#fff5e5] ">
                  {visibleIndex === index ? "-" : "+"}
                </button>
              </div>
              <div
                className={`text-base leading-6 px-2 text-[#555555] overflow-hidden transition-all duration-500 ${
                  visibleIndex === index ? "h-[100%]" : "h-0"
                } answer`}
                dangerouslySetInnerHTML={{ __html: item.Answer }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
