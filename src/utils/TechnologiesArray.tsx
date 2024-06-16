import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaSass,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  // FaAngular,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiRedux,
  SiAdobexd,
  SiVitest,
  SiVite,
  SiReactrouter,
  SiJest,
  SiVisualstudiocode,
  SiReacthookform,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import Colors from "../types/Colors.enum";

const technologies = [
  {
    icon: <FaReact className="text-3xl text-dark" />,
    color: Colors.Secondary,
  },
  {
    icon: <FaNodeJs className="text-3xl text-dark" />,
    color: Colors.Primary,
  },
  {
    icon: <FaDocker className="text-3xl text-dark" />,
    color: Colors.Secondary,
  },
  {
    icon: <FaSass className="text-3xl text-dark" />,
    color: Colors.Primary,
  },
  {
    icon: <FaHtml5 className="text-3xl text-dark" />,
    color: Colors.Light,
  },
  {
    icon: <FaCss3Alt className="text-3xl text-dark" />,
    color: Colors.Secondary,
  },
  {
    icon: <FaGithub className="text-3xl text-dark" />,
    color: Colors.Light,
  },
  {
    icon: <FaGitAlt className="text-3xl text-dark" />,
    color: Colors.Light,
  },
  // {
  //   icon: <FaAngular className="text-3xl text-dark" />,
  //   color: Colors.Secondary,
  // },
  {
    icon: <IoLogoJavascript className="text-3xl text-dark" />,
    color: Colors.Primary,
  },
  {
    icon: <SiTypescript className="text-3xl text-dark" />,
    color: Colors.Light,
  },
  {
    icon: <SiNestjs className="text-3xl text-dark" />,
    color: Colors.Primary,
  },
  {
    icon: <SiExpress className="text-3xl text-dark" />,
    color: Colors.Light,
  },
  {
    icon: <RiTailwindCssFill className="text-3xl text-dark" />,
    color: Colors.Secondary,
  },
  {
    icon: <BiLogoPostgresql className="text-3xl text-dark" />,
    color: Colors.Primary,
  },
  {
    icon: <BiLogoMongodb className="text-3xl text-dark" />,
    color: Colors.Secondary,
  },
  {
    icon: <SiRedux className="text-3xl text-dark" />,
    color: Colors.Light,
  },
  {
    icon: <SiAdobexd className="text-3xl text-dark" />,
    color: Colors.Primary,
  },
  {
    icon: <SiVitest className="text-3xl text-dark" />,
    color: Colors.Light,
  },
  {
    icon: <SiVite className="text-3xl text-dark" />,
    color: Colors.Secondary,
  },
  {
    icon: <SiReactrouter className="text-3xl text-dark" />,
    color: Colors.Primary,
  },
  {
    icon: <SiJest className="text-3xl text-dark" />,
    color: Colors.Light,
  },
  {
    icon: <SiVisualstudiocode className="text-3xl text-dark" />,
    color: Colors.Secondary,
  },
  {
    icon: <SiReacthookform className="text-3xl text-dark" />,
    color: Colors.Primary,
  },
];

export default technologies;
