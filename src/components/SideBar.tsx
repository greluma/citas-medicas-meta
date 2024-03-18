import { useTranslation } from "react-i18next";
import SideBarLink from "./SideBarLink";
import { useAuth0 } from "@auth0/auth0-react";
import NavXlOptions from "./NavXlOptions";

type RouteType = {
  name: string;
  path: string;
};

type ListOfRoutes = {
  pack: string;
  list: RouteType[];
};

type SideBarItemsType = ListOfRoutes[];
interface SideBarProps {
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
}

const SideBar = ({ isSideBarOpen, toggleSideBar }: SideBarProps) => {
  const { logout } = useAuth0();
  const { t } = useTranslation();

  function handleLogout() {
    logout();
  }

  const sideBarItems: SideBarItemsType = [
    {
      pack: "functions",
      list: [
        { name: t("home"), path: "/" },
        { name: t("citas"), path: "/citas" },
        { name: t("farmacia"), path: "/farmacia" },
        // { name: t("centros"), path: "/centros" },
        { name: t("about"), path: "/about" },
      ],
    },
  ];

  return (
    <div className={`${isSideBarOpen && "sidebar-open"} sidebar`}>
      <div className="sidebar-content">
        <ul>
          {sideBarItems.map((item) => {
            const { list, pack } = item;
            return (
              <div key={pack} className="sidebar-content-divisor">
                {list.map((route) => {
                  const { name, path } = route;
                  return (
                    <li key={name}>
                      <SideBarLink
                        name={name}
                        path={path}
                        toggleSideBar={toggleSideBar}
                      />
                    </li>
                  );
                })}
              </div>
            );
          })}
        </ul>
        <ul className="sidebar-options">
          <NavXlOptions />
        </ul>
        <div className="close-sesion-container">
          <button onClick={handleLogout}>{t("logOut")}</button>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
