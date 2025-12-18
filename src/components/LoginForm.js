import React, { useState } from "react";
import Layout from "./layout.jpg"

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="app-title" align="center">MovieZone</h1>
        <p className="app-subtitle" align="center">Sign in to book your favourite movies</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Username</label>
            <input
              type="email"
              placeholder="you@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <button type="submit" className="primary-btn full-width">
            Continue →
          </button>
        </form>
      </div>
    </div>
  );
}
