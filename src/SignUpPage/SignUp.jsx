import React from "react";
import axios from "axios";
export default function SignUp() {
  const signUp = (e) => {
    e.preventDefault;
    if (e.target.password.value === e.target.confirmPassword.value) {
      axios.post("http://localhost:8080/auth/signup", {
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        setTimeout(60)
        console.log(error);
      });;
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
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Full name</label>
        <input
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter full name"
          id="fullname"
        />
      </div>
      <div className="form-group1">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          id="email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group2">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          id="password"
        />
      </div>
      <div className="form-group3">
        <label htmlFor="exampleInputPassword1">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          id="confirmPassword"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}
