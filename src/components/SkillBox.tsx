import React from "react";

interface boxInterface {
  keyParam: number | string;
  skill: string;
}

const SkillBox = ({ keyParam, skill }: boxInterface) => {
  return (
    <div
      key={keyParam}
      className="p-[4px_8px] md:p-[4px_16px] md:mt-2 bg-primary/30 text-primary rounded-[16px] text-xxs md:text-xs hover:text-bgCol hover:bg-primary duration-500"
    >
      <p>{skill}</p>
    </div>
  );
};

export default SkillBox;
