import { collection, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { STORAGE } from "../../../firebase/config";
import { FaLinkedinIn } from "react-icons/fa6";

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
    <div className="container mx-auto mt-8 max-w-screen-xl p-5">
      <div className="grid w-full xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        {studentDetails &&
          studentDetails.map((target, index) => (
            <div
              key={index}
              className="p-3 border rounded-xl hover:shadow-xl relative bg-zinc-200"
            >
              <a
                className="linkedIn absolute top-4 right-4 p-1 text-white bg-blue-600 rounded-xl overflow-hidden"
                href={`${target.linkedinUrl}`}
              >
                <FaLinkedinIn className=" text-2xl " />
              </a>
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
              <h1 className="text-zinc-500">
                {target.placement === "None" ? (
                  `${target.placement}`
                ) : (
                  <div>{`${target.placement} at ${target.companyName}`}</div>
                )}
              </h1>
              <a
                className="inline-block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 md:w-full text-center mx-auto "
                href={target.resumeFile}
                download
              >
                Download Resume
              </a>
              <div className="flex justify-normal flex-col w-full cursor-pointer">
                <h1 className="text-zinc-500">Projects :</h1>
                {target.projects.map((pro, index) => (
                  <a
                    className=" inline-block py-2 border px-2 text-sm font-medium rounded-md bg-red-500 hover:bg-red-600 transition-all duration-300 text-white "
                    key={index}
                    href={pro.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {index + 1} .{pro.description}
                  </a>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default StudentsInformation;
