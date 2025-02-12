import React, { useEffect, useState } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import api from "../../../axios/config";

const Bots = () => {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/bots/20/${page}`)
      .then((response) => {
        setBots(response.data.Data.bots);
        setHasMore(response.data.Data.has_more);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bot data:", error);
        setLoading(false);
      });
  }, [page]);

  return (
    <MainWrapper
      title="List of Bots"
      description="List of bots used for comments."
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="flex gap-1">
          <div className="flex w-[36px] h-[36px] items-center justify-center hover:bg-[#c4d4e4] duration-300 rounded-sm" style={{padding: 5}}>
            <img className="w-full" src="/icons/instagram.svg" alt="" />
          </div>
          <div className="flex w-[36px] h-[36px] items-center justify-center hover:bg-[#c4d4e4] duration-300 rounded-sm" style={{padding: 5}}>
            <img className="w-full" src="/icons/facebook.svg" alt="" />
          </div>
          <div className="flex w-[36px] h-[36px] items-center justify-center hover:bg-[#c4d4e4] duration-300 rounded-sm" style={{padding: 5}}>
            <img className="w-full" src="/icons/tiktok.svg" alt="" />
          </div>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        {/* Table Container */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr
                style={{
                  backgroundColor: "#143F66",
                  color: "white",
                  textAlign: "left",
                }}
              >
                <th style={{ padding: "10px" }}>Name</th>
                <th style={{ padding: "10px", textAlign: "center" }}>Sosmed</th>
                <th style={{ padding: "10px", textAlign: "center" }}>Status</th>
                <th style={{ padding: "10px", textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="4"
                    style={{ textAlign: "center", padding: "20px" }}
                  >
                    Loading...
                  </td>
                </tr>
              ) : (
                bots.map((bot, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                    <td style={{ padding: "10px" }}>{bot.account_name}</td>
                    <td style={{ padding: "10px", textAlign: "center" }}>
                      {bot.sosmed}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "center",
                        color:
                          bot.status === "Active"
                            ? "#0D9D00"
                            : bot.status === "Issue"
                            ? "#FAAB00"
                            : "#D20000",
                      }}
                    >
                      {bot.status}
                    </td>
                    <td
                      style={{
                        padding: "10px",
                        textAlign: "center",
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#035200"
                            d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
                          />
                        </svg>
                      </button>
                      <span style={{ margin: "0 8px", color: "#666" }}>|</span>{" "}
                      {/* Pemisah | */}
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#760000"
                            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
            style={{
              marginRight: "10px",
              padding: "10px",
              background: page === 0 ? "#ccc" : "#143F66",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: page === 0 ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M17.25 4.336v15.328L9.586 12zM8.5 5v14h-2V5zm3.914 7l2.836 2.836V9.164z"
              />
            </svg>
            Previous
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!hasMore}
            style={{
              padding: "10px",
              background: !hasMore ? "#ccc" : "#143F66",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: !hasMore ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M6.75 4.336L14.414 12L6.75 19.664zM17.5 5v14h-2V5zM8.75 9.164v5.672L11.586 12z"
              />
            </svg>
          </button>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Bots;
