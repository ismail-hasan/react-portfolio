import React, { useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router'; // Import useNavigate
import AboutMeSection from './About';
import Title from './Title';

const ProjectLayout = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleNavigation = (path) => {
        console.log(`Navigating to: ${path}`);
        navigate(path); // Use navigate to route programmatically
    };

    const [activeItem, setActiveItem] = useState('about');
    const location = useLocation()
    console.log(location)
    const navItems = [
        { id: 'about', label: 'ABOUT', path: '/' },
        { id: 'projects', label: 'PROJECTS', path: '/project' },
        { id: 'experience', label: 'EXPERIENCE', path: '/experience' },
    ];

    return (
        <div className="bg-gray-900 text-white flex justify-center">
            <div className="max-w-7xl flex flex-col items-center md:flex-row gap-12 p-6">
                {/* Left Sidebar */}
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h1 className="text-5xl font-bold mb-4"> <Title text={"ISMAIL HASAN"}></Title> </h1>
                    <h2 className="text-2xl mb-4 text-gray-400">Front End Engineer</h2>
                    <p className="text-lg mb-6 text-gray-300">
                        I build accessible, pixel-perfect digital experiences for the web.
                    </p>

                    {/* // ul start  */}
                    <ul className="flex flex-col space-y-10">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-center cursor-pointer group"
                                onMouseEnter={() => setActiveItem(item.id)}
                                onClick={() => {
                                    setActiveItem(item.id);
                                    handleNavigation(item.path); // Navigate when clicked
                                }}
                            >
                                <div className="w-28 relative flex items-center">
                                    <div className="w-full h-px bg-gray-700"></div>
                                    <div
                                        className={`absolute top-0 left-0 h-px bg-white transition-all duration-300 ease-out ${activeItem === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                    ></div>
                                </div>

                                <NavLink
                                    to={item.path} // Use the "to" prop for NavLink
                                    className={`ml-4 uppercase text-sm tracking-widest transition-colors duration-300 ${activeItem === item.id ? 'text-white font-medium' : 'text-gray-500 group-hover:text-white'}`}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    {/* // ul end */}
                </div>

                {/* Right Content Area (Outlet) */}
                <div className="flex-1 p-6">
                    {/* <AboutMeSection></AboutMeSection> */}


                    {
                        location.pathname === "/experience" || location.pathname === "/project" ?
                            <>
                                <Outlet />
                            </>
                            :
                            <>
                                <AboutMeSection></AboutMeSection>
                            </>

                    }

                </div>
            </div>
        </div>
    );
};

export default ProjectLayout;
