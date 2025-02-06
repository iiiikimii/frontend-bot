import Sidebar from "../../../components/navigation/SideBar";  // Import Sidebar

const Bots = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          marginLeft: "300px",
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
        <div>Bots</div>
        <div style={{ fontSize: "28px", fontWeight: "500", marginTop: "10px" }}>Request</div>
      </div>
    </div>
  );
};

export default Bots;
