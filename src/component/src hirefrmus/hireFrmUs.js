import React from "react";

import Call from "./Components/caalus";
import "./hireFrmUs.css";

import BridgingComponent from "./Components/Bridge";
import TrainComponent from "./Components/Train";
import Hero from "./Components/heroimg";
import NocostComponent from "./Components/Nocost";
import Onclk from "./Components/onclik";
import CorpComponent from "./Components/Corparate";
import Hire from "./Components/Hire";

const HireFrmUs = () => {
  window.scroll(0,0)

  return (
    <>
      <Hero />

      <BridgingComponent />
      <TrainComponent />
      <NocostComponent />
      <CorpComponent />
      <Onclk />
      <Hire />

      <Call />

      {/* <SkillSafariNavigationBar /> */}
      {/* <Main_content /> */}
    </>
  );
};

export default HireFrmUs;
