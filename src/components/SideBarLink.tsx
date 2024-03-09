import { FaLocationArrow } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface SideBarLinkProps {
  name: string;
  path: string;
}

const SideBarLink = ({ name, path }: SideBarLinkProps) => {
  return (
    <NavLink to={path} className={`sideBarLink `}>
      <span>{name}</span>
      <span className="sideBarLink-icon">
        <FaLocationArrow />
      </span>
    </NavLink>
  );
};
export default SideBarLink;
