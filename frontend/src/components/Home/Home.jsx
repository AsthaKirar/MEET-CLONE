import React from "react";
import VideoCallOutlined from "@mui/icons-material/VideoCallOutlined";
import { Divider, InputAdornment, TextField } from "@mui/material";
import Keyboard from "@mui/icons-material/Keyboard";

const Home = () => {
  return (
    <div className="hero flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="hero_left max-w-3xl text-center">
        <div className="hero_featuretext">
          <h1 className="hero_title text-5xl md:text-6xl  text-gray-800">
            Premium video meetings Now free for everyone
          </h1>
          <p className="text-gray-600 mt-8  text-2xl">
            We re-engineered the service we built for secure business meetings,
            Google Meet, to make sure it's free and available for all.
          </p>
        </div>

        <div className="hero_buttons mt-7">
          <button className="hero_createBTN flex items-center justify-center bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            <VideoCallOutlined className="mr-2" />
            New Meeting
          </button>
          <TextField
            className="hero_input"
            variant="outlined"
            placeholder="Enter a code or a link"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Keyboard className="icon" />
                </InputAdornment>
              ),
            }}
          />
          <button className="hero_joinBTN py-3 rounded-lg px-6 text-xl text-green-700 bg-white hover:bg-green-100">
            Join
          </button>
        </div>
        <Divider />
        <p className="mt-7 text-2xl ml-5">Learn more aboute Google Meet</p>
      </div>
      <div className="hero_image">
        <img
          src="https://www.androidheadlines.com/wp-content/uploads/2021/08/Google-Meet-PWA-Chromebook-Chrome-OS.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
