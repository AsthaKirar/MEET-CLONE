// import React from "react";
// import HelpOutline from "@mui/icons-material/HelpOutlineOutlined";
// import FeedbackOutlined from "@mui/icons-material/FeedbackOutlined";
// import Settings from "@mui/icons-material/SettingsOutlined";
// import Apps from "@mui/icons-material/AppsOutlined";
// import CameraAltOutlined from "@mui/icons-material/CameraAltOutlined";
// import PersonOutlined from '@mui/icons-material/PersonOutlineOutlined';
// import { Avatar, Badge, Popover } from "@mui/material";

// const Header = () => {
//   return (
//     <div className="header flex items-center justify-between p-[20px]">
//       <div className="header_container flex items-center text-[22px] text-[#5f6368] ml-[5px]">
//         <img
//           src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png"
//           alt="Google"
//           className="header_logo w-[40px] h-[40px] "
//         />
//         <p className="text-[25px]  ml-[5px] ">Google Meet</p>
//       </div>

//       <div className="header_icons w-[15vw] flex items-center justify-between mr-[20px] text-[#5f6368] ">
//         <HelpOutline />
//         <FeedbackOutlined />
//         <Settings />
//         <div className="header_iconDivider flex items-center justify-between mr-[20px] w-[5vw] ">
//           <Apps />
//           <Avatar className="mr-[-5px]" />
//           <Popover
//             open={open}
//             id={id}
//             onClose={handleClose}
//             anchorEl={anchorEl}
//             anchorOrigin={{
//               veritical: "top",
//               horizontal: "center",
//             }}
//             transformOrigin={{
//               vertical: "top",
//             }}
//           >
//             <div className="home_popoverCantainer">
//               <div className=" home_popover_top">
//                 <Badge
//                   overlap="circle"
//                   anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//                   badgeContent={
//                     <div className="home_badge">
//                       <CameraAltOutlined className="home_camera" />
//                     </div>
//                   }
//                 >
//                   <Avatar className="{classes.large}" />
//                 </Badge>
//                 <div className="home_text">
//                   <div className="home_displayName">Astha Patel</div>
//                   <div className="home_mail">asthap602@gmail.com</div>
//                   </div>

//                   <div className="home_btn">Manage your google account</div>
                
//               </div>
//               <div className="home_popover_btn">
//                 <div className="home_addBtn">
//                   <PersonOutlined className="home_addIcon"/>
//                   <p>Add another account</p>
//                 </div>
//                 <button 
//                 onClick={()=> auth.signOut()}
//                 variant="outlined"
//                 className="home_signOut">
//                   Sign Out
//                 </button>
//                 <div className="home_popover_footer">
//                   <p>Privacy policy</p>
//                   <span>.</span>
//                   <p>Terms of service</p>
//                 </div>
//               </div>
//             </div>
//           </Popover>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;


import React, { useState } from "react";
import HelpOutline from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlined from "@mui/icons-material/FeedbackOutlined";
import Settings from "@mui/icons-material/SettingsOutlined";
import Apps from "@mui/icons-material/AppsOutlined";
import CameraAltOutlined from "@mui/icons-material/CameraAltOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlineOutlined";
import { Avatar, Badge, Popover } from "@mui/material";
import { makeStyles } from "@mui/styles"; // ✅ Corrected Import

// ✅ Define styles correctly
const useStyles = makeStyles(() => ({
  large: {
    width: "56px", // Equivalent to theme.spacing(7)
    height: "56px",
  },
}));

const Header = () => {
  // Popover state
  const [currentUser, setCurrentUser] = useState(null);
  const [appState, setAppState] = useState("empty");
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
                    <p className="text-gray-500 text-sm">asthap602@gmail.com</p>
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
                  <p className="cursor-pointer hover:underline">Privacy Policy</p>
                  <span>•</span>
                  <p className="cursor-pointer hover:underline">Terms of Service</p>
                </div>
              </div>
            </Popover>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
