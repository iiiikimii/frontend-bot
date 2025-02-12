import React, { useEffect, useState } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import api from "../../../axios/config";
import Swal from "sweetalert2";
import "../../../assets/button.css";

const ListBot = () => {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  const handleDelete = (botId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your bot has been deleted.", "success");
      }
    });
  };
  
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
                        display: "flex",
                        textAlign: "center",
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
                        <img src="/icons/edit.svg" alt="" />
                      </button>
                      <span className="flex items-center justify-center" style={{ color: "#2b2b2b" }}>|</span>{" "}
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => handleDelete(bot.id)}
                      >
                        <img src="/icons/trash.svg" alt="" />
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

export default ListBot;
