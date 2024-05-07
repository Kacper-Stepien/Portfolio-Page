import React, { FC } from "react";

interface ContactLinkProps {
  icon: React.ReactNode;
  link: string;
}

const ContactLink: FC<ContactLinkProps> = ({ icon, link }) => {
  return (
    <li className="hover:text-secondary hover:scale-125 block transition-all">
      <a href={link} target="_blank">
        {icon}
      </a>
    </li>
  );
};

export default ContactLink;
