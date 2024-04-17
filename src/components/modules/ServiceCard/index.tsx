import { IConfigService } from "@/types/IConfigService";
import { LinkTransparent } from "@/components/elements/LinkTransparent";

import style from "./serviceCard.module.scss";
export const ServiceCard = ({ id, src, alt, title, text }: IConfigService) => {
  return (
    <div className={style.card}>
      <div className={style.card__body}>
        <div className={style.card__top}>
          <div className={style.card__image}>
            <img src={src} alt={alt} />
          </div>
          <div className={style.card__title}>{title}</div>
        </div>
        <div className={style.card__spoiler}>
          <div className={style.card__content}>
            <p className={style.card__text}>{text}</p>
            <LinkTransparent
              className={style.card__link}
              href="#"
              text="learn more"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
