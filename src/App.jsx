import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Book from "./pages/book"; 

function App() {
  const navStyle = ({ isActive }) => ({
    color: 'rgb(0, 74, 133)',
    fontWeight: isActive ? '700' : '600',
    borderBottom: isActive
      ? '2px solid rgb(0, 74, 133)'
      : '2px solid transparent',
  })

  return (
    <>
      {/* Header */}
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            {/* Logo */}
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                className="me-2"
              >
                <path
                  fill="rgb(0, 74, 133)"
                  d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16Zm3 4.5a4.5 4.5 0 1 0 0 9a1 1 0 1 0 0-2a2.5 2.5 0 1 1 0-5a1 1 0 1 0 0-2Z"
                />
              </svg>

              <strong
                style={{
                  color: 'rgb(0, 74, 133)',
                  fontSize: '1.35rem',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                }}
              >
                OCBOOK
              </strong>
            </Link>

            {/* Navigation */}
            <ul
              className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-4"
              style={{
                fontFamily: 'Arial, sans-serif',
              }}
            >
              <li>
                <NavLink
                  to="/"
                  end
                  className="nav-link px-2"
                  style={navStyle}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/book"
                  className="nav-link px-2"
                  style={navStyle}
                >
                  Book
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/team"
                  className="nav-link px-2"
                  style={navStyle}
                >
                  Team
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="nav-link px-2"
                  style={navStyle}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Search */}
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            {/* Profile */}
            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="Profile"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>

              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
      </Routes>

      {/* Footer */}
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">

          <div className="col mb-3">
            <Link
              to="/"
              className="d-flex align-items-center mb-3 text-decoration-none"
            >
              <strong
                style={{
                  color: 'rgb(0, 74, 133)',
                  fontSize: '1.5rem',
                  letterSpacing: '0.5px',
                }}
              >
                OCBOOK
              </strong>
            </Link>

            <p className="text-body-secondary">
              &copy; 2026 OCBOOK
            </p>

            <p className="text-body-secondary">
              Your place to discover great books.
            </p>
          </div>

          <div className="col mb-3"></div>

          {/* Navigation */}
          <div className="col mb-3">
            <h5 style={{ color: 'rgb(0, 74, 133)' }}>
              Navigation
            </h5>

            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 text-body-secondary">
                  Home
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link
                  to="/#book"
                  className="nav-link p-0 text-body-secondary"
                >
                  Book
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link
                  to="/team"
                  className="nav-link p-0 text-body-secondary"
                >
                  Team
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link
                  to="/contact"
                  className="nav-link p-0 text-body-secondary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col mb-3">
            <h5 style={{ color: 'rgb(0, 74, 133)' }}>
              Categories
            </h5>

            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Novel
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Technology
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Self Development
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Inspiration
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="col mb-3">
            <h5 style={{ color: 'rgb(0, 74, 133)' }}>
              Information
            </h5>

            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About OCBOOK
                </a>
              </li>

              <li className="nav-item mb-2">
                <Link
                  to="/team"
                  className="nav-link p-0 text-body-secondary"
                >
                  Our Team
                </Link>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Terms & Conditions
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App