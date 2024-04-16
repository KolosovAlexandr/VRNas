import { IConfigPricing } from "@/types/IConfigPricing";
import icon from "../../../../public/assets/icons/pricing-1.svg";
import style from "./pricingItem.module.scss";

export const PricingItem = ({ title, text }: IConfigPricing) => {
  return (
    <div className={style.item}>
      <div className={style.item__icon}>
        <img src={icon.src} alt="icon" />
      </div>
      <div className={style.item__content}>
        <h4 className={style.item__title}>{title}</h4>
        <p className={style.item__text}>{text}</p>
      </div>
    </div>
  );
};
