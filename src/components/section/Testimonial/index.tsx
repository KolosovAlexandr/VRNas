import { Title } from "@/components/elements/Title/Index";
import { TestimonialClient } from "@/components/modules/TestimonialClient";
import { configTestimonial } from "@/constants/configurationTestimonial";
import image from "../../../../public/assets/images/man-4.png";
import style from "./testimonial.module.scss";
export const Testimonial = () => {
  return (
    <section className={style.testimonial}>
      <div className={style.testimonial__container}>
        <div className={style.testimonial__top}>
          <Title
            classNameH2={style.testimonial__title}
            classNameH3={style.testimonial__subtitle}
            textH2="testimonial"
            textH3="What Our Clients Are Saying"
            marginBottom="0"
          />
        </div>
        <div className={style.testimonial__body}>
          <img
            className={style.testimonial__image}
            src={image.src}
            alt="image"
          />
          <div className={style.clients}>
            {configTestimonial.map((el) => (
              <TestimonialClient
                key={el.name}
                clientImg={el.clientImg}
                name={el.name}
                text={el.text}
                job={el.job}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
