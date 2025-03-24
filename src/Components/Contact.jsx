import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-800 py-16 text-white">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-6xl font-bold mb-4">Got a Project in Mind?</h2>
                <p className="text-5xl mb-6">
                    Let’s collaborate and bring your ideas to life! 👨🏻‍💻
                </p>
                <p className="text-md mb-8">
                    I’m actively seeking new opportunities, and my inbox is always open. 
                    Whether you have a question or just want to say hello, I’ll do my best to respond promptly!
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                    Hire Me
                </button>
            </div>
        </div>
    );
};

export default Contact;
