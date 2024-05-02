import { Title } from "@/components/elements/Title";
import { LinkTransparent } from "@/components/elements/LinkTransparent";
import { OurTeamItem } from "./OurTeamItem";
import { dataTeam } from "@/constants/team";
import Image from "next/image";
import style from "./ourTeamAbout.module.scss";

export const OurTeamAbout = () => {
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
              href="/our_team"
            />
          </div>
        </div>
        <div className={style.bottom}>
          <ul className={style.bottom__list}>
            {dataTeam.slice(0, 4).map((el) => (
              <OurTeamItem
                props={el}
                className=""
                key={el.id}
                width={295}
                height={390}
              />
            ))}
          </ul>
          <div className={style.bottom__btn_mobile}>
            <LinkTransparent
              text="see all"
              className={style.btn}
              href="/our_team"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
