import { Auth0Provider } from "@auth0/auth0-react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const DOMAIN = import.meta.env.VITE_DOMAIN;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};
export default AuthProvider;
