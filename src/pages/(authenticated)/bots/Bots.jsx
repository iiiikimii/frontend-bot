import React, { useEffect, useState } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper"; 
import api from "../../../axios/config" // ini import axios

const Bots = () => {
  const [bots, setBots] = useState([]); 
  const [loading, setLoading] = useState(true); 

  // Fetch data dari API
  useEffect(() => {
    api.get("/bots/20/0") // di sini bikin pagination
      .then((response) => {
        setBots(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching bot data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <MainWrapper title="List of Bots" description="List of data bot that you use every time you create a comment">
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {/* Status Icons */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "12px", border: "2px #143F66 solid" }}></div>
            <div style={{ width: "50px", height: "50px", borderRadius: "12px", border: "2px #143F66 solid" }}></div>
            <div style={{ width: "50px", height: "50px", borderRadius: "12px", border: "2px #143F66 solid" }}></div>
          </div>
          <div style={{ display: "flex", gap: "32px", fontSize: "20px", fontWeight: "500" }}>
            <div style={{ color: "#0D9D00", display: "flex", alignItems: "center", gap: "5px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.67 7c.083-.182.127-.374.16-.627c.202-1.572.303-2.358-.158-2.866C20.212 3 19.396 3 17.766 3H6.234c-1.63 0-2.445 0-2.906.507c-.461.508-.36 1.294-.158 2.866c.06.459.158.72.457 1.076c.969 1.15 2.742 3.197 5.23 5.057c.228.17.377.448.402.755c.28 3.425.537 5.765.674 6.917c.071.604.741 1.069 1.293.678c.927-.655 2.66-1.39 2.888-2.612c.108-.577.267-1.585.445-3.244M17.5 8v7m3.5-3.5h-7" color="#000"/></svg>
              Active
            </div>
            <div style={{ color: "#FAAB00" }}>Issue</div>
            <div style={{ color: "#D20000" }}>Non-active</div>
          </div>
        </div>

        {/* Table Header */}
        <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "500", fontSize: "18px", padding: "10px 0", borderBottom: "2px solid #143F66" }}>
          <div style={{ flex: 1 }}>Name</div>
          <div style={{ flex: 1 }}>Created At</div>
          <div style={{ flex: 1 }}>Status</div>
          <div style={{ flex: 1 }}>Action</div>
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          bots.map((bot, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #ddd" }}>
              <div style={{ flex: 1 }}>{bot.name}</div>
              <div style={{ flex: 1 }}>{new Date(bot.created_at).toLocaleDateString()}</div>
              <div style={{ flex: 1, color: bot.status === "Active" ? "#0D9D00" : bot.status === "Issue" ? "#FAAB00" : "#D20000" }}>
                {bot.status}
              </div>
              <div style={{ flex: 1 }}>
                <button style={{ padding: "5px 10px", background: "#143F66", color: "white", border: "none", borderRadius: "5px" }}>
                  Edit
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </MainWrapper>
  );
};

export default Bots;
