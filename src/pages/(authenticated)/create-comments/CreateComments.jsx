import React, { useState } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import BatchComp from "./Batch-comp";
import SingleComp from "./Single-comp";
import "../../../assets/button.css"

const CreateComments = () => {
  const [showBatch, setShowBatch] = useState(false);

  return (
    <MainWrapper 
      title={"Create Automation Comments"} 
      description={"You can fill data here and bot creating comment automatically"}
    >
      <div className="flex gap-4 mb-4">
        <button 
          onClick={() => setShowBatch(false)} 
          className={`px-4 py-2 rounded ${!showBatch ? 'bg-[#143F66] text-white' : 'bg-none'}`}
        >
          One Comment
        </button>
        <button 
          onClick={() => setShowBatch(true)} 
          className={`px-4 py-2 rounded ${showBatch ? 'bg-[#143F66] text-white' : 'bg-none'}`}
        >
          Batch Comment
        </button>
      </div>

      {showBatch ? <BatchComp /> : <SingleComp />}
    </MainWrapper>
  );
};

export default CreateComments;
