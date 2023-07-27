import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component, ...rest }) => {
  const token = localStorage.getItem("access_token");
  console.log(token);
  return token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
