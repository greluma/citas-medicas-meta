// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/css/main.css";
import "./languages/i18.js";
import { Auth0Provider } from "@auth0/auth0-react";

// cspell:disable

// TODO: Configurar las variables de entorno
// const DOMAIN = "dev-ytd0wm6y5y2zcwbr.us.auth0.com";
// const CLIENT_ID = "nraUPR669VNjylLOCNM5j63EDtXuzQu5";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-ytd0wm6y5y2zcwbr.us.auth0.com"
    clientId="nraUPR669VNjylLOCNM5j63EDtXuzQu5"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>
  // </React.StrictMode>,
);
