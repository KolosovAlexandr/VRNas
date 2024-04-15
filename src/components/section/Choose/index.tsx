import { SectionImage } from "@/components/elements/SectionImage";
import { Title } from "@/components/elements/Title/Index";
import { ChooseSpoiler } from "@/components/modules/ChooseSpoiler";
import { Video } from "@/components/elements/Video";
import { configChoose } from "@/constants/configurationChoose";
import { configVideo } from "@/constants/configurationVideo";
import img from "../../../../public/assets/images/man-3.png";
import poster from "../../../../public/assets/images/poster-3.png";

import style from "./choose.module.scss";

export const Choose = () => {
  return (
    <section className={style.choose}>
      <div className={style.choose__container}>
        <div className={style.choose__column}>
          <div className={style.choose__content}>
            <Title
              classNameH2={style.choose__title}
              classNameH3={style.choose__subtitle}
              textH2="Why choose us"
              textH3="Why Choose Us for Your VR Needs"
              marginBottom="2rem"
            />
            <div className={style.choose__spoilers}>
              {configChoose.map((el) => (
                <ChooseSpoiler
                  key={el.id}
                  text={el.text}
                  title={el.title}
                  className={style.choose__spoiler}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={style.choose__column}>
          <div className={style.choose__media}>
            <SectionImage img={img.src} className={style.choose__image} />
            <Video
              video={configVideo[2].src}
              className={style.choose__action}
              poster={poster.src}
            />
          </div>
        </div>
      </div>
    </section>
  );
};