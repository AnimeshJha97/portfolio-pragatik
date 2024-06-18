import React from "react";
import SkillBox from "./SkillBox";
import ShareIcon from "@/assets/share-icon.svg";
import Myhraki from "@/assets/projects/Myhraki.png";
import Image from "next/image";
import { GoGlobe } from "react-icons/go";
import Link from "next/link";

const Projects = () => {
  const projectData = [
    {
      id: "project1",
      name: "Myhraki",
      company: "LMG8",
      links: {
        webLink: "https://www.myhraki.com/",
        logo: "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718691145/myhraki-logo_ezvqr5.png",
        preview:
          "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718691149/Myhraki_ftg9xr.png",
      },
      description: "Small business authentic store website",
      projectType: "End-to-end responsive website + branding",
      roles: "UX/UI designer",
      industryType: "E-commerce",
    },
  ];
  return (
    <div className="ml-4 md:ml-10 md:mb-20 flex flex-col items-center gap-6 lg:gap-10 text-xs md:text-sm h-full md:overflow-x-hidden md:pb-[160px]">
      {projectData.map((project, i) => (
        <div
          key={project.id}
          className="flex flex-col gap-2 rounded-lg mr-2 w-[90vw] lg:w-[540px]"
        >
          <div className="w-full border-[1px] h-[540px] flex border-white rounded-lg mb-4 pr-3 pl-3 pt-3 pb-1 overflow-hidden">
            <div className="rounded-t-lg h-full overflow-scroll">
              <Image
                className="object-contain"
                src={Myhraki}
                height={624}
                width={1024}
                alt={"bg-large"}
              />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <a
              href={project.links.webLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="cursor-pointer"
                src={project.links.logo}
                height={160}
                width={160}
                alt={"share-icon"}
              />
            </a>
            {/* {project.links.behanceLink && (
              <a
                href={project.links.behanceLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="h-5 w-5 cursor-pointer"
                  src={ShareIcon}
                  height={100}
                  width={100}
                  alt={"share-icon"}
                />
              </a>
            )}
            {project.links.webLink && (
              <a
                href={project.links.webLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoGlobe className="text-[18px]  text-textWhite cursor-pointer" />
              </a>
            )} */}
          </div>
          <p className="text-md font-semibold">{project.description}</p>
          <div className="flex flex-col gap-2 mt-4">
            <p>Project Type: {project.projectType}</p>
            <p>Role: {project.roles}</p>
            <p>Industry: {project.industryType}</p>
          </div>

          {projectData.length - 1 > i && (
            <div className="w-full h-[1px] bg-textLight opacity-40 mt-6 lg:mt-10" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
