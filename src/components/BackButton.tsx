import { IoArrowBackOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function goBack() {
    navigate(-1);
  }

  if (location.pathname === "/") {
    return null;
  }

  return (
    <button onClick={goBack} className="back-btn">
      <IoArrowBackOutline />
    </button>
  );
};
export default BackButton;
