"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Project = {
  slug: string;
  title: string;
  description: string;
};

const CaseStudy = () => {
  const { slug } = useParams() as { slug: string };
  const [projectData, setProjectData] = useState<Project | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchProjectData = async () => {
        try {
          const res = await fetch(
            `/api/getAllProjectsData?projectName=${slug}`
          );
          if (res.ok) {
            const data: Project = await res.json();
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
