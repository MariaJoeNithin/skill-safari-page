import { collection, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { STORAGE } from "../../../firebase/config";

function StudentsInformation() {
  const [studentDetails, setStudentDetails] = useState([]);

  useEffect(() => {
    const fetchedUsers = async () => {
      const students = await getDocs(
        collection(STORAGE, "SkillSafari Students Details")
      );
      const studentsData = students.docs.map((target) => ({
        id: target.id,
        ...target.data(),
      }));

      setStudentDetails(studentsData);
      console.log(studentsData);
    };

    fetchedUsers();
  }, []);
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
      {studentDetails &&
        studentDetails.map((target, index) => (
          <div key={index} className="p-3 border rounded-xl hover:shadow-xl">
            <div className=" font-[800] text-[2rem]">{target.Name}</div>
            <div className="font-[600] text">Full Stack Developer</div>
            <div className=" text-zinc-500">{target.Email}</div>
            <div className="flex items-center justify-normal overflow-x-scroll c-srcoll p-2  w-full cursor-pointer">
              {target.technicalSkills.map((skill, index) => (
                <div
                  className="m-1 border text-sm shadow-md px-2 py-1 rounded bg-red-600 text-white"
                  key={index}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default StudentsInformation;
