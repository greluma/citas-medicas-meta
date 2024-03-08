import MetaLogo from "./MetaLogo";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <MetaLogo />
      </div>
      <div className="nav-user">
        <img src="" alt="user" className="nav-user-img" />
        <h2>hi, mano !</h2>
      </div>
      <div className="nav-options">
        <ul className="nav-options-list">
          <li className="nav-options-li">dark</li>
          <li className="nav-options-li">lang</li>
          <li className="nav-options-li">info</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
