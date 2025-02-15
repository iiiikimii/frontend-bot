import Sidebar from "../navigation/SideBar";
import { useNavigate } from 'react-router-dom';

const MainWrapper = ({ title, description, children }) => {
  const navigate = useNavigate();

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div
        className="w-full h-full overflow-y-scroll flex flex-col gap-[25px]"
        style={{
          padding: window.innerWidth <= 660 ? "30px 14px" : "40px",
        }}
      >
        {/* title */}
        <div className="flex flex-col mw-full gap-4">
          <div className="flex gap-4 items-center">
            <button onClick={() => navigate(-1)}><img src="/icons/back.svg" alt="back" className="w-[70%]" /></button>
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
