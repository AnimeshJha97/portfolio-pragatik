"use client";
import React, { useEffect, useState } from "react";
import SkillBox from "@/components/SkillBox";

interface ExperienceData {
  name: string;
  year: {
    from: string;
    to: string;
  };
  subTitle: string;
  points: string[];
  skills: string[];
}

const Experience = () => {
  const [workData, setWorkData] = useState<ExperienceData[]>([]);
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
    <div className="ml-4 md:ml-10 md:mb-16 pt-14 md:pt-4 flex flex-col gap-6 lg:gap-10 text-xs md:text-sm h-full md:overflow-x-hidden pb-[160px] !z-[99]">
      {workData &&
        workData?.map((work, i) => (
          <div key={work.name}>
            <div className="flex flex-col xl:flex-row items-start xl:gap-8 gap-1">
              {/* duration */}
              <div className="text-xs xl:text-base flex gap-2 items-center">
                {work.year.from} <div className="h-[1px] w-4 bg-textLight" />{" "}
                {work.year.to}
              </div>
              {/* content */}
              <div className="flex flex-col gap-2">
                {/* company title */}
                <div>
                  <p className="text-base xl:text-md text-textWhite font-bold">
                    {work.name}
                  </p>
                  <p className="text-xs xl:text-base text-textWhite">
                    {work.subTitle}
                  </p>
                </div>
                {/* points */}
                <div className="flex flex-col gap-2">
                  {work.points.map((point, i: number) => (
                    <div
                      key={i}
                      className="flex gap-4 items-center md:items-start"
                    >
                      <div className="w-1 h-1 md:w-2 md:h-2 md:mt-[9px] bg-textLight rounded-full" />
                      <p className="flex-1 text-xs md:text-sm">{point}</p>
                    </div>
                  ))}
                </div>
                {/* skills */}
                <div className="flex flex-wrap items-center gap-3">
                  {work.skills.map((skill, i) => (
                    <SkillBox
                      key={i}
                      keyParam={i}
                      skill={skill}
                      isButton={false}
                    />
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
