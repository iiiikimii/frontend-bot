import { useNavigate } from "react-router-dom";

const MenuItem = ({ label, path }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(path)}
      style={{
        alignSelf: "stretch",
        height: 55,
        padding: "9px 8px",
        borderRadius: 9,
        border: path === "/dashboard" ? "2px white solid" : "none",
        display: "flex",
        alignItems: "center",
        gap: 9,
        cursor: "pointer",
      }}
    >
      <div style={{ width: 37, height: 37, background: "#FFFDFD", borderRadius: 7 }} />
      <div style={{ color: "white", fontSize: 20, fontFamily: "Inter", fontWeight: "500" }}>
        {label}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          width: "300px",
          height: "100vh",
          padding: "41px 21px",
          background: "#143F66",
          boxShadow: "5px 0px 27px rgba(0, 0, 0, 0.25)",
          borderRight: "2px solid #9747FF",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Header Sidebar */}
        <div style={{ width: "100%", color: "white", fontSize: 32, fontFamily: "Inter", fontWeight: "600" }}>My Bot</div>

        {/* Menu Items */}
        <div style={{ height: 390, display: "flex", flexDirection: "column", gap: 12 }}>
          <MenuItem label="Dashboard" path="/dashboard" />
          <MenuItem label="Create Comment" path="/create-comment" />
          <MenuItem label="Default Comments" path="/default-comments" />
          <MenuItem label="History" path="/history" />
          <MenuItem label="Bots" path="/bots" />
          <MenuItem label="Register a Bot" path="/register-bot" />
        </div>

        {/* Logout */}
        <MenuItem label="LogOut" path="/logout" />
      </div>

      {/* Konten Utama */}
      <div
        style={{
          flex: 1,
          marginLeft: "300px", // Memberi ruang agar tidak tertutup sidebar
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "36px",
          fontWeight: "bold",
          fontFamily: "Inter",
        }}
      >
        <div>Dashboard</div>
        <div style={{ fontSize: "28px", fontWeight: "500", marginTop: "10px" }}>Request</div>
      </div>
    </div>
  );
};

export default Dashboard;
