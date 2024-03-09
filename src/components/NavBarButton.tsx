import { ElementType } from "react";

interface NavBarButtonProps {
  Icon?: ElementType;
  title?: string;
  func?: () => void;
}

const NavBarButton = ({ Icon, title, func }: NavBarButtonProps) => {
  return (
    <button className="navbar-btn" onClick={func}>
      {Icon && <Icon />}
      {title}
    </button>
  );
};
export default NavBarButton;
