import React, { useState } from "react";
import TextInput from "./TextInput";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   const validateFormFields = () => {
  //     return username.length > 0 && password.length > 0;
  //   };

  //   const handleChange = (target) => {
  //     setUsername({ [target.name]: target.value });
  //     setPassword({ [target.name]: target.value });
  //     console.log(setUsername);
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container signup-page">
      <div className="signup">
        <div className="col s12 l8">
          <div className="card-content">
            <form className="" onSubmit={handleSubmit}>
              <TextInput
                placeholder="Email"
                name="email"
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextInput
                placeholder="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
