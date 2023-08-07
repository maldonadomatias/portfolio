import { BiHomeAlt2 } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";

export const navbarData = [
  {
    name: "home",
    icon: <BiHomeAlt2 />,
    link: "home",
  },
  {
    name: "about",
    icon: <SiAboutdotme />,
    link: "about-me",
  },
  {
    name: "projects",
    icon: <MdWorkOutline />,
    link: "projects",
  },
  {
    name: "contact",
    icon: <RiContactsBookLine />,
    link: "contact",
  },
];
