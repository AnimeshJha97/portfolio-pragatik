"use client";

import { useEffect, useState } from "react";

const StartAnimation = () => {
  const [videoPlayed, setVideoPlayed] = useState(false);

  const handleVideoEnd = () => {
    setVideoPlayed(true);
  };

  useEffect(() => {
    const video = document.querySelector(".loading-video") as HTMLVideoElement;

    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <div
      className={`fixed z-[2000] top-0 left-0 w-screen h-screen flex items-center justify-center transition-opacity duration-300 ${
        videoPlayed ? "hidden opacity-0" : "visible opacity-100"
      }`}
    >
      <video autoPlay muted className="loading-video max-w-full max-h-full">
        <source
          src="https://res.cloudinary.com/animesh-jha/video/upload/v1692903774/portfolio/Aimages_-_seirem_dnhojq.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default StartAnimation;
