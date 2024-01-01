import { Link as LinkScroll } from "react-scroll";

interface Props {
  activeLink: string;
  navbarItems: string[];
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CreateNavbarLinks({
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
      to={item}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => {
        setActiveLink(item);
        setShowSidebar && setShowSidebar(false);
      }}
      className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
    ${
      activeLink === item
        ? "text-[var(--primary-color)] font-bold animation-active shadow-[var(--primary-color)]"
        : "text-[#000] font-bold hover:text-[var(--primary-color)]"
    }
    `}
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </LinkScroll>
  ));
}
