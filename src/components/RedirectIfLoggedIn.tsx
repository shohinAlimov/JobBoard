import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RedirectIfLoggedIn: React.FC = () => {
  const { loggedInUser } = useAuth();

  return loggedInUser ? <Navigate to="/DashboardPage" replace /> : <Outlet />;
};

export default RedirectIfLoggedIn;
