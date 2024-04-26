import { Hero } from "@/components/section/Hero";
import { Advantages } from "@/components/section/Advantages";
import { AboutHome } from "@/components/section/AboutHome";
import { OurService } from "@/components/section/OurService";
import { Choose } from "@/components/section/Choose";
import { Started } from "@/components/section/Started";
import { Testimonial } from "@/components/section/Testimonial";
import { Pricing } from "@/components/section/Pricing";
import { Partners } from "@/components/section/Partners";
import { Articles } from "@/components/section/Articles";
import { Subscribe } from "@/components/section/Subscribe";
import { dataChoose } from "@/constants/choose";
import imageChoose from "../../public/assets/images/man-3.png";

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <AboutHome />
      <OurService />
      <Choose data={dataChoose} reverse={false} src={imageChoose.src} />
      <Started />
      <Testimonial />
      <Pricing />
      <Partners isTitle={true} />
      <Articles />
      <Subscribe />
    </>
  );
}
