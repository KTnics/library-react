import React, { useState, useEffect } from "react";
import { signin } from "../api/API";


export default function Signin() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [isloggedin, setisloggedin] = useState(false);
  function signin1(e) {
    e.preventDefault();
    signin(username, password, setisloggedin);
  }
  useEffect(() => {
    setTimeout(() => {
      setisloggedin(false)
    }, 5000)
  })

  return (
    <>
      {isloggedin && <div class="alert alert-danger" role="alert">
        Username or Password wrong
      </div>}
      <h2>Signin</h2>
      <form onSubmit={signin1}>
       
          <label type='text'>Username</label>
          <input
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <br/>
      

      
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        
        <button type="submit" className="">
          Signin
        </button>
      </form>
    </>
  );
}
