import { CircleBg } from "@/components/elements/CircleBg";
import { ButtonGradient } from "@/components/elements/Buttons/ButtonGradient";
import { configHero } from "@/constants/configurationHero";
import { Video } from "@/components/elements/Video";
import poster from "../../../../public/assets/images/poster-1.png";
import hero from "../../../../public/assets/images/man-1.png";
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
            <ButtonGradient text="discover more" padding="1rem 2.4rem" />
          </div>
          <div className={style.hero__action}>
            <div className={`${style.hero__clients} ${style.clients}`}>
              <ul className={style.clients__list}>
                {configHero.map((el) => (
                  <li key={el.id} className={style.clients__item}>
                    <img src={el.src} alt={el.alt} />
                  </li>
                ))}
              </ul>
              <div className={style.clients__text}>
                <span className={style.clients__underline}>32k+</span> Happy
                Client
              </div>
            </div>
            <Video className={style.hero__play} poster={poster.src} />
          </div>
        </div>
        <div className={style.hero__column}>
          <CircleBg img={hero.src} className={style.hero__img} />
        </div>
      </div>
    </section>
  );
};
