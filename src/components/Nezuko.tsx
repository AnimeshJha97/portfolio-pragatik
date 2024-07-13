"use client";
import NezukoBody from "@/assets/nezuko-body.png";
import NezukoEyes from "@/assets/eyes.png";
import Linkedin from "@/assets/linkedin-icon.svg";
import Behance from "@/assets/behance-icon.svg";
import Instagram from "@/assets/instagram-icon.svg";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nezuko = ({ x, y }: { x: number; y: number }) => {
  const [eyeballsPosition, setEyeballsPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const calculateEyeballsPosition = () => {
      const eyesContainer = document.getElementById("eyes-container");
      if (eyesContainer) {
        const { left, top, width, height } =
          eyesContainer.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = x - centerX;
        const deltaY = y - centerY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        const maxOffset = 3; // Adjust this value for the maximum eyeball offset
        const offsetX = Math.cos((angle * Math.PI) / 180) * maxOffset;
        const offsetY = Math.sin((angle * Math.PI) / 180) * maxOffset;

        setEyeballsPosition({ left: offsetX, top: offsetY });
      }
    };

    calculateEyeballsPosition();
  }, [x, y]);

  const eyeballsStyle = {
    transform: `translate(${eyeballsPosition.left}px, ${
      eyeballsPosition.top - 3
    }px)`,
  };
  return (
    <div className="relative flex justify-start items-end lg:absolute md:bottom-2 md:left-14 p-sm md:p-md xl:p-lg xl:pb-0 mt-12 z-[1]">
      <div className="relative z-[99]">
        <div>
          <Link
            href="https://www.linkedin.com/in/pragati-k-1b6b82187/"
            className="absolute top-14 left-[-48px] md:top-14 md:-left-9 xl:top-14 xl:left-[-48px] cursor-pointer z-[99]"
          >
            <Image
              className="pointer-events-none w-9 h-9 md:w-6 md:h-6 xl:w-9 xl:h-9"
              src={Linkedin}
              alt={"ln"}
              width={36}
              height={36}
            />
          </Link>
          <Link
            href="https://Behance.com/pragatik1"
            className="absolute top-[-48px] left-[35%] md:-top-8 md:left-[40%] xl:top-[-48px] xl:left-[35%] cursor-pointer z-[99]"
          >
            <Image
              className="border-2 border-white rounded-full p-1 pointer-events-none w-9 h-9 md:w-6 md:h-6 xl:w-9 xl:h-9"
              src={Behance}
              alt={"ln"}
              width={36}
              height={36}
            />
          </Link>
          <Link
            href="https://instagram.com/pragati.__jain"
            className="absolute top-14 right-[-48px] md:top-14 md:-right-8 xl:top-14 xl:right-[-48px] cursor-pointer z-[99]"
          >
            <Image
              className="pointer-events-none w-9 h-9 md:w-6 md:h-6 xl:w-9 xl:h-9"
              src={Instagram}
              alt={"ln"}
              width={36}
              height={36}
            />
          </Link>
        </div>
        <div>
          <Image
            className="absolute top-[64px] left-[46px] lg:top-[47px] lg:left-[32px] xl:top-[64px] xl:left-[46px] z-10 pointer-events-none w-9 h-10 lg:w-[30px] lg:h-[30px] xl:w-9 xl:h-10"
            id="eye-left"
            style={eyeballsStyle}
            width={36}
            height={36}
            src={NezukoEyes}
            alt="Nezuko"
          />
          <Image
            className="absolute top-[64px] left-[89px] lg:top-[47px] lg:left-[64px] xl:top-[64px] xl:left-[89px] z-10 pointer-events-none w-9 h-10 lg:w-[30px] lg:h-[30px] xl:w-9 xl:h-10"
            id="eye-right"
            style={eyeballsStyle}
            width={36}
            height={36}
            src={NezukoEyes}
            alt="Nezuko"
          />
        </div>
        <Image
          className="relative z-20 pointer-events-none w-44 h-44 lg:w-32 lg:h-32 xl:w-44 xl:h-44"
          id="eyes-container"
          width={180}
          height={180}
          src={NezukoBody}
          alt="Nezuko"
        />
      </div>
    </div>
  );
};

export default Nezuko;
