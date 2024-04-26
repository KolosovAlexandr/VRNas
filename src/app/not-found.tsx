import { Title } from "@/components/elements/Title/Index";
import { LinkGradient } from "@/components/elements/LinkGradient";
import { Subscribe } from "@/components/section/Subscribe";
import Image from "next/image";
import img from "../../public/assets/images/notFound.png";
import style from "./not-found.module.scss";

export default function NotFound() {
  return (
    <>
      <section className={style.notFound}>
        <div className={style.notFound__container}>
          <div className={style.notFound__column}>
            <div className={style.notFound__content}>
              <Title
                classNameH2={style.notFound__title}
                classNameH3={style.notFound__subtitle}
                textH2="404 error"
                textH3="Page Not Found"
                marginBottom="2rem"
              />
              <ul className={style.notFound__list}>
                Oops! It looks like the page you were looking for is not here.
                Here are some possible reasons why:
                <li className={style.notFound__item}>
                  The page may have been moved or deleted.
                </li>
                <li className={style.notFound__item}>
                  You may have mistyped the URL.
                </li>
                <li className={style.notFound__item}>
                  There may be a temporary problem with our server.
                </li>
              </ul>
              <ul className={style.notFound__list}>
                {`You can try the following options to find what you're looking for:`}
                <li className={style.notFound__item}>
                  Check the URL for typos or errors and try again.
                </li>
                <li className={style.notFound__item}>
                  Go back to our homepage and browse from there.
                </li>
              </ul>
              <p
                className={style.notFound__text}
              >{`If you believe there's an issue with our website, please contact us using the information provided on our contact page.`}</p>
              <LinkGradient
                text="back home"
                href="/"
                className={style.notFound__btn}
              />
            </div>
          </div>
          <div className={style.notFound__column}>
            <div className={style.notFound__image}>
              <Image src={img.src} width={535} height={515} alt="image" />
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
}
