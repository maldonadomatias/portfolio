import { CgWebsite } from "react-icons/cg";
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
  SiNextdotjs,
  SiStyledcomponents,
  SiTypescript,
  SiVuedotjs,
  SiNodedotjs,
  SiPhp,
  SiSymfony,
  SiDjango,
  SiPostgresql,
  SiAmazonaws,
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
    title: "frontend.development",
    description: "html5, css, sass, javascript, typescript, reactjs, next.js, react native, vue.js.",
    icon: <CgWebsite />,
  },
  {
    title: "backend.development",
    description: "node.js, php, symfony, django, apis.",
    icon: <LiaConnectdevelop />,
  },
  {
    title: "databases.cloud",
    description: "postgresql, mongodb, firebase, aws (s3, services).",
    icon: <SiAmazonaws />,
  },
  {
    title: "mobile.development",
    description: "react native, expo, android studio, ios development.",
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
    title1: "zennovia",
    title2: "srl",
    description: "full stack developer - buenos aires, argentina.",
    list: [
      "Developed and maintained React Native mobile applications, improving user experience and app performance.",
      "Contributed to Vue.js, Symfony, and PHP projects, delivering scalable features and custom solutions.",
      "Built and optimized Node.js + React.js web applications with emphasis on usability and performance.",
      "Collaborated with cross-functional teams to define architecture, review code, and deploy solutions using industry best practices.",
    ],
    tech: [
      { icon: <RiReactjsFill />, name: "React.js" },
      { icon: <CiMobile3 />, name: "React Native" },
      { icon: <SiVuedotjs />, name: "Vue.js" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiPhp />, name: "PHP" },
      { icon: <SiSymfony />, name: "Symfony" },
      { icon: <SiTypescript />, name: "TypeScript" },
    ],
  },
  {
    title1: "freelance",
    title2: "projects",
    description: "decortinas srl & komuk - argentina.",
    list: [
      "Designed and implemented management systems using Next.js, PostgreSQL, AWS S3, and AWS services, improving efficiency and automation in business processes.",
      "Developed dashboards and internal tools tailored to client needs, ensuring scalability and maintainability.",
      "Worked directly with stakeholders to analyze requirements, propose solutions, and deploy production-ready systems.",
    ],
    tech: [
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiAmazonaws />, name: "AWS S3" },
      { icon: <SiAmazonaws />, name: "AWS Services" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiFigma />, name: "Figma" },
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
      { icon: <SiTypescript />, name: "TypeScript" },
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
      "Built a custom admin dashboard for Apolo Oil Services to track and manage company data.",
      "Developed with ReactJS, TypeScript, Django.",
      "Designed UI in Figma.",
      "Enhanced data collection capabilities for better analysis.",
    ],
    tech: [
      { icon: <RiReactjsFill />, name: "React.js" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiDjango />, name: "Django" },
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
      "Worked as end-to-end developer for mobile applications.",
      "Managed deployments to Apple App Store and Google Play Store.",
      "Implemented real-time monitoring with Google Play Console and App Store Connect.",
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
    title1: "personal",
    title2: "projects",
    description: "click to discover my personal projects here:",
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
