import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import './popup.css';
import { usePopupBtn } from "../Globalbtn";
import { STORAGE } from '../firebase/config';
import { doc, setDoc } from "firebase/firestore";

const Popup = ({ pageName }) => {

  const {togglePopup} = usePopupBtn();

  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    mobileNumber: "",
    selectedOption: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numError, setNumError] = useState(false);
  const [selectError, setSelectError] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (
  //     formData.fullName === "" ||
  //     formData.emailAddress === "" ||
  //     formData.mobileNumber === "" ||
  //     formData.selectedOption === ""
  //   ) {
  //     setNameError(formData.fullName === "");
  //     setEmailError(formData.emailAddress === "");
  //     setNumError(formData.mobileNumber === "");
  //     setSelectError(formData.selectedOption === "");
  //     console.log("error part");
  //     return;
  //   } else {
  //     const UserInfo = {
  //       Name : formData.fullName,
  //       Email : formData.fullName,
  //       MobileNumber : formData.fullName,
  //       EnqiuryType : formData.fullName,
  //     }
  //     setDoc(doc(STORAGE, "skillsafari course request",formData.emailAddress), UserInfo);
  //     console.log("Form submitted:", formData);




  //   }
    

  //   if (
  //     !/\S+@\S+\.\S+/.test(formData.emailAddress) ||
  //     !/^[0-9]{10}$/.test(formData.mobileNumber)
  //   ) {
  //     setEmailError(!/\S+@\S+\.\S+/.test(formData.emailAddress));
  //     setNumError(!/^[0-9]{10}$/.test(formData.mobileNumber));
  //     return;
  //   }

  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (
      formData.fullName === "" ||
      formData.emailAddress === "" ||
      formData.mobileNumber === "" ||
      formData.selectedOption === ""
    ) {
      // Error handling logic
      return;
    }
  
    try {
      const UserInfo = {
        Name: formData.fullName,
        Email: formData.emailAddress,
        MobileNumber: formData.mobileNumber,
        EnqiuryType: formData.selectedOption,
      };
  
      await setDoc(
        doc(STORAGE, "skillsafari course request", formData.emailAddress),
        UserInfo
      );
  
      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  
  return (
    <div className={` grid place-items-center fixed z-[10000] w-[100%] h-[100vh] bg-black top-0 bg-opacity-60`}>
      <div className=" w-[100%] max-w-[450px] min-w-[220px] z-[10000] bg-violet-950 p-4 rounded-2xl relative anime-uptodown " >
        <button className="absolute right-7 top-7 flex items-center  p-2 rounded-full bg-red-200 text-red-600" onClick={() => togglePopup()}><IoMdClose className="text-[1.5rem]" /></button>
        <div className="w-full mx-auto p-8 rounded-2xl shadow-md border z-[10000] bg-white">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Want to know More?
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-lg font-normal mb-2"
              >
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Your Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-4 border rounded-md focus:outline-none text-black focus:border-blue-500"
              />
              {nameError ? (
                <p className="text-red-500 text-sm mt-1">Name Is Required.</p>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="emailAddress"
                className="block text-black text-lg font-normal mb-2"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                placeholder="Enter Your Email ID"
                onChange={handleChange}
                className="w-full px-4 py-4 border rounded-md text-black focus:outline-none focus:border-blue-500"
              />
              {emailError ? (
                <p className="text-red-500 text-sm mt-1">
                  Valid Email is Required.
                </p>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="mobileNumber"
                className="block text-black text-lg font-normal mb-2"
              >
                Mobile Number*
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                placeholder="Enter Your Mobile Number"
                onChange={handleChange}
                className="w-full px-4 py-4 border rounded-md text-black focus:outline-none focus:border-blue-500"
                // pattern="[0-9]{10}"
              />
              {numError ? (
                <p className="text-red-500 text-sm mt-1">
                  Please enter a valid mobile number.
                </p>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                htmlFor="queryFor"
                className="block text-black text-lg font-normal mb-2"
              >
                Enquire About*
              </label>
              <select
                id="queryFor"
                name="selectedOption"
                value={formData.selectedOption}
                onChange={handleChange}
                className="w-full px-4 py-4 border rounded-md text-black focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="FullStack Developer">FullStack Developer</option>
                <option value="Data Analyst">Data Analyst</option>
              </select>
              {selectError ? (
                <p className="text-red-500 text-sm mt-1">
                  Please Select a Valid Option.
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-[#F3274F] text-white py-4 text-lg rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
