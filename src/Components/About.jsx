import React from 'react';

const AboutMeSection = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4 sm:px-6 md:px-12">
            <div className="relative max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 overflow-hidden group">

                {/* Animated Border */}
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                    opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse pointer-events-none"></div>

                {/* Inner Content */}
                <div className="relative z-10">
                    {/* MacOS-style window controls */}
                    <div className="flex justify-start space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>

                    {/* Code Block */}
                    <div className="overflow-x-auto">
                        <pre className="bg-gray-900/70 rounded-lg p-4 sm:p-6 md:p-8 text-xs sm:text-sm md:text-base border border-white/20">
                            <code>
                                {`const AboutMe = () => {
    return {
        Name: "Md Ismail Hossain",
        Role: "Front End Web Developer",
        Age: 22,
        Gender: "Male",
        Address: "Paban Sadar, Pabna",
        Phone: "01776458113",
        Email: "fnismailhasan@gmail.com",
        Language: ["Bangla", "English", "Hindi-spoken", "Korean"],
    };
};

export default AboutMe;`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSection;
