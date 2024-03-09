import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import photo from "./assets/images/mano.jpg";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Container from "./components/Container";

import {
  Informacion,
  Landing,
  Datos,
  Users,
  Centros,
  Citas,
  Farmacia,
  Config,
} from "./pages";

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  function toggleSideBar() {
    setIsSideBarOpen(!isSideBarOpen);
    console.log(isSideBarOpen);
  }

  return (
    <Router>
      <Container clases="main-container">
        <Navbar name="mano" img={photo} toggleSideBar={toggleSideBar} />
        <Container clases="content-container">
          <SideBar isSideBarOpen={isSideBarOpen} />
          <Container clases="content">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/user" element={<Datos />} />
              <Route path="/users" element={<Users />} />
              <Route path="/centros" element={<Centros />} />
              <Route path="/citas" element={<Citas />} />
              <Route path="/farmacia" element={<Farmacia />} />
              <Route path="/config" element={<Config />} />
              <Route path="/info" element={<Informacion />} />
            </Routes>
          </Container>
        </Container>
      </Container>
    </Router>
  );
};
export default App;
