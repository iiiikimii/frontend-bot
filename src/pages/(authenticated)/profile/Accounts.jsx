import React, { useEffect, useState } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import api from "../../../axios/config";
import Swal from "sweetalert2";
import Invite from "./Invite";
import "../../../assets/button.css";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [showBatch, setShowBatch] = useState(false);

  const handleDelete = (profileid) => {
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
      .get(`/profiles/20/${page}`)
      .then((response) => {
        console.log(response.data.Data.bots);
        setProfiles(response.data.Data.bots);
        setHasMore(response.data.Data.has_more);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        setLoading(false);
      });
  }, [page]);

  return (
    <MainWrapper title="Accounts" description="List Of Accounts">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setShowBatch(false)}
          className={`rounded ${
            !showBatch ? "bg-[#143F66] text-white" : "bg-none"
          }`}
          style={{ padding: "10px 20px" }}
        >
          Accounts
        </button>
        <button
          onClick={() => setShowBatch(true)}
          className={`rounded ${
            showBatch ? "bg-[#143F66] text-white" : "bg-none"
          }`}
          style={{ padding: "10px 20px" }}
        >
          Invite
        </button>
      </div>

      {showBatch ? (
        <Invite />
      ) : (
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
                  <th style={{ padding: "10px" }}>Username</th>
                  <th style={{ padding: "10px", textAlign: "center" }}>
                    Email
                  </th>
                  <th style={{ padding: "10px", textAlign: "center" }}>Role</th>
                  <th style={{ padding: "10px", textAlign: "center" }}>
                    Action
                  </th>
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
                  profiles.map((profile, index) => (
                    <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                      <td style={{ padding: "10px" }}>Username</td>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {profile.email}
                      </td>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {profile.role}
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
                          <img src="/icons/edit.svg" alt="" />
                        </button>
                        <span
                          className="flex items-center justify-center"
                          style={{ color: "#2b2b2b" }}
                        >
                          |
                        </span>{" "}
                        <button
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                          }}
                          onClick={() => handleDelete(profileid)}
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
            </button>
          </div>
        </div>
      )}
    </MainWrapper>
  );
};

export default Profile;
