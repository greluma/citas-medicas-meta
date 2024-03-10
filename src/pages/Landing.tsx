import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useState } from "react";
import photo from "../assets/images/mano.jpg";

const Landing = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [isLightMode, setIsLightMode] = useState<boolean>(true);

  function toggleLightMode() {
    setIsLightMode(!isLightMode);
  }

  function toggleSideBar() {
    setIsSideBarOpen(!isSideBarOpen);
  }
  return (
    <Container clases={`main-container ${isLightMode && "light"}`}>
      <Navbar
        name="mano"
        img={photo}
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
