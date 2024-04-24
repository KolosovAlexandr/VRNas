import type { Metadata } from "next";
import { TitlePage } from "@/components/section/TitlePage";
import { about } from "@/constants/pages/about";

export const metadata: Metadata = {
  title: "VRNas | About",
  description: "",
};

function AboutUs() {
  return (
    <>
      <TitlePage title="About Us" list={about} />
    </>
  );
}

export default AboutUs;
