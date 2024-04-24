import client_1 from "../../public/assets/images/client-5.webp";
import client_2 from "../../public/assets/images/client-1.webp";
import client_3 from "../../public/assets/images/client-6.webp";

type IConfigHero = {
  id: number,
  src: string
  alt: string
}

export const configHero: IConfigHero[] = [
  {
    id: 1,
    src: client_1.src,
    alt: "client",
  },
  {
    id: 2,
    src: client_2.src,
    alt: "client",
  },
  {
    id: 3,
    src: client_3.src,
    alt: "client",
  },
];
