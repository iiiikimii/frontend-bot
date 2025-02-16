import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import api from "../../../axios/config";

const Report = () => {
  const [data, setData] = useState(null);
  const { batchId } = useParams(); // Get batchId from URL
  const navigate = useNavigate();

  useEffect(() => {
    if (batchId) {
      api
        .get(`/history/post/${batchId}`)
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
      {data ? (
        <>
          <div
            className="flex justify-between"
            style={{
              background: "#E6F2FF",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <div className="flex flex-col gap-4">
              <p
                style={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "#007bff",
                }}
                className="text-2xl"
                onClick={() => navigate(`/report/${batchId}`)}
              >
                {data.batch_data.batch_post_name}
              </p>

              <p>{data.created_at}</p>

              <div className="flex gap-4 flex-wrap">
                <div className="flex gap-2">
                  <img src="/icons/instagram.svg" alt="ig" className="w-8" />
                  <p className="text-lg">{data.accumulation.instagram} posts</p>
                </div>

                <div className="flex gap-2">
                  <img src="/icons/facebook.svg" alt="ig" className="w-8" />
                  <p className="text-lg">{data.accumulation.facebook} posts</p>
                </div>

                <div className="flex gap-2">
                  <img src="/icons/tiktok.svg" alt="ig" className="w-8" />
                  <p className="text-lg">{data.accumulation.tiktok} posts</p>
                </div>
              </div>
            </div>

            <div role="status">
              {data.processed ? (
                <img src="/icons/check.png" alt="Check" className="w-6 h-6" />
              ) : (
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-white fill-blue-500"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              )}
            </div>
          </div>

          <div>
            <button>
              Download Report
            </button>
          </div>

          <div className="w-full overflow-x-scroll">
            <table
              className="w-full"
              style={{
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr style={{ background: "#E6F2FF", textAlign: "left" }}>
                  <th style={{ padding: "10px" }}>No</th>
                  <th style={{ padding: "10px" }}>Link</th>
                  <th style={{ padding: "10px" }}>Sosmed</th>
                  <th style={{ padding: "10px" }}>Target</th>
                  <th style={{ padding: "10px" }}>Sent</th>
                  <th style={{ padding: "10px" }}>Screenshot</th>
                </tr>
              </thead>
              <tbody>
                {data.batch_data.posts ? (
                  data.batch_data.posts.map((post, index) => (
                    <tr
                      key={post.id_post}
                      style={{ borderBottom: "1px solid #ddd" }}
                    >
                      <td style={{ padding: "10px" }}>{index + 1}</td>
                      <td style={{ padding: "10px" }}>
                        <a
                          href={post.link_post}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {post.link_post}
                        </a>
                      </td>
                      <td style={{ padding: "10px" }}>{post.sosmed}</td>
                      <td style={{ padding: "10px" }}>
                        {post.total_post_success}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      style={{ padding: "10px", textAlign: "center" }}
                    >
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </MainWrapper>
  );
};

export default Report;
