import React, { useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {showLogin ? (
        <Login switchToSignup={() => setShowLogin(false)} />
      ) : (
        <Signup switchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;
