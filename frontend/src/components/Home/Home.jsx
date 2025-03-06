
import React from 'react';
import VideoCallOutlined from '@mui/icons-material/VideoCallOutlined';
import { TextField } from '@mui/material';

const Home = () => {
  return (
    <div className='hero flex items-center justify-center min-h-screen bg-gray-100 px-6'>
        <div className="hero_left max-w-3xl text-center">
            <div className="hero_featuretext">
                <h1 className='hero_title text-5xl md:text-6xl  text-gray-800'>
                    Premium video meetings Now free for everyone
                </h1>
                <p className='text-gray-600 mt-8  text-2xl'>
                    We re-engineered the service we built for secure business meetings,  
                    Google Meet, to make sure it's free and available for all.
                </p>
            </div>
            
            <div className="hero_buttons mt-7">
                <button className='hero_createBTN flex items-center justify-center bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300'>
                    <VideoCallOutlined className='mr-2' />
                    New Meeting
                </button>
                <TextField/>

            </div>
        </div>
    </div>
  );
};

export default Home;

