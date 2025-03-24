import React from 'react';
import Home from './Home';
import Skills from './Skills';
import Contact from './Contact';
import ContactForm from './ContactForm';
import Choice from './Choice';
import ProjectLayout from './ProjectLayout';

const Layout = () => {
    return (
        <div>
            <Home></Home>
            <Skills></Skills>
            <ProjectLayout></ProjectLayout>
            <Choice></Choice>
            <Contact></Contact>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Layout;