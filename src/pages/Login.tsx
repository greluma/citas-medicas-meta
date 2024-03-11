import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h2>Prueba Técnica para el puesto de Front-End en Meta-Enlace</h2>
      <button onClick={() => loginWithRedirect()}>login / sign up</button>
    </div>
  );
};

export default Login;
