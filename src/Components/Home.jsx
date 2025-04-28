import React from 'react';
import profilePic from '../assets/homeImg.jpeg';
import { FaDownload } from 'react-icons/fa';
import { Element } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    return (
        <Element name="home">
            <section
                id="home" className="py-10 md:py-0 md:h-screen flex flex-col-reverse md:flex-row items-center justify-center 
            bg-gradient-to-r from-gray-900 to-gray-800 px-6 sm:px-12 text-white"
            >
                {/* Left Side (Text Content) */}
                <div className="w-full md:w-1/2 md:mt-20 text-center md:text-left space-y-1 md:ml-10">
                    <p className="text-xl sm:text-2xl italic">Hello</p>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                        I'm Ismail Hasan
                    </h1>

                    <div className='text-3xl sm:text-4xl md:text-5xlfont-bold'>
                        <Typewriter
                            words={['Web Developer', 'MERN Stack Developer', 'Web Designer']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>


                    <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
                        I'm a UI/UX and Frontend Developer passionate about crafting user-friendly and visually appealing
                        web experiences. This portfolio showcases my skills and projects.
                    </p>

                    <a
                        href="/path-to-your-cv.pdf"
                        download
                        className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 text-white text-lg font-medium 
                    rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-blue-500/50 
                    transition-transform transform hover:scale-110 hover:shadow-purple-500/50 mt-4"
                    >
                        <FaDownload className="text-xl animate-bounce" />
                        Download CV
                    </a>
                </div>

                {/* Right Side (Profile Image) */}
                <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
                    <div className="relative flex items-center justify-center rounded-full p-1 bg-gradient-to-r from-purple-500 to-blue-500">
                        <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"></div>
                        <div className="relative rounded-full overflow-hidden w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 border-[6px]">
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default Home;