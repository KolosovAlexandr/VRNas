import { IConfigTestimonial } from "@/types/IConfigTestimonial";
import style from "./testimonialItem.module.scss";

export const TestimonialItem = ({
  clientImg,
  text,
  name,
  job,
  id,
  active,
  toggleClick,
}: IConfigTestimonial) => {
  return (
    <div className={`${style.client} ${active ? style.active : ""}`}>
      <button
        id={id}
        onClick={() => toggleClick(id)}
        className={`${style.client__btn} ${active ? style.active : ""}`}
      >
        <img src={clientImg} alt="" className={style.client__image} />
      </button>
      <div className={`${style.client__body} ${active ? style.active : ""}`}>
        <div className={style.client__text}>{text}</div>
        <div className={style.client__name}>
          <span>{name}</span> - {job}
        </div>
      </div>
    </div>
  );
};
