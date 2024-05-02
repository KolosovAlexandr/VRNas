import { Title } from "@/components/elements/Title";
import { OurTeamItem } from "../OurTeamAbout/OurTeamItem";
import { dataTeam } from "@/constants/team";
import style from "./ourTeam.module.scss";

export const OurTeam = () => {
  return (
    <section className={style.team}>
      <div className={style.team__container}>
        <div className={style.team__title}>
          <Title
            classNameH2=""
            classNameH3=""
            textH2="Our team"
            textH3="Meet Our Amazing Team"
            marginBottom="2rem"
          />
        </div>
        <div className={style.team__content}>
          {dataTeam.map((el) => (
            <OurTeamItem
              className={style.team__item}
              props={el}
              key={el.id}
              width={379}
              height={503}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
