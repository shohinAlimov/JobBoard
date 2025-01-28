import { Routes, Route } from "react-router-dom"; // ❌ No need for BrowserRouter here
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProtectedRoute from "./components/ProtectedRoute";
import RedirectIfLoggedIn from "./components/RedirectIfLoggedIn";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />

        {/* Prevent Logged-In Users from Accessing Login/Register */}
        <Route element={<RedirectIfLoggedIn />}>
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
        </Route>

        {/* Protect Dashboard: Only Logged-In Users Can Access */}
        <Route element={<ProtectedRoute />}>
          <Route path="/DashboardPage" element={<DashboardPage />} />
        </Route>

        {/* Catch All */}
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </>
  );
};

export default App;
