import React, { useState } from "react";
import JsonCardData from "../fullStackDev.json";

const FAQ = () => {
  const Faq = JsonCardData.FAQ;
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleIndex((id) => (id === index ? null : index));
  };

  return (
    <div className="container rounded-md shadow-skillsafari mx-auto  pb-8 px-8">
      <h2 className="text-2xl font-bold mb-4 py-5 border-b border-gray-300">
        FAQ
      </h2>
      <ul className="list-none grid gap-5 md:grid-cols-1 ">
        {Faq.map((item, index) => (
          <li
            key={index}
            className={`flex flex-col bg-white transition-all duration-500 border border-[#f8f1e4] rounded-xl overflow-hidden cursor-pointer  `}
            onClick={() => toggleAnswer(index)}
          >
            <div className={`p-4`}>
              <div
                className={`m-2 text-base font-semibold leading-6 w-full relative `}
              >
                <div className="xl:text-[20px] text-[18px] h-[fit] pe-11 flex items-center">
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
