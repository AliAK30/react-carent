import React from "react";
import { useState } from "react";
import getCookie from "../utils/getCookie";
import axios from "axios";
import CarForm from "./CarForm";

export default function SignIn() {
  const [token, setToken] = useState(getCookie("carent-session-token"));
  const [user, setUser] = useState({});

  
  const signIn = async (e) => {
    e.preventDefault();

    const obj = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post("http://localhost:8080/auth/signin", obj, { withCredentials: true })
      .then(function (response) {
        setToken(getCookie("carent-session-token"));
        console.log(document.cookie)
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const signOut = () => {
    //e.preventDefault()
    axios
      .get("http://localhost:8080/auth/signout", { withCredentials: true })
      .then((res) => {
        setToken(getCookie("carent-session-token"));
      });
  };

  return (
    <>
      {token === "" ? (
        <form
          onSubmit={(e) => {
            signIn(e);
          }}
        >
          <label>Email address</label>
          <input type="email" id="email" placeholder="Enter email" />

          <label>Password</label>
          <input type="password" id="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
      ) : (
        <div>
          <CarForm id={user.id} fullname={user.fullname} token={token}/> <button onClick={signOut}>Signout</button>
        </div>
      )}
    </>
  );
}
