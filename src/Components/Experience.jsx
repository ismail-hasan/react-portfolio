import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Nister Accusation',
      role: 'Jr. Web Developer',
      duration: 'Jun 2022 - Dec 2022',
      description:
        'Developed and maintained front-end and back-end functionalities using React.js, Node.js, and Express. Collaborated with cross-functional teams to enhance user experiences.',
      technologies: ['React', 'Node.js', 'Express', 'JavaScript'],
    },
    {
      company: 'Luxtechco',
      role: 'Frontend Developer (Remote)',
      duration: 'Dec 2022 - Jun 2023',
      description:
        'Assisted in the development of responsive web applications and contributed to front-end designs using HTML, CSS, and JavaScript. Optimized UI/UX based on user feedback.',
      technologies: ['Tailwind CSS', 'JavaScript', 'React', 'Node Js'],
    },
  ];

  return (
    <div className="bg-gray-900 py-16 text-white px-6 md:px-16">
      <div className="container mx-auto">
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-red-900 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-3xl font-semibold">{experience.company}</h3>
                  <p className="text-lg text-gray-300">{experience.role}</p>
                </div>
                <span className="text-sm text-gray-400">{experience.duration}</span>
              </div>

              <p className="text-lg text-gray-200 mb-6">{experience.description}</p>

              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
