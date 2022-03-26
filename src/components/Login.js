import React from "react";
import "./Login.css";

const Login = () => {
  const register = () => {};
  const loginToApp = () => {};
  return (
    <div className="login">
      <img src="logo512.png" alt="logo" />
      <form>
        <input type="text" placeholder="Full name (required if registering)" />
        <input type="text" placeholder="Profile pic Url (optional)" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span onClick={register} className="login__register">
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
