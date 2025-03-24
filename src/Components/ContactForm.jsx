import React from 'react';

const ContactForm = () => {
    return (
        <div className="bg-gray-800 py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

                    {/* Contact Info Section with Glass Prism Effect */}
                    <div className="md:w-1/2 w-full space-y-8">
                        <h2 className="text-3xl font-bold mb-6 text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                            Get in Touch
                        </h2>
                        <p className="text-lg mb-6 text-gray-300">
                            Feel free to reach out! Whether you have a question or just want to drop a message,
                            I’ll do my best to get back to you.
                        </p>

                        <div className="space-y-6">
                            {/* Contact Item Component */}
                            {[
                                {
                                    title: "Location",
                                    info: "Hazir Hat, Pabna Sadar, Pabna",
                                    icon: "M12 2C8.13 2 5 5.13 5 8C5 10.41 7.24 13.72 9.78 16.26L12 19L14.22 16.26C16.76 13.72 19 10.41 19 8C19 5.13 15.87 2 12 2ZM12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11Z"
                                },
                                {
                                    title: "Email",
                                    info: "fnismailhasan@gmail.com",
                                    icon: "M22 12V2H2v20h20V12ZM20 4v4l-8 4-8-4V4h16ZM4 6v3.23l7.03 3.52L12 14l.97-.25L20 9.23V6H4z"
                                },
                                {
                                    title: "Phone",
                                    info: "+880 1776458113 | +880 1586153445 (WhatsApp)",
                                    icon: "M21 16.49l-4.9-4.9c-1.17-.58-2.47-.7-3.71-.35-.51.16-.97.41-1.41.75l-1.52-1.52c2.24-3.52 1.17-7.92-1.41-10.41-2.79-2.79-7.18-2.79-9.97 0-2.79 2.79-2.79 7.18 0 9.97 2.48 2.48 6.1 2.89 9.04 1.41 2.91-.72 5.27-2.73 7.33-4.98l4.88 4.88c1.77 1.77 4.64 1.5 6.14-.99 1.73-2.48 1.06-5.77-1.43-7.25l-3.24-3.24c-.33-.33-.77-.5-1.21-.5z"
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 flex items-center gap-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-purple-500"
                                    >
                                        <path d={item.icon} />
                                    </svg>
                                    <div>
                                        <h3 className="font-semibold text-lg text-white mb-1">{item.title}</h3>
                                        <p className="text-gray-300">{item.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Contact Form Section */}
                    <div className="md:w-1/2 w-full">
                        <form className="p-8 bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="p-3 bg-white/20 border border-white/40 rounded-lg placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="p-3 bg-white/20 border border-white/40 rounded-lg placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="p-3 bg-white/20 border border-white/40 rounded-lg placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent md:col-span-2"
                                />
                            </div>

                            <div className="mt-6">
                                <label className="block text-white font-semibold mb-2">Your Message</label>
                                <textarea
                                    placeholder="Your Project Idea..."
                                    className="p-3 bg-white/20 border border-white/40 rounded-lg w-full placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    rows="5"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 text-center text-gray-400 text-sm animate-fadeIn">
                    <p className="tracking-wide">
                        © 2025 <span className="text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-300 cursor-pointer">Isamil Hasan</span>. All rights reserved.
                    </p>
                    <p className="mt-1 italic text-gray-500">Crafted with passion and creativity.</p>
                </div>


            </div>
        </div>
    );
};

export default ContactForm;
