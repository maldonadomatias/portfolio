import { CgIfDesign, CgWebsite } from "react-icons/cg";
import { LiaConnectdevelop } from "react-icons/lia";
import { CiMobile3 } from "react-icons/ci";

import { IMAGE_PATHS } from "./imagePaths";
import {
  RiAppStoreFill,
  RiGooglePlayFill,
  RiReactjsFill,
} from "react-icons/ri";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiChatbot,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  Animation,
  Css,
  DeveloperMode,
  Download,
  Email,
  GitHub,
  Html,
  LinkedIn,
  Movie,
  SportsSoccer,
} from "@mui/icons-material";
import CV_PATH from "../assets/pdf/matiasmaldonado-CV.pdf";

export const CV = CV_PATH;

export const socialMediaLinks = [
  {
    id: 1,
    title: "Github",
    icon: <GitHub />,
    tooltip: "Github Profile",
    url: "https://github.com/maldonadomatias",
  },
  {
    id: 2,
    title: "Email",
    icon: <Email />,
    tooltip: "Email Address",
    url: "#contact",
  },
  {
    id: 3,
    title: "LinkedIn",
    icon: <LinkedIn />,
    tooltip: "LinkedIn Profile",
    url: "https://www.linkedin.com/in/matias-maldonado/",
  },
  {
    id: 4,
    title: "Download CV",
    icon: <Download />,
    tooltip: "Download CV",
  },
];

export const aboutSmallData = [
  {
    title: "interface.design",
    description: "briefing, wireframe, ux, ui and design system.",
    icon: <CgIfDesign />,
  },
  {
    title: "frontend.development",
    description: "react.js, next.js, html, css, js, ts.",
    icon: <CgWebsite />,
  },
  {
    title: "backend.development",
    description: "node.js, express.js, firebase.",
    icon: <LiaConnectdevelop />,
  },
  {
    title: "mobile.development",
    description: "react native, expo, android studio.",
    icon: <CiMobile3 />,
  },
];

export interface Project {
  title1: string;
  title2: string;
  description: string;
  src?: string;
  list?: string[];
  link?: string;
  tech?: any[];
  projects?: any[];
}

export const projects: Project[] = [
  {
    title1: "document",
    title2: "ai.",
    description: "chat with any pdf using ai in seconds.",
    list: [
      "Ask questions to your PDF and get the answer right away.",
      "Developed with the most popular technologies for frontend.",
      "Use PineconeDB to transform PDF in vectors.",
    ],
    link: "https://documentai-seven.vercel.app/",
    tech: [
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <RiReactjsFill />, name: "React.js" },
      { icon: <SiTypescript />, name: "Typescript" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiPrisma />, name: "Prisma" },
      { icon: <SiTailwindcss />, name: "Tailwindcss" },
      { icon: <SiFigma />, name: "Figma" },
      { icon: <Html />, name: "HTML" },
      { icon: <Css />, name: "CSS" },
    ],
  },
  {
    title1: "to the",
    title2: "moon inc.",
    description: "nft marketplace and crypto e-commerce.",
    src: IMAGE_PATHS.ttm_logo,
    list: [
      "10+ websites created for TTM, including admin dashboards, crypto e-commerce, and landing pages.",
      "Wireframe design of all websites and components in Figma and Adobe XD.",
      "Code reviews and contributed to continuous integration and deployment processes.",
      "Implement good practices in the development (responsive, UX)",
    ],
    link: "https://tothemoonuniverse.com/",
    tech: [
      { icon: <RiReactjsFill />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTypescript />, name: "Typescript" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiAdobexd />, name: "Adobe XD" },
      { icon: <SiFigma />, name: "Figma" },
      { icon: <Html />, name: "HTML" },
      { icon: <Css />, name: "CSS" },
      { icon: <SiStyledcomponents />, name: "Styled Components" },
      { icon: <Animation />, name: "Framer Motion" },
    ],
  },
  {
    title1: "wais",
    title2: "data",
    description: "data driven solutions.",
    src: IMAGE_PATHS.wais_logo,
    list: [
      "I collaborated with cross-functional teams to understand business requirements and implement solutions using web technologies such as ReactJS, Typescript, and Firebase.",
      "Designing and developing user interfaces for data visualization and analysis.",
      "Responsive and dynamic design for mobile and desktop.",
    ],
    tech: [
      { icon: <RiReactjsFill />, name: "React.js" },
      { icon: <SiTypescript />, name: "Typescript" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiAdobexd />, name: "Adobe XD" },
      { icon: <SiFigma />, name: "Figma" },
      { icon: <Html />, name: "HTML" },
      { icon: <Css />, name: "CSS" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiStyledcomponents />, name: "Styled Components" },
      { icon: <Animation />, name: "Framer Motion" },
    ],
  },
  {
    title1: "publy",
    title2: "app",
    description: "publish apps in google play and app store.",
    src: IMAGE_PATHS.publy_logo,
    list: [
      "end to end development of the app.",
      "design and development of the website.",
      "real-time metrics monitoring wth Google Play Console and App Store Connect.",
    ],
    link: "https://publy.app/",
    tech: [
      { icon: <Html />, name: "HTML" },
      { icon: <Css />, name: "CSS" },
      { icon: <RiGooglePlayFill />, name: "Google Play" },
      { icon: <RiAppStoreFill />, name: "App Store" },
      { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },
    ],
  },
  {
    title1: "freelance",
    title2: "projects",
    description: "click to discover my freelance projects here:",
    projects: [
      {
        icon: <SportsSoccer />,
        name: "Transferquiz",
        description:
          "guess the argentinian soccer player from it transfer history.",
        link: "https://transferquiz.vercel.app/",
      },
      {
        icon: <SiChatbot />,
        name: "Chatbot",
        description: "chatbot using chat-gpt4 api.",
        link: "https://chat-ai-sage.vercel.app/",
      },
      {
        icon: <Movie />,
        name: "Guess the Movie",
        description: "guess the movie from the emojis.",
        link: "https://guess-the-movie-omega.vercel.app/",
      },
      {
        icon: <DeveloperMode />,
        name: "Portfolio",
        description: "my personal portfolio.",
        link: "https://matiasmaldonado.vercel.app/",
      },
    ],
  },
];
