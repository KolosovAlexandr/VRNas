import Image from "next/image";
import image from "../../../../public/assets/images/service.png";
import { Slider } from "@/components/modules/Slider";
import { SlideService } from "@/components/modules/Slides/SlideService";
import { LinkGradient } from "@/components/elements/LinkGradient";
import { dataSliderDetailService } from "@/constants/slider";
import style from "./service.module.scss";

export const ServiceDetail = () => {
  return (
    <section className={style.service}>
      <div className={style.service__container}>
        <div className={style.service__content}>
          <Image
            className={style.service__image}
            src={image.src}
            alt="image"
            width={1170}
            height={1170}
          />
          <Slider
            data={dataSliderDetailService}
            pagination={false}
            className={style.sliderService}
          >
            {dataSliderDetailService.map((el, i) => (
              <SlideService props={el} i={i} key={el.subtitle} />
            ))}
          </Slider>
        </div>
        <div className={style.service__btn}>
          <LinkGradient text="Contact us" href="#" />
        </div>
      </div>
    </section>
  );
};
