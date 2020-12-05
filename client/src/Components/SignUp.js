import React, { useState } from "react";
import TextInput from "../Components/TextInput";

// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  //   const validateFormFields = () => {
  //     return username.length > 0 && password.length > 0;
  //   };

  // const handleChange = (target) => {
  //   setFirstName({ [target.name]: target.value });
  //   setLastName({ [target.name]: target.value });
  //   setEmail({ [target.name]: target.value });
  //   setZipCode({ [target.name]: target.value });
  //   setUsername({ [target.name]: target.value });
  //   setPassword({ [target.name]: target.value });
  //   console.log(setUsername);
  // };

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
                placeholder="First Name"
                name="firstname"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                // onChange={handleChange}
              />
              <TextInput
                placeholder="Last Name"
                name="last name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextInput
                placeholder="Email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextInput
                placeholder="Username"
                name="username"
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextInput
                placeholder="Zip Code"
                name="zip code"
                type="number"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
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
}
