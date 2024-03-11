import { Outlet, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Landing = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [isLightMode, setIsLightMode] = useState<boolean>(false);
  const { isAuthenticated, user } = useAuth0();

  function toggleLightMode() {
    setIsLightMode(!isLightMode);
  }

  function toggleSideBar() {
    setIsSideBarOpen(!isSideBarOpen);
  }

  const isUser = isAuthenticated && user;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUser) {
      console.log("no user");
      navigate("/login");
    }
  }, [isUser, navigate]);

  return (
    <Container clases={`main-container ${isLightMode && "light"}`}>
      <Navbar
        toggleSideBar={toggleSideBar}
        toggleLightMode={toggleLightMode}
        isLightMode={isLightMode}
      />
      <Container clases="content-container">
        <SideBar isSideBarOpen={isSideBarOpen} />
        <Container clases="content">
          <Outlet />
        </Container>
      </Container>
    </Container>
  );
};
export default Landing;
