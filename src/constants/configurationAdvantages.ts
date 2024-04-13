import icon1 from '../../public/assets/icons/advantages-1.svg'
import icon2 from '../../public/assets/icons/advantages-2.svg'
import icon3 from '../../public/assets/icons/advantages-3.svg'
import { IConfigAdvantages } from '@/types/IConfigAdvantages';

export const configAdvantages: IConfigAdvantages[] = [
  {
    src: icon1.src,
    alt: "icon",
    title: "Expertise",
    text: "Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service",
  },
  {
    src: icon2.src,
    alt: 'icon',
    title: "Customization",
    text: `Every client is unique, and we believe every VR experience should be too. We'll work with you to create a customized solution that meets your specific needs and goals`,
  },
  {
    src: icon3.src,
    alt: "icon",
    title: "Service",
    text: `We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you're satisfied with every aspect of your VR experience.`,
  },
];
