import { TitlePage } from "@/components/section/TitlePage";
import { Blog } from "@/components/section/Blog";
import { Subscribe } from "@/components/section/Subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VRNas | Blog",
  description: "",
};

export default function BlogPage() {
  return (
    <>
      <TitlePage link="Home" link2="Blog" href="/" />
      <Blog />
      <Subscribe />
    </>
  );
}
