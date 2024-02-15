import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main_content from "./component/main_content";
import App from "./App";
import InternProgram from "./component/InternProgram";
import LearningHubPg from "./component/LearningHubPage/LearningHubPg";
import Data_Analyst from "./component/Data_Analyst";
import FullStackPageApp from "./component/FullStackPage/FullStackPageApp";
import Footer from "./component/Footer";
import DataSciencepg from "./component/src datascience/DataSciencepg";
import HireFrmUs from "./component/src hirefrmus/hireFrmUs";
import Webdev from "../src/component/events-webdev/Events-WebDev";
import Msexcel from "./component/events-MSexcel/Events-MsExcel";
import Enroll from "./component/EnrollComponent";
//aravindhan nithin arockiya
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<Main_content />} />
      <Route path="/full-stack-developer-course" element={<FullStackPageApp />} />
      <Route path="/data-science-machine-learning/data-science-machine-learning-experts" element={<DataSciencepg />} />
      <Route path="/learning-hub" element={<LearningHubPg />} />
      <Route path="/hire-from-us" element={<HireFrmUs />} />
      <Route path="/build_a_web_developer_portfolio_to_get_hired_in_2024" element={<Webdev />} />
      <Route path="/Introduction_to_data_analytics_with_MS_Excel" element={<Msexcel />} />
      <Route path="/Web_Development_Internship" element={<InternProgram />} />
      <Route path="/data_analytics_internship" element={<Data_Analyst />} />
      <Route path="/Enroll" element={<Enroll />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
