import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const token = sessionStorage.getItem("authToken");

  // If there's no token, navigate to login page, otherwise render the protected route
  return token ? <>{element}</> : <Navigate to="/login" />; // Use Navigate to redirect
};

export default PrivateRoute;
