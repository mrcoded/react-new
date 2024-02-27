import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

export function Protected({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/auth" replace />
  } else {
    return children;
  }
}