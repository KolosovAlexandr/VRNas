import { Hero } from "@/components/section/Hero";
import { Advantages } from "@/components/section/Advantages";
import { About } from "@/components/section/About";
import { OurService } from "@/components/section/OurService";

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <About />
      <OurService />
    </>
  );
}
