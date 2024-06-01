import React from "react";

const Input = ({
  id,
  type,
  title,
  value,
  setter,
}: {
  id: "name" | "email" | "subject" | "content";
  title: string;
  type: string;
  value: string;
  setter: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      subject: string;
      content: string;
    }>
  >;
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    id: "name" | "email" | "subject" | "content"
  ) => {
    setter((current) => {
      current[id] = e.target.value;
      // console.log("current", current);
      return current;
    });
  };
  return (
    <div className="w-full flex flex-col gap-1 md:gap-2">
      <p className="text-xs md:text-sm">{title}</p>
      {type === "input" && (
        <input
          style={{
            padding: "6px",
            background: "black",
            borderRadius: "6px",
            boxShadow: "0 2px 6px 0 rgba(255,255,255,0.2)",
          }}
          type="text"
          className="text-xs md:text-sm"
          //   value={value}
          placeholder={`Enter your ${id}`}
          onChange={(e) => handleInputChange(e, id)}
          required
        />
      )}
      {type === "textarea" && (
        <textarea
          style={{
            padding: "6px",
            background: "black",
            borderRadius: "6px",
            boxShadow: "0 2px 6px 0 rgba(255,255,255,0.2)",
          }}
          wrap={"hard"}
          //   value={value}
          className="text-xs md:text-sm"
          placeholder={`Enter your ${id}`}
          onChange={(e) => handleInputChange(e, id)}
          rows={6}
          required
        />
      )}
    </div>
  );
};

export default Input;
