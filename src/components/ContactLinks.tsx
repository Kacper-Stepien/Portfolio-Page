import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const ContactLinks = () => {
  return (
    <ul className="flex gap-6 text-3xl text-light">
      <li className="hover:text-secondary transition-all">
        <a href="https://github.com/Kacper-Stepien">
          <FaGithub />
        </a>
      </li>
      <li className="hover:text-secondary transition-all">
        <a href="https://www.linkedin.com/in/kacper-st%C4%99pie%C5%84/">
          <FaLinkedinIn />
        </a>
      </li>
      <li className="hover:text-secondary transition-all">
        <a href="https://www.youtube.com/@KacperKoduje-ki4bb">
          <FaYoutube />
        </a>
      </li>
      <li className="hover:text-secondary transition-all">
        <a href="https://twitter.com/kacper_2076">
          <FaXTwitter />
        </a>
      </li>
    </ul>
  );
};

export default ContactLinks;
