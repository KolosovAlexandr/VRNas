import { IConfigPartners } from "@/types/IConfigPartners";
import style from "./partnersItem.module.scss";

export const PartnersItem = ({ src, alt }: IConfigPartners) => {
  return (
    <div className={style.partner}>
      <div className={style.partner__logo}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
