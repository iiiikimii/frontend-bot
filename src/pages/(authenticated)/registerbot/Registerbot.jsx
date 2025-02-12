import React, { useState } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import api from "../../../axios/config"; //import dulu axiosnya
import renderInput from "../../../components/RenderInput/RenderInput";
import renderSelectedSosmed from "../../../components/RenderInput/RenderSelectedSosmed";

const RegisterBot = () => {
  const [formData, setFormData] = useState({
    sosmed: "",
    accountName: "",
    cookie: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("text-[#D20000]");

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
      const response = await api.post("/cookie", data); // pake axiosnya kim jangan cuma fetch
      console.log(response);
      if (response.ok) {
        setStatusMessage("Successfully registered bot!");
        setStatusColor("text-[#008000]");
      } else {
        // setStatusMessage(result.message || "Unable to login");
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
      description={
        "You have to save cookies from the application to log in to the account as a bot"
      }
    >
      <div className="flex flex-col text-left">
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <div className="flex w-full gap-4">
            <div className="w-full sm:w-1/2">
              {renderInput("Name", "Account name", "name", handleChange)}
            </div>
            <div className="w-full sm:w-1/2">
              {renderSelectedSosmed("Sosmed", "sosmed", handleChange)}
            </div>
          </div>
          {renderInput("Cookie", "Paste cookie here", "cookie", handleChange)}
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
export default RegisterBot;
