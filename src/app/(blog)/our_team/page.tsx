import { Metadata } from "next";
import { TitlePage } from "@/components/section/TitlePage";
import { OurTeam } from "@/components/section/OurTeam";
import { Counter } from "@/components/section/Counter";
import { Subscribe } from "@/components/section/Subscribe";

export const metadata: Metadata = {
  title: "VRNas | Our Team",
  description: "",
};

export default function OurTeamPage() {
  return (
    <>
      <TitlePage link="Home" link2="Our Team" href="/" />
      <OurTeam />
      <Counter />
      <Subscribe />
    </>
  );
}
