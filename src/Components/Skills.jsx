import React from 'react';
import { FaReact } from 'react-icons/fa';

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
        <section className="bg-gray-800 py-10">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl text-white font-semibold mb-6">Skills()</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
