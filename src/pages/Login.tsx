import { useAuth0 } from "@auth0/auth0-react";
import WrapperInfo from "../components/WrapperInfo";
import login_img from "../assets/images/login.svg";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  const { t } = useTranslation();

  return (
    <WrapperInfo
      title={t("loginPage.title")}
      btnText={t("loginPage.lgBtn")}
      img={login_img}
      func={loginWithRedirect}
      desc={t("loginPage.desc")}
    />
  );
};

export default Login;
