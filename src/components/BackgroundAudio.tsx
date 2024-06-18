"use client";

import { storeSound } from "@/app/recoil/atoms/storeSound";
import React, { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
const audioData = [
  {
    name: "Nezuko",
    url: "https://res.cloudinary.com/animesh-jha/video/upload/v1692112832/portfolio/nezuko-theme_bae4pv.mp3",
  },
  {
    name: "Ryuk",
    url: "https://res.cloudinary.com/animesh-jha/video/upload/v1692126614/portfolio/ryuk-theme_h6einh.mp3",
  },
  {
    name: "L",
    url: "https://res.cloudinary.com/animesh-jha/video/upload/v1692126614/portfolio/l-theme_mmy1c9.mp3",
  },
];
const BackgroundAudio = () => {
  const [isPlaying, setIsPlaying] = useRecoilState(storeSound);
  let audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      if (isPlaying) {
        audioRef.current.volume = 0.2;
        audioRef.current.play();
      } else audioRef.current.pause();
    }
  }, [isPlaying]);

  // useEffect(() => {
  //   if (audioRef && audioRef.current) {
  //     audioRef.current.volume = 0.2;
  //     audioRef.current.play();
  //   }
  // }, [isPlaying]);

  const handlePlay = () => {
    console.log("handlePlay");

    if (!isPlaying) {
      setIsPlaying(true);
      if (audioRef && audioRef.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.play();
      } else setIsPlaying(false);
    }
  };

  return (
    <audio ref={audioRef} autoPlay={true} preload="auto" loop={true}>
      <source src={audioData[0].url} type="audio/mpeg" />
    </audio>
  );
};

export default BackgroundAudio;
