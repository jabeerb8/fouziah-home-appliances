import React, { useState } from "react";

function Login({ switchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin} style={{ display: "inline-block" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account?{" "}
        <button onClick={switchToSignup}>Sign Up</button>
      </p>
    </div>
  );
}

export default Login;
