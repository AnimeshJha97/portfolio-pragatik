"use client";
import React, { useEffect, useState } from "react";
import SkillBox from "@/components/SkillBox";

const Experience = () => {
  // const workData = [
  //   {
  //     name: "LMG8",
  //     year: {
  //       from: "2023",
  //       to: "present",
  //     },
  //     subTitle: "Transforming the Future with Technology-driven Solutions",
  //     points: [
  //       "Designed user interfaces for websites and mobile apps, ensuring an intuitive and visually appealing experience.",
  //       "Led UI/UX efforts on client projects, exceeding client expectations.",
  //       "Collaborated with cross-functional teams for design coherence and functionality.",
  //       "Utilized tools such as Figma and Canva, for wireframes, prototypes, and mockups.",
  //       "Translated complex concepts into user-friendly designs that met business objectives.",
  //       "Stayed current with design trends, best practices.",
  //       "Delivered projects on time, implementing responsive design principles for optimal user experience.",
  //       "Received positive client feedback for delivering aesthetically pleasing and user-centric designs.",
  //     ],
  //     skills: [
  //       "UI Design",
  //       "UX Design",
  //       "Figma",
  //       "Canva",
  //       "Generative AI",
  //       "Client Interaction",
  //       "Collaborative Working",
  //     ],
  //   },
  //   {
  //     name: "Womean",
  //     year: {
  //       from: "2022",
  //       to: "2023",
  //     },
  //     subTitle:
  //       "One Stop Solution for everything concerning Women Health & Hygiene.",
  //     points: [
  //       "Developed a user-friendly interface for a women's hygiene website, focusing on accessibility and inclusivity.",
  //       "Implemented intuitive navigation and design elements to enhance the user experience in browsing feminine hygiene products.",
  //       "Crafted a user-friendly interface focusing on accessibility.",
  //       "Incorporated user insights for an intuitive shopping experience.",
  //     ],
  //     skills: ["UI Design", "UX Design", "Figma", "Canva", "Generative AI"],
  //   },
  //   {
  //     name: "Trustt (formerly Novopay)",
  //     year: {
  //       from: "2019",
  //       to: "2022",
  //     },
  //     subTitle: "Technology you can bank on!",
  //     points: [
  //       "Worked on resolution of financial task issued by support team.",
  //       "Performing wallet load reconciliation for IDFC, YBL, etc.",
  //     ],
  //     skills: ["MS Excel", "Re-concillation", "Wallet Loading", "Finance"],
  //   },
  // ];

  const [workData, setWorkData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`/api/getAllWorkExperience`);
        if (res.ok) {
          const data = await res.json();
          setWorkData(data);
        } else {
          console.error("Experience not found");
        }
      } catch (error) {
        console.error("Failed to fetch experience data:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="ml-4 md:ml-10 md:mb-16 md:pt-4 flex flex-col gap-6 lg:gap-10 text-xs md:text-sm h-full md:overflow-x-hidden md:pb-[160px]">
      {workData &&
        workData?.map((work, i) => (
          <div key={work.name}>
            <div className="flex flex-col md:flex-row items-start md:gap-8 gap-1">
              {/* duration */}
              <div className="flex gap-2 items-center pt-2">
                {work.year.from} <div className="h-[1px] w-4 bg-textLight" />{" "}
                {work.year.to}
              </div>
              {/* content */}
              <div className="flex flex-col gap-2">
                {/* company title */}
                <div>
                  <p className="text-sm md:text-md text-textWhite font-bold">
                    {work.name}
                  </p>
                  <p className="text-textWhite">{work.subTitle}</p>
                </div>
                {/* points */}
                <div className="flex flex-col gap-2">
                  {work.points.map((point, i: number) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className=" w-2 h-2 bg-textLight rounded-full" />
                      <p className="flex-1">{point}</p>
                    </div>
                  ))}
                </div>
                {/* skills */}
                <div className="flex flex-wrap items-center gap-3">
                  {work.skills.map((skill, i) => (
                    <SkillBox key={i} keyParam={i} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
            {workData.length - 1 > i && (
              <div className="w-full h-[1px] bg-textLight opacity-40 mt-6 lg:mt-10" />
            )}
          </div>
        ))}
    </div>
  );
};

export default Experience;
