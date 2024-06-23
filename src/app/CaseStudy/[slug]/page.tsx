"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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

const CaseStudy = () => {
  const { slug } = useParams() as { slug: string };
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchProjectData = async () => {
        try {
          const res = await fetch(
            `/api/getAllProjectsData?projectName=${slug}`
          );
          if (res.ok) {
            const data: ProjectData = await res.json();
            setProjectData(data);
          } else {
            console.error("Project not found");
          }
        } catch (error) {
          console.error("Failed to fetch project data:", error);
        }
      };

      fetchProjectData();
    }
  }, [slug]);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col ml-6 mr-6 md:ml-0 md:mr-0 min-h-screen items-center p-sm pt-16 md:p-md lg:p-lg select-none">
      <h1>{projectData.name}</h1>

      <div className="w-full flex gap-4 items-center justify-between">
        <img src={projectData.links.preview[0]} alt={projectData.name} />
      </div>
    </div>
  );
};

export default CaseStudy;
