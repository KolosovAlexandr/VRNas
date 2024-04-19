import { Title } from "@/components/elements/Title/Index";
import { configArticles } from "@/constants/configurationArticles";
import { ArticlesItem } from "@/components/modules/ArticlesItem";
import { LinkTransparent } from "@/components/elements/LinkTransparent";
import { Slider } from "@/components/modules/Slider";
import style from "./articles.module.scss";

export const Articles = () => {
  return (
    <section className={style.articles}>
      <div className={style.articles__container}>
        <div className={style.top}>
          <div className={style.top__column}>
            <Title
              classNameH2={style.top__title}
              classNameH3={style.top__subtitle}
              textH2="Our articles"
              textH3="Stay Up-to-Date with Our VR Insights"
              marginBottom="0"
            />
          </div>
          <div className={style.top__column}>
            <LinkTransparent
              text="see all"
              className={style.top__btn}
              href="#"
            />
          </div>
        </div>
        <div className={style.articles__body}>
          <div className={style.articles__column}>
            <h4 className={style.articles__title}>Popular Article</h4>
            <Slider />
          </div>
          <div className={style.articles__column}>
            <div className={style.articles__overflow}>
              <h4 className={style.articles__title}>Recent Article</h4>
              <div className={style.articles__recent}>
                <ul className={style.articles__list}>
                  {configArticles.map((el) => (
                    <li className={style.articles__item} key={el.id}>
                      <ArticlesItem
                        id={el.id}
                        text={el.text}
                        src={el.src}
                        tag={el.tag}
                        alt={el.alt}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={style.articles__btn_mobile}></div>
      </div>
    </section>
  );
};
