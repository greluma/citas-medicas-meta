import { FaLocationArrow } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface SideBarLinkProps {
  name: string;
  path: string;
  toggleSideBar: () => void;
}

const SideBarLink = ({ name, path, toggleSideBar }: SideBarLinkProps) => {
  return (
    <NavLink to={path} onClick={toggleSideBar} className={`sideBarLink `}>
      <h3>
        <span>{name}</span>
        <span className="sideBarLink-icon">
          <FaLocationArrow />
        </span>
      </h3>
    </NavLink>
  );
};
export default SideBarLink;
