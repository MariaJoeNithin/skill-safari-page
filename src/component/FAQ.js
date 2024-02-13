import React, { useState } from "react";
import JsonCardData from "./Faq.json";

const FAQ = () => {
  const Faq = JsonCardData.FAQ;
  const Faq_left = JsonCardData.Left_side;
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleIndex((id) => (id === index ? null : index));
  };

  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 xl:px-16 w-[1300px] mx-auto max-w-full">
      <div className=" xl:w-auto w-fit mx-auto">
        <div className="font-[600] text-[26px] text-[#212529] xl:text-left text-center">
          {Faq_left.title}
        </div>
        <img src={Faq_left.image_src} alt="" className=" w-[400px] mx-auto my-10 " />
        <div className="xl:text-left text-center">
          <a href="mailto:connect@skillsafari.in" className="mt-10 px-6 py-3 rounded-md  bg-[#F3274F] text-[18px] font-[600] text-white hover:rounded-full">{Faq_left.email_btn}</a>
        </div>
      </div>
      <div className="">
      <div className="container mx-auto mt-20  xl:px-10 px-5 ">
      
      <ul className="list-none grid gap-4 md:grid-cols-1 ">
        {Faq.map((item, index) => (
          <li
            key={index}
            className={`flex flex-col bg-white transition-all duration-500 border border-[#f8f1e4] rounded-xl overflow-hidden cursor-pointer  `}
            onClick={() => toggleAnswer(index)}
          >
            <div className={"p-4"}>
              <div
                className={`m-2 text-base font-semibold leading-6 w-full relative `}
              >
                <div className="xl:text-[20px] text-[18px] h-[auto] pe-11 flex items-center font-[500] tracking-wide">
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
      </div>
    </div>
  );
};

export default FAQ;
