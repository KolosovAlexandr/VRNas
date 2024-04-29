import { Video } from "@/components/elements/Video";
import { Title } from "@/components/elements/Title";
import { LinkGradient } from "@/components/elements/LinkGradient";
import { dataAbout } from "@/constants/about";
import { dataVideo } from "@/constants/video";
import Image from "next/image";
import image from "../../../../public/assets/images/man-2.png";
import poster from "../../../../public/assets/images/poster-2.jpg";
import style from "./aboutHome.module.scss";

export const AboutHome = () => {
  return (
    <section className={style.about}>
      <div className={style.about__container}>
        <div className={style.about__column}>
          <div className={style.about__media}>
            <div className={style.about__image}>
              <Image src={image.src} alt="image" width={552} height={665} />
            </div>
            <Video
              poster={poster.src}
              video={dataVideo[1].src}
              className={style.about__video}
            />
          </div>
        </div>
        <div className={style.about__column}>
          <div className={style.about__content}>
            <Title
              classNameH2={style.about__title}
              classNameH3={style.about__subtitle}
              textH2="about us"
              textH3="Bring your events to life like never before with our VR services."
              marginBottom="0.75rem"
            />
            <p className={style.about__text}>
              VRNas is a leading provider of VR services for education,
              entertainment, architecture, and events. Our mission is to bring
              the power of virtual reality to everyone, allowing them to explore
              new worlds, learn in new ways, and experience events in a whole
              new light.
            </p>
            <ul className={style.about__list}>
              {dataAbout.map((el) => (
                <li
                  key={el.id}
                  className={`${style.about__item} ${style.list__item}`}
                >
                  {el.text}
                </li>
              ))}
            </ul>
            <LinkGradient
              text="read more"
              className={style.about__btn}
              href="/about_us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
