// import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import MetaLogo from "./MetaLogo";
import { BiCollapseAlt } from "react-icons/bi";
import NavBarButton from "./NavBarButton";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface NavbarProps {
  name: string;
  img: string;
  toggleSideBar: () => void;
}

const Navbar = ({ name, img, toggleSideBar }: NavbarProps) => {
  const { t } = useTranslation();
  const [lang, setLang] = useState<string>(i18next.language);
  const isEng = lang === "en";
  const changeLanguage = () => {
    const lang = i18next.language === "es" ? "en" : "es";
    i18next.changeLanguage(lang);
    setLang(lang);
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <MetaLogo />
      </div>
      <div className="nav-user">
        <img src={img} alt="user" className="nav-user-img" />
        <h2 className="nav-user-hello">
          {t("saludo")}, {name} !
        </h2>
      </div>
      <ul className="nav-options">
        <div className="nav-xl">
          <li>
            <NavBarButton isEng={isEng} func={changeLanguage} />
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
