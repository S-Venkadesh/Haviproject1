import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <h2>Welcome to login page</h2>
      <input type="text" placeholder="username"></input><br />
      <input type="password" placeholder="password"></input><br />
      <button>sumbit</button>
    </div>
  );
}