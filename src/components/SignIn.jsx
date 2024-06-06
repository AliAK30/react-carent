import React from "react";
import getCookie from "../utils/getCookie";
import axios from "axios";

export default function SignIn() {
  
  const signIn = async (e) => {

    e.preventDefault();

    const obj = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post("http://localhost:8080/auth/signin", obj)
      .then(function (response) {
        console.log(response.headers);
        console.log(document.cookie);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={(e) => {
        signIn(e);
      }}
    >
      <label>Email address</label>
      <input type="email" id="email" placeholder="Enter email" />

      <label>Password</label>
      <input type="password" id="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}
