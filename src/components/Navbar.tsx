import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import MetaLogo from "./MetaLogo";
import { BiCollapseAlt } from "react-icons/bi";
import NavBarButton from "./NavBarButton";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setLang } from "../features/appSlice";

interface NavbarProps {
  toggleSideBar: () => void;
  toggleLightMode: () => void;
  isLightMode: boolean;
}
const Navbar = ({
  toggleSideBar,
  toggleLightMode,
  isLightMode,
}: NavbarProps) => {
  const { t } = useTranslation();
  const lang = useAppSelector((state) => state.app.lang);
  const dispatch = useAppDispatch();

  const isEng = lang === "en";
  const changeLanguage = () => {
    const lang = i18next.language === "es" ? "en" : "es";
    i18next.changeLanguage(lang);
    dispatch(setLang(lang));
  };

  const { user, isAuthenticated } = useAuth0();
  const isUser = isAuthenticated && user;
  const userName =
    (isUser && user.given_name) || user?.nickname || t("usuario");

  return (
    <nav className="nav">
      <div className="nav-logo">
        <MetaLogo />
      </div>
      <div className="nav-user">
        {isUser && user.picture && (
          <img src={user.picture} alt="user" className="nav-user-img" />
        )}
        {isUser && (
          <h2 className="nav-user-hello">
            {t("saludo")}, {userName} !
          </h2>
        )}
      </div>
      <ul className="nav-options">
        <div className="nav-xl">
          <li>
            <NavBarButton isEng={isEng} func={changeLanguage} />
          </li>
          <li>
            <NavBarButton
              Icon={isLightMode ? MdOutlineLightMode : MdLightMode}
              func={toggleLightMode}
            />
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
