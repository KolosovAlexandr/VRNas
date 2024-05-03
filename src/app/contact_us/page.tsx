import { Metadata } from "next";
import { TitlePage } from "@/components/section/TitlePage";
import { Social } from "@/components/section/Social";
import { ContactUs } from "@/components/section/ContactUs";
import { Subscribe } from "@/components/section/Subscribe";

export const metadata: Metadata = {
  title: "VRNas | Contact Us",
  description: "",
};

export default function ContactUsPage() {
  return (
    <>
      <TitlePage link="Home" link2="Contact Us" href="/" />
      <Social />
      <ContactUs />
      <Subscribe />
    </>
  );
}
