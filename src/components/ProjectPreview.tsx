import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

type ProjectPreviewParams = {
  images: string[];
  theme: string;
  colors: {
    primary: string;
    secondary: string;
  };
};

const ProjectPreview = ({ images, theme, colors }: ProjectPreviewParams) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [animate, setAnimate] = useState(false);
  const { primary, secondary } = colors;
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    if (theme === "dark") {
      setColor("white");
    } else {
      setColor(`${primary}`);
    }
  }, [theme, primary]);

  function handlePrevClick(): void {
    setIsNext(false);
    setAnimate(true);
    setTimeout(() => {
      if (selectedImage - 1 < 0) setSelectedImage(images.length - 1);
      else setSelectedImage(selectedImage - 1);
      setAnimate(false);
    }, 300); // Duration of the animation
  }

  function handleNextClick(): void {
    setIsNext(true);
    setAnimate(true);
    setTimeout(() => {
      if (selectedImage + 1 === images.length) setSelectedImage(0);
      else setSelectedImage(selectedImage + 1);
      setAnimate(false);
    }, 300); // Duration of the animation
  }

  return (
    <div
      className={`relative w-full border-[1px] h-[440px] flex items-center justify-center border-white rounded-lg mb-4 pr-3 pl-3 pt-4 pb-1 overflow-hidden`}
    >
      <div className="rounded-t-lg h-[420px] overflow-x-scroll relative">
        <Image
          className={`object-cover transition-transform duration-300 ${
            animate ? (isNext ? "translate-x-full" : "-translate-x-full") : ""
          }`}
          src={images[selectedImage]}
          height={1024}
          width={1024}
          alt={"bg-large"}
          key={selectedImage} // Force re-render to trigger animation
        />
      </div>
      {/* prev - next icons */}
      <div
        style={{
          borderColor: color,
          color: color,
        }}
        className={`absolute z-[10] left-0 ml-4 cursor-pointer h-6 w-6 text-md rounded-full border-2 flex justify-center items-center p-1 overflow-hidden duration-300`}
        onClick={() => handlePrevClick()}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = color;
          e.currentTarget.style.borderColor = secondary;
          e.currentTarget.style.color = secondary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.borderColor = color;
          e.currentTarget.style.color = color;
        }}
      >
        <IoMdArrowBack />
      </div>
      <div
        style={{ borderColor: color, color: color }}
        className={`absolute z-[10] right-0 mr-4 cursor-pointer h-6 w-6 text-md rounded-full border-2 flex justify-center p-1 items-center overflow-hidden duration-300`}
        onClick={() => handleNextClick()}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = color;
          e.currentTarget.style.borderColor = secondary;
          e.currentTarget.style.color = secondary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.borderColor = color;
          e.currentTarget.style.color = color;
        }}
      >
        <IoMdArrowForward />
      </div>
    </div>
  );
};

export default ProjectPreview;
