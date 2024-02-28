// import React, { useState, useEffect } from "react";
// import { TiHtml5 } from "react-icons/ti";
// import { IoLogoCss3 } from "react-icons/io5";
// import { DiBootstrap } from "react-icons/di";
// import { RiJavascriptFill } from "react-icons/ri";
// import { SiTailwindcss } from "react-icons/si";
// import { FaReact } from "react-icons/fa6";
// import { IoLogoNodejs } from "react-icons/io5";
// import { SiExpress } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
// import { SiMui } from "react-icons/si";
// import { IoLogoFigma } from "react-icons/io5";
// import { FaGithub } from "react-icons/fa6";
// import { IoLogoFirebase } from "react-icons/io5";
// import { FaSass } from "react-icons/fa";

// const Studentinput = () => {
//   const skills = [
//     { id: "Html", name: "Html", icon: TiHtml5 },
//     { id: "Css", name: "Css", icon: IoLogoCss3 },
//     {
//       id: "Bootstrap",
//       name: "Bootstrap",
//       icon: DiBootstrap,
//     },
//     {
//       id: "Javascript",
//       name: "Javascript",
//       icon: RiJavascriptFill,
//     },
//     {
//       id: "Tailwind",
//       name: "Tailwind",
//       icon: SiTailwindcss,
//     },
//     {
//       id: "ReactJs",
//       name: "ReactJs",
//       icon: FaReact,
//     },
//     {
//       id: "NodeJS",
//       name: "NodeJS",
//       icon: IoLogoNodejs,
//     },
//     {
//       id: "ExpressJs",
//       name: "ExpressJs",
//       icon: SiExpress,
//     },
//     {
//       id: "Mongodb",
//       name: "Mongodb",
//       icon: SiMongodb,
//     },
//     {
//       id: "MaterialUI",
//       name: "MaterialUI",
//       icon: SiMui,
//     },
//     {
//       id: "Figma",
//       name: "Figma",
//       icon: IoLogoFigma,
//     },
//     {
//       id: "Github",
//       name: "Github",
//       icon: FaGithub,
//     },
//     {
//       id: "Firebase",
//       name: "Firebase",
//       icon: IoLogoFirebase,
//     },
//     {
//       id: "Sass",
//       name: "Sass",
//       icon: FaSass,
//     },
//   ];

//   const [formData, setFormData] = useState({
//     linkedinUrl: "",
//     technicalSkills: [],
//     projects: [{ url: "", description: "" }],
//     resumeFile: null,
//   });
//   const [selectedSkills, setSelectedSkills] = useState([]);

//   // Function to handle file input change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, resumeFile: file });
//   };

//   // Function to handle adding a project
//   const addProject = () => {
//     setFormData({
//       ...formData,
//       projects: [...formData.projects, { url: "", description: "" }],
//     });
//   };

