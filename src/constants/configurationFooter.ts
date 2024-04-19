import message from "../../public/assets/icons/Message.svg";
import calling from "../../public/assets/icons/Calling.svg";
import location from "../../public/assets/icons/Location.svg";
import twitter from "../../public/assets/icons/logo-twitter.svg";
import facebook from "../../public/assets/icons/logo-fb-simple.svg";
import instagram from "../../public/assets/icons/logo-instagram.svg";
import github from "../../public/assets/icons/logo-github.svg";
import { IConfigFooter } from "@/types/IConfigFooter";
import { ICommunity } from "@/types/IConfigFooter";

export const configFooter: IConfigFooter[] = [
  {
    id: "Quick links",
    column: "Quick links",
    children: [
      { id: "1", title: "Home", href: "#" },
      { id: "2", title: "Pricing Plan", href: "#" },
      { id: "3", title: "Service", href: "#" },
      { id: "4", title: "Blog", href: "#" },
      { id: "5", title: "Our Team", href: "#" },
    ],
  },
  {
    id: "Support",
    column: "Support",
    children: [
      { id: "6", title: "About us", href: "#" },
      { id: "7", title: "Contact us", href: "#" },
      { id: "8", title: "FAQ", href: "#" },
      { id: "9", title: "Teams & Conditions", href: "#" },
      { id: "10", title: "Privacy Policy", href: "#" },
    ],
  },
  {
    id: "Need Help?",
    column: "Need Help?",
    children: [
      {
        id: "11",
        title: "Tanjung Sari Street no.48, Pontianak City",
        href: "#",
        src: location.src,
      },
      { id: "12", title: "Support@VRNas.com", href: "#", src: message.src },
      { id: "13", title: "+123 456 7890", href: "#", src: calling.src },
    ],
  },
];

export const community: ICommunity[] = [
  { name: "twitter", src: twitter.src, alt: "twitter" },
  { name: "facebook", src: facebook.src, alt: "facebook" },
  { name: "instagram", src: instagram.src, alt: "instagram" },
  { name: "github", src: github.src, alt: "github" },
];
