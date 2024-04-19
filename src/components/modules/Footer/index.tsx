import Link from "next/link";
import { community, configFooter } from "@/constants/configurationFooter";
import logo from "../../../../public/assets/icons/Logo.svg";
import style from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__top}>
          <div className={style.footer__column}>
            <div className={style.footer__action}>
              <div className={style.footer__logo}>
                <Link href="#">
                  <img src={logo.src} alt="logo" />
                </Link>
              </div>
              <div className={style.social}>
                <ul className={style.social__list}>
                  {community.map((el) => (
                    <li key={el.name} className={style.social__item}>
                      <Link href="#">
                        <img src={el.src} alt={el.name} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={style.footer__column}>
            <div className={style.content}>
              {configFooter.map((el) => (
                <div className={style.content__column} key={el.column}>
                  <h2 className={style.content__title}>{el.column}</h2>
                  <ul className={style.content__list}>
                    {el.children.map((itemChildren) => (
                      <li className={style.content__item} key={itemChildren.id}>
                        {itemChildren.src ? (
                          <>
                            <img src={itemChildren.src} alt="icon" />
                            <Link href={itemChildren.href}>
                              {itemChildren.title}
                            </Link>
                          </>
                        ) : (
                          <Link href={itemChildren.href}>
                            {itemChildren.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={style.footer__bottom}>
          <div className={style.footer__copy}>
            © Copyright 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
