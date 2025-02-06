import Sidebar from "../navigation/SideBar";

const MainWrapper = ({ title, description, children }) => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div
        className="w-full h-full overflow-y-scroll"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "40px",
          gap: 25,
        }}
      >
        {/* title */}
        <div className="flex flex-col mw-full">
          <h1 className="text-3xl text-[#143F66] font-semibold">{title}</h1>
          <p>{description}</p>
        </div>

        {/* content */}
        {children}
      </div>
    </div>
  );
};

export default MainWrapper;
