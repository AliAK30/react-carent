import React from "react";
import { useState } from "react";
import getCookie from "../utils/getCookie";
import CarForm from "./CarForm";
import axios from "axios";
import Car from "./Car"

export default function SignIn() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [addcar, setAddcar] = useState(false)
  const [viewcars, setViewcars] = useState(null)


  
  const signIn = async (e) => {
    e.preventDefault();

    const obj = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post("http://localhost:8080/auth/signin", obj, { withCredentials: true })
      .then(function (response) {
        setToken(getCookie("carent-session-token").token);
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const signOut = async () => {
    //e.preventDefault()
    await axios
      .get("http://localhost:8080/auth/signout", { withCredentials: true })
      .then((res) => {
        setToken(getCookie("carent-session-token"));
      });
  };

  const getAllCars = async () => {
    await axios.get("http://localhost:8080/cars").then(res=> {
      setViewcars(res.data)
    }, err=>console.log(err))
  }

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
          {addcar ? <div><CarForm id={user.id} fullname={user.fullname} token={token}/> <button onClick={()=>setAddcar(!addcar)}>Go Back</button></div>:
          <div><button onClick={()=>setAddcar(!addcar)}>Add Car</button>
          <button onClick={getAllCars} >Rent Car</button></div>}
          {viewcars ? <div><Car cars={viewcars}/> <button onClick={()=>setViewcars(null)}>Go Back</button></div>:
          <div><button onClick={()=>setAddcar(!addcar)}>Add Car</button>
          <button onClick={getAllCars} >Rent Car</button></div>}
          <button onClick={signOut}>Signout</button>
        </div>
      )}
    </>
  );
}
