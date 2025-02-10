import React, { useState } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import api from "../../../axios/config"; //import dulu axiosnya

const Invite = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("text-[#D20000]");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("email", formData.email);

    try {
      const response = await api.post("/invite", data); // Sesuaikan endpoint jika perlu
      console.log(response);
      if (response.ok) {
        setStatusMessage("Successfully invited user!");
        setStatusColor("text-[#008000]");
      } else {
        setStatusColor("text-[#D20000]");
      }
    } catch (error) {
      setStatusMessage("Error connecting to server");
      setStatusColor("text-[#D20000]");
    }
  };

  return (
    <MainWrapper
      title={"Invitation"}
      description={"Invite a user to join the app"}
    >
      <div className="flex flex-col gap-14 text-left">
        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          {renderInput("Email", "Email...", "email", handleChange)}
          <div className={`text-sm italic ${statusColor}`}>{statusMessage}</div>
          <button
            type="submit"
            className="h-12 bg-[#1C8CF5] rounded-md text-white text-lg font-semibold border-none cursor-pointer"
          >
            Invite
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
      type="email"
      name={name}
      className="h-12 px-4 py-2 text-left indent-2 rounded-lg border border-[#2B2B2B] w-full"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default Invite;
