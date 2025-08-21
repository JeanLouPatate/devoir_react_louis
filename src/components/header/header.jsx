import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="w-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-black-transparent fixed-top w-100">
        <div className="container-fluid">
          <span className="navbar-brand">JOHN DOE</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" end>
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">
                  SERVICES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className="nav-link">
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  CONTACT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/mentionslegales" className="nav-link">
                  MENTIONS LEGALES
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
