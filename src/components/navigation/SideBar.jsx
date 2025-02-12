import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import "./sidebar.css";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 640;
      setIsMobile(mobileView);
      if (!mobileView) setIsOpen(true);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div
        className="sm:min-w-[230px]"
        style={{
          position: isMobile && isOpen ? "fixed" : "relative",
          top: 0,
          // left: isOpen ? "0" : isMobile ? "-300px" : "0",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          padding: "14px",
          background: "#143F66",
          boxShadow: "5px 0px 27px rgba(0, 0, 0, 0.25)",
          justifyContent: "space-between",
          alignItems: "flex-start",
          overflowY: "scroll",
          gap: 30,
          transition: "left 0.3s ease-in-out",
        }}
      >
        <div className="flex flex-col w-full">
          <div
            className="flex justify-between"
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "600",
              marginBottom: 30,
            }}
          >
            {isOpen && <h1>My Bot</h1>}

            {isMobile &&
              (isOpen ? (
                <img
                  onClick={() => setIsOpen(!isOpen)}
                  src="/icons/to-left.svg"
                  alt=""
                />
              ) : (
                <div className="flex grow items-center justify-center">
                  <img
                    onClick={() => setIsOpen(!isOpen)}
                    src="/icons/to-right.svg"
                    alt=""
                  />
                </div>
              ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              color: "white",
            }}
          >
            {isOpen && <p className="text-md font-semibold">Dashboard</p>}

            <div className="flex flex-col gap-2">
              <MenuItem
                label="Dashboard"
                path="/dashboard"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6zm2-10h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2"
                    />
                  </svg>
                }
                isOpen={isOpen}
              />
            </div>

            {isOpen && (
              <p className="text-md font-semibold text-white">Comment</p>
            )}

            <div className="flex flex-col gap-2">
              <MenuItem
                label="Process Comments"
                path="/create-comment"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6 14h12v-2H6zm0-3h12V9H6zm0-3h12V6H6zm16 14l-4-4H4q-.825 0-1.412-.587T2 16V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4zM4 16h14.85L20 17.125V4H4zm0 0V4z"
                    />
                  </svg>
                }
                isOpen={isOpen}
              />
              <MenuItem
                label="History"
                path="/history"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 21q-3.15 0-5.575-1.912T3.275 14.2q-.1-.375.15-.687t.675-.363q.4-.05.725.15t.45.6q.6 2.25 2.475 3.675T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H8q.425 0 .713.288T9 9t-.288.713T8 10H4q-.425 0-.712-.288T3 9V5q0-.425.288-.712T4 4t.713.288T5 5v1.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21"
                    />
                  </svg>
                }
                isOpen={isOpen}
              />
            </div>

            {isOpen && <p className="text-md font-semibold">Bots</p>}

            <div className="flex flex-col gap-2">
              <MenuItem
                label="Bots"
                path="/bots"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M12 8V4H8" />
                      <rect width="16" height="12" x="4" y="8" rx="2" />
                      <path d="M2 14h2m16 0h2m-7-1v2m-6-2v2" />
                    </g>
                  </svg>
                }
                isOpen={isOpen}
              />
              <MenuItem
                label="Register Bot"
                path="/registerbot"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 1.9a2.1 2.1 0 1 1 0 4.2A2.1 2.1 0 0 1 12.9 8A2.1 2.1 0 0 1 15 5.9M4 7v3H1v2h3v3h2v-3h3v-2H6V7zm11 6c-2.67 0-8 1.33-8 4v3h16v-3c0-2.67-5.33-4-8-4m0 1.9c2.97 0 6.1 1.46 6.1 2.1v1.1H8.9V17c0-.64 3.1-2.1 6.1-2.1"
                    />
                  </svg>
                }
                isOpen={isOpen}
              />
            </div>

            {isOpen && <p className="text-md font-semibold">Accounts</p>}

            <div className="flex flex-col gap-2">
              {/* <MenuItem label="Profile" path="/profile" icon=<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21"/></g></svg> /> */}
              <MenuItem
                label="Accounts"
                path="/accounts"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
                    />
                  </svg>
                }
                isOpen={isOpen}
              />
              <MenuItem
                label="Invite"
                path="/invite"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 17v2H7v-2s0-4 6-4s6 4 6 4m-3-9a3 3 0 1 0-3 3a3 3 0 0 0 3-3m3.2 5.06A5.6 5.6 0 0 1 21 17v2h3v-2s0-3.45-4.8-3.94M18 5a2.9 2.9 0 0 0-.89.14a5 5 0 0 1 0 5.72A2.9 2.9 0 0 0 18 11a3 3 0 0 0 0-6M8 10H5V7H3v3H0v2h3v3h2v-3h3Z"
                    />
                  </svg>
                }
                isOpen={isOpen}
              />
            </div>
          </div>
        </div>

        {/* Logout */}
        <MenuItem
          label="LogOut"
          path="/logout"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
              />
            </svg>
          }
          isOpen={isOpen}
        />
      </div>
    </div>
  );
};

export default Sidebar;
