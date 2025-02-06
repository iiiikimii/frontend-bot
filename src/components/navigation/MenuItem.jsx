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
        padding: "10px",
        borderRadius: 9,
        backgroundColor: isActive ? "#20619E" : "#123A5E",
        display: "flex",
        alignItems: "center",
        gap: 9,
        cursor: "pointer",
      }}
      className="hover:bg-[#11487C]"
    >
      <div style={{ width: 22, height: 22, background: "#FFFDFD", borderRadius: 7 }} />
      <div style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
        {label}
      </div>
    </div>
  );
};

export default MenuItem;
