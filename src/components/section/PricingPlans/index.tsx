import { Title } from "@/components/elements/Title";
import { PricingPlansItem } from "./PricingPlansItem";
import { dataPricingPlan } from "@/constants/pricing";
import style from "./pricingPlans.module.scss";

export const PricingPlans = () => {
  return (
    <section className={style.pricing}>
      <div className={style.pricing__container}>
        <div className={style.pricing__top}>
          <Title
            classNameH2=""
            classNameH3=""
            textH2="Pricing"
            textH3="Pricing Plans"
            marginBottom="1rem"
          />
          <p className={style.pricing__text}>
            Choose the pricing plan that fits your needs and budget. All plans
            come with a free trial period so you can test out our service and
            see which plan works best for you.
          </p>
        </div>
        <div className={style.pricing__content}>
          {dataPricingPlan.map((el) => (
            <div className={style.pricing__column} key={el.id}>
              <PricingPlansItem props={el} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
