import { useNavigate } from "react-router-dom";
import WrapperInfo from "../components/WrapperInfo";
import not_found from "../assets/images/not_found.svg";

const ErrorPage = () => {
  const navigate = useNavigate();

  function handleNavigation() {
    navigate("/");
  }

  return (
    <WrapperInfo
      func={handleNavigation}
      img={not_found}
      title="not found"
      btnText="back home"
    />
  );
};
export default ErrorPage;
