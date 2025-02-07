import { useState } from "react"; // Import useState hook
import MainWrapper from "../../../components/wrapper/MainWrapper"; // Import MainWrapper

const History = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State untuk menyimpan nilai input

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // Update nilai state saat input berubah
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Mencegah halaman melakukan reload saat form disubmit
    console.log("Searching for:", searchQuery); // Menampilkan query pencarian di konsol
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
            justifyContent: "flex-start", // Align items at the top of the container
            alignItems: "flex-start", // Align everything to the left
            height: "100vh",
            fontFamily: "Inter",
            position: "relative",  // Ensure absolute positioned elements are relative to this container
          }}
        >
          {/* Search and Sorting Section */}
          <div style={{ width: "925px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {/* Search Bar */}
            <div style={{ width: "366px", height: "38px", position: "relative" }}>
              <div
                style={{
                  width: "366px",
                  height: "38px",
                  left: "0px",
                  top: "0px",
                  position: "absolute",
                  background: "white",
                  borderRadius: "27px",
                  border: "1px #1C8CF5 solid",
                }}
              ></div>
              <div style={{position:"absolute",padding:"7px",marginLeft:"8px"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0"/></svg>
              </div>

              {/* Input field */}
              <input
                type="text"
                value={searchQuery} // Nilai input diikat ke state
                onChange={handleSearchChange} // Update nilai state saat input berubah
                placeholder="Search Comment..."
                style={{
                  width: "100%",
                  height: "38px",
                  position: "absolute",
                  left: "49px",
                  top: "0px",
                  fontSize: "16px",
                  color: "#707377",
                  border: "none",
                  outline: "none",
                  fontFamily: "Inter",
                  fontWeight: "400",
                }}
              />
            </div>

            {/* Sorting Options */}
            <div style={{ height: "24px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div style={{ width: "24px", height: "24px", position: "relative" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.67 7c.083-.182.127-.374.16-.627c.202-1.572.303-2.358-.158-2.866C20.212 3 19.396 3 17.766 3H6.234c-1.63 0-2.445 0-2.906.507c-.461.508-.36 1.294-.158 2.866c.06.459.158.72.457 1.076c.969 1.15 2.742 3.197 5.23 5.057c.228.17.377.448.402.755c.28 3.425.537 5.765.674 6.917c.071.604.741 1.069 1.293.678c.927-.655 2.66-1.39 2.888-2.612c.108-.577.267-1.585.445-3.244M17.5 8v7m3.5-3.5h-7" color="#000"/></svg>
              </div>
              <div
                style={{
                  color: "#292D32",
                  fontSize: "16px",
                  fontFamily: "Inter",
                  fontWeight: "500",
                }}
              >
                a-z
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={handleSearchSubmit} // Panggil fungsi saat tombol ditekan
              style={{
                padding: "10px 20px",
                backgroundColor: "#1C8CF5",
                color: "white",
                borderRadius: "27px",
                border: "none",
                fontSize: "16px",
                fontFamily: "Inter",
                fontWeight: "500",
                cursor: "pointer",
                transition: "background-color 0.3s ease", // Animasi untuk hover
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1667C1")} // Hover effect
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#1C8CF5")} // Hover effect
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default History;
