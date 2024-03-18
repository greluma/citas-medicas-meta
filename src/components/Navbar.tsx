import MetaLogo from "./MetaLogo";
import { BiCollapseAlt } from "react-icons/bi";
import NavBarButton from "./NavBarButton";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";
import NavXlOptions from "./NavXlOptions";
import noUserImg from "../assets/images/no_user.png";

interface NavbarProps {
  toggleSideBar: () => void;
}

const Navbar = ({ toggleSideBar }: NavbarProps) => {
  const { t } = useTranslation();
  const { user, isAuthenticated } = useAuth0();

  const isUser = isAuthenticated && user;
  const picture = user?.picture || noUserImg;
  const userName =
    (isUser && user.given_name) || user?.nickname || t("usuario");

  return (
    <nav className="nav">
      <div className="nav-logo">
        <MetaLogo />
      </div>
      <div className="nav-user">
        <img src={picture} alt="user" className="nav-user-img" />
        {isUser && (
          <h2 className="nav-user-hello">
            {t("saludo")}, {userName} !
          </h2>
        )}
      </div>
      <ul className="nav-options">
        <NavXlOptions />
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
