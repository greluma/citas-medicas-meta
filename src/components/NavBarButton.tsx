import { ElementType } from "react";

interface NavBarButtonProps {
  Icon?: ElementType;
  func?: () => void;
  isEng?: boolean;
}

const NavBarButton = ({ Icon, func, isEng }: NavBarButtonProps) => {
  return (
    <button className="navbar-btn" onClick={func}>
      {Icon && <Icon />}
      {isEng !== undefined && (
        <p>
          <span className={`${!isEng && "active-language"}`}>es</span>
          <span>/</span>
          <span className={`${isEng && "active-language"}`}>en</span>
        </p>
      )}
    </button>
  );
};
export default NavBarButton;
