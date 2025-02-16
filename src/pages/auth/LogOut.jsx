import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../axios/config";

const LogOut = () => {
  const navigate = useNavigate();

  function deleteLocalstorage(){localStorage.clear()}

  useEffect(() => {
    api.get("/logout/msTokens").then(()=>{
      api.get("/logout/msToken").then(()=>{
        deleteLocalstorage()
        navigate("/");
      });
    });
  });

  return (
    <div className="container">
      <p>Loging Out...</p>
    </div>
  );
};

export default LogOut;
