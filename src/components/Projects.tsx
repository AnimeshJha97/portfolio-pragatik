import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProjectPreview from "./ProjectPreview";
import { useRouter } from "next/navigation";
import SkillBox from "./SkillBox";

interface ProjectData {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
  };
  theme: string;
  company: string;
  links: {
    webLink: string;
    logo: string;
    preview: string[];
  };
  description: string;
  projectType: string;
  roles: string;
  industryType: string;
}

const Projects = () => {
  const router = useRouter();
  const [projectsData, setProjectsData] = useState<ProjectData[]>([]);
  useEffect(() => {
    const getAllProjectsData = async () => {
      try {
        const res = await fetch(`/api/getAllProjectsData`);
        if (res.ok) {
          const data = await res.json();
          setProjectsData(data);
        } else {
          console.error("Project not found");
        }
      } catch (error) {
        console.error("Failed to fetch project data:", error);
      }
    };
    getAllProjectsData();
  }, []);

  const handleCaseStudyButtonClick = (slug: string) => {
    router.push(`/CaseStudy/${slug}`);
  };
  return (
    <div className=" md:mb-16 md:pt-4 grid grid-cols-2 gap-6 lg:gap-10 text-xs md:text-sm h-full md:overflow-x-hidden md:pb-[160px] !select-none">
      {projectsData.map((project, i) => (
        <div
          key={project.id}
          className="flex flex-col rounded-lg mr-2 h-[800px] justify-between"
        >
          <div>
            <ProjectPreview
              images={project.links.preview}
              theme={project.theme}
              colors={project.colors}
            />
            <a
              href={project.links.webLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p
                style={{
                  color:
                    project.theme === "light"
                      ? project.colors.primary
                      : project.colors.secondary,
                }}
                className="text-lg font-semibold flex items-center"
              >
                {project.name}
              </p>
            </a>
            <p className="text-md font-semibold mb-3 mt-2">
              {project.description}
            </p>
          </div>
          <div>
            <div className="flex flex-1 flex-col gap-3 justify-between h-[204px]">
              {/* project details */}
              <div className="flex flex-col gap-3">
                <p>Project Type: {project.projectType}</p>
                <p>Role: {project.roles}</p>
                <p>Industry: {project.industryType}</p>
              </div>
              {/* button component */}
              <div>
                <div className="flex gap-4">
                  <button
                    className="border-1 border-white rounded-md w-[200px]"
                    onClick={() => handleCaseStudyButtonClick(project.name)}
                  >
                    <SkillBox skill={"Website"} isButton={true} />
                  </button>
                  {/* <button
                  className="w-[200px]"
                  onClick={() => handleCaseStudyButtonClick(project.name)}
                >
                  <SkillBox skill={"Case Study"} isButton={true} />
                </button> */}
                </div>
                <div className="w-full h-[2px] bg-textLight opacity-30 mt-2 lg:mt-4" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
