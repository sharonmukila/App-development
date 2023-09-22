
import { motion } from "framer-motion";
import "../Sidebar.css"
import Item from "./Item"
import { useState } from "react";
import AddHomeIcon from '@mui/icons-material/AddHome';
import { TocRounded, AccountCircleRounded, BarChartRounded, DashboardRounded, SettingsRemoteRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";

function Sidebar() {
    const user = useSelector(selectUser)
    const [open, setOpen] = useState(true);

    // for collpsing sidebar
    const handleToggle = () => {
        setOpen(!open);
    };


    const sideContainerVariants = {
        true: {
            width: "15rem",
        },
        false: {
            transition: {
                delay: 0.6,
            },
        },
    };

    const sidebarVariants = {
        true: {},
        false: {
            width: "3rem",
            transition: {
                delay: 0.4,
            },
        },
    };

    const profileVariants = {
        true: {
            alignSelf: "center",
            width: "4rem",
        },
        false: {
            alignSelf: "flex-start",
            marginTop: "2rem",
            width: "3rem",
        },
    };

    return (

        <div className="App">

            <motion.div
                data-Open={open}
                variants={sideContainerVariants}
                initial={`${open}`}
                animate={`${open}`}
                className="sidebar_container"
            >
                {/* sidebar div */}
                <motion.div
                    className="sidebar"
                    initial={`${open}`}
                    animate={`${open}`}
                    variants={sidebarVariants}
                >
                    {/* lines_icon */}
                    <motion.div
                        whileHover={{
                            scale: 1.2,
                            rotate: 180,
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                            backdropFilter: "blur(3.5px)",
                            WebkitBackdropFilter: "blur(3.5px)",
                            border: "1px solid rgba( 255, 255, 255, 0.18 )",
                            transition: {
                                delay: 0.2,
                                duration: 0.4,
                            },
                        }}
                        onClick={handleToggle}
                        className="lines_icon"
                    >
                        <TocRounded />
                    </motion.div>
                    {/* profile */}
                    <motion.div
                        layout
                        initial={`${open}`}
                        animate={`${open}`}
                        variants={profileVariants}
                        className="profile"
                        transition={{ duration: 0.4 }}
                        whileHover={{
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                            backdropFilter: "blur(5.5px)",
                            WebkitBackdropFilter: "blur(5.5px)",
                            border: "1px solid rgba( 255, 255, 255, 0.18 )",
                            cursor: "pointer",
                        }}
                    >
                        <img
                            src="https://i.pinimg.com/474x/a1/01/7d/a1017da97b51b5190b674ca23dbed210.jpg"
                            alt="profile_img"
                        />
                    </motion.div>
                    {/* groups */}
                    <div className="groups">
                        {/* group 1 */}
                        <div className="group">
                            <div className="use">{user ? user.email : "user"}</div>

                            <motion.h3
                                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
                            >
                                {/* <Item icon={<AddHomeIcon />} name="Home" /> */}
                                INCIDENT REPORTING
                            </motion.h3>


                            <Item icon={<DashboardRounded />} name="Reporting " />



                            <Item icon={<BarChartRounded />} name="Status" />
                        </div>
                    </div>
                    {/* group 2 */}
                    <div className="group">
                        <motion.h3
                            animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
                        >
                            Content
                        </motion.h3>

                        <Item icon={<AccountCircleRounded />} name="Help and  support" />
                    </div>
                    {/* group 3 */}
                    <div className="group">
                        <motion.h3
                            animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
                        >
                            CUSTOMIZATION
                        </motion.h3>
                        <Item icon={<SettingsRemoteRounded />} name="Segments" />
                        <Item icon={<AccountCircleRounded />} name="Logout" />
                        <Link to="/"><button className="form-input-btn2" type="submit">
                            <strong>Logout</strong>
                        </button></Link>
                    </div>
                </motion.div>
            </motion.div>

            <div className="body_container">
                {/* <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr />i am body
        <hr /> */}
            </div>
        </div>
    );
}

export default Sidebar;