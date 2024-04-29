import { Title } from "@/components/elements/Title";
import { ChooseItem } from "@/components/section/Choose/ChooseItem";
import { Video } from "@/components/elements/Video";
import { dataVideo } from "@/constants/video";
import { IChoose } from "@/types/IChoose";
import Image from "next/image";
import poster from "../../../../public/assets/images/poster-3.png";
import style from "./choose.module.scss";

export const Choose = ({ data, reverse, src }: IChoose) => {
  return (
    <section className={style.choose}>
      <div
        className={`${style.choose__container} ${reverse ? style.reverse : ""}`}
      >
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
              {data.map((el) => (
                <ChooseItem
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
            <div className={style.choose__image}>
              <Image src={src} alt="image" width={535} height={629} />
            </div>
            <Video
              video={dataVideo[2].src}
              className={style.choose__video}
              poster={poster.src}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
