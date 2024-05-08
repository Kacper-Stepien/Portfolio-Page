import NavigationLink from "./NavigationLink";
import { FC, RefObject } from "react";

interface NavigationProps {
  links: {
    name: string;
    elementRef: RefObject<HTMLDivElement> | RefObject<null>;
  }[];
}

const Navigation: FC<NavigationProps> = ({ links }) => {
  return (
    <nav className="flex justify-between items-center py-4 fixed text-light z-50 top-0 right-0 p-6 text-xl bg-dark/[.8]">
      <ul className="flex gap-12">
        {links.map((link) => (
          <NavigationLink
            key={link.name}
            name={link.name}
            elementRef={link.elementRef}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
