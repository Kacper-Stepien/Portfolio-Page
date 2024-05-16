import { FC, RefObject } from "react";

interface NavigationLinkProps {
  name: string;
  elementRef: RefObject<HTMLDivElement | null>;
  setIsOpen?: (prev: boolean) => void;
  color?: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  name,
  elementRef,
  setIsOpen,
  color,
}) => {
  const navigateToElement = () => {
    setIsOpen && setIsOpen(false);
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li>
      <button
        onClick={navigateToElement}
        className={`hover:text-secondary transition-all ${color ? color : ""}`}
      >
        {name}
      </button>
    </li>
  );
};

export default NavigationLink;
