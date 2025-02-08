import React, { useEffect, useState } from "react";
import axios from "axios";
import MainWrapper from "../../../components/wrapper/MainWrapper"; // Import MainWrapper

const Bots = () => {
  const [bots, setBots] = useState([]); // State untuk menyimpan data bot
  const [loading, setLoading] = useState(true); // State untuk indikator loading

  // Fetch data dari API
  useEffect(() => {
    axios.get("https://your-api.com/api/bots") // Ganti dengan URL API yang sesuai
      .then((response) => {
        setBots(response.data); // Simpan data bot ke state
        setLoading(false); // Matikan indikator loading
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
            <div style={{ color: "#0D9D00" }}>Active</div>
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
              <div style={{ flex: 1 }}>{new Date(bot.createdAt).toLocaleDateString()}</div>
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
