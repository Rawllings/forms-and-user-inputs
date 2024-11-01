import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassowrd] = useState("");

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const emailIsInvalid =
    enteredValues.email !== "" && !enteredValues.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredValues);
    // console.log("User password: " + enteredValues);

    // setEnteredValues({
    //   email: "",
    //   password: "",
    // });
  }

  function handleChangeInput(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePassowrdChange(event) {
  //   setEnteredPassowrd(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => handleChangeInput("email", e.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleChangeInput("password", e.target.value)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
