import { FaCircleInfo } from "react-icons/fa6";
// import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import MetaLogo from "./MetaLogo";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  name: string;
  img: string;
}

const Navbar = ({ name, img }: NavbarProps) => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <MetaLogo />
      </div>
      <div className="nav-user">
        <img src={img} alt="user" className="nav-user-img" />
        <h2 className="nav-user-hello">hi, {name} !</h2>
      </div>
      <ul className="nav-options">
        <li className="nav-options-li">
          <span>es/en</span>
        </li>
        <li className="nav-options-li">
          <MdOutlineLightMode />
        </li>
        <li className="nav-options">
          <NavLink to="/info" className="nav-link" title="Go to Info">
            <FaCircleInfo />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
