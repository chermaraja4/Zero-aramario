import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
  const isLoggeIn = localStorage.getItem("localtoken") ? true : false;
  return isLoggeIn ? props.children : <Navigate to="/login" replace />;
}

export default PrivateRoute;  
