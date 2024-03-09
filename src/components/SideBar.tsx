const sideBarItems = [
  {
    pack: "utils",
    list: [
      { name: "mis datos", path: "/user" },
      { name: "usuarios", path: "/users" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    pack: "functions",
    list: [
      { name: "citas", path: "/citas" },
      { name: "farmacia", path: "/farmacia" },
    ],
  },
  {
    pack: "system",
    list: [{ name: "configuración", path: "/config" }],
  },
];

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
        <div>
          <button>cerrar sesion</button>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
