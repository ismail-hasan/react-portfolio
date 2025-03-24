import React from 'react';
import profilePic from '../assets/homeImg.jpeg'; // Replace with your image path

const Home = () => {
    return (
        <section
            id="home"
            className="h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 px-8 text-white"
        >
            {/* Left Side (Text Content) */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left space-y-6 ml-15">
                <h1 className="text-5xl md:text-6xl font-bold">
                    Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Ismail Hasan</span>,
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Frontend Developer</span>
                </h1>
                <p className="text-lg text-gray-300">
                    I'm a UI/UX and Frontend Developer passionate about crafting user-friendly and visually appealing web experiences.
                    This portfolio showcases my skills and projects.
                </p>
                <a
                    href="/path-to-your-cv.pdf" // Replace with the actual path to your CV file
                    download
                    className="inline-block mt-4 px-6 py-3 text-white text-lg font-medium rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-blue-500/50 transition-transform transform hover:scale-105"
                >
                    Download CV
                </a>
            </div>

            {/* Right Side (Profile Image) */}
            <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
                <div className="relative flex items-center justify-center rounded-full p-1 bg-gradient-to-r from-purple-500 to-blue-500">
                    <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"></div>
                    <div className="relative rounded-full overflow-hidden w-72 h-72 md:w-80 md:h-80 border-[6px] border-[#0d0d0d]">
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;