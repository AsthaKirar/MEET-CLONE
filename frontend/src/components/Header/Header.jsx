import React, { useState } from "react";
import HelpOutline from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlined from "@mui/icons-material/FeedbackOutlined";
import Settings from "@mui/icons-material/SettingsOutlined";
import Apps from "@mui/icons-material/AppsOutlined";
import CameraAltOutlined from "@mui/icons-material/CameraAltOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlineOutlined";
import { Avatar, Badge, Popover } from "@mui/material";
import { makeStyles } from "@mui/styles"; // ✅ Corrected Import
import { useAppContext } from "../../context/ContextApp.jsx";
import { Link } from "react-router-dom";

// ✅ Define styles correctly
const useStyles = makeStyles(() => ({
  large: {
    width: "56px", // Equivalent to theme.spacing(7)
    height: "56px",
  },
}));

const Header = () => {
  // Popover state
  // const [currentUser, setCurrentUser] = useState(null);
  const { currentUser } = useAppContext();

  // console.log(value);
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  // Handle Popover open/close
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "profile-popover" : undefined;

  // ✅ Define a placeholder auth function (Remove or replace with actual auth logic)
  const handleSignOut = () => {
    console.log("Sign Out Clicked"); // Replace with actual auth.signOut() if using Firebase/Auth
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        {/* Left - Google Meet Logo */}
        <div className="flex items-center text-gray-600">
          <img
            src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png"
            alt="Google Meet"
            className="w-10 h-10"
          />
          <p className="text-2xl font-semibold ml-3">Google Meet</p>
        </div>

        {/* Right - Icons & Profile */}
        {currentUser ? (
          <div className="flex items-center space-x-6 text-gray-600">
            <HelpOutline className="cursor-pointer hover:text-gray-800 transition" />
            <FeedbackOutlined className="cursor-pointer hover:text-gray-800 transition" />
            <Settings className="cursor-pointer hover:text-gray-800 transition" />

            <div className="flex items-center space-x-4">
              <Apps className="cursor-pointer hover:text-gray-800 transition" />

              {/* Avatar */}
              <Avatar
                className="cursor-pointer transition-transform transform hover:scale-110"
                onClick={handleClick}
              />

              {/* Popover (Profile Dropdown) */}
              <Popover
                open={open}
                id={id}
                onClose={handleClose}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <div className="w-72 bg-white shadow-lg rounded-lg p-4">
                  {/* Profile Info */}
                  <div className="flex flex-col items-center space-y-3">
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      badgeContent={
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                          <CameraAltOutlined className="text-gray-600 text-sm" />
                        </div>
                      }
                    >
                      <Avatar className={`w-16 h-16 ${classes.large}`} />
                    </Badge>
                    <div className="text-center">
                      <p className="text-lg font-semibold">Astha Patel</p>
                      <p className="text-gray-500 text-sm">
                        asthap602@gmail.com
                      </p>
                    </div>
                    <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 transition">
                      Manage your Google Account
                    </button>
                  </div>

                  {/* Divider */}
                  <hr className="my-3 border-gray-300" />

                  {/* Options */}
                  <div className="flex flex-col space-y-2">
                    <button className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md transition">
                      <PersonOutlined className="text-gray-600" />
                      <p>Add another account</p>
                    </button>

                    <button
                      onClick={handleSignOut} // ✅ Corrected Sign Out Logic
                      className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition"
                    >
                      Sign Out
                    </button>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-center space-x-2 text-gray-500 text-xs mt-3">
                    <p className="cursor-pointer hover:underline">
                      Privacy Policy
                    </p>
                    <span>•</span>
                    <p className="cursor-pointer hover:underline">
                      Terms of Service
                    </p>
                  </div>
                </div>
              </Popover>
            </div>
          </div>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </header>
    </>
  );
};

export default Header;
