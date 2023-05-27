import React from "react";
import { Navigate } from "react-router-dom";
import { useGetCurrentUserQuery } from "../../feature/auth/authApi";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isLoading, data } = useGetCurrentUserQuery("");
  const isAuthenticated = data?._id ? true : false;
  const isPublicAuthenticated = !isLoading && isAuthenticated;
  return isPublicAuthenticated ? <Navigate to={"/"} /> : <>{children}</>;
};

export default PublicRoute;
