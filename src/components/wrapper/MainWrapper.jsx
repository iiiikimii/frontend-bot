import Sidebar from "../navigation/SideBar";

const MainWrapper = ({ title, description, children }) => {
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
          <h1 className="text-2xl sm:text-3xl text-[#143F66] font-semibold">{title}</h1>
          <p>{description}</p>
        </div>

        {/* content */}
        {children}
      </div>
    </div>
  );
};

export default MainWrapper;
