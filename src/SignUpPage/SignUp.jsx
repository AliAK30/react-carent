import React from "react";
export default function SignUp(){

  const afunction = () => {

  }
    return(
        <form onSubmit={afunction}>
          <div className="form-group">
    <label htmlFor="exampleInputEmail1">Full name</label>
    <input
      type="text"
      className="form-control"
      id="exampleName"
      aria-describedby="emailHelp"
      placeholder="Enter full name"
      name="fullname"
    />
    </div>
  <div className="form-group1">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"
      name="email"
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
      id="exampleInputPassword1"
      placeholder="Password"
      name="password"
    />
  </div>
  <div className="form-group3">
    <label htmlFor="exampleInputPassword1">Confirm Password</label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword2"
      placeholder="Password"
      name="confirmPassword"
    />
  </div>

  <button type="submit" className="btn btn-primary">
    Register
  </button>
</form>

    );
}