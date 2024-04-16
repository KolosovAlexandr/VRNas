import client1 from "../../public/assets/images/Client-1.png";
import client2 from "../../public/assets/images/Client-2.png";
import client3 from "../../public/assets/images/Client-3.png";
import client4 from "../../public/assets/images/Client-4.png";
import client5 from "../../public/assets/images/Client-5.png";
import client6 from "../../public/assets/images/Client-6.png";
import { IConfigTestimonialWithoutToggle } from "@/types/IConfigTestimonialWithoutToggle";

export const configTestimonial: IConfigTestimonialWithoutToggle[] = [
  {
    id: "1",
    clientImg: client1.src,
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nam, illum amet pariatur, nisi eligendi perspiciatis iste eius, unde facere ab quis!",
    name: "Ron Potter",
    job: "Adminstrator",
    active: false,
  },
  {
    id: "2",
    clientImg: client2.src,
    text: "Voluptates obcaecati ad magnam non dicta! Inventore maxime deserunt ratione?",
    name: "Gerbert Dullsun",
    job: "Producer",
    active: false,
  },
  {
    id: "3",
    clientImg: client3.src,
    text: "Lorem ipsum dolor sit amet.",
    name: "Keyanu Rocks",
    job: "Main charter",
    active: false,
  },
  {
    id: "4",
    clientImg: client4.src,
    text: "Nam cumque, similique voluptatem aperiam vel laborum voluptatum.",
    name: "Albert Socks",
    job: "EVO Anono",
    active: false,
  },
  {
    id: "5",
    clientImg: client5.src,
    text: "The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.",
    name: "Robert Fox",
    job: "CEO Anono",
    active: true,
  },
  {
    id: "6",
    clientImg: client6.src,
    text: "Laudantium quisquam dignissimos exercitationem, repudiandae eius alias omnis voluptas, neque accusantium inventore expedita corporis, repellat incidunt.",
    name: "Samuel Rodrigez",
    job: "Subminist",
    active: false,
  },
];
