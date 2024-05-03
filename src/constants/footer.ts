import message from "../../public/assets/icons/Message.svg";
import calling from "../../public/assets/icons/Calling.svg";
import location from "../../public/assets/icons/Location.svg";
import twitter from "../../public/assets/icons/logo-twitter.svg";
import facebook from "../../public/assets/icons/logo-fb-simple.svg";
import instagram from "../../public/assets/icons/logo-instagram.svg";
import github from "../../public/assets/icons/logo-github.svg";

type IChildren = {
  id: string
  title: string
  href: string
  src?: string
}

export type IFooter = {
  id: string
  column: string
  children: IChildren[]
}

export const dataFooter: IFooter[] = [
  {
    id: "Quick links",
    column: "Quick links",
    children: [
      { id: "1", title: "Home", href: "/" },
      { id: "2", title: "Pricing Plan", href: "/pricing_plan" },
      { id: "3", title: "Service", href: "/service" },
      { id: "4", title: "Recent Articles", href: "/recent_articles" },
      { id: "5", title: "Our Team", href: "/our_team" },
    ],
  },
  {
    id: "Support",
    column: "Support",
    children: [
      { id: "6", title: "About us", href: "/about_us" },
      { id: "7", title: "Contact us", href: "/contact_us" },
      { id: "8", title: "FAQ", href: "/FAQ" },
      { id: "9", title: "Teams & Conditions", href: "/tems_conditions" },
      { id: "10", title: "Privacy Policy", href: "/privacy_policy" },
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
        src: location.src as string,
      },
      { id: "12", title: "Support@VRNas.com", href: "#", src: message.src as string },
      { id: "13", title: "+123 456 7890", href: "#", src: calling.src as string },
    ],
  },
];

export const dataSocial = [
  { id: "1", name: "twitter", src: twitter.src as string, alt: "twitter" },
  { id: "2", name: "facebook", src: facebook.src as string, alt: "facebook" },
  { id: "3", name: "instagram", src: instagram.src as string, alt: "instagram" },
  { id: "4", name: "github", src: github.src as string, alt: "github" },
];
