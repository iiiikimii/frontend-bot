import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("token", token);
      formData.append("password", password);
      formData.append("confirm", confirm);

      const response = await api.post("/create", formData);

      console.log("Account created successfully:", response.data);

      navigate("/dashboard");
    } catch (error) {
      console.error("Account creation error:", error);
      alert("Failed to create account!");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <div className="login-left">
          <h2>Welcome to Selawe</h2>
          <p>Input you invitation to access the app</p>
        </div>
        <div className="login-right">
          <form onSubmit={handleCreate}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Selawe115@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="token">Token</label>
              <input
                type="password"
                name="token"
                id="token"
                placeholder="Enter your token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirm">Confirm</label>
              <input
                type="password"
                name="confirm"
                id="confirm"
                placeholder="Confirm your password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
