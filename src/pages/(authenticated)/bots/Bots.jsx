import React, { useState } from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";
import ListBot from "./ListBot";
import Registerbot from "./Registerbot";
import "../../../assets/button.css"

const Bots = () => {
  const [showBatch, setShowBatch] = useState(false);

  return (
    <MainWrapper 
        title="List of Bots"
        description="List of bots used for comments."
    >
      <div className="flex gap-4 mb-4">
        <button 
          onClick={() => setShowBatch(false)} 
          className={`rounded ${!showBatch ? 'bg-[#143F66] text-white' : 'bg-gray-100'}`}
          style={{padding: "10px 20px"}}
        >
          List bot
        </button>
        <button 
          onClick={() => setShowBatch(true)} 
          className={`rounded ${showBatch ? 'bg-[#143F66] text-white' : 'bg-gray-100'}`}
          style={{padding: "10px 20px"}}
        >
          Register Bot
        </button>
      </div>

      {showBatch ? <Registerbot /> : <ListBot />}
    </MainWrapper>
  );
};

export default Bots;
