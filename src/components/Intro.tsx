import Image from "next/image";
import React from "react";
import ReactTyped from "react-typed";

const Intro = () => {
  const roles = ["User Interface Designer", "User Experience Designer"];

  return (
    <div className="pl-4 md:pl-10 md:mb-16 md:pt-4 flex flex-col items-center justify-center h-[80vh] md:h-[800px] !pointer-events-none">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <Image
          className="w-40 h-40 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full border-[2px] border-white md:p-2"
          src={
            "https://res.cloudinary.com/dwxylnkvd/image/upload/v1718454568/profile_qansub.png"
          }
          width={2048}
          height={2048}
          alt="hero"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="text-md md:text-lg lg:text-xxl mb-1 md:mb-0 font-medium text-textWhite">
            Pragati
          </p>
          {/* <p className={styles.content_left_subtitle}>
                                Full Stack Web Developer
                            </p> */}
          <ReactTyped
            className="text-[20px] md:text-base lg:text-md font-[400] text-primary md:w-[276px]"
            strings={roles}
            typeSpeed={140}
            loop
          />
        </div>
      </div>
      <p className="text-sm md:text-md mt-2 md:mt-3 font-[300] text-center md:text-left">
        Bridging the Gap Between Users and Technology Through Design.
      </p>
    </div>
  );
};

export default Intro;
