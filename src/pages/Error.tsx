import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Error Type</h2>
      <h3>back home</h3>
      <button onClick={() => navigate("/")}>Back Home</button>
    </div>
  );
};
export default ErrorPage;
