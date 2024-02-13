import React from "react";
import FullStackPage from "./Components/fullStackSection";
import Cards2 from "./Components/cards2";
import Cards from "./Components/cards";
import './DataSciencepg.css';
import Cards3 from "./Components/card3";
import Cards4 from "./Components/card4";
import Cards5 from "./Components/card5";
import CourseCurriculum from "./Components/coursecuri";
import Call from "./Components/caalus";
import Fees from "./Components/fees";
import Slot from "./Components/slots";
import CardCarousel from "./Components/CardCarousel";
import Admission from "./Components/admission";
import Company from "./Components/company";
import FAQ from "./Components/accordion";
// import Main_content from "./components/main_content";

// import SkillSafariNavigationBar from "./component_src/header";

const DataSciencepg = () => {
  window.scroll(0,0)

  return (
    <>
      <FullStackPage />
      <Cards2 />
      <Cards />
      <Cards3 />
      <Admission />
      <CourseCurriculum />
      <Fees />
      <Cards4 />
      <Cards5 />
     <Company />
      <Call />
     <Slot />
     <CardCarousel />
     <FAQ />
      {/* <SkillSafariNavigationBar /> */}
      {/* <Main_content /> */}
    </>
  );
};

export default DataSciencepg;
