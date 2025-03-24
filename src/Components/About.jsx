import React from 'react';

const AboutMeSection = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <div className="relative max-w-3xl w-full bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl p-8 md:p-10 overflow-hidden group">
                
                {/* Animated Border */}
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse pointer-events-none"></div>

                {/* Inner Content */}
                <div className="relative z-10">
                    {/* MacOS style window controls - Perfectly Aligned */}
                    <div className="flex space-x-2 mb-6">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>

                    {/* Code Block */}
                    <pre className="bg-gray-900/70 rounded-lg p-6 text-sm md:text-base overflow-x-auto border border-white/20">
                        <code>
                            {`const AboutMe = () => {
    return {
        Name: "Md Kawsar Islam Yeasin",
        Role: "Front End Web Developer",
        Age: 21,
        Gender: "Male",
        Address: "Dhaka, Cantonment, Dhaka-1206",
        Phone: "01632227965",
        Email: "mdkawsarislam@gmail.com",
        Language: ["Bangla", "English", "Hindi-spoken"],
    };
};

export default AboutMe;`}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSection;
