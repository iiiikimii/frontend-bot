import { useNavigate, useLocation } from "react-router-dom";

const MenuItem = ({ label, path,icon }) => {
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
      {icon}
      <div style={{ color: "white", fontSize: 14, fontWeight: "500" }}>
        {label}
      </div>
    </div>
  );
};

export default MenuItem;
