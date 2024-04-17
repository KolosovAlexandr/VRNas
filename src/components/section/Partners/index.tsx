import { Title } from "@/components/elements/Title/Index";
import { PartnersItem } from "@/components/modules/PartnersItem/partnersItem";
import { configPartners } from "@/constants/configurationPartners";
import image from "../../../../public/assets/images/man-6.png";

import style from "./partners.module.scss";

export const Partners = () => {
  return (
    <section className={style.partners}>
      <div className={style.partners__container}>
        <Title
          classNameH2={style.partners__title}
          classNameH3={style.partners__subtitle}
          textH2="Our trusted partners"
          textH3="Discover the Companies We Work With"
          marginBottom="0"
        />
      </div>
      <div className={style.partners__body}>
        <div className={style.partners__content}>
          <div className={style.partners__image}>
            <img src={image.src} alt="image" />
            {configPartners.map((el) => (
              <PartnersItem key={el.id} src={el.src} alt={el.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
