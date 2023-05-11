import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
  const userToken = localStorage.getItem("accessToken");

  if (userToken != null && userToken !== "undefined") {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
