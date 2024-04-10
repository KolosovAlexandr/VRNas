import { CircleBg } from "@/components/elements/CircleBg";
import { ButtonGradient } from "@/components/elements/Buttons/ButtonGradient";
import style from "./hero.module.scss";
import hero from "../../../../public/assets/images/man-1.png";

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
            <ButtonGradient text="discover more" />
          </div>
          <div className={style.hero__action}>
            <div>
              <ul></ul>
              <div>
                <span></span>
              </div>
            </div>
            <a href=""></a>
          </div>
        </div>
        <div className={style.hero__column}>
          <CircleBg img={hero.src} className={style.hero__img} />
        </div>
      </div>
    </section>
  );
};
