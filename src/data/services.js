import { FaLaptopCode } from "react-icons/fa"; // Font Awesome
import { MdDesignServices } from "react-icons/md"; // Material Design
import { HiOutlinePresentationChartBar } from "react-icons/hi"; // Heroicons
import { BiServer } from "react-icons/bi"; // BoxIcons
import { BsBook } from "react-icons/bs"; // Bootstrap
import { RiPaintBrushLine } from "react-icons/ri"; // Remix Icons

export const services = [
  {
    title: "Web Development",
    icon: FaLaptopCode,
    tagline: "Code that performs, design that speaks.",
    description: "We build custom websites and web apps that are fast, responsive, and visually refined. From frontend to backend — everything is crafted with quality and care.",
    iconColor: "text-twilight-techBlue",
    hoverText: "group-hover:text-twilight-techBlue",
    hoverBorder: "hover:border-twilight-techBlue",
    taglineColor: "text-twilight-techBlue",
    shadowHex: "#3EE0FF",
  },
  {
    title: "UI/UX Design",
    icon: MdDesignServices,
    tagline: "Design is not decoration, it's experience.",
    description: "We design interfaces that are clean, intuitive, and accessible. Every screen and interaction is crafted to enhance user satisfaction and efficiency.",
    iconColor: "text-twilight-techMint",
    hoverText: "group-hover:text-twilight-techMint",
    hoverBorder: "hover:border-twilight-techMint",
    taglineColor: "text-twilight-techMint",
    shadowHex: "#00FFC6",
  },
  {
    title: "Landing Pages & Portfolios",
    icon: HiOutlinePresentationChartBar,
    tagline: "Make your first impression unforgettable.",
    description: "We create fast, elegant landing pages and personal portfolios that showcase your value at a glance — perfect for startups, freelancers, and creators.",
    iconColor: "text-twilight-royalIndigo",
    hoverText: "group-hover:text-twilight-royalIndigo",
    hoverBorder: "hover:border-twilight-royalIndigo",
    taglineColor: "text-twilight-royalIndigo",
    shadowHex: "#7D5FFF",
  },
  {
    title: "Backend & Databases",
    icon: BiServer,
    tagline: "Structured, secure, and scalable.",
    description: "We build APIs and manage databases that keep your applications fast, stable, and safe. From architecture to deployment, everything runs smoothly behind the scenes.",
    iconColor: "text-twilight-electricPink",
    hoverText: "group-hover:text-twilight-electricPink",
    hoverBorder: "hover:border-twilight-electricPink",
    taglineColor: "text-twilight-electricPink",
    shadowHex: "#FF6EC7",
  },
  {
    title: "Consulting & Mentoring",
    icon: BsBook,
    tagline: "Empowering the next generation of creators.",
    description: "We help individuals, startups, and teams refine their ideas, structure their development process, and grow their skills. Whether you’re stuck on a project, launching a product, or learning the ropes — we guide you with hands-on experience, honest feedback, and personalized coaching.",
    iconColor: "text-twilight-electricCoral",
    hoverText: "group-hover:text-twilight-electricCoral",
    hoverBorder: "hover:border-twilight-electricCoral",
    taglineColor: "text-twilight-electricCoral",
    shadowHex: "#FF6F61",
  },
  {
    title: "Digital Branding",
    icon: RiPaintBrushLine,
    tagline: "Crafting your visual presence with clarity and style.",
    description: "We shape your digital identity through typography, color, and layout systems — ensuring that every touchpoint looks and feels like you.",
   iconColor: "text-twilight-retroPeach",
    hoverText: "group-hover:text-twilight-retroPeach",
    hoverBorder: "hover:border-twilight-retroPeach",
    taglineColor: "text-twilight-retroPeach",
    shadowHex: "#FDC5A7",
  },
];
