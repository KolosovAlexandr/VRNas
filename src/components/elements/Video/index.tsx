import style from "./video.module.scss";

export const Video = ({
  className,
  poster,
  video,
}: {
  className?: string;
  poster: string;
  video: string;
}) => {
  return (
    <div className={`${className} ${style.play}`}>
      <video
        className={style.video}
        src={video}
        poster={poster}
        controls={true}
      ></video>
    </div>
  );
};
