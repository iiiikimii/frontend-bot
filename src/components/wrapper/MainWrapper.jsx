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
          <div className="">
            <button onClick={() => navigate(-1)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" viewBox="0 0 12 24"><path fill="#144776" fill-rule="evenodd" d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z"/></svg></button>
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
