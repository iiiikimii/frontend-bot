import { useNavigate, useLocation } from "react-router-dom";

const MenuItem = ({ label, path, icon, isOpen }) => {
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

      <div
        style={{
          display: isOpen ? "flex" : "none",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span>{label}</span>
      </div>
    </div>
  );
};

export default MenuItem;
