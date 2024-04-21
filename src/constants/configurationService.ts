import icon1 from "../../public/assets/icons/service-1.svg";
import icon2 from "../../public/assets/icons/service-2.svg";
import icon3 from "../../public/assets/icons/service-3.svg";
import icon4 from "../../public/assets/icons/service-4.svg";
import icon5 from "../../public/assets/icons/service-5.svg";
import icon6 from "../../public/assets/icons/service-6.svg";

import { IConfigService } from "@/types/IConfigService";

export const configService: IConfigService[] = [
  {
    id: '1',
    src: icon1.src,
    alt: "icon",
    title: "VR Development",
    text: "From concept to creation, our team of VR developers will bring your vision to life.",
  },
  {
    id: '2',
    src: icon2.src,
    alt: "icon",
    title: "VR Design",
    text: "Our talented VR designers will create immersive and engaging environments that will captivate your audience.",
  },
  {
    id: '3',
    src: icon3.src,
    alt: "icon",
    title: "VR Consulting",
    text: "Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations.",
  },
  {
    id: '4',
    src: icon4.src,
    alt: "icon",
    title: "VR Games",
    text: "We offer a wide selection of VR games that are suitable for players of all ages and skill levels.",
  },
  {
    id: '5',
    src: icon5.src,
    alt: "icon",
    title: "VR Events",
    text: "Make your next event unforgettable with our VR event services.",
  },
  {
    id: '6',
    src: icon6.src,
    alt: "icon",
    title: "VR Entertainment",
    text: "Reate a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen.",
  },
];
