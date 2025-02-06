import { useNavigate, useLocation } from "react-router-dom";

const MenuItem = ({ label, path }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === path; 

  return (
    <div
      onClick={() => navigate(path)}
      style={{
        alignSelf: "stretch",
        height: 55,
        padding: "9px 8px",
        borderRadius: 9,
        border: isActive ? "2px solid white" : "none",
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

export default MenuItem;
