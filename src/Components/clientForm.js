import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    mobileNumber: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (
      !formData.fullName ||
      !formData.emailAddress ||
      !formData.mobileNumber
    ) {
      setNameError(!formData.fullName);
      setEmailError(!formData.emailAddress);
      setNumError(!formData.mobileNumber);
      return;
    }

    // Additional validation for email and mobile number
    if (
      !/\S+@\S+\.\S+/.test(formData.emailAddress) ||
      !/^[0-9]{10}$/.test(formData.mobileNumber)
    ) {
      setEmailError(!/\S+@\S+\.\S+/.test(formData.emailAddress));
      setNumError(!/^[0-9]{10}$/.test(formData.mobileNumber));
      return;
    }

    // Form is valid, submit it
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-md mx-auto p-8 rounded-2xl shadow-md border">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Request A Callback
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-lg font-normal mb-2">
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
            className="block text-white text-lg font-normal mb-2"
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
            className="block text-white text-lg font-normal mb-2"
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
        <button
          type="submit"
          className="w-full bg-[#F3274F] text-white py-4 text-lg rounded-md hover:bg-blue-600 transition duration-300"
        >
          Request A Callback
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
