import { Hero } from "@/components/section/Hero";
import { Advantages } from "@/components/section/Advantages";
import { About } from "@/components/section/About";
import { OurService } from "@/components/section/OurService";
import { Choose } from "@/components/section/Choose";
import { Started } from "@/components/section/Started";
import { Testimonial } from "@/components/section/Testimonial";
import { Pricing } from "@/components/section/Pricing";
import { Partners } from "@/components/section/Partners";
import { Articles } from "@/components/section/Articles";

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <About />
      <OurService />
      <Choose />
      <Started />
      <Testimonial />
      <Pricing />
      <Partners />
      <Articles />
    </>
  );
}
