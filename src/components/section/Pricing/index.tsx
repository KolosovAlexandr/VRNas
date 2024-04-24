import { Title } from "@/components/elements/Title/Index";
import { PricingItem } from "@/components/section/Pricing/PricingItem";
import { configPricing } from "@/constants/configurationPricing";
import { LinkGradient } from "@/components/elements/LinkGradient";
import image from "../../../../public/assets/images/man-5.png";
import style from "./pricing.module.scss";

export const Pricing = () => {
  return (
    <section className={style.pricing}>
      <div className={style.pricing__container}>
        <div className={style.pricing__top}>
          <Title
            classNameH2={style.pricing__title}
            classNameH3={style.pricing__subtitle}
            textH2="Our pricing"
            textH3="Affordable VR Services for Everyone"
            marginBottom="1rem"
          />
          <p className={style.pricing__text}>
            {`At VRNas, we believe that everyone should have access to the
            benefits of VR. That's why we offer a range of pricing options to
            meet the needs of any budget.`}
          </p>
        </div>
        <div className={style.pricing__content}>
          <div className={style.pricing__body}>
            <div className={style.pricing__column}>
              {configPricing.map((el) => (
                <PricingItem key={el.title} title={el.title} text={el.text} />
              ))}
            </div>
            <div className={style.pricing__column}>
              <div className={style.pricing__image}>
                <img src={image.src} alt="" />
              </div>
            </div>
          </div>
          <div className={style.price}>
            <div className={style.price__top}>Start from</div>
            <div className={style.price__value}>$99</div>
            <div className={style.price__btn}>
              <LinkGradient text="get started" href="#" />
            </div>

            <div className={style.price__description}>
              30 Days Moneyback Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
