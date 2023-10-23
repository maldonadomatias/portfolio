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

export interface Project {
  title1: string;
  title2: string;
  description: string;
  src?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    title1: "to the",
    title2: "moon inc.",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: IMAGE_PATHS.ttm_logo,
    images: [
      IMAGE_PATHS.ttm_1,
      IMAGE_PATHS.ttm_2,
      IMAGE_PATHS.ttm_3,
      IMAGE_PATHS.ttm_4,
      IMAGE_PATHS.ttm_5,
    ],
  },
  {
    title1: "wais",
    title2: "data",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: IMAGE_PATHS.wais_logo,
    images: [
      IMAGE_PATHS.wais_1,
      IMAGE_PATHS.wais_2,
      IMAGE_PATHS.wais_3,
      IMAGE_PATHS.wais_4,
      IMAGE_PATHS.wais_5,
    ],
  },
  {
    title1: "publy",
    title2: "app",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    src: IMAGE_PATHS.publy_logo,
    images: [
      IMAGE_PATHS.publy_1,
      IMAGE_PATHS.publy_2,
      IMAGE_PATHS.publy_3,
      IMAGE_PATHS.publy_4,
    ],
  },
  {
    title1: "freelance",
    title2: "projects",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    images: [
      IMAGE_PATHS.project_1,
      IMAGE_PATHS.project_2,
      IMAGE_PATHS.project_3,
      IMAGE_PATHS.project_4,
      IMAGE_PATHS.project_5,
    ],
  },
];
