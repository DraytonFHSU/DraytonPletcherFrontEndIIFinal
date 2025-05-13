import { Navigate } from "react-router-dom";
import { UserAuth } from "../components/contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}
