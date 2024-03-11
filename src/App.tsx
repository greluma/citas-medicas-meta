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
  ErrorPage as Error,
} from "./pages";
import AuthWrapper from "./components/AuthWrapper";

const App = () => {
  return (
    <AuthWrapper>
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
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
};
export default App;
