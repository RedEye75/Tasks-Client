import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user && user.uid) {
    return children;
  }
  return (
    <Navigate to={"/signIn"} state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoutes;
