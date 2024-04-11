import client_1 from "../../public/assets/images/Client-1.png";
import client_2 from "../../public/assets/images/Client-2.png";
import client_3 from "../../public/assets/images/Client-3.png";

type IClientsList = {
  id: number,
  src: string
  alt: string
}

export const clientsList: IClientsList[] = [
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
