import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import Socials from './Socials';

const ContactForm = () => {

    const contactInfo = [
        {
            title: "Location",
            info: "Hazir Hat, Pabna Sadar, Pabna",
            icon: <FaMapMarkerAlt className="text-3xl text-blue-500" />,
        },
        {
            title: "Email",
            info: "fnismailhasan@gmail.com",
            icon: <FaEnvelope className="text-3xl text-blue-500" />,
        },
        {
            title: "Phone",
            info: " +880 1586153445 | +880 1776458113 (WhatsApp)",
            icon: <FaPhone className="text-3xl text-blue-500" />,
        },
    ];

    return (
        <div className="bg-gray-800 py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

                    {/* Contact Info Section */}
                    <div className="md:w-1/2 w-full space-y-8">
                        <h2 className="text-3xl font-bold mb-6 md:text-left ">
                            Get in Touch
                        </h2>
                        <p className="text-lg mb-6 text-gray-300">
                            Feel free to reach out! Whether you have a question or just want to drop a message,
                            I’ll do my best to get back to you.
                        </p>
                        <Socials></Socials>


                        <div className="space-y-6 ">
                            <div className='p-6 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1  items-center gap-6 grid'>

                                {contactInfo.map((item, index) => (
                                    <div
                                        key={index}
                                    >
                                        <div className='flex gap-7'>
                                            <div>{item.icon}</div>
                                            <div>
                                                <h3 className="font-semibold text-lg text-white mb-1">{item.title}</h3>
                                                <p className="text-gray-300">{item.info}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
                                className="cursor-pointer mt-6 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 transform hover:scale-105"
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
