import { useAuth0 } from "@auth0/auth0-react";
import WrapperInfo from "./WrapperInfo";
import bug_img from "../assets/images/error.svg";
import Loader from "./Loader";
interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <WrapperInfo desc={error.message} img={bug_img} title="error" />;
  }
  return <>{children}</>;
};
export default AuthWrapper;
