import { Title } from "@/components/elements/Title";
import { PartnersItem } from "@/components/section/Partners/PartnersItem/partnersItem";
import { dataPartners } from "@/constants/partners";
import Image from "next/image";
import image from "../../../../public/assets/images/man-6.webp";

import style from "./partners.module.scss";

export const Partners = ({ isTitle }: { isTitle: boolean }) => {
  return (
    <section className={style.partners}>
      <div className={style.partners__container}>
        {isTitle ? (
          <Title
            classNameH2={style.partners__title}
            classNameH3={style.partners__subtitle}
            textH2="Our trusted partners"
            textH3="Discover the Companies We Work With"
            marginBottom="0"
          />
        ) : null}
      </div>
      <div className={style.partners__body}>
        <div className={style.partners__content}>
          <Image
            src={image.src}
            alt="image"
            className={style.partners__image}
            width={1055}
            height={741}
          />
          {dataPartners.map((el) => (
            <PartnersItem key={el.id} src={el.src} alt={el.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};
