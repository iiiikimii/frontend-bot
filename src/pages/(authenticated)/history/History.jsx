import { useState } from "react"; // Import useState hook
import MainWrapper from "../../../components/wrapper/MainWrapper"; // Import MainWrapper

const History = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State untuk input pencarian
  const [name, setName] = useState("");
  const [socmed, setSocmed] = useState("");
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // State untuk menampilkan error

  // Base URL API
  const base = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000"; // Sesuaikan dengan backend Anda

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !socmed || !file) {
      setErrorMessage("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("socmed", socmed);
    formData.append("cookie", file);

    try {
      const response = await fetch(`${base}/cookie`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
      setErrorMessage(""); // Hapus pesan error jika berhasil
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Error connecting to server. Please try again.");
    }
  };

  return (
    <MainWrapper title={"History"} description={"Here is what you add"}>
      <div style={{ display: "flex" }}>
        {/* Main Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            height: "100vh",
            fontFamily: "Inter",
            position: "relative",
          }}
        >
          {/* Form untuk Register Bot */}
          <form onSubmit={handleSubmit} style={{ width: "400px", marginTop: "20px" }}>
            <h2>Register a Bot</h2>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Socmed:
              <input
                type="text"
                value={socmed}
                onChange={(e) => setSocmed(e.target.value)}
                required
              />
            </label>
            <label>
              Cookie File:
              <input type="file" onChange={handleFileChange} required />
            </label>

            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <button type="submit" style={{ marginTop: "10px" }}>Register</button>
          </form>
        </div>
      </div>
    </MainWrapper>
  );
};

export default History;
