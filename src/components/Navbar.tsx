// import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import MetaLogo from "./MetaLogo";
import { BiCollapseAlt } from "react-icons/bi";
import NavBarButton from "./NavBarButton";

interface NavbarProps {
  name: string;
  img: string;
  toggleSideBar: () => void;
}

const Navbar = ({ name, img, toggleSideBar }: NavbarProps) => {
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
        <div className="nav-xl">
          <li>
            <NavBarButton title="es/en" />
          </li>
          <li>
            <NavBarButton Icon={MdOutlineLightMode} />
          </li>
        </div>
        <div className="nav-md">
          <li>
            <NavBarButton Icon={BiCollapseAlt} func={toggleSideBar} />
          </li>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
