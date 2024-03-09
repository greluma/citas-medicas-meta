import SideBarLink from "./SideBarLink";

type RouteType = {
  name: string;
  path: string;
};

type ListOfRoutes = {
  pack: string;
  list: RouteType[];
};

type SideBarItemsType = ListOfRoutes[];

const sideBarItems: SideBarItemsType = [
  {
    pack: "utils",
    list: [{ name: "mis datos", path: "/user" }],
  },
  {
    pack: "functions",
    list: [
      { name: "citas", path: "/citas" },
      { name: "farmacia", path: "/farmacia" },
      { name: "centros", path: "/centros" },
    ],
  },
  {
    pack: "system",
    list: [
      { name: "usuarios", path: "/users" },
      { name: "configuración", path: "/config" },
    ],
  },
];

const SideBar = () => {
  return (
    <div className="sidebar">
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
                      <SideBarLink name={name} path={path} />
                    </li>
                  );
                })}
              </div>
            );
          })}
        </ul>
        <div className="close-sesion-container">
          <button>cerrar sesion</button>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
