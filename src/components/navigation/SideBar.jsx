import MenuItem from "./MenuItem";

const Sidebar = () => {
  return (
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
      <div style={{ width: "100%", color: "white", fontSize: 32, fontFamily: "Inter", fontWeight: "600" }}>
        My Bot
      </div>

      <div
        style={{
          width: "100%",
          marginBottom: 10,
        }}
      >
        <MenuItem
          label="Create Comment"
          path="/create-comment"
          style={{
            backgroundColor: "#2F6FB3", 
            color: "white", 
            fontWeight: "600", 
            fontSize: "22px", 
          }}
        />
      </div>

      <div style={{ height: 390, display: "flex", flexDirection: "column", gap: 12 }}>
        <MenuItem label="Dashboard" path="/dashboard" />
        <MenuItem label="History" path="/history" />
        <MenuItem label="Bots" path="/bots" />
      </div>

      {/* Logout */}
      <MenuItem label="LogOut" path="/logout" />
    </div>
  );
};

export default Sidebar;
