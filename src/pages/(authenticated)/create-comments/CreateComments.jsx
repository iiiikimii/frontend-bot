import React from "react";
import Sidebar from "../../../components/navigation/SideBar";

const CreateComments = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1, marginLeft: "0px", padding: "50px", background: "white" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "56px", textAlign: "left" }}>
          <div>
            <h2 style={{ color: "#143F66", fontSize: "32px", fontWeight: "600" }}>
              Create Automation Comments
            </h2>
            <p style={{ color: "#2B2B2B", fontSize: "20px", fontWeight: "400", lineHeight: "30px" }}>
              You can fill data here and bot creating comment automatically
            </p>
          </div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              width: "150%", // Pastikan form memenuhi lebar yang tersedia
            }}
          >
            {renderInput("Name", "Name your batch comment...")}
            {renderInput("Content Link", "Place your CSV here or content link")}
            {renderInput("Comment", "Place your comment.txt here")}
            {renderInput("Count of Comment", "Type your count of comment")}
            <div style={{ color: "#0D9D00", fontSize: "16px", fontStyle: "italic" }}>Successfully</div>
            <button
              type="submit"
              style={{
                height: "50px",
                background: "#1C8CF5",
                borderRadius: "8px",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
              }}
            >
              Create Comments
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const renderInput = (label, placeholder) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "9px", width: "100%" }}>
    <label style={{ color: "#2B2B2B", fontSize: "16px" }}>{label}</label>
    <input
      style={{
        height: "50px",
        padding: "15px",
        borderRadius: "8px",
        border: "1px solid #2B2B2B",
        width: "100%", // Kotak input harus memenuhi lebar pembungkus
      }}
      placeholder={placeholder}
    />
  </div>
);

export default CreateComments;
