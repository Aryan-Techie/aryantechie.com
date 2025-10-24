import React from "react";
import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
  HiDocumentText,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiPython,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiLinux,
  SiArchlinux,
  SiCloudflare,
  SiObsidian,
  SiNotion,
  SiYoutube,
  SiAdobepremierepro,
  SiAutohotkey,
  SiFirebase,
  SiTailwindcss,
  SiVercel,
  SiGit,
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaTwitter, FaInstagram, FaGlobe, FaProductHunt, FaYoutube, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, FaPenNib } from "react-icons/fa6";

// Custom Once UI Icon component with theme support
const OnceUIIcon: IconType = () => {
  const [theme, setTheme] = React.useState('dark');
  
  React.useEffect(() => {
    // Get initial theme
    const getTheme = () => {
      const dataTheme = document.documentElement.getAttribute('data-theme');
      return dataTheme || 'dark';
    };
    
    setTheme(getTheme());
    
    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    
    return () => observer.disconnect();
  }, []);
  
  const iconSrc = theme === 'light' 
    ? "/files/svg/once-ui-icon-light.svg"
    : "/files/svg/once-ui-icon-dark.svg";
    
  return React.createElement('img', {
    src: iconSrc,
    alt: "Once UI",
    style: { width: '1em', height: '1em', display: 'inline-block' }
  });
};

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  youtube: FaYoutube,
  producthunt: FaProductHunt,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  website: FaGlobe,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  resume: HiDocumentText,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  python: SiPython,
  html5: SiHtml5,
  css3: SiCss3,
  nodejs: SiNodedotjs,
  react: SiReact,
  typescript: SiTypescript,
  linux: SiLinux,
  archlinux: SiArchlinux,
  cloudflare: SiCloudflare,
  obsidian: SiObsidian,
  notion: SiNotion,
  youtubetech: SiYoutube,
  premierepro: SiAdobepremierepro,
  autohotkey: SiAutohotkey,
  firebase: SiFirebase,
  tailwindcss: SiTailwindcss,
  vercel: SiVercel,
  git: SiGit,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  onceui: OnceUIIcon,
  substack: FaPenNib,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;