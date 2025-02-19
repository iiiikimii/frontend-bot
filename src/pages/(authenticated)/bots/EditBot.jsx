import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import "../../../assets/button.css";
import api from "../../../axios/config";
import renderInput from "../../../components/RenderInput/RenderInput";
import renderSelectedSosmed from "../../../components/RenderInput/RenderSelectedSosmed";
import RenderSelectedDemografi from "../../../components/RenderInput/RenderSelectedDemografi";

const EditBot = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("text-[#D20000]");
  const { id_bot } = useParams();
  const navigate = useNavigate();

  const [bots, setBots] = useState({
    id_bot: "",
    sosmed: "",
    name: "",
    demografi: "",
    has_issues: false,
    is_deleted: false,
    created_at: "",
    id_user: "",
  });

  const [formData, setFormData] = useState({
    sosmed: "",
    name: "",
    demografi: "",
    newCookie: "",
  });

  useEffect(() => {
    api
      .get(`/bot/${id_bot}`)
      .then((response) => {
        const botData = response.data.Data;
        setBots(botData);
        setFormData({
          sosmed: botData.sosmed || "",
          name: botData.name || "",
          demografi: botData.demografi || "",
          newCookie: "",
        });
      })
      .catch((error) => {
        console.error("Error fetching bot data:", error);
      });
  }, [id_bot]);

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
      const response = await api.put(`/bot/${id_bot}`, data);
      if (response.data.Success) {
        setStatusMessage("Successfully updated bot!");
        setStatusColor("text-[#008000]");
        setTimeout(() => {
          navigate("/bots");
        }, 1000);
      } else {
        setStatusMessage("Failed to update bot.");
        setStatusColor("text-[#D20000]");
      }
    } catch (error) {
      setStatusMessage("Error connecting to server");
      setStatusColor("text-[#D20000]");
    }
  };

  return (
    <MainWrapper title="Edit Bot">
      <div className="flex flex-col text-left">
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <div className="flex w-full gap-4 flex-wrap">
            <div className="sm:min-w-1/3 grow">
              {renderInput(
                "Name",
                "Account name",
                "name",
                handleChange,
                formData.name
              )}
            </div>
            <div className="sm:min-w-1/3 grow">
              {renderSelectedSosmed(
                "sosmed",
                handleChange,
                formData.sosmed
              )}
            </div>
          </div>
          <div className="flex w-full gap-4 flex-wrap">
            <div className="sm:min-w-1/3 grow">
              {renderInput(
                "Cookie",
                "Paste cookie here",
                "newCookie",
                handleChange
              )}
            </div>

            <div className="sm:min-w-1/3 grow">
              <RenderSelectedDemografi
                name="demografi"
                onChange={handleChange}
              />
            </div>
          </div>
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

export default EditBot;
