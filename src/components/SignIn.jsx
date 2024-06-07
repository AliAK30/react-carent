import React from "react";
import { useState } from "react";
import getCookie from "../utils/getCookie";
import axios from "axios";


export default function SignIn() {

  const [token, setToken] = useState(getCookie("carent-session-token"));

  //setToken(getCookie("carent-session-token"))
  
  const signIn = async (e) => {

    e.preventDefault();

    const obj = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post("http://localhost:8080/auth/signin", obj, { withCredentials: true },)
      .then(function (response) {
        setToken(getCookie("carent-session-token"))
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const signOut = () => {
    //e.preventDefault()
    axios.get("http://localhost:8080/auth/signout", { withCredentials: true },).then((res => {
      setToken(getCookie("carent-session-token"))
    }))
  }

  return (
    <>
    {token === "" ? <form
      onSubmit={(e) => {
        signIn(e);
      }}
    >
      <label>Email address</label>
      <input type="email" id="email" placeholder="Enter email" />

      <label>Password</label>
      <input type="password" id="password" placeholder="Password" />
      <button type="submit">Sign In</button>
    </form> : <button onClick={signOut}>Signout</button>}
    </>
  );
}
