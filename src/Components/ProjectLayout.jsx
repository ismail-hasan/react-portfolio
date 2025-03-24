import React from 'react';
import { NavLink, Outlet } from 'react-router';

const ProjectLayout = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <div className="max-w-6xl w-full flex flex-col items-center md:flex-row gap-12 p-6">
                {/* Left Sidebar */}
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4">Brittany Chiang</h1>
                    <h2 className="text-2xl mb-4 text-gray-400">Front End Engineer</h2>
                    <p className="text-lg mb-6 text-gray-300">
                        I build accessible, pixel-perfect digital experiences for the web.
                    </p>

                    <ul className="space-y-4">
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `text-lg ${isActive ? 'text-blue-500' : 'text-blue-400'
                                    } hover:text-blue-500 transition duration-300`
                                }
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/experience"
                                className={({ isActive }) =>
                                    `text-lg ${isActive ? 'text-blue-500' : 'text-blue-400'
                                    } hover:text-blue-500 transition duration-300`
                                }
                            >
                                Experience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/project"
                                className={({ isActive }) =>
                                    `text-lg ${isActive ? 'text-blue-500' : 'text-blue-400'
                                    } hover:text-blue-500 transition duration-300`
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Right Content Area (Outlet) */}
                <div className="flex-1 p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ProjectLayout;
