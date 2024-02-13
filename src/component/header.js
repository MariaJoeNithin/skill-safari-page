import React, { useEffect, useState } from "react";
import { SkillSafari_Compounds_key } from "../component_src/header_src";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";

function SkillSafariNavigationBar() {
  const [sub_menu, setSub_menu] = useState(false);
  const [sub_menu_two, setSub_menu_two] = useState(false);
  const [sub_menu_three, setSub_menu_three] = useState(false);

  const [mainMenu, setMainMenu] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function showMenu() {
    setSub_menu(!sub_menu);
    setSub_menu_two(false);
    setSub_menu_three(false);
  }
  function showMenu_two() {
    setSub_menu_two(!sub_menu_two);
    setSub_menu(false);
    setSub_menu_three(false);
  }
  function showMenu_three() {
    setSub_menu_three(!sub_menu_three);
    setSub_menu_two(false);
    setSub_menu(false);
  }
  function showOnMenu() {
    setMainMenu(!mainMenu);
  }

  return (
    <div
      className={`shadow-xl py-2 ${
        isSticky ? "fixed top-0" : "relative"
      } w-full bg-white z-[1000]`}
    >
      <nav className="flex items-center max-w-7xl mx-auto justify-between py-7 px-5">
        <Link to="/" className="brand-logo">
          <img
            src={SkillSafari_Compounds_key.header.brand_logo}
            alt="Brand_logo"
            width={"170px"}
          />
        </Link>
        <div
          className={`lg:flex items-center gap-10  duration-1000 ${
            mainMenu
              ? "flex items-center flex-col gap-5 text-left h-fit  w-[450px] p-2 max-w-[100%] absolute bg-white left-2/4 top-[80px] rounded-2xl shadow -translate-x-2/4 z-20"
              : "hidden h-0"
          }`}
        >
          <div
            className="flex items-center relative cursor-pointer"
            onClick={() => showMenu()}
          >
            <div className="flex items-center hover:text-orange-400">
              <span className="">
                {SkillSafari_Compounds_key.header.menu_items.option_1}
              </span>
              <IoMdArrowDropdown className="text-xl" />
            </div>
            <div
              className={
                sub_menu
                  ? "hover:text-black flex flex-col gap-5 absolute lg:left-0 -left-2/4 top-10 border-2 bg-white z-10 border-gray-200  w-[300px] text-xl rounded-md h-[max-content] p-3"
                  : "hidden"
              }
            >
              <Link
                to="/full-stack-developer-course"
                className="flex items-center justify-center hover:text-orange-500 w-fit "
              >
                <span className="py-[5px] rounded-md bg-slate-100 text-orange-400">
                  <FaCode className=" text-2xl mx-3" />
                </span>
                <span className="ml-2">
                  {SkillSafari_Compounds_key.header.option_1_branch.option_1}{" "}
                  <span></span>
                </span>
              </Link>
              <Link
                to="/data-science-machine-learning/data-science-machine-learning-experts"
                className="flex items-center hover:text-orange-500 w-fit"
              >
                <span className="py-[5px] rounded-md bg-slate-100 text-orange-400">
                  <TbDeviceAnalytics className="text-2xl mx-3" />
                </span>
                <span className="ml-2">
                  {SkillSafari_Compounds_key.header.option_1_branch.option_2}
                </span>
              </Link>
            </div>
          </div>
          <Link to="/learning-hub" className="hover:text-orange-500 flex items-center">
            {SkillSafari_Compounds_key.header.menu_items.option_2}
          </Link>
          <div
            className=" flex items-center relative cursor-pointer"
            onClick={() => showMenu_two()}
          >
            <span className="hover:text-orange-500">
              {SkillSafari_Compounds_key.header.menu_items.option_3}
            </span>
            <IoMdArrowDropdown className="text-xl" />

            <div
              className={
                sub_menu_two
                  ? "hover:text-black flex flex-col gap-5 absolute  lg:left-2 -left-2/4 z-10 top-10 border-2 border-gray-200 bg-white w-[300px] text-xl rounded-md h-[max-content] p-3"
                  : "hidden"
              }
            >
              <Link
                to="/Web_Development_Internship"
                className="flex items-center justify-center hover:text-orange-500 w-fit "
              >
                <span className="py-[5px] rounded-md bg-slate-100 text-orange-400">
                  <FaCode className=" text-2xl mx-3 " />
                </span>
                <span className="ml-2">
                  {SkillSafari_Compounds_key.header.option_2_branch.option_1}
                </span>
              </Link>
              <Link
                to="/data_analytics_internship"
                className="flex items-center hover:text-orange-500 w-fit"
              >
                <span className="py-[5px] rounded-md bg-slate-100 text-orange-400">
                  <TbDeviceAnalytics className="text-2xl mx-3" />
                </span>
                <span className="ml-2">
                  {SkillSafari_Compounds_key.header.option_2_branch.option_2}
                </span>
              </Link>
            </div>
          </div>
          <Link to="/hire-from-us" className="hover:text-orange-500 flex items-center">
            {SkillSafari_Compounds_key.header.menu_items.option_4}
          </Link>
          <Link
            to="https://blog.skillsafari.in/"
            target="_blank"
            className="hover:text-orange-500 flex items-center"
          >
            {SkillSafari_Compounds_key.header.menu_items.option_5}
          </Link>
          <div
            className="flex items-center cursor-pointer relative"
            onClick={() => showMenu_three()}
          >
            <span className="hover:text-orange-500 ">
              {SkillSafari_Compounds_key.header.menu_items.option_6}
            </span>
            <IoMdArrowDropdown className="text-xl" />
            <div
              className={
                sub_menu_three
                  ? "hover:text-black flex flex-col gap-5 absolute z-10 -right-[130px] top-10 border-2 border-gray-200 bg-white w-[300px] text-xl rounded-md h-[max-content] p-3"
                  : "hidden"
              }
            >
              <Link
                to="/build_a_web_developer_portfolio_to_get_hired_in_2024"
                className="flex items-center justify-center hover:text-orange-500 w-fit "
              >
                <span className="py-[5px] rounded-md bg-slate-100 text-orange-400">
                  <FaCode className=" text-2xl mx-3" />
                </span>
                <span className="ml-2">
                  {SkillSafari_Compounds_key.header.option_3_branch.option_1}
                </span>
              </Link>
              <Link
                to="/Introduction_to_data_analytics_with_MS_Excel"
                className="flex items-center hover:text-orange-500 w-fit"
              >
                <span className="py-[5px] rounded-md bg-slate-100 text-orange-400">
                  <TbDeviceAnalytics className="text-2xl mx-3" />
                </span>
                <span className="ml-2">
                  {SkillSafari_Compounds_key.header.option_3_branch.option_2}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="lg:hidden w-fit border-2 px-2 py-1 rounded hover:shadow-md  relative z-20"
          onClick={() => showOnMenu()}
        >
          <AiOutlineMenu className="lg:hidden  text-2xl" />
        </div>
      </nav>
    </div>
  );
}

export default SkillSafariNavigationBar;
