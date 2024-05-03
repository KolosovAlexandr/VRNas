import { dataContact } from "@/constants/contact";
import { SocialItem } from "./SocialItem";
import style from "./social.module.scss";

export const Social = () => {
  return (
    <section className={style.social}>
      <div className={style.social__container}>
        <div className={style.social__content}>
          <ul className={style.social__list}>
            {dataContact.map((el) => (
              <li key={el.id} className={style.social__item}>
                <SocialItem props={el} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
