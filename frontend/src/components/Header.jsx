import React from "react";
import HelpOutline from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlined from "@mui/icons-material/FeedbackOutlined";
import Settings from '@mui/icons-material/SettingsOutlined';
import Apps from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="header flex items-center justify-between p-[20px]">
      <div className="header_container flex items-center text-[22px] text-[#5f6368] ml-[5px]">
        <img
          src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png"
          alt="Google"
          className="header_logo w-[40px] h-[40px] "
        />
        <p className="text-[25px]  ml-[5px] ">Google Meet</p>
      </div>
      

      <div className="header_icons w-[15vw] flex items-center justify-between mr-[20px] text-[#5f6368] ">
        <HelpOutline />
        <FeedbackOutlined />
        <Settings />
        <div className="header_iconDivider flex items-center justify-between mr-[20px] w-[5vw] ">
          <Apps />
          <Avatar className="mr-[-5px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
