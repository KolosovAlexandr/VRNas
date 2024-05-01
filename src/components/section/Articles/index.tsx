import { Title } from "@/components/elements/Title";
import { dataArticles } from "@/constants/articles";
import { ArticlesItem } from "@/components/section/Articles/ArticlesItem";
import { LinkTransparent } from "@/components/elements/LinkTransparent";
import { Slider } from "@/components/modules/Slider";
import { SlideHome } from "@/components/modules/Slides/SlideHome";
import { dataSliderHome } from "@/constants/slider";
import arrowNext from "../../../../public/assets/icons/Arrow-next.svg";
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
            <Slider data={dataSliderHome} pagination={true}>
              {dataSliderHome.map((el, i) => (
                <SlideHome props={el} i={i} key={el.id} />
              ))}
            </Slider>
          </div>
          <div className={style.articles__column}>
            <div className={style.articles__overflow}>
              <h4 className={style.articles__title}>Recent Article</h4>
              <div className={style.articles__recent}>
                <ul className={style.articles__list}>
                  {dataArticles.map((el) => (
                    <li className={style.articles__item} key={el.id}>
                      <ArticlesItem props={el} blog={false}>
                        <LinkTransparent
                          className=""
                          href={`/blog/${el.id}`}
                          src={arrowNext.src}
                        />
                      </ArticlesItem>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={style.articles__btn_mobile}>
          <LinkTransparent text="see all" className={style.btn} href="#" />
        </div>
      </div>
    </section>
  );
};
