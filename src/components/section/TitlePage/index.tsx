import Link from "next/link";
import nextArrow from "../../../../public/assets/icons/Arrow down.svg";
import { IConfigTitlePage } from "@/types/IConfigPageTitle";
import elips from "../../../../public/assets/vector/Ellipse.svg";
import style from "./titlePage.module.scss";

export const TitlePage = ({
  list,
  title,
}: {
  list: IConfigTitlePage[];
  title: string;
}) => {
  return (
    <section className={style.titlePage}>
      <div className={style.titlePage__container}>
        <div className={style.titlePage__top}>
          <h1 className={style.titlePage__title}>{title}</h1>
        </div>
        <div className={style.titlePage__bottom}>
          <ul className={style.list}>
            {list.map((el) => (
              <li key={el.name} className={style.list__item}>
                <Link href={el.href}>{el.name}</Link>
                <img
                  src={nextArrow.src}
                  alt="icon"
                  className={style.list__image}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={style.titlePage__underline}></div>
      </div>
    </section>
  );
};
