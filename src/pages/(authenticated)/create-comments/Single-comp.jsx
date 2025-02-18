import React, { useState } from "react";
import renderInput from "../../../components/RenderInput/RenderInput";
import renderNumberInput from "../../../components/RenderInput/RenderNumberInput";
import renderFileInput from "../../../components/RenderInput/RenderFileInput";
import api from "../../../axios/config";
import renderSelectedPostType from "../../../components/RenderInput/RenderSelectedPostType";
import renderSelectedSosmed from "../../../components/RenderInput/RenderSelectedSosmed";

const SingleComp = () => {
  const [formData, setFormData] = useState({
    comments: "",
    link: "",
    sosmed: "",
    post_type: "",
    maximum: "",
    total_laporan: "",
    batch_post_name: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await api.post("/post", data);
      setMessage("Successfully created comments!");
      console.log(response.data);
    } catch (error) {
      setMessage("Failed to create comments.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-14 text-left">
      <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
        {renderInput(
          "Title",
          "Title of your comment...",
          "batch_post_name",
          handleChange
        )}

        <div className="flex w-full gap-4 flex-wrap">
          <div className="w-full sm:w-1/3 grow">
            {renderInput(
              "Link Content",
              "Paste your link here...",
              "link",
              handleChange
            )}
          </div>

          <div className="w-full sm:w-1/3 grow">
            {renderFileInput(
              "Comment Txt",
              "Place your txt here...",
              "comments",
              handleChange
            )}
          </div>
        </div>

        <div className="flex w-full gap-4 flex-wrap">
          <div className="w-full sm:w-1/3 grow">
            {renderSelectedSosmed("Social Media", "Social Media", handleChange)}
          </div>

          <div className="w-full sm:w-1/3 grow">
            {renderSelectedPostType("Type", "post_type", handleChange)}
          </div>
        </div>

        <div className="flex w-full gap-4 flex-wrap">
          <div className="w-full sm:w-1/3 grow">
            {renderNumberInput(
              "Comments per link",
              "Count of comment per link",
              "maximum",
              handleChange
            )}
          </div>

          <div className="w-full sm:w-1/3 grow">
            {renderNumberInput(
              "Screenshot per link",
              "How many screenshots do you want for report",
              "total_laporan",
              handleChange
            )}
          </div>
        </div>

        <p>Please double-check before you continue</p>

        {message && <div className="text-sm italic">{message}</div>}

        <button
          type="submit"
          className="h-12 bg-[#1C8CF5] rounded-md text-white text-lg font-semibold border-none cursor-pointer"
          disabled={loading}
        >
          {loading ? "Processing..." : "Create Comments"}
        </button>
      </form>
    </div>
  );
};

export default SingleComp;
