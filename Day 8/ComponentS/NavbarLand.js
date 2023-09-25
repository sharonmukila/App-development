/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import Logo from "../Assets/Logo.svg";
// import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Link } from "react-router-dom";

const NavbarLand = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Public Awareness",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
   
  ];
  return (
    <nav className="navbar-top">
      <div className="mukila">
        <h1>Crime Hut</h1>
      </div>
      
      <div className="crimehut">
        
    
      <div className="navbar-links-container">
        
        <Link to="/">
        <button className="primary-button">Home</button>
         </Link>

         <Link to="/About">
        <button className="primary-button">About</button>
         </Link>

         <Link to="/PublicAwareness">
        <button className="primary-button">Public Awareness</button>
         </Link>
         <Link to="/Contact">
        <button className="primary-button">Contact</button>
         </Link>
         </div>


       <Link to="/Login">
       <button className="primary-button">Login</button>
        </Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
     
    </nav>
  );
};

export default NavbarLand;
