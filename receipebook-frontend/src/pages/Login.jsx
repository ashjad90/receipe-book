import React, { useContext, useRef } from "react";
import "../styles/pages/login.scss";
import AuthContext from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input";

function Login() {
  const nameRef = useRef(null);
  const passRef = useRef(null);
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    if(!nameRef.current.value) {
      nameRef.current.focus();
    } else if(!passRef.current.value) {
      passRef.current.focus();
    } else {
      context.loginHandler();
      navigate("/receipe-list");
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            id="username"
            name="username"
            required
            ref={nameRef}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            ref={passRef}
          />
        </div>
        <button type="submit" onClick={loginHandler}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
