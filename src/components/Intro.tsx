import Image from "next/image";
import React from "react";
import ReactTyped from "react-typed";

const Intro = () => {
  const roles = ["User Interface Designer", "User Experience Designer"];

  return (
    <div className="ml-4 md:ml-10 md:mb-20 flex flex-col items-center justify-center h-[800px]">
      <div className="flex gap-8 items-center justify-center">
        <Image
          className="w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full border-[2px] border-white md:p-2"
          src={
            "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718454568/profile_qansub.png"
          }
          width={2048}
          height={2048}
          alt="hero"
        />
        <div>
          <p className="text-md md:text-lg lg:text-xxl mb-1 md:mb-0 font-medium text-textWhite md:w-[276px]">
            Pragati
          </p>
          {/* <p className={styles.content_left_subtitle}>
                                Full Stack Web Developer
                            </p> */}
          <ReactTyped
            className="text-sm md:text-base lg:text-md font-[400] text-primary"
            strings={roles}
            typeSpeed={140}
            loop
          />
        </div>
      </div>
      <p className="text-xs md:text-md mt-2 md:mt-3 font-[300]">
        Bridging the Gap Between Users and Technology Through Design.
      </p>
    </div>
  );
};

export default Intro;
