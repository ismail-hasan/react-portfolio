import React from 'react';
import Title from './Title';
import { FaUserTie } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-gray-800 py-16 text-white">
            <div className="container mx-auto text-center px-4">
                {/* Heading Section */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 flex justify-center items-center flex-col sm:flex-row">
                    Have a <span className="mx-3"><Title text={"PROJECT"} /></span>
                    <span className="mt-2 sm:mt-0 ml-2">in Mind?</span>
                </h2>

                {/* Subheading */}
                <p className="text-xl sm:text-2xl mb-6">
                    Let’s collaborate and bring your ideas to life! 👨🏻‍💻
                </p>

                {/* Description */}
                <p className="text-md sm:text-lg mb-8 mx-auto max-w-3xl">
                    I’m actively seeking new opportunities, and my inbox is always open.
                    Whether you have a question or just want to say hello, I’ll do my best to respond promptly!
                </p>

                {/* Hire Me Button */}
                <button className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg shadow-blue-500/50 mx-auto">
                    <FaUserTie className="mr-2 text-xl animate-bounce" />
                    <span>Hire Me</span>
                </button>

            </div>
        </div>
    );
};

export default Contact;
