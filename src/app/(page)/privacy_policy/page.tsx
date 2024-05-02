import { TitlePage } from "@/components/section/TitlePage";
import { PrivacyPolicy } from "@/components/section/PrivacyPolicy";
import { Subscribe } from "@/components/section/Subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VRNas | Privacy Policy",
  description: "",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <TitlePage link="Home" link2="Privacy Policy" href="/" />
      <PrivacyPolicy />
      <Subscribe />
    </>
  );
}
