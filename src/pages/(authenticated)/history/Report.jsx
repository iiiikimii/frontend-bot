import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import api from "../../../axios/config";

const Report = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(null);
  const { batchId } = useParams(); // Get batchId from URL
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (batchId) {
      api.get(`/history/post/${batchId}`)
        .then((response) => {
          setData(response.data.Data);
          console.log(response.data.Data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [batchId]);

  return (
    <MainWrapper title="History" description="Here is what your Add">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
        {/* Search and Sorting Section */}
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "925px" }}>
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
          </div>
        </div>

        {/* Report List */}
        <div style={{ marginTop: "20px", width: "100%", maxWidth: "925px" }}>
          {data ? (
            <>
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
                    onClick={() => navigate(`/report/${batchId}`)}
                  >
                    {data.batch_post_name}
                  </p>
                  <p style={{ margin: 0, fontSize: "14px" }}>
                    <strong>{data.total_post} Posts</strong> | Success: {data.total_success} | Max: {data.max}
                  </p>
                </div>
                <p style={{ margin: 0, fontSize: "14px" }}>
                  {new Date(data.created_at).toLocaleDateString()}
                </p>
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
                  {data.posts.length > 0 ? (
                    data.posts.map((post, index) => (
                      <tr key={post.id_post} style={{ borderBottom: "1px solid #ddd" }}>
                        <td style={{ padding: "10px" }}>{index + 1}</td>
                        <td style={{ padding: "10px" }}>
                          <a href={post.link_post} target="_blank" rel="noopener noreferrer">
                            {post.link_post}
                          </a>
                        </td>
                        <td style={{ padding: "10px" }}>{post.sosmed}</td>
                        <td style={{ padding: "10px" }}>{post.total_post_success}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ padding: "10px", textAlign: "center" }}>
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </MainWrapper>
  );
};

export default Report;
