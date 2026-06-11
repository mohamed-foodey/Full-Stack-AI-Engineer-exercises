import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome {username}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />

           <label htmlFor="Password">Password</label>
            <input 
            type="password" 
            id="Password" required 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             />


          <br />

          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;