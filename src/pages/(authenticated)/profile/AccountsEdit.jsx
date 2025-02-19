import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import api from "../../../axios/config";
import renderInput from "../../../components/RenderInput/RenderInput";
import renderSelectedRole from "../../../components/RenderInput/RenderSelectedRole";

const EditAccount = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("text-[#D20000]");
  const { id_user } = useParams();

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    role: "",
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await api.put(`/profile/${id_user}`, data);
      if (response.status === 200) {
        setStatusMessage("Successfully updated user!");
        setStatusColor("text-[#008000]");
      } else {
        setStatusMessage("Failed to update user.");
        setStatusColor("text-[#D20000]");
      }
    } catch (error) {
      setStatusMessage("Error connecting to server");
      setStatusColor("text-[#D20000]");
    }
  };

  useEffect(() => {
    api
      .get(`/profile/${id_user}`)
      .then((response) => {
        const profileData = response.data.Data;
        setFormData({
          name: profileData.name || "",
          email: profileData.email || "",
          role: profileData.role || "",
        });
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, [id_user]); // Added dependency array

  return (
    <MainWrapper
      title="Edit Account"
      description="If you have wrong data, you can change here"
    >
      <div className="flex flex-col gap-4 text-left">
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          {renderInput("Name", "Name...", "name", handleChange, formData.name)}
          {renderInput("Email", "Email...", "email", handleChange, formData.email)}
          {renderSelectedRole("role", handleChange, formData.role)}
          <div className={`text-sm italic ${statusColor}`}>{statusMessage}</div>
          <button
            type="submit"
            className="h-12 bg-[#1C8CF5] rounded-md text-white text-lg font-semibold border-none cursor-pointer"
          >
            Update
          </button>
        </form>
      </div>
    </MainWrapper>
  );
};

export default EditAccount;
