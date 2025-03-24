import React from 'react';

const SoftSkills = () => {
    const skills = [
        { id: 1, name: "Time Management" },
        { id: 2, name: "Problem-Solving & Debugging" },
        { id: 3, name: "Agil & Teamwork" },
        { id: 4, name: "Collaborative & Communication" }
    ];

    return (
        <div className="bg-gray-700  flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                <h1 className="text-4xl font-medium text-white mb-8">Soft Skills</h1>

                <div className="grid grid-cols-2 gap-y-8">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex items-center">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-3 flex-shrink-0"></div>
                            <span className="text-white text-lg">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftSkills;