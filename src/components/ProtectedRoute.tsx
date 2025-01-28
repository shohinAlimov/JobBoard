import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute: React.FC = () => {
  const { loggedInUser } = useAuth();

  return loggedInUser ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
