import Link from "next/link";
import Image from "next/image";
import { dataSocial, dataFooter } from "@/constants/footer";
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
                  <Image src={logo.src} alt="logo" width={100} height={30} />
                </Link>
              </div>
              <div className={style.social}>
                <ul className={style.social__list}>
                  {dataSocial.map((el) => (
                    <li key={el.name} className={style.social__item}>
                      <Link href="#">
                        <Image
                          src={el.src}
                          alt={el.name}
                          width={16}
                          height={16}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={style.footer__column}>
            <div className={style.content}>
              {dataFooter.map((el) => (
                <div className={style.content__column} key={el.column}>
                  <h2 className={style.content__title}>{el.column}</h2>
                  <ul className={style.content__list}>
                    {el.children.map((itemChildren) => (
                      <li className={style.content__item} key={itemChildren.id}>
                        {itemChildren.src ? (
                          <>
                            <Image
                              src={itemChildren.src}
                              alt="icon"
                              width={16}
                              height={16}
                            />
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
