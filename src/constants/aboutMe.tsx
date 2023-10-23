import { CgIfDesign, CgWebsite } from "react-icons/cg";
import { LiaConnectdevelop } from "react-icons/lia";
import { CiMobile3 } from "react-icons/ci";

import { IMAGE_PATHS } from "./imagePaths";

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

export const projects = [
  {
    title1: "to the",
    title2: "moon inc.",
    src: IMAGE_PATHS.ttm_logo,
  },
  {
    title1: "wais",
    title2: "data",
    src: IMAGE_PATHS.wais_logo,
  },
  {
    title1: "publy",
    title2: "app",
    src: IMAGE_PATHS.publy_logo,
  },
  {
    title1: "freelance",
    title2: "projects",
  },
];
