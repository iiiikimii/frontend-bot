import Sidebar from "../navigation/SideBar";
import { useNavigate } from 'react-router-dom';
import TestingSidebar from "../navigation/TestingSidebar";
import { FaArrowLeftLong } from "react-icons/fa6";
import useResponsive from "../../hook/useResponsive";


const MainWrapper = ({ title, description, children }) => {
  const navigate = useNavigate();
  const isLg = useResponsive(750)

  return (
    <div className="flex w-screen h-screen ">
      <TestingSidebar />
      <div
        className="w-screen h-screen overflow-y-scroll flex flex-col gap-[25px]"
        style={{
          padding: window.innerWidth <= 660 ? "30px 14px" : "40px",
        }}
      >
        {/* title */}
        <div className="flex flex-col w-full gap-4" style={isLg ? {marginTop: '0px'} : {marginTop: '30px'}}>
          <div className="flex flex-col gap-2 items-start">
            <button className="flex items-center justify-center bg-[#eef1f8] rounded-sm cursor-pointer" style={{padding: '3px 5px'}} onClick={() => navigate(-1)}>
              <FaArrowLeftLong size={20} color="#143F66" />
            </button>
            <h1 className="text-2xl sm:text-3xl text-[#143F66] font-semibold">{title}</h1>
          </div>
          <p>{description}</p>
        </div>

        {/* content */}
        {children}
      </div>
    </div>
  );
};

export default MainWrapper;
