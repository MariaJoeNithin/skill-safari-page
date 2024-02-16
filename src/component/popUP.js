import React, { useState } from "react";

const Popup = ({ isOpen, pageName }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.emailAddress ||
      !formData.mobileNumber ||
      !formData.selectError
    ) {
      setNameError(!formData.fullName);
      setEmailError(!formData.emailAddress);
      setNumError(!formData.mobileNumber);
      setSelectError(!formData.selectedOption);
      return;
    }

    if (
      !/\S+@\S+\.\S+/.test(formData.emailAddress) ||
      !/^[0-9]{10}$/.test(formData.mobileNumber)
    ) {
      setEmailError(!/\S+@\S+\.\S+/.test(formData.emailAddress));
      setNumError(!/^[0-9]{10}$/.test(formData.mobileNumber));
      return;
    }

    console.log("Form submitted:", formData);
  };

  return (
    <div className={`${isOpen ? "" : "hidden"} absolute`}>
      <div className="max-w-md min-w-60 bg-violet-950 p-4 rounded-2xl">
        <div className="w-full mx-auto p-8 rounded-2xl shadow-md border bg-white">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Want to know More?
          </h2>
          <form onSubmit={handleSubmit}>
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
