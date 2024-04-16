import { IConfigTestimonial } from "@/types/IConfigTestimonial";
import style from "./testimonialClient.module.scss";

export const TestimonialClient = ({
  clientImg,
  text,
  name,
  job,
  id,
  active,
  toggleClick,
}: IConfigTestimonial) => {
  return (
    <div className={style.client}>
      <button
        id={id}
        onClick={() => toggleClick(id)}
        className={
          active ? `${style.client__btn} ${style.active}` : style.client__btn
        }
      >
        <img src={clientImg} alt="" />
      </button>
      <div
        className={
          active ? `${style.client__body} ${style.active}` : style.client__body
        }
      >
        <div className={style.client__text}>{text}</div>
        <div className={style.client__name}>
          <span>{name}</span> - {job}
        </div>
      </div>
    </div>
  );
};
