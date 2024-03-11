import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/css/main.css";
import "./languages/i18.js";
import AuthProvider from "./components/AuthProvider.tsx";

// cspell:disable

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
