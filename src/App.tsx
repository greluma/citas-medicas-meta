import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Informacion,
  Landing,
  Datos,
  Users,
  Centros,
  Citas,
  Farmacia,
  Config,
  Login,
  Home,
} from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />}>
          <Route element={<Home />} index={true} />
          <Route path="/user" element={<Datos />} />
          <Route path="/users" element={<Users />} />
          <Route path="/centros" element={<Centros />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/farmacia" element={<Farmacia />} />
          <Route path="/config" element={<Config />} />
          <Route path="/info" element={<Informacion />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
