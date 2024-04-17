import { Title } from "@/components/elements/Title/Index";
import { LinkGradient } from "@/components/elements/LinkGradient";
import { configVideo } from "@/constants/configurationVideo";
import poster from "../../../../public/assets/images/poster-4.png";

import style from "./started.module.scss";
export const Started = () => {
  return (
    <section className={style.started}>
      <div className={style.started__container}>
        <div className={style.started__top}>
          <Title
            classNameH2={style.started__title}
            classNameH3={style.started__subtitle}
            textH2="How to get started"
            textH3="Bringing Your Virtual Reality Dreams to Life"
            marginBottom="0"
          />
        </div>
        <div className={style.started__video}>
          <video
            src={configVideo[3].src}
            height={509}
            poster={poster.src}
            controls={true}
          ></video>
        </div>
        <div className={style.started__button}>
          <LinkGradient text="get started" href="#" />
        </div>
      </div>
    </section>
  );
};
