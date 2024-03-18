import { Outlet, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { setUser } from "../features/appSlice";
import { useAppDispatch } from "../app/hooks";
import BackButton from "../components/BackButton";

const Landing = () => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // side bar functionality
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  function toggleSideBar() {
    setIsSideBarOpen(!isSideBarOpen);
  }

  useEffect(() => {
    // if user is not authenticated, redirect to login
    if (!isUser) {
      navigate("/login");
    } else {
      // if user is authenticated, set user data
      const { name, email, picture } = user;
      if (name && email && picture) {
        dispatch(setUser({ data: { name, email, picture } }));
      }
    }
  }, [isUser, user, navigate, dispatch]);

  return (
    <Container clases={`main-container`}>
      <Navbar toggleSideBar={toggleSideBar} />
      <Container clases="content-container">
        <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />
        <Container clases={`content ${isSideBarOpen && "content-opacity"}`}>
          <BackButton />
          <Outlet />
        </Container>
      </Container>
    </Container>
  );
};
export default Landing;
