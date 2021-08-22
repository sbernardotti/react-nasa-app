/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "wouter";

function Navbar() {
  return (
    <nav className="navbar" role="navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <a className="navbar-item">
              <img
                src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
                alt="react-nasa-app"
                width="32"
                height="32"
              />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
