import Image from "next/image";
import { Title } from "@/components/elements/Title/Index";
import { Video } from "@/components/elements/Video";
import { dataVideo } from "@/constants/video";
import image from "../../../../public/assets/images/man-5.png";
import poster from "../../../../public/assets/images/poster-1.png";
import style from "./about.module.scss";

export const About = () => {
  return (
    <section className={style.about}>
      <div className={style.about__container}>
        <div className={style.about__column}>
          <div className={style.about__content}>
            <Title
              classNameH2={style.about__title}
              classNameH3={style.about__subtitle}
              textH2="About Us"
              textH3="Bringing Your Vision to Life: Learn About VRNas"
              marginBottom="1rem"
            />
            <p className={style.about__text}>
              VRNas is a leading provider of VR services for education,
              entertainment, architecture, and events. Our mission is to bring
              the power of virtual reality to everyone, allowing them to explore
              new worlds, learn in new ways, and experience events in a whole
              new light. <br />
              Our team consists of experienced VR developers, designers, and
              technicians who are passionate about VR and dedicated to
              delivering the highest quality work. We use the latest VR hardware
              and software to create immersive, interactive experiences that are
              tailored to your specific needs. <br />
              From initial consultation to final delivery, we are committed to
              providing exceptional customer service. Our goal is to ensure that
              you are completely satisfied with every aspect of your VR
              experience.
            </p>
          </div>
        </div>
        <div className={style.about__column}>
          <div className={style.about__media}>
            <div className={style.about__image}>
              <Image src={image.src} width={200} height={200} alt="image" />
            </div>
            <Video
              poster={poster.src}
              video={dataVideo[0].src}
              className={style.about__video}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
