import { TitlePage } from "@/components/section/TitlePage";
import { Blog } from "@/components/section/Blog";
import { Subscribe } from "@/components/section/Subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VRNas | Recent Articles",
  description: "",
};

export default function RecentArticles() {
  return (
    <>
      <TitlePage link="Home" link2="Recent Articles" href="/" />
      <Blog />
      <Subscribe />
    </>
  );
}
