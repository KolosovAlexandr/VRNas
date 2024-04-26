import Image from "next/image";
import icon from "../../../../../public/assets/icons/pricing-1.svg";
import style from "./pricingItem.module.scss";

type IPricingItem = {
  title: string;
  text: string;
};

export const PricingItem = ({ title, text }: IPricingItem) => {
  return (
    <div className={style.item}>
      <div className={style.item__icon}>
        <Image src={icon.src} alt="icon" width={42} height={42} />
      </div>
      <div className={style.item__content}>
        <h4 className={style.item__title}>{title}</h4>
        <p className={style.item__text}>{text}</p>
      </div>
    </div>
  );
};
