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
    const fetchData = () => {
      setLoading(true);
      api
        .get(`/history/batch_post/20/${page}`)
        .then((response) => {
          setHasMore(response.data?.Data?.has_more || false);
          // Make sure to always replace the history, not append
          setHistory([...response.data?.Data?.batch_data] || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching history data:", error);
          setLoading(false);
        });
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData(); // Refresh data every 5 seconds
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [page]);

  return (
    <MainWrapper title={"History"} description={"Here is what you added"}>
      {/* <div
        style={{
          position: "relative",
          width: "360px",
          maxWidth: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Comment..."
          style={{
            flex: "1",
            height: "38px",
            paddingLeft: "30px",
            paddingRight: "45px",
            fontSize: "16px",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "0",
            height: "100%",
            width: "50px",
            backgroundColor: "#eee",
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
            style={{ color: "#888" }}
          >
            <path d="m10 10l3.5 3.5m-2-7a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z" />
          </svg>
        </div>
      </div> */}

      <div className="flex w-full">
        <div className="flex gap-4 w-full flex-wrap">
          {history.map((batch) => (
            <div
              key={batch.id_batch}
              style={{
                background: "#E6F2FF",
                padding: "15px",
                borderRadius: "5px",
                display: "flex",
                gap: "20px",
                justifyContent: "space-between",
              }}
              className="grow w-full lg:w-[360px]"
            >
              <div className="flex flex-col gap-2 text-xl">
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#007bff",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/report/${batch.id_batch}`)}
                >
                  {batch.batch_name}
                </p>

                <p style={{ fontSize: "14px" }}>{batch.created_at}</p>

                {!batch.processed && (
                  <p style={{ fontSize: "14px" }}>
                    <strong className="text-yellow-500">Target:</strong>{" "}
                    {batch.target}
                  </p>
                )}

                <p style={{ fontSize: "14px" }}>
                  <strong className="text-green-800">Success:</strong>{" "}
                  {batch.sended}
                </p>

                {batch.failed > 0 && batch.processed && (
                  <p style={{ fontSize: "14px" }}>
                    <strong className="text-red-700">Failed:</strong>{" "}
                    {batch.failed}
                  </p>
                )}
              </div>

              <div role="status">
                {batch.processed ? (
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
          ))}
        </div>
      </div>

      {/* Load More Button */}
      {hasMore && (
        <button
          onClick={() => setPage((prev) => prev + 1)}
          style={{ marginTop: "10px" }}
        >
          Load More
        </button>
      )}
    </MainWrapper>
  );
};

export default History;
