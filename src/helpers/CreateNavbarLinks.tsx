import { Link as LinkScroll } from "react-scroll";

interface Props {
  activeLink: string;
  getMenuItems: {
    id: string;
    label: string;
  }[];
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}

export default function CreateNavbarLinks({
  activeLink,
  getMenuItems,
  setActiveLink,
}: Props): JSX.Element[] {
  return getMenuItems.map((item) => (
    <LinkScroll
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
    ${
      activeLink === item.id
        ? "text-green-main animation-active shadow-green-main"
        : "text-[#000] font-bold hover:text-green-main"
    }
    `}
    >
      {item.label}
    </LinkScroll>
  ));
}
