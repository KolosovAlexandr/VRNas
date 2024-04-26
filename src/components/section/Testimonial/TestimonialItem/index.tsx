import Image from "next/image";
import style from "./testimonialItem.module.scss";

type ITestimonialItem = {
  id: string;
  clientImg: string;
  text: string;
  name: string;
  job: string;
  active: boolean;
  toggleClick: (id: string) => void;
};

export const TestimonialItem = ({
  clientImg,
  text,
  name,
  job,
  id,
  active,
  toggleClick,
}: ITestimonialItem) => {
  return (
    <div className={`${style.client} ${active ? style.active : ""}`}>
      <button
        id={id}
        onClick={() => toggleClick(id)}
        className={`${style.client__btn} ${active ? style.active : ""}`}
      >
        <Image
          src={clientImg}
          alt="client"
          className={style.client__image}
          width={50}
          height={50}
        />
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
