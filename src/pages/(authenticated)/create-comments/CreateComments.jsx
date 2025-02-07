import React from "react";
import MainWrapper from "../../../components/wrapper/MainWrapper";
// import BatchComp from "./Batch-comp";
import SingleComp from "./Single-comp";

const CreateComments = () => {
  return (
    <MainWrapper title={"Create Automation Comments"} description={"You can fill data here and bot creating comment automatically"}>
      {/* di sini tambahin button buat pilih mau proses batch atau single */}
      {/* sekarang masih sama isinya tapi yang single coba update sesuai sama yang di wa */}

      {/* <BatchComp /> */}
      <SingleComp />

      {/* sementera pake yang single dulu */}

    </MainWrapper>
  );
};

export default CreateComments;
