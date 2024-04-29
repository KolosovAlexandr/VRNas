import { LinkTransparent } from "@/components/elements/LinkTransparent";
import style from "./pricingPlansItem.module.scss";

type IPricingPlansItem = {
  props: {
    id: string;
    rate: string;
    price: string;
    list: string[];
  };
};

export const PricingPlansItem = ({ props }: IPricingPlansItem) => {
  const { id, rate, price, list } = props;
  return (
    <div className={style.item}>
      <div className={style.item__rate}>{rate}</div>
      <div className={style.item__price}>
        {price}
        <span>/month</span>
      </div>
      <p className={style.item__text}>
        All the basic features to boost your freelance career
      </p>
      <ul className={style.item__list}>
        {list.map((el) => (
          <li key={id + el} className={style.item__el}>
            {el}
          </li>
        ))}
      </ul>
      <div className={style.item__btn}>
        <LinkTransparent
          text="Get 14 days free trial"
          className={style.btn}
          href="#"
        />
      </div>
    </div>
  );
};
