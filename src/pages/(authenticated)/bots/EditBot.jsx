import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import "../../../assets/button.css";
import api from "../../../axios/config"; //import dulu axiosnya
import renderInput from "../../../components/RenderInput/RenderInput";
import renderSelectedSosmed from "../../../components/RenderInput/RenderSelectedSosmed";

const EditBot = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("text-[#D20000]");
  const { id_bot } = useParams();
  const navigate = useNavigate();

  const [bots, setBots] = useState({
    id_bot: "",
    sosmed: "",
    name: "",
    has_issues: false,
    is_deleted: false,
    created_at: "",
    id_user: "",
  });

  const [formData, setFormData] = useState({
    sosmed: "",
    name: "",
    newCookie: "",
  });

  //

  useEffect(() => {
    api
      .get(`/bot/${id_bot}`)
      .then((response) => {
        const botData = response.data.Data;
        setBots(botData);
        setFormData({
          sosmed: botData.sosmed || "",
          name: botData.name || "",
          newCookie: "", // Leave empty as it's for new input
        });
        console.log(botData);
      })
      .catch((error) => {
        console.error("Error fetching bot data:", error);
        console.log("no data");
      });
  }, [id_bot]);
  
  //

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  //

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await api.put(`/bot/${id_bot}`, data);
      console.log(response);
      if (response.data.Success) {
        setStatusMessage("Successfully registered bot!");
        setStatusColor("text-[#008000]");
        setTimeout(() => {
          navigate("/bots");
        }, 1000);
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
    <MainWrapper title="Edit Bot" description={`Editing Bot: ${id_bot}`}>
      <div className="flex flex-col text-left">
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <div className="flex w-full gap-4 flex-wrap">
            <div className="sm:min-w-1/3 grow">
            {renderInput("Name", "Account name", "name", handleChange, formData.name)}
            </div>
            <div className="sm:min-w-1/3 grow">
              {renderSelectedSosmed("Sosmed", "sosmed", handleChange, formData.sosmed)}
            </div>
          </div>
          {renderInput("Cookie", "Paste cookie here", "newCookie", handleChange)}
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

export default EditBot;
