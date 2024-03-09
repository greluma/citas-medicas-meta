import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import photo from "./assets/images/mano.jpg";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Informacion from "./pages/Informacion";
import Landing from "./pages/Landing";
import Container from "./components/Container";

const App = () => {
  return (
    <Router>
      <Container clases="main-container">
        <Navbar name="mano" img={photo} />
        <Container clases="content-container">
          <SideBar />
          <Container clases="content">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/info" element={<Informacion />} />
            </Routes>
          </Container>
        </Container>
      </Container>
    </Router>
  );
};
export default App;
