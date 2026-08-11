import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const loggedInUser =
    localStorage.getItem("notifyhubUser");


  const handleLogout = () => {

    localStorage.removeItem("notifyhubUser");

    navigate("/login");

  };


  return (

    <nav className="navbar">


      {/* LOGO */}

      <Link
        to="/"
        className="logo"
      >

        <div className="logo-icon">
          🔔
        </div>

        <div>

          <h2>
            Notify<span>Hub</span>
          </h2>

          <p>
            SMART CAMPUS
          </p>

        </div>

      </Link>


      {/* NAVIGATION */}

      <div className="nav-links">

        <a href="/#home">
          Home
        </a>

        <a href="/#announcements">
          Announcements
        </a>

        <a href="/#features">
          Features
        </a>

        <a href="/#about">
          About
        </a>


        {loggedInUser ? (

          <button
            className="login-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        ) : (

          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>

        )}

      </div>

    </nav>

  );
}

export default Navbar;