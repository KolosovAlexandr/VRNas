"use client";
import style from "./video.module.scss";
import { useState } from "react";

export const Video = ({
  className,
  poster,
}: {
  className: string;
  poster: string;
}) => {
  const [isPlay, setIsPlay] = useState(false);

  const playVideo = () => {
    const video = document.querySelector("video") as HTMLVideoElement;
    if (video.paused) {
      video.play();
      setIsPlay(true);
    } else {
      video.pause();
      setIsPlay(false);
    }
  };

  return (
    <div
      className={`${className} ${isPlay ? style.stop : style.play}`}
      onClick={playVideo}
    >
      <video
        className={style.video}
        src="https://videocdn.cdnpk.net/joy/content/video/free/video0455/large_preview/_import_6074c96c5a2305.01102993.mp4"
        height={200}
        width={200}
        onEnded={() => setIsPlay(false)}
        poster={poster}
      ></video>
    </div>
  );
};
