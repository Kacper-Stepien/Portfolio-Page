import { FC, RefObject } from "react";

interface NavigationLinkProps {
  name: string;
  elementRef: RefObject<HTMLDivElement | null>;
}

const NavigationLink: FC<NavigationLinkProps> = ({ name, elementRef }) => {
  const navigateToElement = () => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li>
      <button
        onClick={navigateToElement}
        className="hover:text-secondary transition-all"
      >
        {name}
      </button>
    </li>
  );
};

export default NavigationLink;
