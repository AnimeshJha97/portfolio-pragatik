"use client";
import SasukeBody from "@/assets/sasuke-body.png";
import SasukeEyes from "@/assets/eyes.png";
import Linkedin from "@/assets/linkedin-icon.svg";
import Github from "@/assets/github-icon.svg";
import Instagram from "@/assets/instagram-icon.svg";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Sasuke = ({ x, y }: { x: number; y: number }) => {
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
    <div className="relative w-auto md:absolute md:bottom-2 md:left-14 p-sm pb-0 md:p-md md:pb-0 lg:p-lg lg:pb-0 mt-12 z-[99]">
      <div className="relative z-[99]">
        <div>
          <Link
            href="https://wa.me/918109876429"
            className="absolute top-14 left-[-48px] cursor-pointer z-[99]"
          >
            <Image
              className=""
              src={Linkedin}
              alt={"ln"}
              width={36}
              height={36}
            />
          </Link>
          <Image
            className="absolute top-[-48px] left-11"
            src={Github}
            alt={"ln"}
            width={36}
            height={36}
          />
          <Image
            className="absolute top-14 right-[-48px]"
            src={Instagram}
            alt={"ln"}
            width={36}
            height={36}
          />
        </div>
        <div>
          <Image
            className="absolute top-[57px] left-[30px] z-10"
            id="eye-left"
            style={eyeballsStyle}
            width={28}
            height={28}
            src={SasukeEyes}
            alt="Sasuke"
          />
          <Image
            className="absolute top-[60px] left-[67px] z-10"
            id="eye-right"
            style={eyeballsStyle}
            width={28}
            height={28}
            src={SasukeEyes}
            alt="Sasuke"
          />
        </div>
        <Image
          className="relative z-20"
          id="eyes-container"
          width={120}
          height={120}
          src={SasukeBody}
          alt="Sasuke"
        />
      </div>
    </div>
  );
};

export default Sasuke;
