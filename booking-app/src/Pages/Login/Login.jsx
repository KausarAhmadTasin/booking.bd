import Navbar from "../../Components/Navbar/Navbar";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";

const Login = () => {
  const { login, logout, state } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  if (state.user) {
    navigate("/");
  }
  return (
    <>
      <Navbar />

      <div className="signup-page" id="login-page">
        <div className="signup-container" id="login-form">
          <h2 className="signup-title">Log In</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group-l ">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
            </div>
            <div className="form-group-l">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            <div className="form-group">
              <input type="submit" className="signup-btn" value="Log In" />
            </div>
          </form>
          <div className="foot-note">
            <p>Do not have an account? </p>
            <button className="log-in-recommend-btn" id="login-btn">
              {" "}
              <Link to="/signup">Create a free account</Link>{" "}
            </button>
          </div>
          <div className="social-link-container">
            <h4 className="text-with-lines">Continue with</h4>
            <div className="social-links">
              <div className="social-circle" id="google-circle">
                <FcGoogle />
              </div>
              <div className="social-circle">
                <FaFacebook id="facebook-circle" />
              </div>
              <div className="social-circle" id="github-circle">
                <VscGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
