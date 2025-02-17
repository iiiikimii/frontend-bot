import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../axios/config"; 
import "./Login.css";

const Create = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi Password tidak cocok!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      formData.append("token", token);

      const response = await api.post("/account/create", formData);

      localStorage.setItem("role", response.data.Data.role);
      localStorage.setItem("name", response.data.Data.name);

      navigate("/create-comment");
    } catch (error) {
      console.error("Login error:", error);
      alert("Username atau password salah!");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className="login-left">
          <h2>Create Your Account</h2>
          <p>You need to have an invitation to create an account</p>
        </div>
        <div className="login-right">
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="username">Email</label>
              <input
                type="text"
                id="username"
                placeholder="Email..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Create Password</label>
              <input
                type="password"
                id="password"
                placeholder="Create your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password..."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="token">Invitation Token</label>
              <input
                type="text"
                id="token"
                placeholder="Enter your invitation token..."
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
            </div>

            <button type="submit" className="login-btn">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
