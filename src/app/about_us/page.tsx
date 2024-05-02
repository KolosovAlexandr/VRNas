import type { Metadata } from "next";
import { TitlePage } from "@/components/section/TitlePage";
import { About } from "@/components/section/About";
import { Advantages } from "@/components/section/Advantages";
import { Choose } from "@/components/section/Choose";
import { Partners } from "@/components/section/Partners";
import { OurTeamAbout } from "@/components/section/OurTeamAbout";
import { FAQ } from "@/components/section/FAQ";
import { Subscribe } from "@/components/section/Subscribe";
import { Title } from "@/components/elements/Title";
import { dataChoose } from "@/constants/choose";
import imageChoose from "../../../public/assets/images/man-7.png";
import style from "./page.module.scss";

export const metadata: Metadata = {
  title: "VRNas | About",
  description: "",
};

export default function AboutUs() {
  return (
    <>
      <TitlePage link="Home" link2="About Us" href="/" />
      <About />
      <div className={`${style.title} ${style.choose}`}>
        <Title
          classNameH2=""
          classNameH3={style.title__subtitle}
          textH2="Why choose us"
          textH3="Empowering Your Virtual Reality Experience"
          marginBottom="2.5rem"
        />
      </div>
      <Advantages />
      <Choose data={dataChoose} src={imageChoose.src} reverse={true} />
      <OurTeamAbout />
      <div className={style.title}>
        <Title
          classNameH2=""
          classNameH3={style.title__subtitle}
          textH2="Our trusted partners"
          textH3="Discover the Companies We Work With"
          marginBottom="2.5rem"
        />
      </div>
      <Partners isTitle={false} />
      <FAQ />
      <Subscribe />
    </>
  );
}
