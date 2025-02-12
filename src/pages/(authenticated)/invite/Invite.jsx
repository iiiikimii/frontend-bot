import React, { useState } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import api from "../../../axios/config"; //import dulu axiosnya
import renderInput from "../../../components/RenderInput/RenderInput"
import renderSelectedRole from "../../../components/RenderInput/RenderSelectedRole"

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
      <div className="flex flex-col gap-4 text-left">
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          {renderInput("Email", "Email...", "email", handleChange)}
          {renderSelectedRole("Role", "role", handleChange)}
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

export default Invite;
