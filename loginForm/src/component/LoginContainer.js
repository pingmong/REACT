// LoginContainer.js

import React, { useState } from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import Footer from "./Footer";

const LoginContainer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 5 || password.length < 5) {
      setIsValid(false);
    } else {
      setIsValid(true);
      console.log("Username:", username);
      console.log("Password:", password);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <Header />
        <h2 className="login-account">Login to your account</h2>
        <LoginForm
          onSubmit={handleSubmit}
          isValid={isValid}
          onUsernameChange={handleUsernameChange}
          onPasswordChange={handlePasswordChange}
        />

        <Footer />
      </div>
    </div>
  );
};

export default LoginContainer;
