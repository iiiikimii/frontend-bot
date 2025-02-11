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
        <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "925px" }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Comment..."
            style={{
              width: "366px",
              height: "38px",
              paddingLeft: "40px",
              fontSize: "16px",
              border: "1px solid #1C8CF5",
              borderRadius: "27px",
              outline: "none",
            }}
          />
        </div>

        {/* History List (Two Columns) */}
        <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ flex: "1", minWidth: "400px" }}>
            {history.filter((_, index) => index % 2 === 0).map((batch) => (
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
