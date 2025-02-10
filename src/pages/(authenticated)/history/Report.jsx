import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";

const Report = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <MainWrapper title={"History"} description={"Here is what your Add"}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
        {/* Search and Sorting Section */}
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "925px" }}>
          {/* Search Bar */}
          <div style={{ width: "366px", height: "38px", position: "relative" }}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search Report..."
              style={{
                width: "100%",
                height: "38px",
                paddingLeft: "40px",
                fontSize: "16px",
                color: "#707377",
                border: "1px solid #1C8CF5",
                borderRadius: "27px",
                outline: "none",
                fontFamily: "Inter",
              }}
            />
            <div style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0"
                />
              </svg>
            </div>
          </div>

          {/* Sorting Options */}
          <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20.67 7c.083-.182.127-.374.16-.627c.202-1.572.303-2.358-.158-2.866C20.212 3 19.396 3 17.766 3H6.234c-1.63 0-2.445 0-2.906.507c-.461.508-.36 1.294-.158 2.866c.06.459.158.72.457 1.076c.969 1.15 2.742 3.197 5.23 5.057c.228.17.377.448.402.755c.28 3.425.537 5.765.674 6.917c.071.604.741 1.069 1.293.678c.927-.655 2.66-1.39 2.888-2.612c.108-.577.267-1.585.445-3.244M17.5 8v7m3.5-3.5h-7"
                color="#000"
              />
            </svg>
            <span style={{ marginLeft: "5px", fontSize: "16px", fontWeight: "500" }}>a-z</span>
          </div>
        </div>

        {/* Report List */}
        <div style={{ marginTop: "20px", width: "100%", maxWidth: "925px" }}>
          <div
            style={{
              background: "#E6F2FF",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{ fontWeight: "bold", margin: 0, cursor: "pointer", color: "#007bff" }}
                onClick={() => navigate("/report")}
              >
                Name of batch Comment
              </p>
              <p style={{ margin: 0, fontSize: "14px" }}>
                <strong>32 Comments</strong> | 2 Facebook | 2 Twitter | 3 Instagram
              </p>
            </div>
            <p style={{ margin: 0, fontSize: "14px" }}>21 December 2024</p>
          </div>

          {/* Table Section */}
          <table style={{ width: "100%", borderCollapse: "collapse", maxWidth: "925px" }}>
            <thead>
              <tr style={{ background: "#E6F2FF", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>No</th>
                <th style={{ padding: "10px" }}>Link</th>
                <th style={{ padding: "10px" }}>Sosmed</th>
                <th style={{ padding: "10px" }}>Total Comment Sent</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((num) => (
                <tr key={num} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "10px" }}>{num}</td>
                  <td style={{ padding: "10px" }}>https://example.com</td>
                  <td style={{ padding: "10px" }}>Facebook</td>
                  <td style={{ padding: "10px" }}>50</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Report;