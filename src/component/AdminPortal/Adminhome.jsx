import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { STORAGE } from "../../firebase/config";

const Adminhome = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(STORAGE, "skillsafari course request")
        );
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudents(data);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };
    fetchData();
  }, [students]);

  return (
    <>
      <h1 className="text-xl">Adminhome</h1>
      <div className="w-[1400px] max-w-[95%] mx-auto grid grid-cols-6">
        <div className="font-[700] text-[18px] border py-1 bg-slate-600 text-white border-slate-500 px-3">
          S.No
        </div>
        <div className="font-[700] text-[18px] border py-1 bg-slate-600 text-white border-slate-500 px-3">
          Name
        </div>
        <div className="font-[700] text-[18px] border py-1 bg-slate-600 text-white border-slate-500 px-3">
          Email
        </div>
        <div className="font-[700] text-[18px] border py-1 bg-slate-600 text-white border-slate-500 px-3">
          Mobile Number
        </div>
        <div className="font-[700] text-[18px] border py-1 bg-slate-600 text-white border-slate-500 px-3">
          Enquiry About
        </div>
        <div className="font-[700] text-[18px] border py-1 bg-slate-600 text-white border-slate-500 px-3">
          Status
        </div>
      </div>
      {students &&
        students?.map((target, index) => (
          <div
            key={index}
            className="w-[1400px] max-w-[95%] mx-auto grid grid-cols-6"
          >
            <div className="font-[400] text-[15px] border py-2 bg-slate-100 text-black border-slate-500 px-3">
              {index + 1}
            </div>
            <div className="font-[400] text-[15px] border py-2 bg-slate-100 text-black border-slate-500 px-3">
              {target?.Name}
            </div>
            <div className="font-[400] text-[15px] border py-2 bg-slate-100 text-black border-slate-500 px-3">
              {target?.Email}
            </div>
            <div className="font-[400] text-[15px] border py-2 bg-slate-100 text-black border-slate-500 px-3">
              {target?.MobileNumber}
            </div>
            <div className="font-[400] text-[15px] border py-2 bg-slate-100 text-black border-slate-500 px-3">
              {target?.EnquiryType}
            </div>
            <div className="font-[400] text-[15px] border py-2 bg-slate-100 text-black border-slate-500 px-3">
              <select value={target?.Status}>
                <option value="Interested">Interested</option>
                <option value="pending">Pending</option>
                <option value="notInterested">Not Interested</option>
                <option value="Joined">Joined</option>
              </select>
            </div>
          </div>
        ))}
    </>
  );
};

export default Adminhome;
