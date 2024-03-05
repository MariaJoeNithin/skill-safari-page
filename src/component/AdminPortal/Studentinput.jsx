import React, { useState } from "react";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { DiBootstrap } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { DOCUMENTS, STORAGE } from "../../firebase/config";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const Studentinput = () => {
  const skills = [
    { id: "Html", name: "Html", icon: TiHtml5 },
    { id: "Css", name: "Css", icon: IoLogoCss3 },
    {
      id: "Bootstrap",
      name: "Bootstrap",
      icon: DiBootstrap,
    },
    {
      id: "Javascript",
      name: "Javascript",
      icon: RiJavascriptFill,
    },
    {
      id: "Tailwind",
      name: "Tailwind",
      icon: SiTailwindcss,
    },
    {
      id: "ReactJs",
      name: "ReactJs",
      icon: FaReact,
    },
    {
      id: "NodeJS",
      name: "NodeJS",
      icon: IoLogoNodejs,
    },
    {
      id: "ExpressJs",
      name: "ExpressJs",
      icon: SiExpress,
    },
    {
      id: "Mongodb",
      name: "Mongodb",
      icon: SiMongodb,
    },
    {
      id: "MaterialUI",
      name: "MaterialUI",
      icon: SiMui,
    },
    {
      id: "Figma",
      name: "Figma",
      icon: IoLogoFigma,
    },
    {
      id: "Github",
      name: "Github",
      icon: FaGithub,
    },
    {
      id: "Firebase",
      name: "Firebase",
      icon: IoLogoFirebase,
    },
    {
      id: "Sass",
      name: "Sass",
      icon: FaSass,
    },
  ];

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Batch: "",
    PhNumber: "",
    YearPassed: "",
    placement: "None",
    companyName: "",
    EnrollId: "",
    linkedinUrl: "",
    technicalSkills: [],
    projects: [{ url: "", description: "" }],
    resumeFile: null,
  });
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resumeFile: file });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { url: "", description: "" }],
    });
  };

  const removeProject = (index) => {
    const updatedProjects = [...formData.projects];
    updatedProjects.splice(index, 1);
    setFormData({ ...formData, projects: updatedProjects });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setFormData({
        ...formData,
        technicalSkills: [...selectedSkills],
        projects: [{ url: "", description: "" }],
        resumeFile: null,
      });
      // firebase code.
      await setDoc(
        doc(STORAGE, "SkillSafari Students Details", formData.Email),
        formData
      );
      window.alert("Submitted!");
    } catch (error) {
      alert("Oops! Somthing is Wrong.");
    }
  };

  // const resumeUpload = async () => {
  //   // console.log(formData.resumeFile);
  //   try {
  //     if (formData?.resumeFile) {
  //       // const StorageAccess = getStorage();
  //       const fileReference = ref(DOCUMENTS, `StudentResume/${formData.Email}`);
  //       await uploadBytes(fileReference, formData?.resumeFile);
  //       // const downloadResumeLink = await getDownloadURL(fileReference);
  //       // await updateDoc(
  //       //   doc(STORAGE, "SkillSafari Students Details", formData?.Email),
  //       //   { resumeFile: downloadResumeLink }
  //       // );
  //     }
  //     alert("resume uploaded :)");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const resumeUpload = async () => {
    console.log(formData.resumeFile.name);
    if (!formData.resumeFile) {
      alert("Please select a file to upload.");
      return;
    }

    const storage = DOCUMENTS;
    const storageRef = ref(storage, `StudentResume/${formData.resumeFile.name}`);
    try {
      // Upload file to Firebase Storage
      await uploadBytes(storageRef, formData?.resumeFile);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert(
        "An error occurred while uploading the file. Please try again later."
      );
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedSkills([...selectedSkills, value]);
    } else {
      setSelectedSkills(selectedSkills.filter((skill) => skill !== value));
    }
  };

  const handleOptionChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, placement: value, companyName: "" }); // Reset company name when changing placement option
  };

  return (
    <div className="mx-2 md:mx-auto max-w-7xl flex flex-col justify-center align-middle my-5 shadow-skillsafari py-5 px-10 rounded-xl">
      <h2 className="md:text-4xl text-2xl text-center my-5 underline font-[600]">
        Student Input Form
      </h2>
      <form>
        <div className="grid items-center md:grid-cols-3 grid-cols-1 my-2">
          <label className="col-span-1 md:text-2xl text-lg">
            Student Enrollment Id:
          </label>
          <input
            type="text"
            placeholder="Enrollment Id"
            className="border col-span-1 md:col-span-2 rounded p-2"
            value={formData.EnrollId}
            onChange={(e) =>
              setFormData({ ...formData, EnrollId: e.target.value })
            }
          />
        </div>
        <div className="grid items-center md:grid-cols-3 grid-cols-1 my-2">
          <label className="col-span-1 md:text-2xl text-lg">
            Student Name:
          </label>
          <input
            type="text"
            placeholder="Student Name"
            className="border col-span-1 md:col-span-2 rounded p-2"
            value={formData.Name}
            onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
          />
        </div>
        <div className="grid items-center md:grid-cols-3 grid-cols-1 my-2">
          <label className="col-span-1 md:text-2xl text-lg">
            Student Email:
          </label>
          <input
            type="text"
            placeholder="Student Email"
            className="border col-span-1 md:col-span-2 rounded p-2"
            value={formData.Email}
            onChange={(e) =>
              setFormData({ ...formData, Email: e.target.value })
            }
          />
        </div>
        <div className="grid items-center md:grid-cols-3 grid-cols-1 my-2">
          <label className="col-span-1 md:text-2xl text-lg">
            Student LinkedIn URL:
          </label>
          <input
            type="url"
            placeholder="Student LinkedIn URL"
            className="border col-span-1 md:col-span-2 rounded p-2"
            value={formData.linkedinUrl}
            onChange={(e) =>
              setFormData({ ...formData, linkedinUrl: e.target.value })
            }
          />
        </div>
        <div className="grid items-center md:grid-cols-3 grid-cols-1 my-2">
          <label className="col-span-1 md:text-2xl text-lg">
            Year of Passed Out:
          </label>
          <input
            type="url"
            placeholder="Year"
            className="border col-span-1 md:col-span-2 rounded p-2"
            value={formData.YearPassed}
            onChange={(e) =>
              setFormData({ ...formData, YearPassed: e.target.value })
            }
          />
        </div>
        <div className="grid items-center md:grid-cols-3 grid-cols-1 my-2">
          <label className="col-span-1 md:text-2xl text-lg">
            Student Batch:
          </label>
          <input
            type="text"
            placeholder="Batch"
            className="border col-span-1 md:col-span-2 rounded p-2"
            value={formData.Batch}
            onChange={(e) =>
              setFormData({ ...formData, Batch: e.target.value })
            }
          />
        </div>
        <div className="grid items-center md:grid-cols-3 grid-cols-1 my-2">
          <label className="col-span-1 md:text-2xl text-lg ">
            Student Phone Number:
          </label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="border col-span-1 md:col-span-2 rounded p-2"
            value={formData.PhNumber}
            onChange={(e) =>
              setFormData({ ...formData, PhNumber: e.target.value })
            }
          />
        </div>
        <div className="Tec">
          <div className="md:text-2xl text-lg">TechnicalSkills : </div>
          <div className="flex flex-wrap gap-5">
            {skills.map((skill) => (
              <label
                key={skill.id}
                className="flex items-center gap-0 cursor-pointer"
                htmlFor={skill.id}
              >
                <p
                  className={`
                    ${
                      selectedSkills.some((target) => target === skill.id)
                        ? " bg-red-500 text-white"
                        : "bg-zinc-200 opacity-50"
                    }
                      flex items-center gap-2 px-3 py-1 rounded-full
                  `}
                  title={skill.name}
                >
                  <span
                    className={`  ${
                      selectedSkills.some((target) => target === skill.id)
                        ? "text-white"
                        : " "
                    }  `}
                  >
                    <skill.icon className="text-2xl" />
                  </span>
                  {skill.name}
                </p>
                <input
                  type="checkbox"
                  id={skill.id}
                  value={skill.id}
                  className="opacity-0"
                  onChange={handleCheckboxChange}
                />
              </label>
            ))}
          </div>
        </div>

        <div className="Project">
          <label className="md:text-2xl text-lg">Projects:</label>
          {formData.projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-row flex-wrap gap-2 w-full my-2"
            >
              <input
                type="text"
                value={project.url}
                className="border col-span-1 md:col-span-2 rounded p-2"
                onChange={(e) => {
                  const updatedProjects = [...formData.projects];
                  updatedProjects[index].url = e.target.value;
                  setFormData({ ...formData, projects: updatedProjects });
                }}
                placeholder="Project URL"
              />
              <input
                value={project.description}
                type="text"
                className="border col-span-1 md:col-span-2 rounded p-2"
                onChange={(e) => {
                  const updatedProjects = [...formData.projects];
                  updatedProjects[index].description = e.target.value;
                  setFormData({ ...formData, projects: updatedProjects });
                }}
                placeholder="Project Name"
              />
              <button
                type="button"
                className="button bg-red-600 text-white px-5 py-1 rounded tracking-wider"
                onClick={() => removeProject(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addProject}
            className="button bg-red-600 text-white px-5 py-1 rounded tracking-wider"
          >
            Add Project
          </button>
        </div>

        <div className="my-5 Resume flex flex-row flex-wrap">
          <label className=" cursor-pointer bg-red-600 text-white px-5 py-1 rounded tracking-wider">
            AddResume
            <input
              type="file"
              onChange={handleFileChange}
              className=" bg-white w-[90px] m-1"
            />
          </label>
          {formData.resumeFile ? (
            <p>File selected: {formData.resumeFile.name}</p>
          ) : (
            <p>No file added</p>
          )}
        </div>

        <div className="mb-5 placement">
          <h1 className="md:text-2xl text-lg ">Placement Details : </h1>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex gap-4 flex-wrap items-center">
              <label
                className={`md:text-xl border rounded-full p-2 ${
                  formData.placement === "Placement"
                    ? "  bg-red-500 text-white"
                    : " opacity-45 bg-gray-300 text-gray-900"
                }`}
              >
                <input
                  className="hidden"
                  type="radio"
                  value="Placement"
                  checked={formData.placement === "Placement"}
                  onChange={handleOptionChange}
                />
                Placement
              </label>

              <label
                className={`md:text-xl border rounded-full p-2 ${
                  formData.placement === "Internship"
                    ? "  bg-red-500 text-white"
                    : " opacity-45 bg-gray-300 text-gray-900"
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  value="Internship"
                  checked={formData.placement === "Internship"}
                  onChange={handleOptionChange}
                />
                Internship
              </label>

              <label
                className={`md:text-xl border rounded-full p-2 ${
                  formData.placement === "None"
                    ? "  bg-red-500 text-white"
                    : " opacity-45 bg-gray-300 text-gray-900"
                }`}
              >
                <input
                  className="hidden"
                  type="radio"
                  value="None"
                  checked={formData.placement === "None"}
                  onChange={handleOptionChange}
                />
                None
              </label>
            </div>
            {["Placement", "Internship"].includes(formData.placement) && (
              <div className="grid md:grid-cols-3 grid-cols-1 transition-all duration-500 items-center">
                <label className="col-span-1 md:text-2xl text-lg">
                  Company Name:
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border col-span-1 md:col-span-2 rounded p-2"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                />
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          className="bg-red-600 text-white px-5 py-1 rounded tracking-wider mx-auto"
          // onClick={()=>{handleSubmit();resumeUpload()}}
          onClick={() => resumeUpload()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Studentinput;
