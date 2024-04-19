import slide1 from "../../public/assets/images/slide-1.webp";
import slide2 from "../../public/assets/images/slide-2.webp";
import slide3 from "../../public/assets/images/slide-3.webp";
import slide4 from "../../public/assets/images/slide-4.webp";
import { IConfigSlider } from "@/types/IConfigSlider";

export const configSlider: IConfigSlider[] = [
  {
    id: "1",
    src: slide1.src,
    alt: "image",
    tag: "VR Games",
    text: "Entertainment Goes Virtual: The Rise of VR Gaming",
  },
  {
    id: "2",
    src: slide2.src,
    alt: "image",
    tag: "VR Architecture",
    text: "The Future of Education: How VR is Revolutionizing the Classroom",
  },
  {
    id: "3",
    src: slide3.src,
    alt: "image",
    tag: "VR Education",
    text: "Entertainment Goes Virtual: The Rise of VR Gaming",
  },
  {
    id: "4",
    src: slide4.src,
    alt: "image",
    tag: "VR Entertainment",
    text: "Bringing Designs to Life: How VR is Changing Architecture",
  },
];
