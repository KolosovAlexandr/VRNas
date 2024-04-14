import { Title } from "@/components/elements/Title/Index";
import { ServiceCard } from "@/components/modules/ServiceCard";
import { configService } from "@/constants/configurationService";
import style from "./ourService.module.scss";

export const OurService = () => {
  return (
    <section className={style.service}>
      <div className={style.service__container}>
        <div className={style.service__top}>
          <div className={style.service__column}>
            <Title
              classNameH2={style.service__title}
              classNameH3={style.service__subtitle}
              textH2="Our Service"
              textH3="Our Service"
            />
          </div>
          <div className={style.service__column}>
            <p className={style.service__text}>
              We use the latest VR hardware and software to create high-quality
              VR experiences that are accessible and affordable. Our goal is to
              provide exceptional customer service and support, and our team is
              always available to answer any questions and address any concerns
              you may have.
            </p>
          </div>
        </div>
        <div className={style.service__content}>
          {configService.map((el) => (
            <ServiceCard
              key={el.id}
              src={el.src}
              alt={el.alt}
              title={el.title}
              text={el.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
