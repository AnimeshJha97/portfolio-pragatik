import Pragati from "@/assets/Pragati.svg";
import NezukoBody from "@/assets/nezuko-body.png";
import NezukoEyes from "@/assets/eyes.png";
import Linkedin from "@/assets/linkedin-icon.svg";
import Behance from "@/assets/behance-icon.svg";
import Instagram from "@/assets/instagram-icon.svg";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Hamburger = ({
  handleMenuOptionClick,
  menuOptions,
  selectedMenuOption,
}: {
  handleMenuOptionClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    menuOption: string
  ) => void;
  menuOptions: { id: string; name: string }[];
  selectedMenuOption: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleMouseMove = (event: {
    clientX: number;
    clientY: number;
  }): void => {
    const { clientX, clientY } = event;
    setMouseCoordinates({ x: clientX, y: clientY });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      <div
        className={`fixed top-0 left-0 w-full h-12 flex items-center justify-between shadow-black px-4 z-[999] bg-black ${
          isOpen ? "shadow-sm" : " shadow-lg"
        }`}
      >
        {/* <div className="text-md ml-4 text-primary font-bold font-mono">P</div> */}
        <Image
          className="pointer-events-none ml-4 mt-2"
          src={Pragati}
          alt={"ln"}
          width={80}
          height={12}
        />
        <button
          className="flex flex-col justify-center items-center space-y-1"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-[2px] bg-primary transition-transform duration-300 ${
              isOpen ? "transform rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-primary transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-primary transition-transform duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`fixed inset-0 h-screen z-[998] transition-opacity duration-500 ${
          isOpen
            ? "opacity-80 pointer-events-auto bg-primary"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>
      <div
        className={`fixed flex flex-col gap-20 pt-12 pl-6 top-0 left-0 w-3/4 md:w-1/3 h-screen bg-black shadow-lg z-[999] p-4 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Image
          className="pointer-events-none"
          src={Pragati}
          alt={"ln"}
          width={120}
          height={12}
        />
        <div className="flex flex-col gap-16 w-full">
          {menuOptions.map((option) => (
            <div
              key={option.id}
              className="flex gap-4 items-center justify-normal group cursor-pointer max-w-[700px]"
              onClick={(e) => {
                closeMenu();
                handleMenuOptionClick(e, option.id);
              }}
            >
              <div
                className={
                  selectedMenuOption === option.id
                    ? "h-[1px] duration-300 w-8 md:w-12 bg-primary"
                    : "h-[1px] w-6 md:w-6 duration-300 group-hover:w-12 group-hover:bg-textWhite bg-textLight"
                }
              />
              <p
                className={
                  selectedMenuOption === option.id
                    ? "text-xs md:text-md text-primary"
                    : "text-xs md:text-md group-hover:text-textWhite"
                }
              >
                {option.name}
              </p>
            </div>
          ))}
        </div>
        {/* nezuko */}
        <div className="md:hidden relative -bottom-28 w-full flex justify-center">
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
                  width={28}
                  height={28}
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
                  width={28}
                  height={28}
                />
              </Link>
              <Link
                href="https://instagram.com/pragati.__jain"
                className="absolute top-14 -right-[30%] cursor-pointer z-[99]"
              >
                <Image
                  className="pointer-events-none"
                  src={Instagram}
                  alt={"ln"}
                  width={28}
                  height={28}
                />
              </Link>
            </div>
            <div>
              <Image
                className="absolute top-[47px] left-[36px] z-10 pointer-events-none"
                width={28}
                height={28}
                src={NezukoEyes}
                alt="Nezuko"
              />
              <Image
                className="absolute top-[47px] left-[71px] z-10 pointer-events-none"
                width={28}
                height={28}
                src={NezukoEyes}
                alt="Nezuko"
              />
            </div>
            <Image
              className="relative z-20 pointer-events-none"
              width={140}
              height={140}
              src={NezukoBody}
              alt="Nezuko"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