//   // Function to handle removing a project
//   const removeProject = (index) => {
//     const updatedProjects = [...formData.projects];
//     updatedProjects.splice(index, 1);
//     setFormData({ ...formData, projects: updatedProjects });
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormData({
//       linkedinUrl: "",
//       technicalSkills: [selectedSkills],
//       projects: [{ url: "", description: "" }],
//       resumeFile: null,
//       inputValue: "",
//     });

//     console.log(formData);
//     window.alert("submmited!");
//   };

//   // const handleSaveOption = (inputValue) => {
//   //   inputValue.preventDefault();
//   //   setTechnicalSkills([...technicalSkills, inputValue]);
//   // };

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setSelectedSkills([...selectedSkills, value]);
//     } else {
//       setSelectedSkills(selectedSkills.filter((skill) => skill !== value));
//     }
//   };

//   // useEffect(() => {
//   //   console.log(selectedSkills);
//   // }, [selectedSkills]);

//   // const handleInputChange = (e) => {
//   //   const { value } = e.target;
//   //   setFormData({ ...formData, inputValue: value });
//   // };

//   return (
//     <div>
//       <h2>Student Input Form</h2>
//       <form>
//         <div>
//           <label>Student LinkedIn URL:</label>
//           <input
//             type="url"
//             className="border"
//             value={formData.linkedinUrl}
//             onChange={(e) =>
//               setFormData({ ...formData, linkedinUrl: e.target.value })
//             }
//           />
//         </div>
//         <div className="">
//           <div className="">TechnicalSkills</div>
//           <div className="flex flex-wrap gap-5">
//             {skills.map((skill) => (
//               <label
//                 key={skill.id}
//                 className="flex items-center gap-0 cursor-pointer"
//                 htmlFor={skill.id}
//               >
//                 <p
//                   className={`
//                   ${
//                     selectedSkills.some((target) => target === skill.id)
//                       ? " bg-red-500 text-white"
//                       : "bg-zinc-200 opacity-50"
//                   }
//                     flex items-center gap-2 px-3 py-1 rounded-full
//                 `}
//                   title={skill.name}
//                 >
//                   <span
//                     className={`  ${
//                       selectedSkills.some((target) => target === skill.id)
//                         ? "text-white"
//                         : " "
//                     }  `}
//                   >
//                     <skill.icon className="text-2xl" />
//                   </span>
//                   {skill.name}
//                 </p>
//                 <input
//                   type="checkbox"
//                   id={skill.id}
//                   value={skill.id}
//                   className="opacity-0"
//                   onChange={handleCheckboxChange}
//                 />
//               </label>
//             ))}
//           </div>
//         </div>
//         <div>
//           <label>Projects:</label>
//           {formData.projects.map((project, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 value={project.url}
//                 className="border"
//                 onChange={(e) => {
//                   const updatedProjects = [...formData.projects];
//                   updatedProjects[index].url = e.target.value;
//                   setFormData({ ...formData, projects: updatedProjects });
//                 }}
//                 placeholder="Project URL"
//               />
//               <input
//                 value={project.description}
//                 type="text"
//                 className="border"
//                 onChange={(e) => {
//                   const updatedProjects = [...formData.projects];
//                   updatedProjects[index].description = e.target.value;
//                   setFormData({ ...formData, projects: updatedProjects });
//                 }}
//                 placeholder="Project Name"
//               />
//               <button type="button" onClick={() => removeProject(index)}>
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button type="button" onClick={addProject}>
//             Add Project
//           </button>
//         </div>
//         <div>
//           <label className=" cursor-pointer">
//             AddResume
//             <input
//               type="file"
//               onChange={handleFileChange}
//               className=" hidden"
//             />
//           </label>
//         </div>
//         <button
//           type="submit"
//           className="bg-red-600 text-white px-5 py-1 rounded tracking-wider"
//           onClick={() => handleSubmit()}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Studentinput;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      technicalSkills: [], // Fixing this line to properly set technicalSkills
      projects: [{ url: "", description: "" }],
      resumeFile: null,
    });

    console.log(formData);
    window.alert("Submitted!");
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedSkills([...selectedSkills, value]);
    } else {
      setSelectedSkills(selectedSkills.filter((skill) => skill !== value));
    }
  };

  return (
    <div>
      <h2>Student Input Form</h2>
      <form>
        <div>
          <label>Student LinkedIn URL:</label>
          <input
            type="url"
            className="border"
            value={formData.linkedinUrl}
            onChange={(e) =>
              setFormData({ ...formData, linkedinUrl: e.target.value })
            }
          />
        </div>
        <div className="">
          <div className="">TechnicalSkills</div>
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
                    <skill.icon className="text-2xl" /> {/* Fix this line */}
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
        <div>
          <label>Projects:</label>
          {formData.projects.map((project, index) => (
            <div key={index}>
              <input
                type="text"
                value={project.url}
                className="border"
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
                className="border"
                onChange={(e) => {
                  const updatedProjects = [...formData.projects];
                  updatedProjects[index].description = e.target.value;
                  setFormData({ ...formData, projects: updatedProjects });
                }}
                placeholder="Project Name"
              />
              <button type="button" onClick={() => removeProject(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addProject}>
            Add Project
          </button>
        </div>
        <div>
          <label className=" cursor-pointer">
            AddResume
            <input
              type="file"
              onChange={handleFileChange}
              className=" hidden"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-red-600 text-white px-5 py-1 rounded tracking-wider"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Studentinput;
