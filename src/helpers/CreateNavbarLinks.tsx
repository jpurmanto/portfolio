import { NavbarItem } from "@/types";
import { Link as LinkScroll } from "react-scroll";

interface Props {
  activeLink: string;
  navbarItems: NavbarItem[];
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateNavbarLinks({
  activeLink,
  navbarItems,
  setActiveLink,
  setShowSidebar,
}: Props): JSX.Element[] {
  return navbarItems.map((item, index) => (
    <LinkScroll
      as="li"
      key={index}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => {
        setActiveLink(item.id);
        setShowSidebar && setShowSidebar(false);
      }}
      className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
    ${
      activeLink === item.id
        ? "text-[var(--primary-color)] font-bold animation-active shadow-[var(--primary-color)]"
        : "text-[#000] font-bold hover:text-[var(--primary-color)]"
    }
    `}
    >
      {item.label}
    </LinkScroll>
  ));
}
