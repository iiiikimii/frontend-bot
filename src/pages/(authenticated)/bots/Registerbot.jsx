import React, { useState } from "react";
import Swal from "sweetalert2";
import api from "../../../axios/config"; // Import axios
import renderInput from "../../../components/RenderInput/RenderInput";
import renderSelectedSosmed from "../../../components/RenderInput/RenderSelectedSosmed";
import RenderSelectedDemografi from "../../../components/RenderInput/RenderSelectedDemografi"; // Pakai huruf besar karena ini komponen React

const RegisterBot = () => {
  const [formData, setFormData] = useState({
    sosmed: "",
    accountName: "",
    cookie: "",
    demografi: "",
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

    api
      .post("/cookie", data)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Successfully registered bot!",
          confirmButtonColor: "#3085d6",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div className="flex flex-col text-left">
      <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
        <div className="flex w-full gap-4 flex-wrap">
          <div className="sm:min-w-1/3 grow">
            {renderInput("Name", "Account name", "name", handleChange)}
          </div>
          <div className="sm:min-w-1/3 grow">
            {renderSelectedSosmed("sosmed", handleChange)}
          </div>
        </div>
        <div className="flex w-full gap-4 flex-wrap">
          <div className="sm:min-w-1/3 grow">
            {renderInput("Cookie", "Paste cookie here", "cookie", handleChange)}
          </div>
          <div className="sm:min-w-1/3 grow">
            {/* FIXED: Memanggil RenderSelectedDemografi sebagai JSX Component */}
            <RenderSelectedDemografi
              name="demografi"
              onChange={handleChange}
              value={formData.demografi}
            />
          </div>
        </div>

        <button
          type="submit"
          className="h-12 bg-[#1C8CF5] rounded-md text-white text-lg font-semibold border-none cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterBot;
