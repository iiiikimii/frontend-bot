import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../axios/config";
import Swal from "sweetalert2";
import "../../../assets/button.css";


const ListBot = () => {
  const navigate = useNavigate();

  // 

  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [activeSosmed, setActiveSosmed] = useState("all");
  const [isActive, setIsActive] = useState(true);

  // 

  const sosmed = [
    { sosmed: "all", icon: "", label: "All" },
    { sosmed: "instagram", icon: "/icons/instagram.svg", label: "Instagram" },
    { sosmed: "facebook", icon: "/icons/facebook.svg", label: "Facebook" },
    { sosmed: "tiktok", icon: "/icons/tiktok.svg", label: "Tiktok" },
  ];

  // 
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
        api.delete(`/bot/${botId}`).then(() => {
          setBots((prev) => prev.filter((bot) => bot.id_bot !== botId)); // Langsung hilangkan dari state
          Swal.fire("Deleted!", "Your bot has been deleted.", "success");
        });
      }
    });
  };

  // 
  
  useEffect(() => {
    setLoading(true);
    const status = isActive === null ? "" : isActive ? "1" : "0";
    api
      .get(`/bots/${activeSosmed}/${status}/25/${page}`)
      .then((response) => {
        setBots(response.data.Data.bots);
        setHasMore(response.data.Data.has_more);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bot data:", error);
        setLoading(false);
        console.log("no data");
      });
  }, [page, activeSosmed, isActive]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="flex gap-1 items-center">
          {sosmed.map((item) => (
            <div
              key={item.sosmed}
              className={`flex w-[36px] h-[36px] items-center justify-center hover:bg-[#c4d4e4] duration-300 rounded-sm ${
                activeSosmed === item.sosmed ? "bg-[#c4d4e4]" : ""
              }`}
              style={{ padding: 5, cursor: "pointer" }}
              onClick={() => {
                setActiveSosmed(item.sosmed);
                setPage(0);
              }}
            >
              {item.icon ? (
                <img className="w-full" src={item.icon} alt={item.label} />
              ) : (
                <p className="text-lg">{item.label}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <div
            className={`flex h-[36px] items-center justify-center hover:bg-[#c4d4e4] duration-300 rounded-sm ${
              isActive === false ? "bg-[#c4d4e4]" : ""
            }`}
            style={{ padding: 5, cursor: "pointer" }}
            onClick={() => setIsActive(false)}
          >
            <p>Inactive</p>
          </div>

          <div
            className={`flex h-[36px] items-center justify-center hover:bg-[#c4d4e4] duration-300 rounded-sm ${
              isActive === true ? "bg-[#c4d4e4]" : ""
            }`}
            style={{ padding: 5, cursor: "pointer" }}
            onClick={() => setIsActive(true)}
          >
            <p>Active</p>
          </div>
        </div>
      </div>

      <div style={{ width: "100%" }}>
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
              ) : bots ? (
                bots.map((bot, index) => (
                  <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                    <td style={{ padding: "10px" }}>{bot.account_name}</td>
                    <td style={{ padding: "10px", textAlign: "center" }}>
                      {bot.sosmed}
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

                        onClick={() => navigate(`/bot/${bot.id_bot}`)}
                      >
                        <img src="/icons/edit.svg" alt="Edit" />
                      </button>
                      <span
                        className="flex items-center justify-center"
                        style={{ color: "#2b2b2b" }}
                      >
                        |
                      </span>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => handleDelete(bot.id_bot)}
                      >
                        <img src="/icons/trash.svg" alt="Delete" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      color: "#888",
                    }}
                  >
                    😢 No bots found. Maybe they are on vacation...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
          style={{
            padding: "10px 15px",
            margin: "0 5px",
            cursor: page === 0 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => (hasMore ? prev + 1 : prev))}
          disabled={!hasMore}
          style={{
            padding: "10px 15px",
            margin: "0 5px",
            cursor: !hasMore ? "not-allowed" : "pointer",
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ListBot;
