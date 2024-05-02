import { Metadata } from "next";
import { TitlePage } from "@/components/section/TitlePage";
import { TemsConditions } from "@/components/section/TemsConditions";
import { Subscribe } from "@/components/section/Subscribe";

export const metadata: Metadata = {
  title: "VRNas | Tems & Conditions",
  description: "",
};

export default function TemsConditionsPage() {
  return (
    <>
      <TitlePage link="Home" link2="Tems & Conditions" href="/" />
      <TemsConditions />
      <Subscribe />
    </>
  );
}
