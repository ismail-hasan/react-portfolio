import React, { useState } from 'react';

const ProjectSection = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const projects = [
        { id: 1, name: "Cosmic Coffee", description: "A weekend project using AI tools to create an otherworldly coffee experience. Where every cup takes you to another dimension." },
        { id: 2, name: "Bike Bazar", description: "A platform for buying and selling bikes with advanced search filters and user-friendly design." },
        { id: 3, name: "E-Commerce Store", description: "An online store for various products featuring a beautiful UI and smooth shopping experience." },
        { id: 4, name: "E-Commerce Store", description: "An online store for various products featuring a beautiful UI and smooth shopping experience." }
    ];

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2  gap-5 mt-12">
            {projects.map(project => (
                <div
                    key={project.id}
                    className={`relative p-8 rounded-xl transition-all duration-500 max-w-3xl w-full ${hoveredId === project.id ? 'scale-105 shadow-2xl' : 'scale-100 shadow-xl'}`}
                    style={{
                        background: 'rgba(0, 0, 0, 0.6)',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 25px 45px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    {/* Card content */}
                    <div className="relative z-20">
                        <h2 className="text-4xl font-bold mb-4 text-white">{project.name}</h2>
                        <div className="flex gap-2 mb-4">
                            <span className="px-3 py-1 bg-blue-600 rounded-full text-white text-sm">TypeScript</span>
                            <span className="px-3 py-1 bg-cyan-600 rounded-full text-white text-sm">Next.js</span>
                            <span className="px-3 py-1 bg-pink-600 rounded-full text-white text-sm">SCSS</span>
                        </div>
                        <p className="text-white text-lg mb-6">{project.description}</p>
                        <div className="flex gap-4">
                            <button className="px-6 py-2 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-blue-900 transition-all">
                                Visit Site
                            </button>
                            <button className="p-2 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-blue-900 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Light effects */}
                    {hoveredId === project.id && (
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl pointer-events-none transition-opacity duration-500">
                            <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-400 rounded-full opacity-30 filter blur-3xl"></div>
                            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-400 rounded-full opacity-30 filter blur-3xl"></div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProjectSection;
