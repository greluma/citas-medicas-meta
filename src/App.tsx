import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Landing,
  Centros,
  Citas,
  Farmacia,
  Login,
  Home,
  ErrorPage as Error,
  CitaDetail,
  About,
  // Informacion,
  // Datos,
  // Users,
  // Config,
} from "./pages";
import AuthWrapper from "./components/AuthWrapper";

const App = () => {
  return (
    <AuthWrapper>
      <ToastContainer position={"top-right"} autoClose={1500} />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />}>
            <Route element={<Home />} index={true} />
            <Route path="/centros" element={<Centros />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/citas/:citaId" element={<CitaDetail />} />
            <Route path="/farmacia" element={<Farmacia />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/user" element={<Datos />} /> */}
            {/* <Route path="/users" element={<Users />} /> */}
            {/* <Route path="/info" element={<Informacion />} /> */}
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
};
export default App;
