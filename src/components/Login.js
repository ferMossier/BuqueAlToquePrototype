import React, { useState } from "react";
import "./LoginStyles.css"

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contInvalidPass, setContInvalidPass] = useState(1);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "abcd1234", //Alfanumérico de 8 caracteres
    },
    {
      username: "user2",
      password: "abcd4321",
    }
  ];

  const errors = {
    uname: "Usuario incorrecto",
    pass: "Password incorrecto",
    blocked: "Tu cuenta ha sido bloqueada"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setContInvalidPass(contInvalidPass + 1)
        if (contInvalidPass < 3) {
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setErrorMessages({ name: "pass", message: errors.blocked });
        }
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Usuario </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Contraseña </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Log In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;