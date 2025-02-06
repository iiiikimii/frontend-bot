import { useState } from "react"; // Import useState hook
import Sidebar from "../../../components/navigation/SideBar";  // Import Sidebar

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
    <div style={{ display: "flex" }}>
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // Align items at the top of the container
          alignItems: "flex-start", // Align everything to the left
          padding: "30px", // Adds padding for some space around the content
          height: "100vh",
          fontFamily: "Inter",
          position: "relative",  // Ensure absolute positioned elements are relative to this container
          marginLeft: "200px", // Adjusted margin to ensure content starts after the sidebar
        }}
      >
        {/* Title Section */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: "600",
            color: "#143F66",  // Set color for title
            marginBottom: "20px",
          }}
        >
          History
        </div>

        {/* Description Section */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: "400",
            color: "#2B2B2B",  // Set color for description
            marginBottom: "20px",
          }}
        >
          Here is What you Add
        </div>

        {/* Search and Sorting Section */}
        <div style={{ width: "925px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Search Bar */}
          <div style={{ width: "366px", height: "38px", position: "relative" }}>
            <div style={{
              width: "366px", height: "38px", left: "0px", top: "0px", position: "absolute", 
              background: "white", borderRadius: "27px", border: "1px #1C8CF5 solid"
            }}></div>
            <div style={{
              width: "24px", height: "24px", left: "11px", top: "7px", position: "absolute"
            }}>
              <div style={{
                width: "20px", height: "20px", left: "2px", top: "2px", position: "absolute", 
                border: "1.50px #292D32 solid"
              }}></div>
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
              <div style={{
                width: "18.32px", height: "20px", left: "3.31px", top: "2px", position: "absolute", 
                border: "1.50px #292D32 solid"
              }}></div>
            </div>
            <div style={{
              color: "#292D32", fontSize: "16px", fontFamily: "Inter", fontWeight: "500"
            }}>
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
            onMouseEnter={(e) => e.target.style.backgroundColor = "#1667C1"} // Hover effect
            onMouseLeave={(e) => e.target.style.backgroundColor = "#1C8CF5"} // Hover effect
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
