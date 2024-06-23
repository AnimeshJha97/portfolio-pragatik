import React from "react";

interface boxInterface {
  keyParam?: number | string;
  skill: string;
  isButton: boolean;
}

const SkillBox = ({ keyParam, skill, isButton }: boxInterface) => {
  return (
    <div
      key={keyParam ? keyParam : skill}
      className={`${
        isButton ? `p-[8px_16px] ` : `p-[4px_8px] md:p-[4px_16px]`
      } md:mt-2 bg-primary/30 text-primary rounded-[16px] ${
        isButton ? `text-sm font-[400]` : `text-xxs md:text-xs`
      }  hover:text-bgCol hover:bg-primary duration-500`}
    >
      <p>{skill}</p>
    </div>
  );
};

export default SkillBox;
