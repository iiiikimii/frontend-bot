import React, { useState } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";

const RegisterBot = () => {
  const [formData, setFormData] = useState({
    sosmed: "",
    accountName: "",
    cookieFile: null,
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("text-[#D20000]");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, cookieFile: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("sosmed", formData.sosmed);
    data.append("accountName", formData.accountName);
    data.append("cookie", formData.cookieFile);

    try {
      const response = await fetch("{{base}}/cookie", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (response.ok) {
        setStatusMessage("Successfully registered bot!");
        setStatusColor("text-[#008000]");
      } else {
        setStatusMessage(result.message || "Unable to login");
        setStatusColor("text-[#D20000]");
      }
    } catch (error) {
      setStatusMessage("Error connecting to server");
      setStatusColor("text-[#D20000]");
    }
  };

  return (
    <MainWrapper
      title={"Register a Bot"}
      description={"You have to save cookies from the application to log in to the account as a bot"}
    >
      <div className="flex flex-col gap-14 text-left">
        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          {renderInput("Name", "Account name", "accountName", handleChange)}
          {renderInput("Sosmed", "Choose social media...", "sosmed", handleChange)}
          {renderFileInput("Cookie", handleFileChange)}
          <div className={`text-sm italic ${statusColor}`}>{statusMessage}</div>
          <button
            type="submit"
            className="h-12 bg-[#1C8CF5] rounded-md text-white text-lg font-semibold border-none cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </MainWrapper>
  );
};

const renderInput = (label, placeholder, name, onChange) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-[#2B2B2B] text-base">{label}</label>
    <input
      name={name}
      className="h-12 px-4 py-2 text-left indent-2 rounded-lg border border-[#2B2B2B] w-full"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

const renderFileInput = (label, onChange) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-[#2B2B2B] text-base">{label}</label>
    <input
      type="file"
      className="h-12 px-4 py-2 text-left rounded-lg border border-[#2B2B2B] w-full"
      onChange={onChange}
    />
  </div>
);

export default RegisterBot;