import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Informacion from "./pages/Informacion";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <Router>
      <Navbar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/info" element={<Informacion />} />
      </Routes>
    </Router>
  );
};
export default App;
