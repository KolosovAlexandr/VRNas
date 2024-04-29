import { Title } from "@/components/elements/Title";
import { LinkGradient } from "@/components/elements/LinkGradient";
import { dataVideo } from "@/constants/video";
import style from "./started.module.scss";

type IStarted = {
  title: string;
  subtitle: string;
  poster: string;
  tag: string;
  videoTitle: string;
};

export const Started = ({
  title,
  subtitle,
  poster,
  tag,
  videoTitle,
}: IStarted) => {
  return (
    <section className={style.started}>
      <div className={style.started__container}>
        <div className={style.started__top}>
          <Title
            classNameH2={style.started__title}
            classNameH3={style.started__subtitle}
            textH2={title}
            textH3={subtitle}
            marginBottom="0"
          />
        </div>
        <div className={style.video}>
          <video
            src={dataVideo[3].src}
            height={509}
            poster={poster}
            controls={true}
          ></video>
          <div className={style.video__info}>
            <span className={style.video__tag}>{tag}</span>
            <h4 className={style.video__title}>{videoTitle}</h4>
          </div>
        </div>
        <div className={style.started__button}>
          <LinkGradient text="get started" href="#" />
        </div>
      </div>
    </section>
  );
};
