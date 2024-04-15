import { SectionImage } from "@/components/elements/SectionImage";
import { Video } from "@/components/elements/Video";
import { Title } from "@/components/elements/Title/Index";
import { ButtonGradient } from "@/components/elements/Buttons/ButtonGradient";
import { configAbout } from "@/constants/configurationAbout";
import { configVideo } from "@/constants/configurationVideo";
import img from "../../../../public/assets/images/man-2.png";
import poster from "../../../../public/assets/images/poster-2.jpg";
import style from "./about.module.scss";

export const About = () => {
  return (
    <section className={style.about}>
      <div className={style.about__container}>
        <div className={style.about__column}>
          <div className={style.about__media}>
            <SectionImage img={img.src} className={style.about__image} />
            <Video
              poster={poster.src}
              video={configVideo[1].src}
              className={style.about__action}
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
              {configAbout.map((el) => (
                <li
                  key={el.id}
                  className={`${style.about__item} ${style.list__item}`}
                >
                  {el.text}
                </li>
              ))}
            </ul>
            <ButtonGradient text="read more" padding="1rem 2.4rem" />
          </div>
        </div>
      </div>
    </section>
  );
};
