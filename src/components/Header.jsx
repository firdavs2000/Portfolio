import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <nav className="nav">
        <div className="container">
          <div className="nav_box">
            <Link to="/" className="nav_logo">
              <strong>Freelancer</strong> portfolio
            </Link>

            <button
              type="button"
              className="header-menu-button"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>

            <ul className={`nav_list ${menuOpen ? "open" : ""}`}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav_link active" : "nav_link"
                  }
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    isActive ? "nav_link active" : "nav_link"
                  }
                >
                  <span>Skills</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    isActive ? "nav_link active" : "nav_link"
                  }
                >
                  <span>Projects</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? "nav_link active" : "nav_link"
                  }
                >
                  <span>Contacts</span>
                </NavLink>
              </li>
              <button
                className="theme_toggle_btn"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
