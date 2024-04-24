import { LinkGradient } from "@/components/elements/LinkGradient";
import { configHero } from "@/constants/configurationHero";
import { Video } from "@/components/elements/Video";
import { configVideo } from "@/constants/configurationVideo";
import poster from "../../../../public/assets/images/poster-1.png";
import image from "../../../../public/assets/images/man-1.png";
import style from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.hero__container}>
        <div className={style.hero__column}>
          <div className={style.hero__content}>
            <h1 className={style.hero__title}>
              Immerse Yourself in Virtual Reality
            </h1>
            <p className={style.hero__text}>
              Experience Unforgettable Events in VR. Bring your events to life
              like never before with our VR services
            </p>
            <LinkGradient
              className={style.hero__btn}
              text="discover more"
              href="#"
            />
          </div>
          <div className={style.hero__action}>
            <div className={`${style.hero__clients} ${style.client}`}>
              <ul className={style.client__list}>
                {configHero.map((el) => (
                  <li key={el.id} className={style.client__item}>
                    <img
                      src={el.src}
                      alt={el.alt}
                      className={style.client__image}
                    />
                  </li>
                ))}
              </ul>
              <div className={style.client__text}>
                <span className={style.client__underline}>32k+</span> Happy
                Client
              </div>
            </div>
            <Video
              poster={poster.src}
              video={configVideo[0].src}
              className={style.hero__video}
            />
          </div>
        </div>
        <div className={style.hero__column}>
          <div className={style.hero__image}>
            <img src={image.src} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};
