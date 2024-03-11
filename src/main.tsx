import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/css/main.css";
import "./languages/i18.js";
import AuthProvider from "./components/AuthProvider.tsx";
import ThemeWrapper from "./components/ThemeWrapper.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

// cspell:disable

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AuthProvider>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </AuthProvider>
  </Provider>
);
