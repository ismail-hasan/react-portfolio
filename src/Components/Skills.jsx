import React from 'react';
import { FaReact } from 'react-icons/fa';
import mongoDB from "../assets/mongodb-svgrepo-com.svg"
import expressJS from "../assets/express-svgrepo-com.svg"
import react from "../assets/react-svgrepo-com.svg"
import next from "../assets/next-js-svgrepo-com.svg"
const Skills = () => {

    const skills = [
        { name: 'React', icon: <FaReact /> },
        { name: 'Tailwind CSS', icon: 'tailwind-icon-path' },
        { name: 'JavaScript', icon: 'js-icon-path' },
        { name: 'Node.js', icon: 'node-icon-path' },
        { name: 'Express.js', icon: 'express-icon-path' },
        { name: 'Git', icon: 'git-icon-path' },
    ];

    return (
        <section className="bg-gray-800 py-10 pb-10">
            <div className="w-6xl mx-auto text-center">
                <h2 className="text-4xl text-white font-semibold mb-6">Top Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-">

                    <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-lg text-white">
                        <h2 className="text-2xl font-bold text-center mb-8">Programming Languages</h2>

                        <div className="flex justify-around items-center mb-6">
                            {/* HTML5 */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-24 mb-2">
                                    <svg viewBox="0 0 452 520" className="w-full h-full">
                                        <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
                                        <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                                        <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z" />
                                        <path fill="#fff" d="M226 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z" />
                                    </svg>
                                </div>
                                <span className="text-lg font-medium">HTML5</span>
                            </div>

                            {/* CSS3 */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-24 mb-2">
                                    <svg viewBox="0 0 452 520" className="w-full h-full">
                                        <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
                                        <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
                                        <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-64-17-4-45h-56l7 89 117 32z" />
                                        <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" />
                                    </svg>
                                </div>
                                <span className="text-lg font-medium">CSS3</span>
                            </div>
                        </div>

                        {/* JavaScript */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 mb-2  flex items-center justify-center">
                                <svg viewBox="0 0 248 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M124 0C91 0 71 17 62 51c12-17 27-23 43-20 9 2 16 8 23 14 12 12 26 25 56 25 33 0 53-17 62-51-12 17-27 23-43 20-9-2-16-8-23-14-12-12-26-25-56-25zM62 77C29 77 9 94 0 128c12-17 27-23 43-20 9 2 16 8 23 14 12 12 26 25 56 25 33 0 53-17 62-51-12 17-27 23-43 20-9-2-16-8-23-14-12-12-26-25-56-25z" fill="#06B6D4" />
                                </svg>
                            </div>
                            <span className="text-lg font-medium">Tailwind CSS</span>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-lg text-white">
                        <h2 className="text-2xl font-bold text-center mb-8">Programming Languages</h2>

                        <div className="flex justify-around items-center mb-6">
                            {/* HTML5 */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-24 mb-2">
                                    <img src={react} alt="" />
                                </div>
                                <span className="text-lg font-medium">HTML5</span>
                            </div>

                            {/* CSS3 */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-24 mb-2">
                                    <img src={next} alt="" />
                                </div>
                                <span className="text-lg font-medium">CSS3</span>
                            </div>
                        </div>

                        {/* JavaScript */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 mb-2 bg-yellow-400 flex items-center justify-center">
                                <span className="text-black font-bold text-2xl">JS</span>
                            </div>
                            <span className="text-lg font-medium">JavaScript</span>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-lg text-white">
                        <h2 className="text-2xl font-bold text-center mb-8">Programming Languages</h2>

                        <div className="flex justify-around items-center mb-6">
                            {/* node js */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-24 mb-2">
                                    <svg viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.3 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" fill="#8CC84B" />
                                    </svg>
                                </div>
                                <span className="text-lg font-medium">HTML5</span>
                            </div>

                            {/* CSS3 */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-24 mb-2">
                                    <img src={mongoDB} alt="" />
                                </div>
                                <span className="text-lg font-medium">CSS3</span>
                            </div>
                        </div>

                        {/* JavaScript */}
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 mb-2  flex items-center justify-center">
                                <img src={expressJS} alt="" />
                            </div>
                            <span className="text-lg font-medium">JavaScript</span>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Skills;
