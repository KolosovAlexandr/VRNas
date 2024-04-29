import { Title } from "@/components/elements/Title";
import style from "./slideService.module.scss";

export type ISlideService = {
  props: {
    id: string;
    title: string;
    subtitle: string;
    paragraph_1: string;
    paragraph_2: string;
    paragraph_3: string;
    paragraph_4: string;
    list: string[];
  };
  i: number;
};

export const SlideService = ({ props, i }: ISlideService) => {
  const {
    id,
    title,
    subtitle,
    paragraph_1,
    paragraph_2,
    paragraph_3,
    paragraph_4,
    list,
  } = props;
  return (
    <div className={style.slide} key={id} id={"slide" + i}>
      <div className={style.slide__content}>
        <div className={style.slide__title}>
          <Title
            classNameH2=""
            classNameH3=""
            textH2={title}
            textH3={subtitle}
            marginBottom="1.5rem"
          />
        </div>

        <p className={style.slide__text}>{paragraph_1}</p>
        <p className={style.slide__text}>{paragraph_2}</p>
        <ul className={style.slide__list}>
          {`Our ${subtitle} services include`}
          {list.map((el) => (
            <li key={el} className={style.slide__item}>
              {el}
            </li>
          ))}
        </ul>
        <p className={style.slide__text}>{paragraph_3}</p>
        <p className={style.slide__text}>{paragraph_4}</p>
      </div>
    </div>
  );
};
