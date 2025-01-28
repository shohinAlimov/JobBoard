import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import authentication
import Logo from "../assets/icons/logo.svg";
import Burger from "../assets/icons/burger menu.svg";

function Header() {
  const { loggedInUser, logoutUser } = useAuth(); // Get login state & logout function

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__wrapper">
            <Link className="header__logo-link" to="/">
              <img className="header__logo-icon" src={Logo} alt="Taskify Logo" />
            </Link>

            <nav className="navigation">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "navigation__link navigation__link--active" : "navigation__link"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="navigation__item">
                  <NavLink
                    to="/AboutPage"
                    className={({ isActive }) =>
                      isActive ? "navigation__link navigation__link--active" : "navigation__link"
                    }
                  >
                    About
                  </NavLink>
                </li>
                {loggedInUser ? (
                  <>
                    <NavLink
                      to="/DashboardPage"
                      className={({ isActive }) =>
                        isActive ? "navigation__link navigation__link--active" : "navigation__link"
                      }
                    >
                      Dashboard
                    </NavLink>
                  </>
                ) : (
                  <>
                  </>
                )}
              </ul>
            </nav>
          </div>

          <div className="header__buttons">
            {loggedInUser ? (
              <>
                <button className="btn btn--secondary" onClick={logoutUser}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn--primary" to="/LoginPage">Login</Link>
                <Link className="btn btn--secondary" to="/RegisterPage">Register</Link>
              </>
            )}
          </div>

          <button className="btn header__burger-btn">
            <img className="header__burger-icon" src={Burger} width="35" height="35" alt="Burger Menu" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
