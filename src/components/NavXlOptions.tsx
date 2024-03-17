import i18next from "i18next";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import NavBarButton from "./NavBarButton";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { setLang, toggleLightTheme } from "../features/appSlice";

const NavXlOptions = () => {
  const isLightMode = useAppSelector((state) => state.app.isLightTheme);

  function toggleLightMode() {
    dispatch(toggleLightTheme());
  }
  const lang = useAppSelector((state) => state.app.lang);
  const dispatch = useAppDispatch();
  const isEng = lang === "en";

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
          Icon={isLightMode ? MdOutlineLightMode : MdLightMode}
          func={toggleLightMode}
        />
      </li>
    </div>
  );
};
export default NavXlOptions;
