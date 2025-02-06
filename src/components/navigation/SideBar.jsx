import MenuItem from "./MenuItem";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div
      style={{
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        minWidth: "300px",
        height: "100vh",
        padding: "18px",
        background: "#143F66",
        boxShadow: "5px 0px 27px rgba(0, 0, 0, 0.25)",
        justifyContent: "space-between",
        alignItems: "flex-start",
        overflowY: "scroll",
        gap: 30,
      }}
    >
      <div className="flex flex-col w-full">
        <div
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "600",
            marginBottom: 30,
          }}
        >
          My Bot
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            color: "white",
          }}
        >
          <p className="text-md font-semibold">Dashboard</p>
          <div className="flex flex-col gap-2">
            <MenuItem label="Dashboard" path="/dashboard" />
          </div>

          <p className="text-md font-semibold text-white">Comment</p>
          <div className="flex flex-col gap-2">
            <MenuItem label="Process Comments" path="/create-comment" />
            <MenuItem label="History" path="/history" />
          </div>

          <p className="text-md font-semibold">Bots</p>
          <div className="flex flex-col gap-2">
            <MenuItem label="Bots" path="/bots" />
            <MenuItem label="Register Bot" path="#" />
          </div>

          <p className="text-md font-semibold">Accounts</p>
          <div className="flex flex-col gap-2">
            <MenuItem label="Profile" path="#" />
            <MenuItem label="Accounts" path="#" />
            <MenuItem label="Invite" path="#" />
          </div>
        </div>
      </div>

      {/* Logout */}
      <MenuItem label="LogOut" path="/logout" />
    </div>
  );
};

export default Sidebar;
