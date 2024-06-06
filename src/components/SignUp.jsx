import React from "react";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {

  const signUp = (e) => {
    
    e.preventDefault();

    const obj = {
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };

    if (e.target.password.value === e.target.confirmPassword.value) {
      axios
        .post("http://localhost:8080/auth/signup", obj)
        .then(function (response) {
          console.log(`${response.data.fullname} registered successfully!`);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("password not same");
    }
  };
  return (
    <form
      onSubmit={(e) => {
        signUp(e);
      }}
    >
      <label>Full name</label>
      <input type="text" placeholder="Enter full name" id="fullname" />

      <label>Email address</label>
      <input type="email" placeholder="Enter email" id="email" />

      <label>Password</label>
      <input type="password" placeholder="Password" id="password" />

      <label>Confirm Password</label>
      <input type="password" placeholder="Password" id="confirmPassword" />

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}
