import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li className="left">
            <Link to="/">FEMI HORRALL</Link>
          </li>

          <div className="right-group">
            <li>
              <a href="#WORKS">WORK</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}