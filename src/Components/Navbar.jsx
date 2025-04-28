// import { Link } from "react-router";
import { Link } from 'react-scroll';

const Navbar = () => {
    const links = (
        <>
            <li>
                <Link to="home" className="hover:text-blue-400 transition text-[17px]" smooth={true} duration={500}>Home</Link>
                </li>
            <li>
                <Link  offset={-50} to="Skill" className="hover:text-blue-400 transition text-[17px]" smooth={true} duration={500}>Skill</Link>
                </li>
            <li>
                <Link offset={-30} to="about" className="hover:text-blue-400 transition text-[17px]" smooth={true} duration={500}>About</Link>
                </li>
            <li>
                <Link  offset={-30} to="services" className="hover:text-blue-400 transition text-[17px]" smooth={true} duration={500}>Services</Link>
                </li>
            <li>
                <Link  offset={-40}  to="contact" className="hover:text-blue-400 transition text-[17px]" smooth={true} duration={500}>Contact</Link>
                </li>
        </>
    );

    return (
        <div className="navbar bg-gray-900 text-white shadow-md fixed w-full z-20 top-0 left-0">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Left Side */}
                <div className="flex items-center">
                    <div className="dropdown lg:hidden">
                        <button tabIndex={0} className="btn btn-ghost p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-48 space-y-2 transition-all duration-300"
                        >
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="text-2xl font-bold ml-2 hover:text-blue-400 transition">
                        ISMAIL HASAN
                    </Link>
                </div>

                {/* Center Links (Desktop) */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
