import React from "react";
import { Navigate } from "react-router-dom";
import { useGetCurrentUserQuery } from "../../feature/auth/authApi";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isLoading, data } = useGetCurrentUserQuery("");
  const isAuthenticated = data?._id ? true : false;
  const isPrivateAuthenticated = isLoading || isAuthenticated;

  return isPrivateAuthenticated ? <>{children}</> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
