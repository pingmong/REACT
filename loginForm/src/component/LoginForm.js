import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({
  onSubmit,
  isValid,
  onUsernameChange,
  onPasswordChange,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    onUsernameChange(e);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    onPasswordChange(e);
  };

  const handleFocus = () => {};

  return (
    <form onSubmit={onSubmit} className="login-form">
      <input
        type="text"
        placeholder="Email"
        value={username}
        onChange={handleUsernameChange}
        onFocus={handleFocus}
        required
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        onFocus={handleFocus}
        required
        className="login-input"
      />
      <p className="login-forgot">Forgot password?</p>
      <button type="submit" className="login-submit-button">
        Login
      </button>
      {!isValid && (
        <p className="error-message">The input form is not valid.</p>
      )}
    </form>
  );
};

export default LoginForm;
