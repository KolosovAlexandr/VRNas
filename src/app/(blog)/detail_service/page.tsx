import { Metadata } from "next";
import { TitlePage } from "@/components/section/TitlePage";
import { ServiceDetail } from "@/components/section/ServiceDetail";
import { Started } from "@/components/section/Started";
import { Pricing } from "@/components/section/Pricing";
import poster from "../../../../public/assets/images/poster-5.png";

export const metadata: Metadata = {
  title: "VRNas | Detail Service",
  description: "",
};

export default function DetailService() {
  return (
    <>
      <TitlePage link="Home" link2="Detail Service" href="/" />
      <ServiceDetail />
      <Started
        title="Our VR design project"
        subtitle="Revolutionize Your Experience with Our Cutting-Edge VR Design Project"
        tag="VR Design"
        videoTitle="VR Design Projects"
        poster={poster.src}
      />
      <Pricing titleCenter={true} />
    </>
  );
}
