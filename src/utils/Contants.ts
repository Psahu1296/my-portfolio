import {
  javascript,
  mongo,
  node,
  react,
  reactNative,
  scss,
  tailwind,
  typescript,
} from "@/assets";
import { ITechnologies } from "./Types";

export const HeaderElements = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Resume",
];

export const TECHNOLOGIES: ITechnologies[] = [
  { tech: "React", icon: react },
  { tech: "ReactNative", icon: reactNative },
  { tech: "JavaScript", icon: javascript },
  { tech: "MongoDB", icon: mongo },
  { tech: "TypeScript", icon: typescript },
  { tech: "TailwindCss", icon: tailwind },
  { tech: "Scss", icon: scss },
  { tech: "Node-js", icon: node },
];
