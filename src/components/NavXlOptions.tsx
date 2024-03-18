import i18next from "i18next";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import NavBarButton from "./NavBarButton";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { setLang, toggleLightTheme } from "../features/appSlice";

const NavXlOptions = () => {
  const { isLightTheme, lang } = useAppSelector((state) => state.app);
  const isEng = lang === "en";
  const dispatch = useAppDispatch();

  function toggleLightMode() {
    dispatch(toggleLightTheme());
  }

  const changeLanguage = () => {
    const lang = i18next.language === "es" ? "en" : "es";
    i18next.changeLanguage(lang);
    dispatch(setLang(lang));
  };

  return (
    <div className="nav-xl">
      <li>
        <NavBarButton isEng={isEng} func={changeLanguage} />
      </li>
      <li>
        <NavBarButton
          Icon={isLightTheme ? MdOutlineLightMode : MdLightMode}
          func={toggleLightMode}
        />
      </li>
    </div>
  );
};
export default NavXlOptions;
