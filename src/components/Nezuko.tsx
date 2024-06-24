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
    <div className="relative w-auto md:absolute md:bottom-2 md:left-14 p-sm pb-0 md:p-md md:pb-0 lg:p-lg lg:pb-0 mt-12 z-[1]">
      <div className="relative z-[99]">
        <div>
          <Link
            href="https://www.linkedin.com/in/pragati-k-1b6b82187/"
            className="absolute top-14 left-[-48px] cursor-pointer z-[99]"
          >
            <Image
              className="pointer-events-none"
              src={Linkedin}
              alt={"ln"}
              width={36}
              height={36}
            />
          </Link>
          <Link
            href="https://Behance.com/pragatik1"
            className="absolute top-[-48px] left-[35%] cursor-pointer z-[99]"
          >
            <Image
              className="border-2 border-white rounded-full p-1 pointer-events-none"
              src={Behance}
              alt={"ln"}
              width={36}
              height={36}
            />
          </Link>
          <Link
            href="https://instagram.com/pragati.__jain"
            className="absolute top-14 right-[-48px] cursor-pointer z-[99]"
          >
            <Image
              className="pointer-events-none"
              src={Instagram}
              alt={"ln"}
              width={36}
              height={36}
            />
          </Link>
        </div>
        <div>
          <Image
            className="absolute top-[63px] left-[48px] z-10 pointer-events-none"
            id="eye-left"
            style={eyeballsStyle}
            width={36}
            height={36}
            src={NezukoEyes}
            alt="Nezuko"
          />
          <Image
            className="absolute top-[63px] left-[92px] z-10 pointer-events-none"
            id="eye-right"
            style={eyeballsStyle}
            width={36}
            height={36}
            src={NezukoEyes}
            alt="Nezuko"
          />
        </div>
        <Image
          className="relative z-20 pointer-events-none"
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
