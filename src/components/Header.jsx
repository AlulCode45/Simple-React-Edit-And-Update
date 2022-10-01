import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
            <Link to="/product" className="nav-link">
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
