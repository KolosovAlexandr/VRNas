import { TitlePage } from "@/components/section/TitlePage";
import { PricingPlans } from "@/components/section/PricingPlans";
import { Choose } from "@/components/section/Choose";
import { FAQ } from "@/components/section/FAQ";
import { Subscribe } from "@/components/section/Subscribe";
import { dataChoose } from "@/constants/choose";
import imageChoose from "../../../../public/assets/images/man-7.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VRNas | Pricing Plan",
  description: "",
};

export default function PricingPlan() {
  return (
    <>
      <TitlePage link="Home" link2="Pricing Plan" href="/" />
      <PricingPlans />
      <Choose data={dataChoose} src={imageChoose.src} reverse={true} />
      <FAQ />
      <Subscribe />
    </>
  );
}
