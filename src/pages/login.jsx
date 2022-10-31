import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setallEntry] = useState([]);
  function Email(event) {
    return setEmail(event.target.value);
  }
  function Password(event) {
    return setPassword(event.target.value);
  }
  function submitForm(event) {
    event.preventDefault();
    const newEntry = { email: email, password: password };

    setallEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }
  return (
    <div className="loginForm">
      <form action="" onSubmit={submitForm}>
        <div>
          <label className="loginText" htmlFor="email">Email</label>
          <input className="loginInput"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={Email}
          />
        </div>
        <div>
          <label className="loginText" htmlFor="password">Password</label>
          <input className="loginInput"
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={Password}
          />
        </div>
        <button className="cardBtn" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
