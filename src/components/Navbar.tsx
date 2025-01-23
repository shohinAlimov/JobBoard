import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink to="/" className={({ isActive }) =>
                `navigation__link ${isActive ? 'navigation__link--active' : 'navigation__link--inactive'}`
              }>
                Home
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/login" className={({ isActive }) =>
                `navigation__link ${isActive ? 'navigation__link--active' : 'navigation__link--inactive'}`
              }>
                Login
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/register" className={({ isActive }) =>
                `navigation__link ${isActive ? 'navigation__link--active' : 'navigation__link--inactive'}`
              }>
                Registration
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header >
  )
}

export default Navbar;