import React, { useState } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";

const RegisterBot = () => {
  const [socialMedia, setSocialMedia] = useState("");
  const [accountName, setAccountName] = useState("");
  const [cookie, setCookie] = useState("");

  return (
    <MainWrapper>
      <div
        style={{
          alignSelf: "stretch",
          height: "81px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          display: "flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            color: "#143F66",
            fontSize: "32px",
            fontFamily: "Inter",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          Register a Bot
        </div>
        <div
          style={{
            alignSelf: "stretch",
            color: "#2B2B2B",
            fontSize: "20px",
            fontFamily: "Inter",
            fontWeight: "400",
            lineHeight: "30px",
            wordWrap: "break-word",
          }}
        >
          You have to save cookies from the application to log in to the account as a bot
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          height: "350px",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "24px",
          display: "flex",
        }}
      >
        {/* Sosmed Input */}
        <div
          style={{
            alignSelf: "stretch",
            height: "78px",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "9px",
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "#2B2B2B",
              fontSize: "16px",
              fontFamily: "Inter",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Sosmed
          </div>
          <input
            type="text"
            placeholder="Choose social media..."
            value={socialMedia}
            onChange={(e) => setSocialMedia(e.target.value)}
            style={{
              alignSelf: "stretch",
              height: "50px",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "15px",
              paddingBottom: "15px",
              background: "white",
              borderRadius: "8px",
              border: "1px #2B2B2B solid",
              fontSize: "16px",
              color: "#7B7B7B",
            }}
          />
        </div>

        {/* Account Name Input */}
        <div
          style={{
            alignSelf: "stretch",
            height: "78px",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "9px",
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "#2B2B2B",
              fontSize: "16px",
              fontFamily: "Inter",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Account Name
          </div>
          <input
            type="text"
            placeholder="Account name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            style={{
              alignSelf: "stretch",
              height: "50px",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "15px",
              paddingBottom: "15px",
              background: "white",
              borderRadius: "8px",
              border: "1px #2B2B2B solid",
              fontSize: "16px",
              color: "#7B7B7B",
            }}
          />
        </div>

        {/* Cookie Input */}
        <div
          style={{
            alignSelf: "stretch",
            height: "90px",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "9px",
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "#2B2B2B",
              fontSize: "16px",
              fontFamily: "Inter",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Cookie
          </div>
          <textarea
            placeholder="Paste your cookie here..."
            value={cookie}
            onChange={(e) => setCookie(e.target.value)}
            style={{
              alignSelf: "stretch",
              flex: "1 1 0",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "15px",
              paddingBottom: "15px",
              background: "white",
              borderRadius: "8px",
              border: "1px #2B2B2B solid",
              fontSize: "16px",
              color: "#7B7B7B",
              resize: "none",
              height: "80px",
            }}
          />
        </div>

        {/* Error Message */}
        <div
          style={{
            alignSelf: "stretch",
            color: "#D20000",
            fontSize: "16px",
            fontFamily: "Inter",
            fontStyle: "italic",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Unable to login
        </div>
      </div>

      {/* Register Button */}
      <button
        style={{
          alignSelf: "stretch",
          height: "50px",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "15px",
          paddingBottom: "15px",
          background: "#1C8CF5",
          borderRadius: "8px",
          border: "1px #9747FF solid",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          display: "inline-flex",
          cursor: "pointer",
          color: "white",
          fontSize: "16px",
          fontFamily: "Inter",
          fontWeight: "600",
        }}
      >
        Register
      </button>
    </MainWrapper>
  );
};

export default RegisterBot;
