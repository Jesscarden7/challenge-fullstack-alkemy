import { Navigate } from "react-router-dom";
import { useContext } from "react";
import globalContext from "../context/globalContext";

export const ProtectedRoute = ({ children }) => {
  const {loggedUser} = useContext(globalContext);
  if (!loggedUser) {
    return <Navigate to="/userLogin" />;
  }
  return children;
};