'use client';
import React, { useState } from 'react';
import '../../styles/login.css';

export default function LoginPage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="login-container">
      <div
        className={`box ${hovered ? 'hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="login-content">
          {hovered ? (
            <>
              <input type="text" placeholder="Username" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <button className="btn">Sign In</button>
              <a href="#" className="forgot">Forgot Password?</a>
            </>
          ) : (
            <h2 className="login-title">Login</h2>
          )}
        </div>
      </div>
    </div>
  );
}
