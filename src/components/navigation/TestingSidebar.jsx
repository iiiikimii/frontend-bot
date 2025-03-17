import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
// import "./sidebar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "motion/react";
import { getDataSidebar } from "../../constant/dataSidebar";
import { FaCaretLeft } from "react-icons/fa6";
import useResponsive from "../../hook/useResponsive";

const TestingSidebar = () => {
    const ref = useRef(null)
    const navigate = useNavigate();
    const isLg = useResponsive(750)
    const [isMobile, setIsMobile] = useState(window.innerWidth >= 640);
    const [isOpen, setIsOpen] = useState(!isMobile);
    const [isAdmin, setIsAdmin] = useState(false);
    const name = localStorage.getItem("name");
    const dataSidebar = getDataSidebar(isOpen)

  // useEffect(() => {
  //   const role = localStorage.getItem("role");
  //   if (!role) {
  //     navigate("/");
  //   } else if (role === "admin") {
  //     setIsAdmin(true);
  //   }
  // }, [navigate]);

    const framerSidebarBackground = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0, transition: {delay: 0.2} },
        transition: { duration: 0.2 }
    };

    const framerSidebarPanel = {
        initial: { x: '-100%' },
        animate: { x: 0 },
        exit: { x: '-100%' },
        transition: { duration: 0.3 }
    };

    const framerHumburgerButton = {
        initial: { scale: 0 },
        animate: { scale: 1 },
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 20,
            delay: 0.5,
        },
    }

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

  
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
    <div className="relative" >
        <div
            style={{padding: '30px 10px'}}
            className={`${isLg ? 'hidden' : 'flex'} w-full h-8 fixed justify-end items-center bg-white right-0`}
        >
            <button
                onClick={handleOpen}
                className="w-8 h-8 flex items-center justify-center bg-[#eef1f8] border border-slate-300 rounded-sm cursor-pointer"
            >
                <RxHamburgerMenu
                    size={25}
                    color="#143F66"
                />
            </button>
        </div>
        <AnimatePresence
            mode="wait"
            initial={false}
        >
            {
                isOpen && (
                    <div ref={ref} >
                        <motion.div
                            {...framerSidebarBackground}
                            className="fixed min-[600px]:hidden bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0, 0, 0, 0.1)] backdrop-blur-sm"
                            aria-hidden="true"
                        ></motion.div>

            <motion.div
            {...framerSidebarPanel}
                            ref={ref}
                            aria-label="sidebar"
                className="sm:min-w-[230px] overflow-auto"
                style={{
                zIndex: "100",
                position: isMobile && isOpen ? "fixed" : "relative",
                top: 0,
                // left: isOpen ? "0" : isMobile ? "-300px" : "0",
                display: "flex",
                flexDirection: "column",
                width: "240px",
                height: "100vh",
                // padding: "14px",
                background: "#143F66",
                boxShadow: "5px 0px 27px rgba(0, 0, 0, 0.25)",
                justifyContent: "space-between",
                alignItems: "flex-start",
                // overflowY: "scroll",
                gap: 30,
                transition: "left 0.3s ease-in-out",
                }}
            >
                <div className="flex flex-col w-full" style={{padding: '10px'}}>
                <div
                    className="flex justify-between items-start"
                    style={{
                    color: "white",
                    marginBottom: 30,
                    }}
                >
                    {isOpen && (
                    <div className="flex flex-col gap-2 bg-re-900" >
                        <div className="flex items-start gap-2" >
                            <img src="/logo/skype.png" alt="skype" className=" h-10" />
                            <div>
                                <img src="/logo/selawe.svg" alt="Selawe" className="h-6" />
                                <p className="text-sm font-semibold" style={{marginBottom: '25px'}} >Bot Comment System</p>
                            </div>
                        </div>
                        {/* <div style={{margin: '15px 0px'}}/> */}
                        <div className="flex gap-1 items-center">
                        {/* <svg
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
                        <p className="text-sm">{name}</p> */}
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-8 h-8 absolute right-0 flex items-center justify-center bg-[#0F3250] rounded-sm shadow-xl cursor-pointer not-change"  >
                            <FaCaretLeft size={25} />
                        </button>
                        </div>
                    </div>
                    )}

                    {isMobile &&
                    (isOpen ? (
                        <img
                        // onClick={() => setIsOpen(!isOpen)}
                        // src="/icons/to-left.svg"
                        // alt=""
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
                    {isOpen && (
                    <p className="text-md font-semibold text-white">Comment</p>
                    )}

                    <div className="flex flex-col gap-2">
                        {
                            dataSidebar.map((data, index) => {
                                const {type, label, path, icon, isOpen} = data
                                if(type == 'comment') {
                                    return (
                                        <MenuItem
                                            key={index}
                                            label={label}
                                            path={path}
                                            icon={icon}
                                            isOpen={isOpen}
                                        />
                                    )
                                }
                            })
                        }
                    </div>

                    {isOpen && <p className="text-md font-semibold">Bots</p>}

                    <div className="flex flex-col gap-2">
                        {
                            dataSidebar.map((data, index) => {
                                const {type, label, path, icon, isOpen} = data
                                if(type == 'bot') {
                                    return (
                                        <MenuItem
                                            key={index}
                                            label={label}
                                            path={path}
                                            icon={icon}
                                            isOpen={isOpen}
                                        />
                                    )
                                }
                            })
                        }
                    </div>

                    {isOpen && isAdmin && (
                    <p className="text-md font-semibold">Accounts</p>
                    )}

                    {isAdmin && (
                    <div className="flex flex-col gap-2">
                        {
                            dataSidebar.map((data, index) => {
                                const {type, label, path, icon, isOpen} = data
                                if(type == 'admin') {
                                    return (
                                        <MenuItem
                                            key={index}
                                            label={label}
                                            path={path}
                                            icon={icon}
                                            isOpen={isOpen}
                                        />
                                    )
                                }
                            })
                        }
                    </div>
                    )}
                </div>
                </div>

                <div className="w-full" >
                    <div style={{margin: '0px 10px'}} >
                        <MenuItem
                        label={<span style={{ color: "white" }}>LogOut</span>}
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
                        style={{ color: "white"}}
                        />
                    </div>
                    <div 
                        className="flex items-center gap-4 border-t border-white w-full h-12 " 
                        style={{padding: '10px', margin: '10px 0px 5px 0px'}}
                        >
                        <div className="w-8 h-8 flex items-center justify-center bg-radial-[at_25%_25%] from-[#eef1f8] to-black to-125% rounded-sm" style={{padding: '1px'}} >
                            <p className="font-bold text-[#0F3250]" >FZ</p>
                        </div>
                        <p className="text-[#eef1f8] text-sm" >Hello, Faizal👋</p>
                    </div>
                </div>

            </motion.div>
                    </div>
                )
            }
        </AnimatePresence>
    </div>
  );
};

export default TestingSidebar;
