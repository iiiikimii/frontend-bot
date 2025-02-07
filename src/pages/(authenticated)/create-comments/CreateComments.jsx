import React from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";

const CreateComments = () => {
  return (
    <MainWrapper title={"Create Automation Comments"} description={"You can fill data here and bot creating comment automatically"}>
      <div className="flex flex-col gap-14 text-left">
        <form className="flex flex-col gap-6 w-full">
          {renderInput("Name", "Name your batch comment...")}
          {renderInput("Content Link", "Place your CSV here or content link")}
          {renderInput("Comment", "Place your comment.txt here")}
          {renderInput("Count of Comment", "Type your count of comment")}
          <div className="text-sm text-[#0D9D00] italic">Successfully</div>
          <button
            type="submit"
            className="h-12 bg-[#1C8CF5] rounded-md text-white text-lg font-semibold border-none cursor-pointer"
          >
            Create Comments
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
      className="h-12 p-2 mr-10 rounded-lg border border-[#2B2B2B] w-full"
      placeholder={placeholder}
    />
  </div>
);

export default CreateComments;
