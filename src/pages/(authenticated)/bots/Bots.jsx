import MainWrapper from "../../../components/wrapper/MainWrapper"; // Import MainWrapper

const Bots = () => {
  return (
    <MainWrapper title={"List of Bots"} description={"List of data bot that you use every time you create a comment"}>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.67 7c.083-.182.127-.374.16-.627c.202-1.572.303-2.358-.158-2.866C20.212 3 19.396 3 17.766 3H6.234c-1.63 0-2.445 0-2.906.507c-.461.508-.36 1.294-.158 2.866c.06.459.158.72.457 1.076c.969 1.15 2.742 3.197 5.23 5.057c.228.17.377.448.402.755c.28 3.425.537 5.765.674 6.917c.071.604.741 1.069 1.293.678c.927-.655 2.66-1.39 2.888-2.612c.108-.577.267-1.585.445-3.244M17.5 8v7m3.5-3.5h-7" color="#000"/></svg>
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
    </MainWrapper>
  );
};

export default Bots;
