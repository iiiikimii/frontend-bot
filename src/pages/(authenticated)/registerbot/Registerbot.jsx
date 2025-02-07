import React, { useState } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";

const RegisterBot = () => {
  return (
    <MainWrapper
      title={"Register a Bot"}
      description={"You have to save cookies from the application to log in to the account as a bot"}
    >
      <div className="flex flex-col gap-14 text-left">
        <form className="flex flex-col gap-6 w-full">
          {renderInput("Sosmed", "Choose social media...")}
          {renderInput("Account Name", "Account name")}
          {renderInput("Cookie", "Paste your cookie here...")}
          <div className="text-sm text-[#D20000] italic">Unable to login</div>
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

const renderInput = (label, placeholder) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-[#2B2B2B] text-base">{label}</label>
    <input
      className="h-12 px-4 py-2 text-left indent-2 rounded-lg border border-[#2B2B2B] w-full"
      placeholder={placeholder}
    />
  </div>
);

export default RegisterBot;
