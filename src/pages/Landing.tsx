import { Outlet, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { setUser, toggleLightTheme } from "../features/appSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const Landing = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const { isAuthenticated, user } = useAuth0();

  const dispatch = useAppDispatch();
  const isLightMode = useAppSelector((state) => state.app.isLightTheme);

  function toggleLightMode() {
    dispatch(toggleLightTheme());
  }

  function toggleSideBar() {
    setIsSideBarOpen(!isSideBarOpen);
  }

  const isUser = isAuthenticated && user;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUser) {
      navigate("/login");
    } else {
      const { name, email, picture } = user;
      if (name && email && picture) {
        dispatch(setUser({ data: { name, email, picture } }));
      }
    }
  }, []);

  return (
    <Container clases={`main-container`}>
      <Navbar
        toggleSideBar={toggleSideBar}
        toggleLightMode={toggleLightMode}
        isLightMode={isLightMode}
      />
      <Container clases="content-container">
        <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
        <Container clases={`content ${isSideBarOpen && "content-opacity"}`}>
          <Outlet />
        </Container>
      </Container>
    </Container>
  );
};
export default Landing;
