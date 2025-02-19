import React, { useState, useEffect } from "react";
import api from "../../../axios/config"; //import dulu axiosnya
import renderInput from "../../../components/RenderInput/RenderInput";
import renderSelectedRole from "../../../components/RenderInput/RenderSelectedRole";

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
    data.append("name", formData.name);
    data.append("role", formData.role);

    api.post("invite", data).then(()=>{
      window.location.reload()
    }).catch((error) => {
      setStatusMessage("Error connecting to server");
      setStatusColor("text-[#D20000]");
    })
  };

  return (
    <div className="flex flex-col gap-4 text-left">
      <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
        {renderInput("Name", "Name...", "name", handleChange)}
        {renderInput("Email", "Email...", "email", handleChange)}
        {renderSelectedRole("role", handleChange)}
        <div className={`text-sm italic ${statusColor}`}>{statusMessage}</div>
        <button
          type="submit"
          className="h-12 bg-[#1C8CF5] rounded-md text-white text-lg font-semibold border-none cursor-pointer"
        >
          Invite
        </button>
      </form>
    </div>
  );
};

export default Invite;
