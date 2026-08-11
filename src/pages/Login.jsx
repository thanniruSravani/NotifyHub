import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");


  const handleLogin = (e) => {

    e.preventDefault();

    setError("");


    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }


    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }


    if (
      email === "student@notifyhub.com" &&
      password === "123456"
    ) {

      // Save login state
      localStorage.setItem(
        "notifyhubUser",
        email
      );

      navigate("/");

    } else {

      setError(
        "Invalid email or password. Please try again."
      );

    }

  };


  return (

    <div className="login-page">

      <div className="login-card">


        <Link
          to="/"
          className="login-logo"
        >
          🔔 Notify<span>Hub</span>
        </Link>


        <h1>
          Welcome Back 👋
        </h1>


        <p className="login-subtitle">
          Login to stay updated with your campus.
        </p>


        {error && (

          <div className="login-error">
            ⚠️ {error}
          </div>

        )}


        <form onSubmit={handleLogin}>


          {/* EMAIL */}

          <div className="form-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>


          {/* PASSWORD */}

          <div className="form-group">

            <label>
              Password
            </label>

            <div className="password-wrapper">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "🙈" : "👁️"}
              </button>

            </div>

          </div>


          <button
            type="submit"
            className="login-submit"
          >
            Login →
          </button>

        </form>


        <div className="demo-login">

          <strong>
            Demo Login
          </strong>

          <p>
            Email: student@notifyhub.com
          </p>

          <p>
            Password: 123456
          </p>

        </div>


        <Link
          to="/"
          className="back-home"
        >
          ← Back to Home
        </Link>

      </div>

    </div>

  );
}

export default Login;