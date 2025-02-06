import Sidebar from "../../../components/navigation/SideBar"; 

const Bots = () => {
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
          justifyContent: "flex-start", 
          alignItems: "flex-start", 
          padding: "30px", 
          height: "100vh",
          fontFamily: "Inter",
          position: "relative",
          marginLeft: "0px",
        }}
      >
        {/* Title Section */}
        <div
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#143F66",  
            marginBottom: "20px",
          }}
        >
          List of Bots
        </div>

        {/* Description Section */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: "500",
            color: "#2B2B2B",  
            marginBottom: "20px",
          }}
        >
          List of data bot that you use every time you create a comment
        </div>

        {/* Status Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",  
            alignItems: "center",  
            marginTop: "20px",
            width: "100%", 
          }}
        >
          {/* Icon Section (3 boxes) */}
          <div style={{ display: "flex", gap: "10px" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                border: "2px #143F66 solid",
              }}
            ></div>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                border: "2px #143F66 solid",
              }}
            ></div>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                border: "2px #143F66 solid",
              }}
            ></div>
          </div>

          {/* Status Text with Icon on the Right */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",  
              alignItems: "center",  
              gap: "32px",  
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            {/* Icon next to "Active" */}
            <div
              style={{
                width: "18.32px",
                height: "20px",
                left: "3.31px",
                top: "2px",
                position: "relative",
                border: "1.50px #292D32 solid",
                marginRight: "8px",  
              }}
            ></div>
            <div style={{ color: "#0D9D00" }}>Active</div>
            <div style={{ color: "#FAAB00" }}>Issue</div>
            <div style={{ color: "#D20000" }}>Non-active</div>
          </div>
        </div>

        {/* Section for Name, Created At, Action */}
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "space-between",
            alignItems: "center",
            display: "inline-flex",
            marginTop: "30px",  
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#143F66",
              fontSize: "20px",
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Name
          </div>
          <div
            style={{
              color: "#143F66",
              fontSize: "20px",
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Created At
          </div>
          <div
            style={{
              color: "#143F66",
              fontSize: "20px",
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Action
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bots;
