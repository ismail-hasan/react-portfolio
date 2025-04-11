import React from 'react';
import { Lightbulb, Timer, Award, Headphones } from "lucide-react";
import { useState } from "react";

const Choice = () => {

    const [hoveredCard, setHoveredCard] = useState(null);
    const services = [
        {
            id: 1,
            title: "Creative Teams",
            description: "Our expert teams bring innovation and creativity to every project we undertake.",
            icon: <Lightbulb size={32} />,
            color: "from-blue-600/20 to-indigo-800/30",
            borderColor: "border-blue-500/20"
        },
        {
            id: 2,
            title: "Fast Result",
            description: "We pride ourselves on delivering high-quality results with quick turnaround times.",
            icon: <Timer size={32} />,
            color: "from-gray-800/30 to-gray-900/40",
            borderColor: "border-gray-600/20"
        },
        {
            id: 3,
            title: "High Quality",
            description: "Quality is at the core of everything we do, ensuring excellence in every detail.",
            icon: <Award size={32} />,
            color: "from-gray-800/30 to-gray-900/40",
            borderColor: "border-gray-600/20"
        },
        {
            id: 4,
            title: "24h Support",
            description: "Our dedicated support team is available around the clock to assist you.",
            icon: <Headphones size={32} />,
            color: "from-blue-600/20 to-indigo-800/30",
            borderColor: "border-blue-500/20"
        }
    ]

    return (
        <div>

            <div className="w-full min-h-screen bg-gray-950 flex items-center justify-center py-16 px-4 md:px-8">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Side - Text Content */}
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="inline-block">
                                <button className="text-sm font-medium py-1 px-4 rounded-full bg-pink-600  text-gray-300 border border-gray-700/50 backdrop-blur-sm">
                                    WHY CHOOSE US
                                </button>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-gray-200 leading-tight">
                                We deliver high quality result
                            </h2>

                            <p className="text-gray-400 max-w-xl">
                                Our dedicated team of experts combines cutting-edge technology with creative solutions to deliver exceptional results. We pride ourselves on attention to detail, innovative approaches, and commitment to excellence in every project.
                            </p>
                        </div>

                        {/* Right Side - Service Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className={`relative rounded-xl backdrop-blur-md bg-gradient-to-br ${service.color} p-6 border ${service.borderColor} shadow-lg transition-all duration-300 ease-in-out cursor-pointer overflow-hidden group`}
                                    onMouseEnter={() => setHoveredCard(service.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-gray-800/50 backdrop-blur-sm border ${service.borderColor} transition-all duration-300 group-hover:scale-110 text-gray-100`}>
                                        {service.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 transition-transform duration-300 group-hover:translate-x-1">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-300 text-sm">
                                        {service.description}
                                    </p>

                                    <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full bg-white/5 -mb-12 -mr-12 transform rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choice;