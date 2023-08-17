"use client";
import React, { useEffect } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { HiOutlineRefresh } from "react-icons/hi";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { storeSound } from "@/app/recoil/atoms/storeSound";

const Title = ({ pageNo, title }: { pageNo: string; title: string }) => {
  const [isPlaying, setIsPlaying] = useRecoilState(storeSound);

  useEffect(() => {
    console.log("isPlaying", isPlaying);
  }, [isPlaying]);

  // style decleration
  const styles = {
    pageTitle:
      "absolute top-0 left-0 p-sm md:p-md lg:p-lg w-full flex items-center justify-between",
    pageTitle_p: "text-textWhite text-base md:text-md font-medium",
    pageTitle_p_span: "text-textLight",
  };
  return (
    <div className={styles.pageTitle}>
      <p className={styles.pageTitle_p}>
        {pageNo} <span className={styles.pageTitle_p_span}>- {title}</span>
      </p>

      <div className="flex items-end gap-2 md:gap-3">
        <div className="flex flex-col items-center md:gap-2">
          <div
            className={`duration-300 border-2 border-textWhite rounded-full w-5 h-5 md:w-6 md:h-6 flex flex-col items-center justify-center ${
              isPlaying
                ? "bg-textWhite text-bgCol"
                : "bg-bgCol text-textWhite lg:hover:bg-textWhite lg:hover:text-bgCol"
            }`}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <BsFillPlayFill className="h-2 w-2 md:h-3 md:w-3" />
          </div>
          <p className="text-xxs text-textLight">sound</p>
        </div>
        <div className="flex flex-col items-center gap-[2px] md:gap-2">
          <HiOutlineRefresh className=" text-textLight w-4 h-4 md:h-5 md:w-5" />
          <p className="text-xxs text-textLight">theme</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
