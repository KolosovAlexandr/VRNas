import Link from "next/link";
import Image from "next/image";
import nextArrow from "../../../../public/assets/icons/Arrow down.svg";
import style from "./titlePage.module.scss";

type ITitlePage = {
  link: string;
  link2: string;
  href: string;
};

export const TitlePage = ({ link, link2, href }: ITitlePage) => {
  return (
    <section className={style.titlePage}>
      <div className={style.titlePage__container}>
        <div className={style.titlePage__top}>
          <h1 className={style.titlePage__title}>{link2}</h1>
        </div>
        <div className={style.titlePage__bottom}>
          <div className={style.titlePage__links}>
            <Link href={href} className={style.titlePage__link}>
              {link}
            </Link>
            <Image
              src={nextArrow.src}
              alt="icon"
              className={style.titlePage__image}
              width={8}
              height={8}
            />
            <Link href="#" className={style.titlePage__link}>
              {link2}
            </Link>
          </div>
        </div>
        <div className={style.titlePage__underline}></div>
      </div>
    </section>
  );
};
