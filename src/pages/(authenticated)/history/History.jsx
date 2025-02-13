import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import api from "../../../axios/config";

const History = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    api
      .get(`/history/batch_post/20/${page}`)
      .then((response) => {
        setHasMore(response.data?.Data?.has_more || false);
        setHistory((prev) => [...prev, ...(response.data?.Data?.batch_data || [])]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching history data:", error);
        setLoading(false);
      });
  }, [page]);

  return (
    <MainWrapper title={"History"} description={"Here is what you added"}>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {/* Search Bar */}
<div style={{ position: "relative", width: "366px", display: "flex", alignItems: "center" }}>
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search Comment..."
    style={{
      flex: "1",
      height: "38px",
      paddingLeft: "30px",
      paddingRight: "45px", // Memberi ruang untuk ikon
      fontSize: "16px",
      border: "1px solid #ccc", // Warna border abu-abu
      borderRadius: "8px",
      outline: "none",
    }}
  />
  <div
    style={{
      position: "absolute",
      right: "0",
      height: "100%",
      width: "50px", // Ukuran kotak ikon
      backgroundColor: "#eee", // Warna kotak abu-abu
      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderLeft: "1px solid #ccc",
      cursor: "pointer",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      style={{ color: "#888" }} // Warna ikon abu-abu
    >
      <path d="m10 10l3.5 3.5m-2-7a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z" />
    </svg>
  </div>
</div>
        {/* History List (Two Columns) */}
<div style={{ marginTop: "20px", overflowX: "auto", width: "100%" }}>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", minWidth: "800px" }}>
    <div style={{ flex: "1", minWidth: "400px" }}>
      {history.filter((_, index) => index % 2 === 0).map((batch) => (
        <div
          key={batch.id_batch}
          style={{
            background: "#E6F2FF",
            padding: "15px",
            borderRadius: "5px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{ fontWeight: "bold", color: "#007bff", cursor: "pointer" }}
              onClick={() => navigate(`/report/${batch.id_batch}`)}
            >
              {batch.batch_name}
            </p>
            <p style={{ fontSize: "14px" }}>
              <strong>{batch.sended} Sent</strong> | {batch.target} Target
            </p>
          </div>
          <p style={{ fontSize: "14px" }}>{batch.created_at}</p>
        </div>
      ))}
    </div>

    <div style={{ flex: "1", minWidth: "400px" }}>
      {history.filter((_, index) => index % 2 !== 0).map((batch) => (
        <div
          key={batch.id_batch}
          style={{
            background: "#E6F2FF",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{ fontWeight: "bold", color: "#007bff", cursor: "pointer" }}
              onClick={() => navigate(`/report/${batch.id_batch}`)}
            >
              {batch.batch_name}
            </p>
            <p style={{ fontSize: "14px" }}>
              <strong>{batch.sended} Sent</strong> | {batch.target} Target
            </p>
          </div>
          <p style={{ fontSize: "14px" }}>{batch.created_at}</p>
        </div>
      ))}
    </div>
  </div>
</div>


        {/* Load More Button */}
        {hasMore && (
          <button onClick={() => setPage((prev) => prev + 1)} style={{ marginTop: "10px" }}>
            Load More
          </button>
        )}
      </div>
    </MainWrapper>
  );
};

export default History;
