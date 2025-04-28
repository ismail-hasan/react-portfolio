import React from 'react';
import mongoDB from "../assets/mongodb-svgrepo-com.svg"
import expressJS from "../assets/express.svg"
import react from "../assets/react-svgrepo-com.svg"
import next from "../assets/next-js-svgrepo-com.svg"
import js from "../assets/javascript-logo.svg"
import node from "../assets/node-js.svg"
const Skills = () => {

    const skills = [
        {
            title: "Website Design (UI/UX)",
            name1: 'HTML',
            icon1: <svg viewBox="0 0 452 520" className="w-full h-full">
                <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
                <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z" />
                <path fill="#fff" d="M226 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z" />
            </svg>,
            name2: 'CSS',
            icon2: <svg viewBox="0 0 452 520" className="w-full h-full">
                <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
                <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
                <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-64-17-4-45h-56l7 89 117 32z" />
                <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" />
            </svg>,
            name3: 'TAILWIND CSS',
            icon3: <svg viewBox="0 0 248 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M124 0C91 0 71 17 62 51c12-17 27-23 43-20 9 2 16 8 23 14 12 12 26 25 56 25 33 0 53-17 62-51-12 17-27 23-43 20-9-2-16-8-23-14-12-12-26-25-56-25zM62 77C29 77 9 94 0 128c12-17 27-23 43-20 9 2 16 8 23 14 12 12 26 25 56 25 33 0 53-17 62-51-12 17-27 23-43 20-9-2-16-8-23-14-12-12-26-25-56-25z" fill="#06B6D4" />
            </svg>
        },
        {
            title: "Front End Development",
            name1: 'REACT JS',
            name2: 'NEXT JS',
            name3: 'JAVASCRIPT',
            icon1: <img src={react} alt={"icon"} srcset="" />,
            icon2: <img src={next} alt={"icon"} srcset="" />,
            icon3: <img src={js} alt={"icon"} srcset="" />,

        },
        {
            title: "Back End Development",
            name1: 'Node JS',
            name2: 'MongoDB',
            name3: 'EXPRESS JS',
            icon1: <img src={node} alt={"icon"} srcset="" />,
            icon2: <img src={mongoDB} alt={"icon"} srcset="" />,
            icon3: <img src={expressJS} alt={"icon"} srcset="" />,

        },


    ];


    return (
        <section className="bg-gray-800 py-10 pb-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl text-white font-semibold mb-6">Top Skills</h2>

                {/* Responsive Grid: 1 column on mobile, 2 on small screens, 3 on medium+ screens */}
                <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-6">
                    {

                        skills.map(singleSkil => <div className="max-w-md mx-auto xl:mb-0 bg-gray-900 p-8 rounded-lg text-white">
                            <h2 className="text-2xl font-bold text-center mb-8">{singleSkil.title}</h2>

                            <div className="flex justify-around items-center mb-6">
                                {/* HTML5 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-24 mb-2">
                                        {singleSkil.icon1}
                                    </div>
                                    <span className="text-lg font-medium">{singleSkil.name1}</span>
                                </div>

                                {/* CSS3 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-24 mb-2">
                                        {singleSkil.icon2}
                                    </div>
                                    <span className="text-lg font-medium">{singleSkil.name2}</span>
                                </div>
                            </div>

                            {/* JavaScript */}
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 mb-2  flex items-center justify-center">
                                    {singleSkil.icon3}
                                </div>
                                <span className="text-lg font-medium">{singleSkil.name3}</span>
                            </div>
                        </div>)


                    }
                </div>
            </div>
        </section>
    );
}

export default Skills;
