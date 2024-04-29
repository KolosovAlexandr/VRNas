import { Title } from "@/components/elements/Title";
import { LinkTransparent } from "@/components/elements/LinkTransparent";
import { dataTeam } from "@/constants/team";
import Image from "next/image";
import style from "./ourTeam.module.scss";

export const OurTeam = () => {
  return (
    <section className={style.team}>
      <div className={style.team__container}>
        <div className={style.top}>
          <div className={style.top__column}>
            <Title
              classNameH2={style.top__title}
              classNameH3={style.top__subtitle}
              textH2="Our team"
              textH3="Our Professionals Team"
              marginBottom="0"
            />
          </div>
          <div className={style.top__column}>
            <LinkTransparent
              className={style.top__btn}
              text="see all"
              href="#"
            />
          </div>
        </div>
        <div className={style.bottom}>
          <ul className={style.bottom__list}>
            {dataTeam.map((el) => (
              <li key={el.id} className={style.item}>
                <div className={style.item__image}>
                  <Image src={el.src} alt={el.alt} width={295} height={390} />
                </div>
                <div className={style.item__info}>
                  <p className={style.item__name}>{el.name}</p>
                  <p className={style.item__job}>{el.job}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className={style.bottom__btn_mobile}>
            <LinkTransparent text="see all" className={style.btn} href="#" />
          </div>
        </div>
      </div>
    </section>
  );
};
