import type { Metadata } from "next";
import { TitlePage } from "@/components/section/TitlePage";
import { OurService } from "@/components/section/OurService";
import { Counter } from "@/components/section/Counter";
import { Pricing } from "@/components/section/Pricing";
import { Testimonial } from "@/components/section/Testimonial";
import { Subscribe } from "@/components/section/Subscribe";

export const metadata: Metadata = {
  title: "VRNas | Service",
  description: "",
};

function Service() {
  return (
    <>
      <TitlePage link="Home" link2="Our Service" href="/" />
      <OurService />
      <Counter />
      <Pricing titleCenter={false} />
      <Testimonial />
      <Subscribe />
    </>
  );
}

export default Service;
