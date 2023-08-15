import React from "react";

interface boxInterface {
  key: number | string;
  skill: string;
}

const SkillBox = ({ key, skill }: boxInterface) => {
  return (
    <div
      key={key}
      className="p-[4px_16px] mt-2 bg-primary/30 text-primary rounded-[16px] text-xs hover:text-bgCol hover:bg-primary duration-500 hover:text-bold"
    >
      <p>{skill}</p>
    </div>
  );
};

export default SkillBox;
